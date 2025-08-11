import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const races = [
  {
    round: 1,
    name: "Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    dates: "Mar 2-4",
    country: "🇧🇭",
    completed: true,
  },
  {
    round: 2,
    name: "Saudi Arabian Grand Prix",
    circuit: "Jeddah Corniche Circuit",
    dates: "Mar 9-11",
    country: "🇸🇦",
    completed: true,
  },
  {
    round: 3,
    name: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    dates: "Mar 24-26",
    country: "🇦🇺",
    completed: true,
  },
  {
    round: 4,
    name: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    dates: "Apr 7-9",
    country: "🇯🇵",
    completed: true,
  },
  {
    round: 5,
    name: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    dates: "Apr 21-23",
    country: "🇨🇳",
    completed: true,
  },
  {
    round: 6,
    name: "Miami Grand Prix",
    circuit: "Miami International Autodrome",
    dates: "May 5-7",
    country: "🇺🇸",
    completed: true,
  },
  {
    round: 7,
    name: "Emilia Romagna Grand Prix",
    circuit: "Autodromo Enzo e Dino Ferrari",
    dates: "May 19-21",
    country: "🇮🇹",
    completed: true,
  },
  {
    round: 8,
    name: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    dates: "May 26-28",
    country: "🇲🇨",
    completed: true,
  },
  {
    round: 22,
    name: "Las Vegas Grand Prix",
    circuit: "Las Vegas Street Circuit",
    dates: "Nov 23-25",
    country: "🇺🇸",
    completed: false,
  },
  {
    round: 23,
    name: "Qatar Grand Prix",
    circuit: "Lusail International Circuit",
    dates: "Dec 1-3",
    country: "🇶🇦",
    completed: false,
  },
  {
    round: 24,
    name: "Abu Dhabi Grand Prix",
    circuit: "Yas Marina Circuit",
    dates: "Dec 8-10",
    country: "🇦🇪",
    completed: false,
  },
]

export default function RaceCalendarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FF1801] mb-8">2024 Race Calendar</h1>

      <div className="space-y-4">
        {races.map((race) => (
          <Card key={race.round} className="bg-[#1F1F1F] border-gray-800 hover:border-[#FF1801] transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{race.country}</div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#FF1801] text-white px-2 py-1 rounded text-sm font-bold">R{race.round}</span>
                    <div>
                      <h3 className="font-bold text-lg">{race.name}</h3>
                      <p className="text-gray-400 text-sm">{race.circuit}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold">{race.dates}</div>
                    <div className="text-sm text-gray-400">2024</div>
                  </div>

                  <Button
                    variant={race.completed ? "default" : "outline"}
                    className={
                      race.completed
                        ? "bg-[#FF1801] hover:bg-[#FF1801]/90"
                        : "border-[#FF1801] text-[#FF1801] hover:bg-[#FF1801] hover:text-white"
                    }
                  >
                    {race.completed ? "View Results" : "Race Info"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
