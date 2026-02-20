// app/admin/page.tsx
'use client'

import { Card, CardHeader, CardBody } from '@heroui/react'

export default function AdminDashboardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black text-foreground uppercase tracking-tight">Overview</h1>
        <p className="text-default-500 font-bold uppercase text-xs mt-1">Platform Performance & Statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-2 border-border p-2" shadow="none">
          <CardHeader className="flex flex-col items-start pb-0">
            <span className="text-xs font-black text-default-400 uppercase tracking-widest">Total Users</span>
          </CardHeader>
          <CardBody className="pt-2">
            <span className="text-5xl font-black text-foreground">1,240</span>
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-success/10 text-success text-[10px] font-black px-2 py-0.5 rounded-full uppercase">+12%</span>
              <span className="text-default-400 text-[10px] font-bold uppercase tracking-tight">vs last month</span>
            </div>
          </CardBody>
        </Card>

        <Card className="border-2 border-border p-2" shadow="none">
          <CardHeader className="flex flex-col items-start pb-0">
            <span className="text-xs font-black text-default-400 uppercase tracking-widest">Total Lessons</span>
          </CardHeader>
          <CardBody className="pt-2">
            <span className="text-5xl font-black text-foreground">342</span>
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase">8 Languages</span>
            </div>
          </CardBody>
        </Card>

        <Card className="border-2 border-border p-2 bg-foreground text-card" shadow="none">
          <CardHeader className="flex flex-col items-start pb-0">
            <span className="text-xs font-black text-default-400 uppercase tracking-widest">AI Cost</span>
          </CardHeader>
          <CardBody className="pt-2">
            <span className="text-5xl font-black">$14.20</span>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-default-400 text-[10px] font-bold uppercase tracking-tight">Budget Used: 4.5%</span>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
