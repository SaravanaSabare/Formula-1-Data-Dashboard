import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const podiumResults = [
  { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:28:54.430" },
  { position: 2, driver: "Lando Norris", team: "McLaren", time: "+19.649s" },
  { position: 3, driver: "Charles Leclerc", team: "Ferrari", time: "+31.421s" },
]

export function LastRaceResults() {
  return (
    <Card className="bg-[#1F1F1F] border-gray-800">
      <CardHeader>
        <CardTitle className="text-[#FF1801]">Last Race Results</CardTitle>
        <p className="text-sm text-gray-400">Brazilian Grand Prix</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {podiumResults.map((result) => (
          <div key={result.position} className="flex items-center space-x-3 p-2 bg-[#111111] rounded">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                result.position === 1
                  ? "bg-yellow-500 text-black"
                  : result.position === 2
                    ? "bg-gray-400 text-black"
                    : "bg-orange-600 text-white"
              }`}
            >
              {result.position}
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">{result.driver}</div>
              <div className="text-xs text-gray-400">{result.team}</div>
            </div>
            <div className="text-xs text-[#FF1801] font-mono">{result.time}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
