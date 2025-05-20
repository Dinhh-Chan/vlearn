import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  Plus,
  Star,
  Users,
  BarChart,
  ArrowUpRight,
  Pencil,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InstructorDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Xin chào, Giảng viên!</h2>
          <p className="text-muted-foreground">Quản lý khóa học và tương tác với học viên của bạn.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            Tin nhắn
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tạo khóa học
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng khóa học</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +2
              </span>{" "}
              so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng học viên</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,542</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +12.5%
              </span>{" "}
              so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đánh giá trung bình</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
            <p className="text-xs text-muted-foreground">Dựa trên 1,245 đánh giá</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu tháng này</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,500,000 VNĐ</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +18.2%
              </span>{" "}
              so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Thống kê khóa học</CardTitle>
            <CardDescription>Số lượng học viên đăng ký theo khóa học</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              <div className="flex h-full items-end gap-2 pb-6">
                {[80, 60, 95, 75, 40, 65, 70, 50].map((height, i) => (
                  <div
                    key={i}
                    className="relative flex-1 overflow-hidden rounded-t-md bg-blue-500 dark:bg-blue-600 transition-all hover:bg-blue-600 dark:hover:bg-blue-700"
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white opacity-70">{height * 10}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between px-2 pt-2 text-xs text-muted-foreground">
                <div>KH1</div>
                <div>KH2</div>
                <div>KH3</div>
                <div>KH4</div>
                <div>KH5</div>
                <div>KH6</div>
                <div>KH7</div>
                <div>KH8</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>Các hoạt động mới nhất từ học viên</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>NV</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Nguyễn Văn A đã đăng ký khóa học</p>
                  <p className="text-sm text-muted-foreground">Lập trình Web nâng cao</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>5 phút trước</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>TT</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Trần Thị B đã hoàn thành bài học</p>
                  <p className="text-sm text-muted-foreground">Xây dựng API RESTful với Node.js</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>30 phút trước</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>LV</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Lê Văn C đã đánh giá khóa học</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">"Khóa học rất hay và bổ ích!"</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>2 giờ trước</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>PT</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Phạm Thị D đã đặt câu hỏi</p>
                  <p className="text-sm text-muted-foreground">
                    "Làm thế nào để tối ưu hóa hiệu suất của ứng dụng React?"
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>1 ngày trước</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">Khóa học của tôi</TabsTrigger>
          <TabsTrigger value="analytics">Phân tích</TabsTrigger>
          <TabsTrigger value="questions">Câu hỏi chưa trả lời</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Lập trình Web nâng cao</CardTitle>
                <CardDescription>Tạo ngày: 15/01/2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Học viên</span>
                  <span className="font-medium">1,245</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Đánh giá</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8</span>
                    <span className="text-xs text-muted-foreground">(245)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Hoàn thành</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Doanh thu</span>
                  <span className="font-medium">12,500,000 VNĐ</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Chi tiết
                </Button>
                <Button size="sm">
                  <Pencil className="mr-2 h-4 w-4" />
                  Chỉnh sửa
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Tiếng Anh giao tiếp</CardTitle>
                <CardDescription>Tạo ngày: 10/02/2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Học viên</span>
                  <span className="font-medium">987</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Đánh giá</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.6</span>
                    <span className="text-xs text-muted-foreground">(187)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Hoàn thành</span>
                  <span className="font-medium">60%</span>
                </div>
                <Progress value={60} className="h-2" />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Doanh thu</span>
                  <span className="font-medium">8,200,000 VNĐ</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Chi tiết
                </Button>
                <Button size="sm">
                  <Pencil className="mr-2 h-4 w-4" />
                  Chỉnh sửa
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Marketing Online</CardTitle>
                <CardDescription>Tạo ngày: 05/03/2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Học viên</span>
                  <span className="font-medium">856</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Đánh giá</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.7</span>
                    <span className="text-xs text-muted-foreground">(156)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Hoàn thành</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Doanh thu</span>
                  <span className="font-medium">7,800,000 VNĐ</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Chi tiết
                </Button>
                <Button size="sm">
                  <Pencil className="mr-2 h-4 w-4" />
                  Chỉnh sửa
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Xem tất cả khóa học
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Phân tích chi tiết</CardTitle>
              <CardDescription>Thống kê về hiệu suất khóa học và tương tác của học viên</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Tỷ lệ hoàn thành</div>
                  <div className="text-2xl font-bold">68%</div>
                  <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-[68%] rounded-full bg-blue-500 dark:bg-blue-600" />
                  </div>
                  <div className="text-xs text-muted-foreground">Trung bình tất cả khóa học</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Thời gian xem video</div>
                  <div className="text-2xl font-bold">24,568 giờ</div>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      +15.3%
                    </span>{" "}
                    so với tháng trước
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Tỷ lệ tương tác</div>
                  <div className="text-2xl font-bold">42%</div>
                  <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-[42%] rounded-full bg-green-500 dark:bg-green-600" />
                  </div>
                  <div className="text-xs text-muted-foreground">Bình luận, câu hỏi, đánh giá</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Tỷ lệ chuyển đổi</div>
                  <div className="text-2xl font-bold">8.5%</div>
                  <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-[8.5%] rounded-full bg-purple-500 dark:bg-purple-600" />
                  </div>
                  <div className="text-xs text-muted-foreground">Người xem → Học viên</div>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  <BarChart className="mr-2 h-4 w-4" />
                  Xem báo cáo chi tiết
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="questions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi chưa trả lời</CardTitle>
              <CardDescription>Các câu hỏi từ học viên đang chờ phản hồi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>PT</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">Phạm Thị D</span>
                          <span className="text-sm text-muted-foreground"> - Lập trình Web nâng cao</span>
                        </div>
                        <Badge variant="outline">Bài 16</Badge>
                      </div>
                      <p className="text-sm">
                        Làm thế nào để tối ưu hóa hiệu suất của ứng dụng React? Tôi đang gặp vấn đề với việc render lại
                        quá nhiều lần.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>1 ngày trước</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Trả lời</Button>
                        <Button variant="outline" size="sm">
                          Đánh dấu đã đọc
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>NV</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">Nguyễn Văn A</span>
                          <span className="text-sm text-muted-foreground"> - Tiếng Anh giao tiếp</span>
                        </div>
                        <Badge variant="outline">Bài 8</Badge>
                      </div>
                      <p className="text-sm">
                        Làm thế nào để phân biệt cách phát âm giữa "th" trong "think" và "th" trong "this"?
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>2 ngày trước</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Trả lời</Button>
                        <Button variant="outline" size="sm">
                          Đánh dấu đã đọc
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>TT</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">Trần Thị B</span>
                          <span className="text-sm text-muted-foreground"> - Marketing Online</span>
                        </div>
                        <Badge variant="outline">Bài 12</Badge>
                      </div>
                      <p className="text-sm">
                        Làm thế nào để tối ưu hóa chiến dịch quảng cáo Facebook cho đối tượng mục tiêu cụ thể?
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>3 ngày trước</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Trả lời</Button>
                        <Button variant="outline" size="sm">
                          Đánh dấu đã đọc
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Xem tất cả câu hỏi
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
