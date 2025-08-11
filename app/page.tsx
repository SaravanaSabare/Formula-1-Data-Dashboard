import { NextRaceCard } from "@/components/next-race-card"
import { LatestNews } from "@/components/latest-news"
import { CurrentStandings } from "@/components/current-standings"
import { LastRaceResults } from "@/components/last-race-results"
import { DriverOfTheDay } from "@/components/driver-of-the-day"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-3 space-y-6">
          <NextRaceCard />
        </div>

        {/* Center Column */}
        <div className="lg:col-span-6 space-y-6">
          <LatestNews />
          <CurrentStandings />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 space-y-6">
          <LastRaceResults />
          <DriverOfTheDay />
        </div>
      </div>
    </div>
  )
}
