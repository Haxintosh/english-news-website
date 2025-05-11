import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold">
              The Shadow of Doubt Gazette
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link
              href="/"
              className="font-medium text-muted-foreground hover:text-foreground"
            >
              Politics
            </Link>
            <Link
              href="/"
              className="font-medium text-muted-foreground hover:text-foreground"
            >
              Business
            </Link>
            <Link
              href="/"
              className="font-medium text-muted-foreground hover:text-foreground"
            >
              Technology
            </Link>
            <Link
              href="/"
              className="font-medium text-muted-foreground hover:text-foreground"
            >
              Entertainment
            </Link>
            <Link
              href="/"
              className="font-medium text-muted-foreground hover:text-foreground"
            >
              Crossword
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Subscribe</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <Badge>Breaking News</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Boy, 16, Sentenced to Death for Father’s Murder Amid Accusations
                of Bias
              </h1>
              <p className="text-muted-foreground">
                Public outrage erupts following a controversial guilty verdict
                in a high-profile murder trial, as critics argue systemic
                prejudice and rushed judgment doomed a boy to the electric
                chair.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>10 minutes ago</span>
                <span>•</span>
                <span>By Akram Rozakhunov</span>
              </div>
              <Button className="mt-4" asChild>
                <Link href="/article/boy-sentenced-death-bias">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/english-news-website/placeholder.svg?height=720&width=1280"
                alt="Global Climate Summit"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
        <section className="container py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Top Stories</h2>
          </div>
          <Tabs defaultValue="all">
            <div className="flex justify-end mb-6">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="politics">Politics</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Fear on Trial: McCarthyism Grips America",
                    description:
                      "As Senator Joseph McCarthy’s anti-communist crusade continues, citizens and celebrities alike face accusations with little to no evidence. Critics warn that fear is replacing justice in American courtrooms and Congress alike.",
                    image:
                      "/english-news-website/mccarthy.jpg?height=400&width=600",
                    category: "Politics",
                    time: "2 hours ago",
                    author: "Justin Yang",
                    redirect: "/article/mccarthyism",
                  },
                  {
                    title:
                      "New Heights: The USSR Launches Sputnik, Igniting the Space Race",
                    description:
                      "The Soviet Union has launched Sputnik, the first man-made satellite to orbit Earth. Americans react with a mix of awe, fear, and competitive urgency as the Cold War enters orbit.",
                    image:
                      "/english-news-website/sputnik.jpg?height=400&width=600",
                    category: "Technology",
                    time: "3 hours ago",
                    author: "Victor Zhan",
                    redirect: "/article/teenager-family",
                  },
                  {
                    title:
                      "A Nation Divided: Segregation in Schools Sparks Protest",
                    description:
                      "Following the Supreme Court’s Brown v. Board of Education decision, backlash against school integration erupts across the South. Civil rights leaders call for empathy and equality, while resistance grows louder.",
                    image:
                      "/english-news-website/brownvsboe.webp?height=400&width=600",
                    category: "Politics",
                    time: "5 hours ago",
                    author: "Jiacheng Liu",
                    redirect: "/article/brown-vs-boe",
                  },
                  {
                    title:
                      "The Cost of Silence: Rosenbergs Executed for Espionage",
                    description:
                      "Julius and Ethel Rosenberg have been executed for allegedly passing atomic secrets to the Soviets. Debate continues over whether the trial was fair or tainted by Cold War hysteria.",
                    image:
                      "/english-news-website/jne.jpeg?height=400&width=600",
                    category: "Politics",
                    time: "1 day ago",
                    author: "Akram Rozakhunov",
                    redirect: "/article/rosenberg",
                  },
                  {
                    title:
                      "Apathy or Progress? Suburbia Booms as Cities Struggle",
                    description:
                      "White flight accelerates as more families leave the city for suburban life. Critics claim the shift reflects growing apathy toward urban poverty and inequality, while others call it the American Dream in motion.",
                    image: "/english-news-website/sub.jpg?height=400&width=600",
                    category: "Business",
                    time: "1 day ago",
                    author: "Jiacheng Liu",
                    redirect: "/article/suburbia",
                  },
                  {
                    title:
                      "Crime Drama Captivates Nation: TV's New Obsession with Justice",
                    description:
                      "From Dragnet to Perry Mason, Americans are tuning in to courtroom and detective dramas like never before. Critics say the obsession reflects a growing public anxiety about justice, guilt, and truth.",
                    image:
                      "/english-news-website/dragnet.png?height=400&width=600",
                    category: "Entertainment",
                    time: "2 days ago",
                    author: "Justin Yang",
                    redirect: "/article/dragnet",
                  },
                ].map((article, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={
                          article.image ||
                          "/english-news-website/placeholder.svg"
                        }
                        alt={article.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="text-xs text-muted-foreground">
                          {article.time}
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2 text-xl">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <div className="flex justify-between w-full">
                        <span className="text-sm text-muted-foreground">
                          By {article.author}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1"
                          asChild
                        >
                          <Link href={article.redirect}>
                            Read more <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="politics">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="/english-news-website/placeholder.svg?height=400&width=600"
                      alt="New Healthcare Bill Passes Senate"
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Politics</Badge>
                      <div className="text-xs text-muted-foreground">
                        5 hours ago
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">
                      New Healthcare Bill Passes Senate
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      Landmark legislation aims to reduce prescription drug
                      costs and expand coverage.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex justify-between w-full">
                      <span className="text-sm text-muted-foreground">
                        By Justin Yang
                      </span>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Read more <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="business">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="/english-news-website/placeholder.svg?height=400&width=600"
                      alt="Stock Markets Reach All-Time High"
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Business</Badge>
                      <div className="text-xs text-muted-foreground">
                        3 hours ago
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">
                      Stock Markets Reach All-Time High
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      Global markets surge as economic recovery exceeds
                      expectations in major economies.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex justify-between w-full">
                      <span className="text-sm text-muted-foreground">
                        By Jessica Williams
                      </span>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Read more <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="technology">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="/english-news-website/placeholder.svg?height=400&width=600"
                      alt="Tech Giant Unveils Revolutionary AI Assistant"
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Technology</Badge>
                      <div className="text-xs text-muted-foreground">
                        2 hours ago
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">
                      Tech Giant Unveils Revolutionary AI Assistant
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      The new AI system can understand and respond to complex
                      queries with human-like accuracy.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex justify-between w-full">
                      <span className="text-sm text-muted-foreground">
                        By Michael Chen
                      </span>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Read more <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        <section className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
          <div className="container">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold">Daily Crossword Challenge</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Test your knowledge with our daily crossword puzzle. New
                challenges every day!
              </p>
              <Button size="lg" asChild>
                <Link href="/crossword">Play Crossword</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Editor's Picks
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Fathers, Sons, and the New American Family",
                description:
                  "Postwar studies reveal a changing dynamic in American households, with rising tension between war-hardened fathers and their sons in a booming but emotionally distant culture.",
                image:
                  "/english-news-website/placeholder.svg?height=400&width=600",
                category: "Culture",
                time: "2 days ago",
                author: "Victor Zhan",
              },
              {
                title:
                  "Voices from the Fringe: Jazz and Rock Stir Social Change",
                description:
                  "Jazz and rock 'n' roll are under fire from traditionalists, but young people call them the soundtrack of rebellion and truth. As Elvis tops the charts, America’s youth are asking: Whose voices matter?",
                image:
                  "/english-news-website/placeholder.svg?height=400&width=600",
                category: "Entertainment",
                time: "3 days ago",
                author: "Justin Yang",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="flex flex-col md:flex-row overflow-hidden"
              >
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-square">
                  <Image
                    src={
                      article.image || "/english-news-website/placeholder.svg"
                    }
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-4 md:w-3/5">
                  <CardHeader className="p-0 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="text-xs text-muted-foreground">
                        {article.time}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 py-2">
                    <CardDescription className="line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-0 pt-2 mt-auto">
                    <div className="flex justify-between w-full">
                      <span className="text-sm text-muted-foreground">
                        By {article.author}
                      </span>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Read more <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </section>
        <section className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "Train Delay Causes Morning Commotion at Grand Central",
                category: "Local",
                time: "1 hour ago",
              },
              {
                title: "Radio Drama Fades as TV Takes the Stage",
                category: "Technology",
                time: "3 hours ago",
              },
              {
                title: "Yankees Lose Nail-Biter in Extra Innings",
                category: "Sports",
                time: "5 hours ago",
              },
              {
                title: "Heat Wave Breaks as Thunderstorms Roll Over New York",
                category: "Weather",
                time: "10 hours ago",
              },
              {
                title:
                  "Weather Alert: Storm System Expected to Affect Eastern Regions",
                category: "Weather",
                time: "12 hours ago",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {article.time}
                    </span>
                  </div>
                  <h3 className="font-medium">{article.title}</h3>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="container">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold">
                Subscribe to Our Newsletter
              </h2>
              <p className="max-w-[600px]">
                Get the latest news and updates delivered directly to your
                inbox.
              </p>
              <div className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium mb-4">DailyNews</h3>
              <p className="text-sm text-muted-foreground">
                Delivering accurate and timely news from around the world.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/politics"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Politics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technology"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entertainment"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/crossword"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Crossword
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/advertise"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Advertise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DailyNews. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
