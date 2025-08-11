"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const driverStandings = [
  { position: 1, name: "Max Verstappen", team: "Red Bull Racing", points: 549, color: "#1E41FF" },
  { position: 2, name: "Lando Norris", team: "McLaren", points: 374, color: "#FF8000" },
  { position: 3, name: "Charles Leclerc", team: "Ferrari", points: 350, color: "#DC143C" },
  { position: 4, name: "Oscar Piastri", team: "McLaren", points: 291, color: "#FF8000" },
  { position: 5, name: "Carlos Sainz", team: "Ferrari", points: 272, color: "#DC143C" },
  { position: 6, name: "George Russell", team: "Mercedes", points: 235, color: "#00D2BE" },
  { position: 7, name: "Lewis Hamilton", team: "Mercedes", points: 211, color: "#00D2BE" },
  { position: 8, name: "Sergio Perez", team: "Red Bull Racing", points: 152, color: "#1E41FF" },
  { position: 9, name: "Fernando Alonso", team: "Aston Martin", points: 68, color: "#006F62" },
  { position: 10, name: "Nico Hulkenberg", team: "Haas", points: 35, color: "#FFFFFF" },
]

const constructorStandings = [
  { position: 1, name: "Red Bull Racing", points: 701, color: "#1E41FF" },
  { position: 2, name: "McLaren", points: 665, color: "#FF8000" },
  { position: 3, name: "Ferrari", points: 622, color: "#DC143C" },
  { position: 4, name: "Mercedes", points: 446, color: "#00D2BE" },
  { position: 5, name: "Aston Martin", points: 86, color: "#006F62" },
  { position: 6, name: "Haas", points: 54, color: "#FFFFFF" },
  { position: 7, name: "RB", points: 46, color: "#6692FF" },
  { position: 8, name: "Williams", points: 17, color: "#005AFF" },
  { position: 9, name: "Alpine", points: 13, color: "#0090FF" },
  { position: 10, name: "Kick Sauber", points: 4, color: "#52C41A" },
]

export function CurrentStandings() {
  return (
    <Card className="bg-[#1F1F1F] border-gray-800">
      <CardHeader>
        <CardTitle className="text-[#FF1801]">Current Standings</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="drivers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#111111]">
            <TabsTrigger value="drivers" className="data-[state=active]:bg-[#FF1801]">
              Drivers
            </TabsTrigger>
            <TabsTrigger value="constructors" className="data-[state=active]:bg-[#FF1801]">
              Constructors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drivers" className="mt-4">
            <div className="space-y-2">
              {driverStandings.map((driver) => (
                <div key={driver.position} className="flex items-center justify-between p-2 bg-[#111111] rounded">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-8 rounded" style={{ backgroundColor: driver.color }}></div>
                    <span className="text-gray-400 w-6">{driver.position}</span>
                    <div>
                      <div className="font-medium">{driver.name}</div>
                      <div className="text-xs text-gray-400">{driver.team}</div>
                    </div>
                  </div>
                  <span className="font-bold text-[#FF1801]">{driver.points}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="constructors" className="mt-4">
            <div className="space-y-2">
              {constructorStandings.map((constructor) => (
                <div key={constructor.position} className="flex items-center justify-between p-2 bg-[#111111] rounded">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-8 rounded" style={{ backgroundColor: constructor.color }}></div>
                    <span className="text-gray-400 w-6">{constructor.position}</span>
                    <span className="font-medium">{constructor.name}</span>
                  </div>
                  <span className="font-bold text-[#FF1801]">{constructor.points}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
