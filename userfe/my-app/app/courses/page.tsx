import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ChevronDown, Clock, Search, Star, Users, GraduationCap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function CoursesPage() {
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold">Khám phá khóa học</h1>
            <p className="text-muted-foreground mt-2">
              Tìm kiếm và khám phá hàng nghìn khóa học chất lượng cao từ các giảng viên hàng đầu
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Tìm kiếm khóa học, kỹ năng, giảng viên..." className="pl-10 pr-4 py-6 text-base" />
            </div>
            <Button className="md:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Tìm kiếm
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-800 rounded-lg border p-4 space-y-6 sticky top-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Bộ lọc</h2>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Xóa bộ lọc
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Danh mục</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="category-1" />
                        <label
                          htmlFor="category-1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Lập trình & Phát triển
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="category-2" />
                        <label
                          htmlFor="category-2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Ngoại ngữ
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="category-3" />
                        <label
                          htmlFor="category-3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Marketing & Kinh doanh
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="category-4" />
                        <label
                          htmlFor="category-4"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Thiết kế & Đồ họa
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="category-5" />
                        <label
                          htmlFor="category-5"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Phát triển cá nhân
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Cấp độ</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="level-1" />
                        <label
                          htmlFor="level-1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Cơ bản
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="level-2" />
                        <label
                          htmlFor="level-2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Trung cấp
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="level-3" />
                        <label
                          htmlFor="level-3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nâng cao
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="level-4" />
                        <label
                          htmlFor="level-4"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Tất cả cấp độ
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Đánh giá</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rating-1" />
                        <label
                          htmlFor="rating-1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1">& trở lên</span>
                          </div>
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rating-2" />
                        <label
                          htmlFor="rating-2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                            <span className="ml-1">& trở lên</span>
                          </div>
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rating-3" />
                        <label
                          htmlFor="rating-3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                            <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                            <span className="ml-1">& trở lên</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Giá</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price-1" />
                        <label
                          htmlFor="price-1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Miễn phí
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price-2" />
                        <label
                          htmlFor="price-2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Dưới 500,000 VNĐ
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price-3" />
                        <label
                          htmlFor="price-3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          500,000 - 1,000,000 VNĐ
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price-4" />
                        <label
                          htmlFor="price-4"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          1,000,000 - 2,000,000 VNĐ
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price-5" />
                        <label
                          htmlFor="price-5"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Trên 2,000,000 VNĐ
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Áp dụng bộ lọc</Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg border p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Tabs defaultValue="all" className="w-full sm:w-auto">
                    <TabsList>
                      <TabsTrigger value="all">Tất cả</TabsTrigger>
                      <TabsTrigger value="popular">Phổ biến</TabsTrigger>
                      <TabsTrigger value="new">Mới nhất</TabsTrigger>
                      <TabsTrigger value="trending">Xu hướng</TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Sắp xếp theo:</span>
                    <Select defaultValue="popular">
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Sắp xếp theo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="popular">Phổ biến nhất</SelectItem>
                          <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
                          <SelectItem value="newest">Mới nhất</SelectItem>
                          <SelectItem value="price-low">Giá: Thấp đến cao</SelectItem>
                          <SelectItem value="price-high">Giá: Cao đến thấp</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Card 1 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/placeholder.svg?height=200&width=350"
                      alt="Course thumbnail"
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700">Phổ biến</Badge>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg">Lập trình Web nâng cao</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Học cách xây dựng ứng dụng web hiện đại với các công nghệ và framework mới nhất
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">4.8</span>
                      <span className="text-xs text-muted-foreground">(245 đánh giá)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>40 giờ</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>20 bài học</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>1,245</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=30&width=30" alt="Avatar" />
                        <AvatarFallback>NA</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Nguyễn Văn A</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="font-bold">2,500,000 VNĐ</div>
                    <Link href="/course/lap-trinh-web-nang-cao">
                      <Button>Xem chi tiết</Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Course Card 2 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/placeholder.svg?height=200&width=350"
                      alt="Course thumbnail"
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">Mới</Badge>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg">Tiếng Anh giao tiếp</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Phát triển kỹ năng giao tiếp tiếng Anh tự tin trong mọi tình huống
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">4.6</span>
                      <span className="text-xs text-muted-foreground">(187 đánh giá)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>30 giờ</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>25 bài học</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>987</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=30&width=30" alt="Avatar" />
                        <AvatarFallback>LC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Lê Văn C</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="font-bold">1,800,000 VNĐ</div>
                    <Link href="/course/tieng-anh-giao-tiep">
                      <Button>Xem chi tiết</Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Course Card 3 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/placeholder.svg?height=200&width=350"
                      alt="Course thumbnail"
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2 bg-orange-600 hover:bg-orange-700">Bán chạy</Badge>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg">Marketing Online</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Chiến lược marketing online toàn diện cho doanh nghiệp và cá nhân
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">4.7</span>
                      <span className="text-xs text-muted-foreground">(156 đánh giá)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>35 giờ</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>18 bài học</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>856</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=30&width=30" alt="Avatar" />
                        <AvatarFallback>TE</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Trần Thị E</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="font-bold">2,200,000 VNĐ</div>
                    <Link href="/course/marketing-online">
                      <Button>Xem chi tiết</Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Course Card 4 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/placeholder.svg?height=200&width=350"
                      alt="Course thumbnail"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg">Thiết kế đồ họa</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Làm chủ các công cụ thiết kế đồ họa chuyên nghiệp và xây dựng portfolio ấn tượng
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">4.5</span>
                      <span className="text-xs text-muted-foreground">(132 đánh giá)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>45 giờ</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>22 bài học</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>743</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=30&width=30" alt="Avatar" />
                        <AvatarFallback>PV</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Phạm Văn F</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="font-bold">1,950,000 VNĐ</div>
                    <Link href="/course/thiet-ke-do-hoa">
                      <Button>Xem chi tiết</Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Course Card 5 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/placeholder.svg?height=200&width=350"
                      alt="Course thumbnail"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg">Phát triển ứng dụng di động</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Xây dựng ứng dụng di động đa nền tảng với React Native và Flutter
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">4.6</span>
                      <span className="text-xs text-muted-foreground">(118 đánh giá)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>50 giờ</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>25 bài học</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>621</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=30&width=30" alt="Avatar" />
                        <AvatarFallback>HV</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Hoàng Văn G</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="font-bold">2,800,000 VNĐ</div>
                    <Link href="/course/phat-trien-ung-dung-di-dong">
                      <Button>Xem chi tiết</Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Course Card 6 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/placeholder.svg?height=200&width=350"
                      alt="Course thumbnail"
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700">Miễn phí</Badge>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg">Nhập môn lập trình Python</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Khóa học cơ bản về ngôn ngữ lập trình Python cho người mới bắt đầu
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">4.4</span>
                      <span className="text-xs text-muted-foreground">(205 đánh giá)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>20 giờ</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>15 bài học</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>1,876</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=30&width=30" alt="Avatar" />
                        <AvatarFallback>NA</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Nguyễn Văn A</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="font-bold text-green-600 dark:text-green-400">Miễn phí</div>
                    <Link href="/course/nhap-mon-lap-trinh-python">
                      <Button>Xem chi tiết</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronDown className="h-4 w-4 rotate-90" />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 dark:bg-slate-800 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold">EduLearn</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Nền tảng học trực tuyến hàng đầu với các khóa học chất lượng cao.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Liên kết</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Khóa học
                  </Link>
                </li>
                <li>
                  <Link
                    href="/instructors"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Giảng viên
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Hỗ trợ</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Điều khoản
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Chính sách
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Liên hệ</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">info@edulearn.com</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">+84 123 456 789</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-300">© 2025 EduLearn. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
