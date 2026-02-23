'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Spinner, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/react'
import { LineChart, Activity, DollarSign, Cpu } from 'lucide-react'

interface AICostData {
  totalCostThisMonth: number
  totalTokensUsed: number
  usageByService: { service: string, cost: number }[]
}

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<AICostData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/analytics/ai-cost')
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return < div className="flex flex-col h-full w-full items-center justify-center gap-4 animate-in fade-in duration-300">
    <div className="relative">
      <Spinner size="lg" color="primary" />
      <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full animate-pulse" />
    </div>
    <span className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 animate-pulse">
      Fetching Telemetry...
    </span>
  </div>

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex items-center gap-3">
        <div className="p-2 bg-rose-500/10 rounded-lg border border-rose-500/20 text-rose-500">
          <LineChart size={20} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">System Telemetry</h1>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">AI Usage & Costs</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          <CardBody className="p-6">
            <div className="flex items-center gap-3 mb-4 text-emerald-500">
              <DollarSign size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">Monthly Cost</span>
            </div>
            <div className="text-4xl font-black text-slate-900 dark:text-white">
              ${data?.totalCostThisMonth.toFixed(2)}
            </div>
          </CardBody>
        </Card>

        <Card className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          <CardBody className="p-6">
            <div className="flex items-center gap-3 mb-4 text-sky-500">
              <Cpu size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">Token Usage</span>
            </div>
            <div className="text-4xl font-black text-slate-900 dark:text-white">
              {data?.totalTokensUsed.toLocaleString()}
            </div>
          </CardBody>
        </Card>

        <Card className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          <CardBody className="p-6">
            <div className="flex items-center gap-3 mb-4 text-amber-500">
              <Activity size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">System Status</span>
            </div>
            <div className="text-4xl font-black text-slate-900 dark:text-white">
              ONLINE
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-800/50">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Cost Breakdown</h3>
        </div>
        <Table aria-label="Cost Breakdown" removeWrapper classNames={{ th: "bg-transparent", td: "py-4" }}>
          <TableHeader>
            <TableColumn>SERVICE</TableColumn>
            <TableColumn>COST</TableColumn>
          </TableHeader>
          <TableBody>
            {(data?.usageByService || []).map((item) => (
              <TableRow key={item.service}>
                <TableCell className="font-medium">{item.service}</TableCell>
                <TableCell>${item.cost.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}