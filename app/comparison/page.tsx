"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DriverComparisonChart } from "@/components/driver-comparison-chart"
import Image from "next/image"

const drivers = [
  {
    id: "verstappen",
    name: "Max Verstappen",
    team: "Red Bull Racing",
    championships: 3,
    wins: 56,
    podiums: 98,
    poles: 38,
  },
  { id: "norris", name: "Lando Norris", team: "McLaren", championships: 0, wins: 1, podiums: 12, poles: 1 },
  { id: "leclerc", name: "Charles Leclerc", team: "Ferrari", championships: 0, wins: 5, podiums: 26, poles: 24 },
  { id: "hamilton", name: "Lewis Hamilton", team: "Mercedes", championships: 7, wins: 103, podiums: 197, poles: 104 },
  { id: "russell", name: "George Russell", team: "Mercedes", championships: 0, wins: 1, podiums: 11, poles: 2 },
]

export default function DriverComparisonPage() {
  const [driver1, setDriver1] = useState<string>("")
  const [driver2, setDriver2] = useState<string>("")

  const selectedDriver1 = drivers.find((d) => d.id === driver1)
  const selectedDriver2 = drivers.find((d) => d.id === driver2)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FF1801] mb-8">Driver Comparison</h1>

      {/* Driver Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-[#1F1F1F] border-gray-800">
          <CardHeader>
            <CardTitle>Select Driver 1</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={driver1} onValueChange={setDriver1}>
              <SelectTrigger className="bg-[#111111] border-gray-700">
                <SelectValue placeholder="Choose a driver" />
              </SelectTrigger>
              <SelectContent className="bg-[#1F1F1F] border-gray-700">
                {drivers.map((driver) => (
                  <SelectItem key={driver.id} value={driver.id} className="text-white hover:bg-[#111111]">
                    {driver.name} - {driver.team}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="bg-[#1F1F1F] border-gray-800">
          <CardHeader>
            <CardTitle>Select Driver 2</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={driver2} onValueChange={setDriver2}>
              <SelectTrigger className="bg-[#111111] border-gray-700">
                <SelectValue placeholder="Choose a driver" />
              </SelectTrigger>
              <SelectContent className="bg-[#1F1F1F] border-gray-700">
                {drivers.map((driver) => (
                  <SelectItem key={driver.id} value={driver.id} className="text-white hover:bg-[#111111]">
                    {driver.name} - {driver.team}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Results */}
      {selectedDriver1 && selectedDriver2 && (
        <div className="space-y-8">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#1F1F1F] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt={selectedDriver1.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{selectedDriver1.name}</h3>
                    <p className="text-gray-400">{selectedDriver1.team}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1801]">{selectedDriver1.championships}</div>
                    <div className="text-xs text-gray-400">Championships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1801]">{selectedDriver1.wins}</div>
                    <div className="text-xs text-gray-400">Wins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1801]">{selectedDriver1.podiums}</div>
                    <div className="text-xs text-gray-400">Podiums</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1801]">{selectedDriver1.poles}</div>
                    <div className="text-xs text-gray-400">Pole Positions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1F1F1F] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt={selectedDriver2.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{selectedDriver2.name}</h3>
                    <p className="text-gray-400">{selectedDriver2.team}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1801]">{selectedDriver2.championships}</div>
                    <div className="text-xs text-gray-400">Championships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1801]">{selectedDriver2.wins}</div>
                    <div className="text-xs text-gray-400">Wins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1801]">{selectedDriver2.podiums}</div>
                    <div className="text-xs text-gray-400">Podiums</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1801]">{selectedDriver2.poles}</div>
                    <div className="text-xs text-gray-400">Pole Positions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <DriverComparisonChart driver1={selectedDriver1} driver2={selectedDriver2} />
        </div>
      )}
    </div>
  )
}
