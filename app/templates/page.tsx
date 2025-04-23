import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Search } from "lucide-react"

export default function TemplatesPage() {
  // Template categories
  const categories = ["All", "Professional", "Creative", "Simple", "Modern"]

  // Template data with enhanced descriptions and styling
  const templates = [
    {
      id: 1,
      name: "Classic Resume",
      category: "Professional",
      image: "/placeholder.svg?height=400&width=300&text=Classic%20Resume",
      description: "Elegant green accents with a traditional layout for a timeless professional look",
      color: "bg-emerald-100",
    },
    {
      id: 2,
      name: "Creative Portfolio",
      category: "Creative",
      image: "/placeholder.svg?height=400&width=300&text=Creative%20Resume",
      description: "Vibrant purple gradient design with timeline elements for creative professionals",
      color: "bg-violet-100",
    },
    {
      id: 3,
      name: "Minimal Resume",
      category: "Simple",
      image: "/placeholder.svg?height=400&width=300&text=Minimal%20Resume",
      description: "Clean, minimalist design with elegant typography and subtle separators",
      color: "bg-gray-100",
    },
    {
      id: 4,
      name: "Modern Tech",
      category: "Modern",
      image: "/placeholder.svg?height=400&width=300&text=Modern%20Tech",
      description: "Contemporary slate design with card-based sections for tech professionals",
      color: "bg-slate-100",
    },
    {
      id: 5,
      name: "Executive",
      category: "Professional",
      image: "/placeholder.svg?height=400&width=300&text=Executive",
      description: "Sophisticated teal accents with a structured layout for senior professionals",
      color: "bg-teal-100",
    },
    {
      id: 6,
      name: "Creative Design",
      category: "Creative",
      image: "/placeholder.svg?height=400&width=300&text=Creative%20Design",
      description: "Eye-catching layout with unique visual elements and gradient backgrounds",
      color: "bg-fuchsia-100",
    },
    {
      id: 7,
      name: "Simple Clean",
      category: "Simple",
      image: "/placeholder.svg?height=400&width=300&text=Simple%20Clean",
      description: "Straightforward, easy-to-read minimal design with perfect whitespace balance",
      color: "bg-gray-100",
    },
    {
      id: 8,
      name: "Modern Sleek",
      category: "Modern",
      image: "/placeholder.svg?height=400&width=300&text=Modern%20Sleek",
      description: "Sleek design with contemporary styling and card-based content sections",
      color: "bg-slate-100",
    },
    {
      id: 9,
      name: "Professional Elite",
      category: "Professional",
      image: "/placeholder.svg?height=400&width=300&text=Professional%20Elite",
      description: "Premium layout with sophisticated color scheme for experienced professionals",
      color: "bg-teal-100",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b w-full">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span>ResumeBuilder</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/templates" className="text-sm font-medium hover:underline underline-offset-4">
              Templates
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Resume Templates</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our collection of professionally designed templates
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search templates..."
                    className="w-full appearance-none bg-white pl-8 shadow-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 w-full">
              <Tabs defaultValue="All" className="w-full">
                <TabsList className="w-full justify-start overflow-auto py-2">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category} className="text-sm">
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {categories.map((category) => (
                  <TabsContent key={category} value={category} className="pt-4">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                      {templates
                        .filter((template) => category === "All" || template.category === category)
                        .map((template) => (
                          <Card
                            key={template.id}
                            className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                          >
                            <CardHeader className={`p-0 ${template.color}`}>
                              <div className="aspect-[3/4] w-full overflow-hidden relative">
                                <img
                                  alt={template.name}
                                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                  height="400"
                                  src={template.image || "/placeholder.svg"}
                                  width="300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4">
                              <CardTitle className="text-lg">{template.name}</CardTitle>
                              <CardDescription className="line-clamp-2">{template.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                              <Link href={`/editor?template=${template.id}`} className="w-full">
                                <Button className="w-full">Use This Template</Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50 w-full">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <FileText className="h-6 w-6" />
              <span>ResumeBuilder</span>
            </Link>
            <p className="text-sm text-gray-500">
              Create professional resumes in minutes. © {new Date().getFullYear()} ResumeBuilder Inc.
            </p>
          </div>
          <div className="ml-auto grid gap-8 sm:grid-cols-3">
            <div className="grid gap-3">
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="grid gap-2 text-sm">
                <Link href="/templates" className="hover:underline">
                  Templates
                </Link>
                <Link href="/features" className="hover:underline">
                  Features
                </Link>
                <Link href="/pricing" className="hover:underline">
                  Pricing
                </Link>
              </nav>
            </div>
            <div className="grid gap-3">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="grid gap-2 text-sm">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </nav>
            </div>
            <div className="grid gap-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="grid gap-2 text-sm">
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
                <Link href="/cookies" className="hover:underline">
                  Cookies
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

