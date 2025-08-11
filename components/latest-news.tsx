import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const newsArticles = [
  {
    id: 1,
    title: "Verstappen Dominates in Brazil",
    excerpt:
      "Max Verstappen secured another commanding victory at Interlagos, extending his championship lead with just three races remaining.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Sarah Johnson",
    date: "2024-11-03",
  },
  {
    id: 2,
    title: "McLaren's Upgrade Package Shows Promise",
    excerpt:
      "The Woking-based team's latest aerodynamic updates have shown significant improvements in both qualifying and race pace.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Mike Thompson",
    date: "2024-11-02",
  },
  {
    id: 3,
    title: "Technical Analysis: Ground Effect Secrets",
    excerpt:
      "A deep dive into how teams are maximizing downforce while minimizing drag in the current generation of Formula 1 cars.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Dr. Emma Wilson",
    date: "2024-11-01",
  },
]

export function LatestNews() {
  return (
    <Card className="bg-[#1F1F1F] border-gray-800">
      <CardHeader>
        <CardTitle className="text-[#FF1801]">Latest News & Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-sm mb-2 group-hover:text-[#FF1801] transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 text-xs mb-2 line-clamp-2">{article.excerpt}</p>
              <div className="text-xs text-gray-500">
                <span>{article.author}</span> • <span>{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
