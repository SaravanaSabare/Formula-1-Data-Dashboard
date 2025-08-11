import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind F1 Aerodynamics",
    author: "Dr. Emma Wilson",
    date: "2024-11-05",
    category: "Technical Analysis",
    image: "/placeholder.svg?height=300&width=400",
    excerpt:
      "A comprehensive look at how modern Formula 1 cars generate downforce and manage airflow for maximum performance.",
  },
  {
    id: 2,
    title: "Verstappen's Dominant Season: By the Numbers",
    author: "Mike Thompson",
    date: "2024-11-04",
    category: "Race Reviews",
    image: "/placeholder.svg?height=300&width=400",
    excerpt:
      "Statistical analysis of Max Verstappen's record-breaking 2024 season and what makes him so consistently fast.",
  },
  {
    id: 3,
    title: "The Future of F1: Sustainable Racing",
    author: "Sarah Johnson",
    date: "2024-11-03",
    category: "Opinion",
    image: "/placeholder.svg?height=300&width=400",
    excerpt: "How Formula 1 is leading the charge in developing sustainable technologies for the automotive industry.",
  },
  {
    id: 4,
    title: "McLaren's Resurgence: A Technical Deep Dive",
    author: "James Rodriguez",
    date: "2024-11-02",
    category: "Technical Analysis",
    image: "/placeholder.svg?height=300&width=400",
    excerpt: "Examining the engineering innovations that have brought McLaren back to the front of the grid.",
  },
  {
    id: 5,
    title: "Brazilian GP: Rain, Drama, and Brilliance",
    author: "Lisa Chen",
    date: "2024-11-01",
    category: "Race Reviews",
    image: "/placeholder.svg?height=300&width=400",
    excerpt: "A thrilling wet race at Interlagos showcased the very best of Formula 1 racing and driver skill.",
  },
  {
    id: 6,
    title: "Why F1 Needs More Competitive Balance",
    author: "Tom Anderson",
    date: "2024-10-31",
    category: "Opinion",
    image: "/placeholder.svg?height=300&width=400",
    excerpt: "Exploring potential solutions to create more competitive racing and closer championship battles.",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FF1801] mb-8">F1 Blog</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search articles..."
            className="bg-[#1F1F1F] border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-48 bg-[#1F1F1F] border-gray-700">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent className="bg-[#1F1F1F] border-gray-700">
            <SelectItem value="all" className="text-white hover:bg-[#111111]">
              All Categories
            </SelectItem>
            <SelectItem value="race-reviews" className="text-white hover:bg-[#111111]">
              Race Reviews
            </SelectItem>
            <SelectItem value="technical" className="text-white hover:bg-[#111111]">
              Technical Analysis
            </SelectItem>
            <SelectItem value="opinion" className="text-white hover:bg-[#111111]">
              Opinion
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="bg-[#1F1F1F] border-gray-800 hover:border-[#FF1801] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#FF1801] text-white px-2 py-1 rounded text-xs font-semibold">{post.category}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-[#FF1801] transition-colors">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
