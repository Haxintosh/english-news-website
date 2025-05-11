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
    title: "Apathy or Progress? Suburbia Booms as Cities Struggle",
    subtitle:
      "White flight accelerates as more families leave the city for suburban life. Critics claim the shift reflects growing apathy toward urban poverty and inequality, while others call it the American Dream in motion.",
    author: "Jiacheng Liu",
    date: "August 17, 1957",
    readTime: "7 min read",
    category: "Business",
    image: "/english-news-website/sub.jpg?height=720&width=1280",
    content: DOMPurify.sanitize(`
      <p>
        From Levittown to Lakewood, suburbia is exploding across the American landscape. Rows of identical ranch houses stretch over what used to be farmland, built fast, sold cheap, and marketed as the American Dream. Millions of families are moving out of the city in pursuit of fresh air, safety, and a front lawn of their own. Yet not everyone agrees that this mass migration is cause for celebration.
      </p>

      <p>
        “We’re seeing what might be the greatest demographic shift in American history,” says urban sociologist Dr. Harold Greene. “But with every highway out of the city, something is being left behind—something we may regret losing.”
      </p>

      <h2>The Price of Prosperity</h2>

      <p>
        Spurred by government-backed mortgages, veterans’ benefits, and expanding automobile access, the suburban lifestyle is quickly becoming the middle-class norm. New developments boast schools, shopping centers, and clean streets—all just beyond the city limits. But behind the cheerful brochures lies a more complicated truth.
      </p>

      <p>
        Many of these new neighborhoods practice informal—if not outright—racial segregation. Minority families are often excluded through redlining, restrictive covenants, and unspoken policies. As white families leave, city neighborhoods experience declining tax revenue, school overcrowding, and aging infrastructure.
      </p>

      <p>
        “This isn’t just about where people live,” says civil rights advocate Rosa Liddell. “It’s about who we’re willing to live beside—and who we’re willing to forget.”
      </p>

      <p>
        The divide is growing sharper. While suburban families spend weekends mowing lawns and shopping in air-conditioned malls, their former neighbors in the city face housing shortages, underfunded schools, and rising unemployment. As one inner-city schoolteacher put it: “It’s like we’re watching the lifeboats leave the ship.”
      </p>

      <h2>A Nation Looking Away</h2>

      <p>
        The shift to suburbia has also changed the national mood. Analysts say it has encouraged a culture of privatization—of lawns over community, of convenience over connection. As families retreat behind fences and carports, public engagement declines.
      </p>

      <p>
        “There is a growing temptation to believe that comfort is the same as peace,” says Dr. Greene. “But apathy disguised as progress is still apathy.”
      </p>

      <p>
        That apathy is showing up in civic life—from voter turnout to jury duty. Recent reports suggest that suburban citizens are less likely to serve in urban courts or participate in community hearings. Legal experts warn this could lead to jury pools that do not reflect the diversity or complexity of the populations they judge.
      </p>

      <p>
        A recent murder trial of a teenage boy from a poor neighborhood raised these concerns again. Some believe the jury's decision to convict and sentence the boy to death was shaped more by class prejudice than by hard evidence. “He didn’t look like them, didn’t live like them, and they didn’t want to understand him,” said one observer at the trial.
      </p>

      <h2>Progress for Whom?</h2>

      <p>
        Meanwhile, developers and advertisers continue to tout suburbia as the model of progress. Television shows depict smiling housewives, cheerful milkmen, and fathers reading the evening paper in split-level homes. But for many Americans—especially those left behind in the cities—this vision feels more like exclusion than aspiration.
      </p>

      <p>
        “We’re not asking for picket fences,” said one urban resident in Harlem. “We’re asking for schools that work, jobs that pay, and homes we can afford.”
      </p>

      <p>
        Whether suburbia represents the fulfillment of the American Dream or its quiet undoing remains to be seen. What is clear, however, is that where people choose to live—and who they choose to leave behind—says as much about our national character as any speech or law.
      </p>

      <p>
        “Progress isn’t about where you park your car,” Dr. Greene concluded. “It’s about who you take with you.”
      </p>
      `),
    tags: ["Suburbia", "Urbanization", "Civil Rights", "Demographics"],
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
