import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, ExternalLink, FileText, GraduationCap, Play, Star, Award, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function StudentDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Xin chào, Học viên!</h2>
          <p className="text-muted-foreground">Chào mừng bạn quay trở lại với hệ thống học trực tuyến.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Ghi chú của tôi
          </Button>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Khóa học của tôi
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Khóa học đang học</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">2 khóa học sắp hoàn thành</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Khóa học đã hoàn thành</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">+2 so với tháng trước</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chứng chỉ đã nhận</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">1 chứng chỉ đang chờ cấp</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thời gian học tập</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42h</div>
            <p className="text-xs text-muted-foreground">Trong 30 ngày qua</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Tiến trình học tập</CardTitle>
            <CardDescription>Các khóa học bạn đang theo học</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">Lập trình Web nâng cao</span>
                </div>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>15/20 bài học</span>
                <span>Cập nhật: 2 giờ trước</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="font-medium">Tiếng Anh giao tiếp</span>
                </div>
                <span className="text-sm text-muted-foreground">45%</span>
              </div>
              <Progress value={45} className="h-2" />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>9/20 bài học</span>
                <span>Cập nhật: 1 ngày trước</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="font-medium">Marketing Online</span>
                </div>
                <span className="text-sm text-muted-foreground">30%</span>
              </div>
              <Progress value={30} className="h-2" />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>6/20 bài học</span>
                <span>Cập nhật: 3 ngày trước</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  <span className="font-medium">Thiết kế đồ họa</span>
                </div>
                <span className="text-sm text-muted-foreground">10%</span>
              </div>
              <Progress value={10} className="h-2" />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>2/20 bài học</span>
                <span>Cập nhật: 1 tuần trước</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <BookOpen className="mr-2 h-4 w-4" />
              Xem tất cả khóa học
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bài học tiếp theo</CardTitle>
            <CardDescription>Tiếp tục từ nơi bạn đã dừng lại</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Thumbnail"
                  className="h-full w-full object-cover"
                />
                <div className="relative bottom-0 left-0 right-0 top-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Xây dựng API RESTful với Node.js</h3>
                <p className="text-sm text-muted-foreground">Bài 16 - Lập trình Web nâng cao</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">45 phút</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Bài 16/20</span>
                </div>
              </div>
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" />
                Tiếp tục học
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Chứng chỉ của tôi</CardTitle>
            <CardDescription>Các chứng chỉ bạn đã đạt được</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-blue-100 p-2 dark:bg-blue-900">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-medium">Lập trình Python cơ bản</h4>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Hoàn thành</Badge>
                  <span className="text-xs text-muted-foreground">Ngày cấp: 15/04/2025</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-green-100 p-2 dark:bg-green-900">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-medium">Tiếng Anh cơ bản</h4>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Hoàn thành</Badge>
                  <span className="text-xs text-muted-foreground">Ngày cấp: 10/03/2025</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-purple-100 p-2 dark:bg-purple-900">
                <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-medium">Thiết kế UI/UX</h4>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Hoàn thành</Badge>
                  <span className="text-xs text-muted-foreground">Ngày cấp: 05/02/2025</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Award className="mr-2 h-4 w-4" />
              Xem tất cả chứng chỉ
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ghi chú gần đây</CardTitle>
            <CardDescription>Các ghi chú bạn đã tạo trong bài học</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Cấu trúc RESTful API</h4>
                <span className="text-xs text-muted-foreground">05:30</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Chú ý cách tổ chức các endpoint và phương thức HTTP tương ứng với các hành động CRUD.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" />
                <span>Lập trình Web nâng cao - Bài 16</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Cách phát âm /θ/ và /ð/</h4>
                <span className="text-xs text-muted-foreground">12:45</span>
              </div>
              <p className="text-sm text-muted-foreground">Đặt lưỡi giữa răng trên và dưới, thổi khí ra nhẹ nhàng.</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" />
                <span>Tiếng Anh giao tiếp - Bài 8</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Xem tất cả ghi chú
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Khóa học đề xuất</CardTitle>
            <CardDescription>Dựa trên sở thích và lịch sử học tập của bạn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="aspect-video overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=100&width=200"
                  alt="Thumbnail"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-medium">React.js cho người mới bắt đầu</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">4.8</span>
                  <span className="text-xs text-muted-foreground">(1,245)</span>
                </div>
                <span className="text-sm font-medium">2,500,000 VNĐ</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="/placeholder.svg?height=20&width=20" alt="Avatar" />
                  <AvatarFallback>NA</AvatarFallback>
                </Avatar>
                <span>Nguyễn Văn A</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="aspect-video overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=100&width=200"
                  alt="Thumbnail"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-medium">Phát triển ứng dụng di động với Flutter</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">4.7</span>
                  <span className="text-xs text-muted-foreground">(856)</span>
                </div>
                <span className="text-sm font-medium">2,200,000 VNĐ</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="/placeholder.svg?height=20&width=20" alt="Avatar" />
                  <AvatarFallback>HG</AvatarFallback>
                </Avatar>
                <span>Hoàng Văn G</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              Khám phá thêm khóa học
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
