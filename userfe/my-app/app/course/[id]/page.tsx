import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Play, Star, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CoursePage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Lập trình Web nâng cao</h1>
            <p className="mt-2 text-muted-foreground">
              Học cách xây dựng ứng dụng web hiện đại với các công nghệ và framework mới nhất
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.8</span>
                <span className="text-muted-foreground">(245 đánh giá)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span>1,245 học viên</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>40 giờ học</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <span>20 bài học</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                <AvatarFallback>NA</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Nguyễn Văn A</div>
                <div className="text-sm text-muted-foreground">Giảng viên</div>
              </div>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Course thumbnail"
              className="h-full w-full object-cover"
            />
            <div className="relative bottom-0 left-0 right-0 top-0 flex items-center justify-center">
              <Button size="icon" className="absolute h-16 w-16 rounded-full">
                <Play className="h-8 w-8" />
              </Button>
            \
