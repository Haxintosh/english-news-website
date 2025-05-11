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
    title: "New Heights: The USSR Launches Sputnik, Igniting the Space Race",
    subtitle:
      "The Soviet Union has launched Sputnik, the first man-made satellite to orbit Earth. Americans react with a mix of awe, fear, and competitive urgency as the Cold War enters orbit.",
    author: "Victor Zhan",
    date: "October 4, 1954",
    readTime: "7 min read",
    category: "Technology",
    image: "/english-news-website/sputnik.jpg?height=720&width=1280",
    content: DOMPurify.sanitize(`
      <p>
        In a moment that may redefine the 20th century, the Soviet Union announced yesterday that it has successfully launched the world’s first artificial satellite into Earth’s orbit. Named <strong>Sputnik I</strong> (Russian for “companion”), the 184-pound sphere now circles the planet every 96 minutes—an accomplishment many American scientists privately admit is both astonishing and deeply concerning.
      </p>

      <p>
        “We are witnessing history,” said Dr. Allen Peterson of the U.S. Army Signal Corps. “But it’s history written in Cyrillic.” For Americans, the sight of a communist-built satellite sailing silently overhead has prompted awe, but also fear. If Moscow can put a ball in space, critics ask, how soon until they put bombs there?
      </p>

      <p>
        The launch represents more than a scientific breakthrough—it is a geopolitical thunderclap. Just weeks ago, American officials confidently claimed the United States led the world in missile technology. Today, those assurances ring hollow. Congressional leaders are calling for emergency hearings, while parents and teachers alike are asking whether American education is keeping up.
      </p>

      <p>
        “This isn’t just a space race,” said Senator Henry Jackson of Washington. “It’s a race for the minds and hearts of the free world. And right now, we are behind.”
      </p>

      <p>
        But some voices caution against panic. In a statement late Friday, President Eisenhower assured the public that America’s defense capabilities remain strong and that technological competition should not cloud judgment. “We must respond with resolve, not hysteria,” he said. “Let us not forget that courage and patience are part of freedom.”
      </p>

      <h2>A Nation Looking Up—and Inward</h2>

      <p>
        As Americans gaze skyward, many are also turning inward, questioning the confidence that has defined the postwar years. A Gallup poll released this morning shows a sharp spike in public anxiety, with more than 60% of respondents fearing Soviet scientific superiority. Others worry that the nation’s pride may have made it blind to its own complacency.
      </p>

      <p>
        “We’ve been telling ourselves we’re the best without asking if it’s still true,” said Dr. Marian Blake, a political psychologist at Columbia University. “Sputnik forces us to confront not only our rivals, but our assumptions.”
      </p>

      <p>
        That anxiety echoes far beyond the laboratory. In a time when suspicion has become part of daily life—from Cold War politics to courtroom drama—the satellite has become a symbol. Some see it as a triumph of reason and innovation. Others see it as a warning beacon from a rival ideology. The debate mirrors the moral divisions playing out in American homes, schools, and even juries.
      </p>

      <p>
        “It’s human nature,” said Dr. Blake. “When something unfamiliar enters our sky—or our society—we’re torn between curiosity and fear. Whether it’s a satellite, a new idea, or a boy on trial, the question is: do we react with understanding, or with suspicion?”
      </p>

      <h2>Looking Ahead</h2>

      <p>
        The Pentagon has called for accelerated investment in rocketry, education, and intelligence. Already, universities are reporting increased interest in science and engineering programs. Yet for many, Sputnik remains more than a technical marvel—it is a mirror, reflecting the doubts, divisions, and aspirations of a nation no longer quite so sure of its place in the world.
      </p>

      <p>
        One young boy, watching the stars through his backyard telescope in Brooklyn last night, put it simply: “It’s weird to think there’s something up there now. It makes the world feel smaller—and bigger—at the same time.”
      </p>

      <p>
        As Sputnik continues its silent loop around the Earth, one thing is clear: the space age has begun, and America is watching.
      </p>
      `),
    tags: ["Technology", "Space", "Future", "USSR", "Sputnik"],
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
