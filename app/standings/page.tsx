import { CurrentStandings } from "@/components/current-standings"

export default function StandingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FF1801] mb-8">Championship Standings</h1>
      <div className="max-w-4xl mx-auto">
        <CurrentStandings />
      </div>
    </div>
  )
}
