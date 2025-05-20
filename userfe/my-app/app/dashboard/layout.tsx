import type { ReactNode } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Bell,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Users,
  FileText,
  BarChart,
  CreditCard,
  Tag,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                    <GraduationCap className="h-5 w-5" />
                    <span>EduLearn</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Tổng quan</span>
                  </Link>
                  <Link
                    href="/dashboard/courses"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>Khóa học</span>
                  </Link>
                  <Link
                    href="/dashboard/students"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <Users className="h-5 w-5" />
                    <span>Học viên</span>
                  </Link>
                  <Link
                    href="/dashboard/certificates"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <Award className="h-5 w-5" />
                    <span>Chứng chỉ</span>
                  </Link>
                  <Link
                    href="/dashboard/blog"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Bài viết</span>
                  </Link>
                  <Link
                    href="/dashboard/analytics"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <BarChart className="h-5 w-5" />
                    <span>Thống kê</span>
                  </Link>
                  <Link
                    href="/dashboard/transactions"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Giao dịch</span>
                  </Link>
                  <Link
                    href="/dashboard/promotions"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <Tag className="h-5 w-5" />
                    <span>Khuyến mãi</span>
                  </Link>
                  <Link
                    href="/dashboard/messages"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Tin nhắn</span>
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Cài đặt</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold md:text-xl">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span>EduLearn</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Thông báo</span>
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Thông báo</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-auto">
                  <DropdownMenuItem className="cursor-pointer flex flex-col items-start gap-1 p-4">
                    <div className="font-medium">Khóa học mới được tạo</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Khóa học "Lập trình Web nâng cao" đã được tạo bởi giảng viên Nguyễn Văn A.
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">5 phút trước</div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer flex flex-col items-start gap-1 p-4">
                    <div className="font-medium">Thanh toán thành công</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Học viên Trần Thị B đã thanh toán khóa học "Tiếng Anh giao tiếp".
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">30 phút trước</div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer flex flex-col items-start gap-1 p-4">
                    <div className="font-medium">Bài viết mới cần phê duyệt</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Có 5 bài viết mới đang chờ phê duyệt.
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">1 giờ trước</div>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center font-medium text-blue-600 dark:text-blue-400">
                  Xem tất cả thông báo
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/dashboard/profile" className="flex w-full items-center">
                    Hồ sơ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard/settings" className="flex w-full items-center">
                    Cài đặt
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 dark:text-red-400">
                  <Link href="/logout" className="flex w-full items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    <span>Đăng xuất</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className="hidden w-64 border-r bg-background md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1 px-2 text-sm font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Tổng quan</span>
              </Link>
              <Link
                href="/dashboard/courses"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <BookOpen className="h-5 w-5" />
                <span>Khóa học</span>
              </Link>
              <Link
                href="/dashboard/students"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Users className="h-5 w-5" />
                <span>Học viên</span>
              </Link>
              <Link
                href="/dashboard/certificates"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Award className="h-5 w-5" />
                <span>Chứng chỉ</span>
              </Link>
              <Link
                href="/dashboard/blog"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <FileText className="h-5 w-5" />
                <span>Bài viết</span>
              </Link>
              <Link
                href="/dashboard/analytics"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <BarChart className="h-5 w-5" />
                <span>Thống kê</span>
              </Link>
              <Link
                href="/dashboard/transactions"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <CreditCard className="h-5 w-5" />
                <span>Giao dịch</span>
              </Link>
              <Link
                href="/dashboard/promotions"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Tag className="h-5 w-5" />
                <span>Khuyến mãi</span>
              </Link>
              <Link
                href="/dashboard/messages"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Tin nhắn</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Settings className="h-5 w-5" />
                <span>Cài đặt</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
