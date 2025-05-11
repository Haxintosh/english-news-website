import Link from "next/link";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Clock,
  Share2,
  Bookmark,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

export default function ArticlePage() {
  // Article data
  const article = {
    title: "Fathers, Sons, and the New American Family",
    subtitle:
      "Postwar studies reveal a changing dynamic in American households, with rising tension between war-hardened fathers and their sons in a booming but emotionally distant culture.",
    author: "Victor Zhan",
    date: "October 3, 1954",
    readTime: "10 min read",
    category: "Culture",
    image: "/english-news-website/teen.jpg?height=720&width=1280",
    content: DOMPurify.sanitize(`
      <p>
        The American household may appear more stable than ever, but experts warn of a quiet crisis brewing beneath the surface. A landmark study released this week by the American Institute of Family Relations reveals that the emotional gap between fathers and sons is widening in postwar families, and that this generational disconnect may be more than just a passing phase—it could be reshaping the very foundation of American life.
      </p>

      <p>
        “We are witnessing a collision between two distinct worlds,” says Dr. Eleanor McCarthy, a noted sociologist and lead author of the study. “The fathers were forged by hardship—the Great Depression, the war. Their sons are growing up in relative comfort, but often without a clear sense of how to connect with the men raising them. Discipline has replaced dialogue.”
      </p>

      <p>
        In interviews conducted across the country, teenage boys reported feeling misunderstood, isolated, and pressured to conform to rigid expectations of masculinity. Many described their fathers as “distant,” “angry,” or “cold.” Conversely, fathers expressed frustration with what they perceive as a lack of respect, work ethic, and emotional control in the younger generation.
      </p>

      <p>
        “It’s not that we don’t love them,” one father from Cleveland said. “It’s that we don’t know how to show it. My own father never said a kind word to me. I thought that’s just how it was done.”
      </p>

      <p>
        The study highlights how emotional repression, seen as a masculine ideal, may be contributing to strained family ties. In an age when television portrays families gathered cheerfully around the dinner table, the reality for many is far less harmonious. Behind the polished facades of suburbia, boys and men are struggling to understand each other, and in many cases, failing to bridge the emotional divide.
      </p>

      <h2>The Rise of Adolescence: A New American Identity</h2>

      <p>
        This generational rift is amplified by the rapid emergence of a new social figure: the teenager. For the first time in American history, young people between childhood and adulthood are being seen as their own demographic—with unique interests, voices, and needs. Sociologists call it “the rise of adolescence,” and it is changing everything from music to marketing to morality.
      </p>

      <p>
        Fueled by the postwar economic boom, many families can now afford to give their teenage children a level of freedom and spending power unheard of in previous decades. With it comes a cultural rebellion. Rock ‘n’ roll records, drive-in theaters, and youth-oriented fashion are helping teenagers carve out their own identity—but also drawing anxiety from older generations.
      </p>

      <p>
        “There’s a fear that we’re raising a generation without discipline,” says Dr. McCarthy. “But what we’re really seeing is a generation searching for autonomy. They don’t want to reject their fathers—they want to be understood by them.”
      </p>

      <p>
        This cultural shift has sparked debates in classrooms, pulpits, and even courtrooms. Rising rates of so-called “juvenile delinquency” have led to public concern that adolescence may be a time of danger rather than development. But experts warn that labeling troubled youth as criminals without addressing their environment—particularly strained home lives—only deepens the crisis.
      </p>

      <p>
        In one high-profile court case this month, a 16-year-old boy was sentenced to death for the murder of his father. Though the jury ultimately found him guilty, members of the public have raised concerns that the boy’s troubled relationship with his father and his upbringing in a poor neighborhood may have played a larger role in the tragedy than was acknowledged in court.
      </p>

      <p>
        “We see stories like this and think it’s just crime,” said Dr. McCarthy. “But often, it’s the end of a long line of misunderstandings, fear, and emotional neglect. Boys lash out not because they’re evil, but because they’re unheard.”
      </p>

      <p>
        Psychologists are urging schools, churches, and family institutions to address the issue head-on. Some propose father-son counseling initiatives, or encouraging fathers to spend more meaningful time with their children. The idea is not to abandon discipline, but to pair it with understanding—something experts say is desperately missing in many households.
      </p>

      <p>
        Meanwhile, as society marches forward with technological advancements, space races, and economic growth, a question lingers over kitchen tables and bedroom doors: In an age of booming progress, are we failing to nurture the people closest to us?
      </p>

      <p>
        Dr. McCarthy offers a final word of advice to families trying to bridge the gap. “Don’t assume silence means strength. Sometimes the most courageous thing a father can do is say, ‘I don’t have all the answers—but I want to understand you.’”
      </p>
      `),
    tags: ["Family", "Psychology", "Future", "Masculinity"],
    relatedArticles: [
      {
        title: "A Nation Divided: Segregation in Schools Sparks Protest",
        image: "/english-news-website/brownvsboe.webp?height=400&width=600",
        category: "Politics",
        slug: "brown-vs-boe",
      },
      {
        title:
          "Boy, 16, Sentenced to Death for Father’s Murder Amid Accusations of Bias",
        image: "/english-news-website/placeholder.svg?height=400&width=600",
        category: "Politics",
        slug: "boy-sentenced-death-bias",
      },
      {
        title: "The Cost of Silence: Rosenbergs Executed for Espionage",
        image: "/english-news-website/jne.jpeg?height=400&width=600",
        category: "Politics",
        slug: "julius-rosenberg-execution",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b px-4 sm:px-6 lg:px-8">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold">
              The Shadow of Doubt Gazette
            </Link>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <article className="container py-8 px-5 w-full">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
                {article.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {article.subtitle}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                    <span className="font-medium text-sm">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{article.author}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ml-auto flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Image
                src={article.image || "/english-news-website/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between mb-8">
                <Button variant="outline" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Show Comments
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {article.relatedArticles.map((related, index) => (
                    <Link href={`/article/${related.slug}`} key={index}>
                      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                        <div className="relative aspect-video">
                          <Image
                            src={
                              related.image ||
                              "/english-news-websitep/placeholder.svg"
                            }
                            alt={related.title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2">
                            {related.category}
                          </Badge>
                          <h3 className="font-medium line-clamp-2">
                            {related.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-2">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            <span>Read article</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
          <div className="container">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold">Stay Updated on Any News</h2>
              <p className="max-w-[600px]">
                Get the latest updates and breaking news delivered directly to
                your inbox.
              </p>
              <div className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Shadow of Doubt Gazette. All
              rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
