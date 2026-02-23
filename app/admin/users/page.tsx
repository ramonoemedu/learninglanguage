// app/admin/users/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Spinner, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@heroui/react'
import { Users, Zap, MoreVertical, ShieldAlert, Activity, GraduationCap, Trash2, Search, UserPlus, Key, Ban, Lock, Unlock, Edit, ChevronLeft, ChevronRight } from 'lucide-react'
import CreateUserModal from '@/components/create-user-modal'
import ResetPasswordModal from '@/components/reset-password-modal'
import { BanUserModal } from '@/components/ban-user-modal'

interface User {
  id: string
  name: string
  email: string
  role: string
  plan: string
  coins: number
  xpTotal: number
  createdAt: string
  banned?: boolean
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const itemsPerPage = 20

  // Modal Controls
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onOpenChange: onCreateOpenChange } = useDisclosure()
  const { isOpen: isResetOpen, onOpen: onResetOpen, onOpenChange: onResetOpenChange } = useDisclosure()
  const { isOpen: isBanOpen, onOpen: onBanOpen, onOpenChange: onBanOpenChange } = useDisclosure()

  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'learner',
    xpTotal: 0,
    coins: 0,
    unlockAll: false,
    currentStage: 1,
    currentChapter: 1
  })
  const [newPassword, setNewPassword] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/users')
        if (!res.ok) {
          if (res.status === 403) throw new Error('Access Denied: Root privileges required. Please log out and log back in to refresh your permissions.')
          throw new Error('Failed to fetch identity registry.')
        }
        const data = await res.json()
        setUsers(Array.isArray(data) ? data : [])
      } catch (err: any) {
        console.error('Failed to load users:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const handleRoleChange = async (userId: string, role: string) => {
    try {
      // Optimistically update the UI for a premium, instant feel
      setUsers(users.map(u => u.id === userId ? { ...u, role } : u))

      await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role }),
      })
    } catch (err) {
      console.error('Failed to update role:', err)
      // Revert state if necessary in a production app
    }
  }

  const openCreateModal = () => {
    setIsEditing(false)
    setSelectedUser(null)
    setFormData({ name: '', email: '', password: '', role: 'learner', xpTotal: 0, coins: 0, unlockAll: false, currentStage: 1, currentChapter: 1 })
    onCreateOpen()
  }

  const openEditModal = (user: User) => {
    setIsEditing(true)
    setSelectedUser(user)
    setFormData({
      name: user.name,
      email: user.email,
      password: '', // Password not required for edit
      role: user.role,
      xpTotal: user.xpTotal,
      coins: user.coins || 0,
      unlockAll: false,
      currentStage: 1,
      currentChapter: 1
    })
    onCreateOpen()
  }

  const handleSaveUser = async () => {
    setIsSubmitting(true)
    try {
      if (isEditing && selectedUser) {
        // UPDATE USER
        const res = await fetch(`/api/admin/users/${selectedUser.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error('Failed to update user')
        const updatedUser = await res.json()
        setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u))
      } else {
        // CREATE USER
        const res = await fetch('/api/admin/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error('Failed to create user')
        const newUser = await res.json()
        setUsers([newUser, ...users])
      }

      onCreateOpenChange()
    } catch (err) {
      console.error('Failed to save user:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetPassword = async () => {
    if (!selectedUser) return
    setIsSubmitting(true)
    try {
      // In a real app, you would POST to /api/admin/users/[id]/reset-password
      console.log(`Resetting password for ${selectedUser.email} to ${newPassword}`)
      onResetOpenChange()
      setNewPassword('')
    } catch (err) {
      console.error('Failed to reset password:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleToggleBan = async () => {
    if (!selectedUser) return
    setIsSubmitting(true)
    try {
      // In a real app, you would PATCH /api/admin/users/[id] with { banned: !selectedUser.banned }
      const newStatus = !selectedUser.banned
      setUsers(users.map(u => u.id === selectedUser.id ? { ...u, banned: newStatus } : u))
      console.log(`Toggled ban status for ${selectedUser.email} to ${newStatus}`)
      onBanOpenChange()
    } catch (err) {
      console.error('Failed to toggle ban:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const currentUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  if (loading) {
    return (
      <div className="flex flex-col h-full w-full items-center justify-center gap-4 animate-in fade-in duration-300">
        <div className="relative">
          <Spinner size="lg" color="primary" />
          <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full animate-pulse" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 animate-pulse">
          Fetching Telemetry...
        </span>
      </div>
    )
  }





  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 text-center p-8">
        <div className="p-4 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
          <ShieldAlert size={48} />
        </div>
        <h2 className="text-xl font-black uppercase tracking-widest text-slate-900 dark:text-white">Security Protocol Engaged</h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium">{error}</p>
      </div>
    )
  }

  // Helper for rendering role-specific badges
  const renderRoleBadge = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(244,63,94,0.1)]">
            <ShieldAlert size={12} /> Root
          </div>
        )
      case 'tester':
        return (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(245,158,11,0.1)]">
            <Activity size={12} /> Beta
          </div>
        )
      default:
        return (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(56,189,248,0.1)]">
            <GraduationCap size={12} /> Learner
          </div>
        )
    }
  }

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">

      {/* --- HUD Page Header --- */}
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-sky-500/10 dark:bg-sky-400/10 rounded-lg border border-sky-500/20 text-sky-500 dark:text-sky-400">
            <Users size={20} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Identity Registry</h1>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400">User Access & Privilege Control</p>
          <div className="flex-1 h-px bg-gradient-to-r from-sky-500/20 to-transparent dark:from-sky-400/20" />
        </div>
      </header>

      {/* --- Search & Filter --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Input
          placeholder="Search users by name or email..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          startContent={<Search size={18} className="text-slate-400" />}
          className="w-full sm:max-w-md"
          classNames={{
            inputWrapper: "bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
          }}
        />
        <Button
          onPress={openCreateModal}
          className="bg-sky-500 text-white font-bold uppercase tracking-widest text-xs h-12 px-6 rounded-xl shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-all"
          startContent={<UserPlus size={16} />}
        >
          Create Identity
        </Button>
      </div>

      {/* --- Glassmorphic Data Table --- */}
      <div className="w-full overflow-x-auto bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Ident / Name</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Comm Link</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Clearance</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Tier</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Telemetry (XP)</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Init Date</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className={`group hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors duration-200 ${user.banned ? 'opacity-50 grayscale' : ''}`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-xs uppercase shadow-inner">
                      {user.name.slice(0, 2)}
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</span>
                    {user.banned && <span className="text-[9px] font-bold bg-rose-500 text-white px-1.5 py-0.5 rounded uppercase tracking-wider">Locked</span>}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  {renderRoleBadge(user.role)}
                </td>
                <td className="px-6 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {user.plan}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-sky-500 dark:text-sky-400 font-bold text-sm">
                    <Zap size={14} className="group-hover:scale-110 transition-transform" />
                    {user.xpTotal}
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                </td>
                <td className="px-6 py-4 text-right">
                  <Dropdown
                    classNames={{
                      content: "bg-white/90 dark:bg-[#050b14]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl dark:shadow-[0_0_30px_rgba(56,189,248,0.1)] rounded-xl min-w-[150px]",
                    }}
                  >
                    <DropdownTrigger>
                      <button className="p-2 rounded-lg text-slate-400 hover:text-sky-500 hover:bg-sky-500/10 dark:hover:bg-sky-400/10 transition-all duration-300">
                        <MoreVertical size={16} />
                      </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" itemClasses={{
                      base: "gap-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 data-[hover=true]:bg-slate-100 dark:data-[hover=true]:bg-slate-800/50 transition-colors",
                      title: "text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300"
                    }}>
                      <DropdownItem key="edit-user" startContent={<Edit size={14} />} onPress={() => openEditModal(user)}>Edit Identity</DropdownItem>
                      <DropdownItem key="make-admin" startContent={<ShieldAlert size={14} />} onPress={() => handleRoleChange(user.id, 'admin')}>Assign Root</DropdownItem>
                      <DropdownItem key="make-tester" startContent={<Activity size={14} />} onPress={() => handleRoleChange(user.id, 'tester')}>Assign Beta</DropdownItem>
                      <DropdownItem key="make-learner" startContent={<GraduationCap size={14} />} onPress={() => handleRoleChange(user.id, 'learner')}>Assign Learner</DropdownItem>
                      <DropdownItem key="reset-pwd" startContent={<Key size={14} />} onPress={() => { setSelectedUser(user); onResetOpen(); }}>Reset Passkey</DropdownItem>
                      <DropdownItem key="ban-user" className={user.banned ? "text-emerald-500" : "text-amber-500"} startContent={user.banned ? <Unlock size={14} /> : <Ban size={14} />} onPress={() => { setSelectedUser(user); onBanOpen(); }}>{user.banned ? "Unlock Identity" : "Lock Identity"}</DropdownItem>
                      <DropdownItem key="delete-user" className="text-rose-500 data-[hover=true]:bg-rose-500/10 data-[hover=true]:text-rose-500" startContent={<Trash2 size={14} />}>Purge Identity</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Pagination Controls --- */}
      {!loading && filteredUsers.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} Identities
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/50 dark:bg-[#050b14]/50 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/50 dark:bg-[#050b14]/50 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Page {currentPage}</span>
              <span className="text-xs text-slate-400">/ {totalPages}</span>
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/50 dark:bg-[#050b14]/50 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* --- Create User Modal --- */}
      {isCreateOpen && (
        <CreateUserModal
          isOpen={isCreateOpen}
          onClose={() => onCreateOpenChange()}
          formData={formData}
          setFormData={setFormData}
          handleCreateUser={handleSaveUser}
          isEditing={isEditing}
          isLoading={isSubmitting}
        />
      )}

      {/* --- Reset Password Modal --- */}
      <ResetPasswordModal
        isOpen={isResetOpen}
        onClose={onResetOpenChange}
        selectedUser={selectedUser}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        handleResetPassword={handleResetPassword}
        isLoading={isSubmitting}
      />

      {/* --- Ban/Lock Modal --- */}
      <BanUserModal
        isOpen={isBanOpen}
        onClose={onBanOpenChange}
        selectedUser={selectedUser}
        handleToggleBan={handleToggleBan}
        isLoading={isSubmitting}
      />

    </div>
  )
}