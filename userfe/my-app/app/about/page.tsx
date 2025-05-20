import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  BookOpen,
  Award,
  Globe,
  Clock,
  CheckCircle,
  MessageSquare,
  BarChart,
  Shield,
  Zap,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <header className="bg-white dark:bg-slate-800 border-b">
        <div className="container mx-auto py-6 px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-bold">EduLearn</h1>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline">Đăng nhập</Button>
              </Link>
              <Link href="/register">
                <Button>Đăng ký</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Về EduLearn</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Nền tảng học trực tuyến hàng đầu với sứ mệnh mang đến kiến thức chất lượng cao cho mọi người, mọi nơi.
            </p>
          </div>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border shadow-lg">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="About EduLearn"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sứ mệnh & Tầm nhìn</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sứ mệnh</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Chúng tôi cam kết mang đến nền giáo dục chất lượng cao, dễ tiếp cận cho mọi người, giúp học viên
                      phát triển kỹ năng và kiến thức cần thiết để thành công trong thời đại số.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tầm nhìn</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Trở thành nền tảng học trực tuyến hàng đầu Việt Nam, kết nối học viên với kiến thức và kỹ năng từ
                      các chuyên gia đầu ngành, xóa bỏ rào cản về địa lý và tài chính trong giáo dục.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Giá trị cốt lõi</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Chất lượng, Sáng tạo, Trách nhiệm, Hợp tác và Tôn trọng là những giá trị cốt lõi định hướng mọi
                      hoạt động của chúng tôi, từ phát triển nội dung đến hỗ trợ học viên.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Mission and Vision"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20 py-16 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Những con số ấn tượng</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              EduLearn đã và đang không ngừng phát triển, mang đến giá trị cho cộng đồng học tập
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</div>
              <div className="text-lg font-medium">Học viên</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-lg font-medium">Khóa học</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-lg font-medium">Giảng viên</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50,000+</div>
              <div className="text-lg font-medium">Giờ học</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tính năng nổi bật</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              EduLearn cung cấp đầy đủ các tính năng hiện đại để hỗ trợ việc học tập và giảng dạy trực tuyến
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Đa dạng khóa học</CardTitle>
                <CardDescription>Tiếp cận nhiều lĩnh vực kiến thức khác nhau</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Hàng nghìn khóa học chất lượng cao từ các lĩnh vực: Công nghệ, Ngoại ngữ, Marketing, Thiết kế, Phát
                  triển cá nhân và nhiều lĩnh vực khác.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Học mọi lúc, mọi nơi</CardTitle>
                <CardDescription>Linh hoạt thời gian và không gian học tập</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Truy cập nội dung học tập trên nhiều thiết bị, học offline, theo dõi tiến trình và tiếp tục từ nơi bạn
                  đã dừng lại.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Chứng chỉ giá trị</CardTitle>
                <CardDescription>Công nhận thành tích học tập của bạn</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Nhận chứng chỉ hoàn thành có giá trị sau khi hoàn thành khóa học, giúp nâng cao hồ sơ cá nhân và cơ
                  hội nghề nghiệp.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Tương tác trực tiếp</CardTitle>
                <CardDescription>Kết nối với giảng viên và học viên</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Diễn đàn thảo luận, hỏi đáp trực tiếp với giảng viên, chia sẻ kinh nghiệm và học hỏi từ cộng đồng học
                  viên.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>Theo dõi tiến trình</CardTitle>
                <CardDescription>Giám sát quá trình học tập của bạn</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Công cụ theo dõi tiến trình học tập chi tiết, báo cáo thành tích, ghi chú cá nhân và đánh dấu bài học
                  quan trọng.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle>Công nghệ hiện đại</CardTitle>
                <CardDescription>Trải nghiệm học tập tối ưu</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Nền tảng sử dụng công nghệ tiên tiến, giao diện thân thiện, hỗ trợ đa ngôn ngữ và tùy chỉnh theo nhu
                  cầu người dùng.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Những người đ\
