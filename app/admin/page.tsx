// app/admin/page.tsx
'use client'

import { Card, CardHeader, CardBody } from '@heroui/react'

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>Total Users</CardHeader>
          <CardBody className="text-4xl font-bold">1,240</CardBody>
        </Card>
        <Card>
          <CardHeader>Total Lessons</CardHeader>
          <CardBody className="text-4xl font-bold">342</CardBody>
        </Card>
        <Card>
          <CardHeader>AI Cost This Month</CardHeader>
          <CardBody className="text-4xl font-bold">$14.20</CardBody>
        </Card>
      </div>
    </div>
  )
}
