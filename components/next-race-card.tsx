"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function NextRaceCard() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [raceInfo, setRaceInfo] = useState<{ raceName: string; circuitName: string } | null>(null)
  const [nextRaceDate, setNextRaceDate] = useState<Date | null>(null)

  useEffect(() => {
    async function fetchNextRace() {
      const res = await fetch('https://ergast.com/api/f1/current.json')
      const data = await res.json()
      const races = data.MRData.RaceTable.Races
      const now = Date.now()
      const next = races.find((r: any) => new Date(`${r.date}T${r.time}`).getTime() > now)
      if (next) {
        setRaceInfo({ raceName: next.raceName, circuitName: next.Circuit.circuitName })
        setNextRaceDate(new Date(`${next.date}T${next.time}`))
      }
    }
    fetchNextRace()
  }, [])

  useEffect(() => {
    if (!nextRaceDate) return
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = nextRaceDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    return () => clearInterval(timer)
  }, [nextRaceDate])

  // Always render the card; show fallback values until data loads
  return (
    <Card className="bg-[#1F1F1F] border-gray-800">
      <CardHeader>
        <CardTitle className="text-[#FF1801]">Next Race</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-white">
            {raceInfo?.raceName ?? 'Loading next race...'}
          </h3>
          <p className="text-gray-400 text-sm">
            {raceInfo?.circuitName ?? ''}
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-[#111111] p-2 rounded">
            <div className="text-xl font-bold text-[#FF1801]">{timeLeft.days}</div>
            <div className="text-xs text-gray-400">DAYS</div>
          </div>
          <div className="bg-[#111111] p-2 rounded">
            <div className="text-xl font-bold text-[#FF1801]">{timeLeft.hours}</div>
            <div className="text-xs text-gray-400">HOURS</div>
          </div>
          <div className="bg-[#111111] p-2 rounded">
            <div className="text-xl font-bold text-[#FF1801]">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-400">MINS</div>
          </div>
          <div className="bg-[#111111] p-2 rounded">
            <div className="text-xl font-bold text-[#FF1801]">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-400">SECS</div>
          </div>
        </div>

        {/* Simple track layout */}
        <div className="bg-[#111111] p-4 rounded">
          <svg viewBox="0 0 200 100" className="w-full h-20">
            <path d="M20 50 Q50 20 100 50 Q150 80 180 50" stroke="#FF1801" strokeWidth="3" fill="none" />
            <circle cx="20" cy="50" r="3" fill="#00FF00" />
            <text x="25" y="45" fill="white" fontSize="8">
              START
            </text>
          </svg>
        </div>

        <div className="text-sm text-gray-400">
          <p>Race Start: 6:00 AM UTC</p>
          <p>Local Time: 10:00 PM PST</p>
        </div>
      </CardContent>
    </Card>
  )
}
