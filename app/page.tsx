import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, Download, Edit } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span>Resume Builder</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create professional resumes in minutes
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Choose from our professionally designed templates and customize your resume with ease. Stand out
                    from the crowd and land your dream job.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/templates">
                    <Button size="lg" className="gap-2">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Resume Example"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover object-center shadow-lg"
                  height="600"
                  src="/placeholder.svg?height=600&width=480"
                  width="480"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create your professional resume in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Choose a Template</h3>
                  <p className="text-gray-500">Browse our collection of professionally designed resume templates.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <Edit className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Fill in Your Details</h3>
                  <p className="text-gray-500">
                    Add your personal information, work experience, education, and skills.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <Download className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Download Your Resume</h3>
                  <p className="text-gray-500">Download your resume as a PDF and start applying for jobs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Templates</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our collection of professionally designed templates
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((template) => (
                <Card key={template} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      alt={`Template ${template}`}
                      className="aspect-[3/4] object-cover w-full"
                      height="400"
                      src={`/placeholder.svg?height=400&width=300&text=Template%20${template}`}
                      width="300"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle>Template {template}</CardTitle>
                    <CardDescription>Professional and clean design</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link href={`/editor?template=${template}`} className="w-full">
                      <Button className="w-full">Use This Template</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/templates">
                <Button variant="outline" size="lg">
                  View All Templates
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <FileText className="h-6 w-6" />
              <span>Resume Builder</span>
            </Link>
            <p className="text-sm text-gray-500">Create professional resumes in minutes. © 2025 ResumeBuilder Inc.</p>
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

