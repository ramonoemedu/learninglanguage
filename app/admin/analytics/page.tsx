// app/admin/analytics/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Spinner, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/react'

interface CostPerUser {
  userId: string
  userName: string
  cost: number
}

interface UsageByService {
  service: string
  cost: number
}

interface AICostData {
  totalCostThisMonth: number
  totalTokensUsed: number
  costPerUser: CostPerUser[]
  usageByService: UsageByService[]
}

export default function AdminAnalyticsPage() {
  const [aiCostData, setAiCostData] = useState<AICostData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAICost = async () => {
      try {
        const res = await fetch('/api/admin/analytics/ai-cost')
        if (!res.ok) throw new Error('Failed to fetch AI cost data')
        const data = await res.json()
        setAiCostData(data)
      } catch (err) {
        console.error('Error fetching AI cost data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAICost()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics & AI Costs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>Total AI Cost (This Month)</CardHeader>
          <CardBody className="text-4xl font-bold text-danger">${aiCostData?.totalCostThisMonth.toFixed(2)}</CardBody>
        </Card>
        <Card>
          <CardHeader>Total Tokens Used (This Month)</CardHeader>
          <CardBody className="text-4xl font-bold">{aiCostData?.totalTokensUsed.toLocaleString()}</CardBody>
        </Card>
        <Card>
          <CardHeader>Estimated Cost / User (Avg)</CardHeader>
          <CardBody className="text-4xl font-bold">
            ${((aiCostData?.totalCostThisMonth || 0) / (aiCostData?.costPerUser.length || 1)).toFixed(2)}
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>Cost By Service</CardHeader>
          <CardBody>
            <Table aria-label="Cost by AI Service">
              <TableHeader>
                <TableColumn>SERVICE</TableColumn>
                <TableColumn>COST ($)</TableColumn>
              </TableHeader>
              <TableBody items={aiCostData?.usageByService || []}>
                {(item) => (
                  <TableRow key={item.service}>
                    <TableCell>{item.service}</TableCell>
                    <TableCell>${item.cost.toFixed(2)}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardBody>
        </Card>

                  <Card>
                    <CardHeader>Top Spenders (AI)</CardHeader>
                    <CardBody>
                      <Table aria-label="Top AI Spenders">
                        <TableHeader>
                          <TableColumn>USER</TableColumn>
                          <TableColumn>COST ($)</TableColumn>
                        </TableHeader>
                        <TableBody items={aiCostData?.costPerUser || []}>
                          {(item) => (
                            <TableRow key={item.userId}>
                              <TableCell>{item.userName}</TableCell>
                              <TableCell>${item.cost.toFixed(2)}</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </CardBody>
                  </Card>      </div>
    </div>
  )
}
