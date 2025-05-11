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
    title: "A Nation Divided: Segregation in Schools Sparks Protest",
    subtitle:
      "Following the Supreme Court’s Brown v. Board of Education decision, backlash against school integration erupts across the South. Civil rights leaders call for empathy and equality, while resistance grows louder..",
    author: "Jiacheng Liu",
    date: "October 12, 1957",
    readTime: "10 min read",
    category: "Politics",
    image: "/english-news-website/brownvsboe.webp?height=720&width=1280",
    content: DOMPurify.sanitize(`

      <p>
        Three years after the landmark Supreme Court ruling in <strong>Brown v. Board of Education</strong>, the nation remains sharply divided over public school integration. While the Court declared segregation “inherently unequal,” progress has been slow and, in some places, violently opposed. From Little Rock to Washington, citizens are taking sides—and taking to the streets.
      </p>

      <p>
        In Arkansas this month, nine African American students—now known as the “Little Rock Nine”—attempted to enter Central High School under federal protection. They were met not only by angry mobs, but by the Arkansas National Guard, deployed by Governor Orval Faubus to block their entry. President Eisenhower eventually intervened, sending federal troops to escort the students inside, but the message was clear: the battle for equality is far from over.
      </p>

      <p>
        “These children showed more courage than most grown men,” said NAACP representative Daisy Bates. “All they asked was to learn. What they received was hatred, threats, and fear.”
      </p>

      <h2>Resistance and Reflection</h2>

      <p>
        Across the South, protests, boycotts, and legal obstructions continue to delay integration. Some states have shut down public schools entirely to avoid compliance. Segregationist groups frame their resistance as a defense of tradition and local control. But civil rights advocates argue that such actions reveal a deeper unwillingness to confront the nation’s legacy of racial injustice.
      </p>

      <p>
        “We’re not just debating education,” said Reverend Thomas H. Carter of Birmingham. “We’re debating whether our laws and hearts will protect all citizens equally—or just those who look like the majority.”
      </p>

      <p>
        The tension has exposed a troubling apathy in many parts of the country. While some white citizens are appalled by the violence, others remain silent. Newspapers in northern cities have run editorials condemning segregation, but on the ground, little has changed. Many families quietly accept the status quo, even when they privately disagree with it.
      </p>

      <p>
        “Apathy is not neutrality,” said social psychologist Dr. June Hart. “It’s complicity. Injustice survives not only through action—but through indifference.”
      </p>

      <h2>Justice on Trial</h2>

      <p>
        For some, the integration crisis raises uncomfortable parallels with the nation’s legal system. Just as certain school boards are accused of obstructing equality, critics warn that juries across America may be failing in their duty to ensure impartial justice—especially when race and class are involved.
      </p>

      <p>
        Recent headlines include the controversial conviction and execution of a 16-year-old boy for the murder of his father. Though legally sanctioned, the trial has sparked public outcry, with many alleging that the verdict was influenced more by prejudice than by evidence.
      </p>

      <p>
        “If a child is condemned not for what he did, but for where he came from or the color of his skin, then we have not one justice system—but two,” said columnist Harold Davies in a recent editorial.
      </p>

      <p>
        Civil rights leaders emphasize that the courtroom and the classroom are both battlegrounds for the same principle: equal treatment under the law. The question, they argue, is whether the American people are willing to fight for that principle—or allow fear and tradition to stand in the way.
      </p>

      <h2>Looking Forward</h2>

      <p>
        As the school year unfolds, federal courts continue to press for integration, but resistance remains stiff. Organizers are planning further protests and legal challenges, while student-led walkouts are expected in several cities.
      </p>

      <p>
        In the words of 15-year-old Elizabeth Eckford, one of the Little Rock Nine: “I’m not trying to make history. I just want to sit in a classroom and learn—like everyone else.”
      </p>

      <p>
        Whether that simple wish can be fulfilled may determine the course of American democracy in the years to come.
      </p>
      `),
    tags: ["Civil Rights", "Education", "Politics", "Supreme Court"],
    relatedArticles: [
      {
        title:
            "Boy, 16, Sentenced to Death for Father’s Murder Amid Accusations of Bias",
        image: "/english-news-website/placeholder.svg?height=400&width=600",
        category: "Politics",
        slug: "boy-sentenced-death-bias",
      },
      {
        title: "Fear on Trial: McCarthyism Grips America",
        image: "/english-news-website/mccarthy.jpg?height=400&width=600",
        category: "Politics",
        slug: "fear-on-trial",
      },
      {
        title: "Fathers, Sons, and the New American Family",
        image: "/english-news-website/teen.jpg?height=400&width=600",
        category: "Culture",
        slug: "teenager-family",
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
