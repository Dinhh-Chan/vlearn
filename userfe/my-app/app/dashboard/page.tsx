import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  DollarSign,
  Download,
  GraduationCap,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Xin chào, Admin!</h2>
          <p className="text-muted-foreground">Đây là tổng quan về hệ thống học trực tuyến của bạn.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Xuất báo cáo
          </Button>
          <Button>
            <GraduationCap className="mr-2 h-4 w-4" />
            Thêm khóa học
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng doanh thu</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120.500.000 VNĐ</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +20.1%
              </span>{" "}
              so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Học viên mới</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +12.4%
              </span>{" "}
              so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Khóa học đang hoạt động</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +5
              </span>{" "}
              khóa học mới
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chứng chỉ đã cấp</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">289</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 dark:text-red-400 inline-flex items-center">
                <ArrowDownRight className="mr-1 h-4 w-4" />
                -4.5%
              </span>{" "}
              so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tổng quan doanh thu</CardTitle>
            <CardDescription>Biểu đồ doanh thu theo tháng trong năm 2025</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              <div className="flex h-full items-end gap-2 pb-6">
                {[40, 30, 70, 80, 100, 60, 50, 90, 120, 80, 70, 110].map((height, i) => (
                  <div
                    key={i}
                    className="relative flex-1 overflow-hidden rounded-t-md bg-blue-500 dark:bg-blue-600 transition-all hover:bg-blue-600 dark:hover:bg-blue-700"
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white opacity-70">{height}M</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between px-2 pt-2 text-xs text-muted-foreground">
                <div>T1</div>
                <div>T2</div>
                <div>T3</div>
                <div>T4</div>
                <div>T5</div>
                <div>T6</div>
                <div>T7</div>
                <div>T8</div>
                <div>T9</div>
                <div>T10</div>
                <div>T11</div>
                <div>T12</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>Các hoạt động mới nhất trên hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
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
                <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                  <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Giao dịch thanh toán thành công</p>
                  <p className="text-sm text-muted-foreground">2.500.000 VNĐ - Trần Thị B</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>30 phút trước</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-2 dark:bg-orange-900">
                  <BookOpen className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Khóa học mới được tạo</p>
                  <p className="text-sm text-muted-foreground">Tiếng Anh giao tiếp - Lê Văn C</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>2 giờ trước</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                  <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Chứng chỉ mới được cấp</p>
                  <p className="text-sm text-muted-foreground">Phạm Thị D - Khóa học Marketing Online</p>
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Khóa học phổ biến</CardTitle>
            <CardDescription>Top 5 khóa học được đăng ký nhiều nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">Lập trình Web nâng cao</div>
                    <div className="text-sm text-muted-foreground">Nguyễn Văn A</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">1,245</div>
                  <div className="text-sm text-muted-foreground">Học viên</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">Tiếng Anh giao tiếp</div>
                    <div className="text-sm text-muted-foreground">Lê Văn C</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">987</div>
                  <div className="text-sm text-muted-foreground">Học viên</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium">Marketing Online</div>
                    <div className="text-sm text-muted-foreground">Trần Thị E</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">856</div>
                  <div className="text-sm text-muted-foreground">Học viên</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="font-medium">Thiết kế đồ họa</div>
                    <div className="text-sm text-muted-foreground">Phạm Văn F</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">743</div>
                  <div className="text-sm text-muted-foreground">Học viên</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-red-100 dark:bg-red-900 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <div className="font-medium">Phát triển ứng dụng di động</div>
                    <div className="text-sm text-muted-foreground">Hoàng Văn G</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">621</div>
                  <div className="text-sm text-muted-foreground">Học viên</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Thống kê người dùng</CardTitle>
            <CardDescription>Phân bổ người dùng theo vai trò</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Học viên</div>
                  <div className="text-sm text-muted-foreground">8,942</div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                  <div className="h-full w-[85%] rounded-full bg-blue-500 dark:bg-blue-600" />
                </div>
                <div className="text-xs text-muted-foreground">85% tổng người dùng</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Giảng viên</div>
                  <div className="text-sm text-muted-foreground">1,253</div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                  <div className="h-full w-[12%] rounded-full bg-green-500 dark:bg-green-600" />
                </div>
                <div className="text-xs text-muted-foreground">12% tổng người dùng</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Quản trị viên</div>
                  <div className="text-sm text-muted-foreground">315</div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                  <div className="h-full w-[3%] rounded-full bg-red-500 dark:bg-red-600" />
                </div>
                <div className="text-xs text-muted-foreground">3% tổng người dùng</div>
              </div>
              <div className="pt-4">
                <div className="rounded-lg border bg-card p-4">
                  <div className="text-sm font-medium">Tổng số người dùng</div>
                  <div className="text-2xl font-bold">10,510</div>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      +15.3%
                    </span>{" "}
                    so với tháng trước
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
