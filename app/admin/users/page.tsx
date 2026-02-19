// app/admin/users/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'

interface User {
  id: string
  name: string
  email: string
  role: string
  plan: string
  xpTotal: number
  createdAt: string
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/users')
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        console.error('Failed to load users:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  const handleRoleChange = async (userId: string, role: string) => {
    await fetch(`/api/admin/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role }),
    })
    // Refresh users list
    // In a real app, you'd likely want to update state locally for better UX
    window.location.reload()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <Table aria-label="User Management Table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>PLAN</TableColumn>
            <TableColumn>XP TOTAL</TableColumn>
            <TableColumn>JOINED</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody items={users}>
            {(user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.plan}</TableCell>
                <TableCell>{user.xpTotal}</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" size="sm">Manage</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions">
                      <DropdownItem key="make-admin" onPress={() => handleRoleChange(user.id, 'admin')}>Make Admin</DropdownItem>
                      <DropdownItem key="make-tester" onPress={() => handleRoleChange(user.id, 'tester')}>Make Tester</DropdownItem>
                      <DropdownItem key="make-learner" onPress={() => handleRoleChange(user.id, 'learner')}>Make Learner</DropdownItem>
                      <DropdownItem key="delete-user" className="text-danger" color="danger">Delete User</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
