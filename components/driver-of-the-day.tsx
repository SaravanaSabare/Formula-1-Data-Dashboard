import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function DriverOfTheDay() {
  return (
    <Card className="bg-[#1F1F1F] border-gray-800">
      <CardHeader>
        <CardTitle className="text-[#FF1801]">Driver of the Day</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="relative w-20 h-20 mx-auto">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Max Verstappen"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="font-bold">Max Verstappen</h3>
          <p className="text-sm text-gray-400">Red Bull Racing</p>
        </div>
        <div className="bg-[#111111] p-3 rounded">
          <div className="text-2xl font-bold text-[#FF1801]">17</div>
          <div className="text-xs text-gray-400">Overtakes Made</div>
        </div>
      </CardContent>
    </Card>
  )
}
