"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts"

interface Driver {
  id: string
  name: string
  team: string
  championships: number
  wins: number
  podiums: number
  poles: number
}

interface DriverComparisonChartProps {
  driver1: Driver
  driver2: Driver
}

export function DriverComparisonChart({ driver1, driver2 }: DriverComparisonChartProps) {
  const pointsData = [
    { name: driver1.name, points: 549, fill: "#FF1801" },
    { name: driver2.name, points: 374, fill: "#FF8000" },
  ]

  const seasonData = [
    { race: "Bahrain", driver1: 1, driver2: 3 },
    { race: "Saudi", driver1: 2, driver2: 1 },
    { race: "Australia", driver1: 1, driver2: 4 },
    { race: "Japan", driver1: 1, driver2: 2 },
    { race: "China", driver1: 1, driver2: 3 },
    { race: "Miami", driver1: 2, driver2: 1 },
    { race: "Imola", driver1: 1, driver2: 2 },
    { race: "Monaco", driver1: 1, driver2: 3 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Points Comparison */}
      <Card className="bg-[#1F1F1F] border-gray-800">
        <CardHeader>
          <CardTitle className="text-[#FF1801]">Championship Points</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              points: {
                label: "Points",
                color: "#FF1801",
              },
            }}
            className="h-[200px]"
          >
            <BarChart data={pointsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="points" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Qualifying Head-to-Head */}
      <Card className="bg-[#1F1F1F] border-gray-800">
        <CardHeader>
          <CardTitle className="text-[#FF1801]">Qualifying Head-to-Head</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#FF1801"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${65 * 2.51} ${35 * 2.51}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF1801]">65%</div>
                <div className="text-xs text-gray-400">{driver1.name}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Season Performance */}
      <Card className="bg-[#1F1F1F] border-gray-800 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-[#FF1801]">Season Race Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              driver1: {
                label: driver1.name,
                color: "#FF1801",
              },
              driver2: {
                label: driver2.name,
                color: "#FF8000",
              },
            }}
            className="h-[300px]"
          >
            <LineChart data={seasonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="race" />
              <YAxis domain={[1, 20]} reversed />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="driver1"
                stroke="#FF1801"
                strokeWidth={2}
                dot={{ fill: "#FF1801", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="driver2"
                stroke="#FF8000"
                strokeWidth={2}
                dot={{ fill: "#FF8000", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
