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
    title: "Crime Drama Captivates Nation: TV's New Obsession with Justice",
    subtitle:
      "From Dragnet to Perry Mason, Americans are tuning in to courtroom and detective dramas like never before. Critics say the obsession reflects a growing public anxiety about justice, guilt, and truth.",
    author: "Justin Yang",
    date: "October 3, 1954",
    readTime: "10 min read",
    category: "Entertainment",
    image: "/english-news-website/dragnet.png?height=720&width=1280",
    content: DOMPurify.sanitize(`

      <p>
        “Just the facts, ma’am.” Those four words—uttered by Sergeant Joe Friday on NBC’s <strong>Dragnet</strong>—have become the unofficial motto of American television. As crime dramas surge in popularity, millions of Americans are tuning in every night to watch detectives, lawyers, and judges tackle moral dilemmas and criminal cases with swift, sometimes sanitized, efficiency.
      </p>

      <p>
        With shows like <strong>Perry Mason</strong>, <strong>Highway Patrol</strong>, and <strong>The Lineup</strong>, the nation’s living rooms have become impromptu courtrooms—places where truth is uncovered, criminals are caught, and justice is served in 30 minutes or less. But as the genre grows, some critics are asking whether the TV version of justice truly reflects the complex, messy realities of real-life courts.
      </p>

      <p>
        “These shows give the impression that every mystery has a clean resolution and every guilty party is obvious,” says Professor Martha Cline, a media analyst at New York University. “But justice in real life is rarely that tidy. There are shades of doubt, layers of prejudice, and a lot of gray between black and white.”
      </p>

      <h2>From Radio to Reality</h2>

      <p>
        Crime programming has exploded since the early days of radio drama, but television has brought a new visual intensity to the genre. Dragnet, adapted from radio in 1951, quickly became a national sensation. Viewers were captivated by its dry realism, uniformed restraint, and its apparent dedication to the truth. Yet even its creators admit it simplifies complex legal processes for dramatic effect.
      </p>

      <p>
        “We’re not writing law textbooks,” said Dragnet producer Jack Webb in a recent interview. “We’re trying to give people a sense of how law and order works—but in a way that’s compelling to watch.” Webb has received praise for his collaboration with the LAPD, but others argue that the partnership may blur the line between justice and propaganda.
      </p>

      <h2>Truth on Trial</h2>

      <p>
        The cultural fascination with law enforcement on TV arrives at a moment of national anxiety about crime, communism, and civil unrest. In such a climate, television dramas may reassure the public that the system is sound—that truth always prevails. But reality has proven more complicated.
      </p>

      <p>
        Earlier this year, a 16-year-old boy was convicted and sentenced to death for the murder of his father. Though the trial received little coverage, several legal observers have since expressed concern that the jury's decision may have been swayed more by bias than evidence.
      </p>

      <p>
        “People think justice works the way it does on television,” said attorney James Hill, who followed the case. “But there are no dramatic confessions, no smoking guns. Sometimes a child’s life hinges on a juror’s mood—or prejudice.”
      </p>

      <p>
        Hill argues that courtroom dramas, while entertaining, may foster dangerous assumptions among jurors and citizens alike. “People walk into jury duty expecting Perry Mason. They don’t expect doubt. And that’s where real danger begins.”
      </p>

      <h2>Justice as Entertainment</h2>

      <p>
        Network executives defend the trend, noting that crime dramas can foster public awareness and civic engagement. “We’re giving viewers a front-row seat to the justice system,” said NBC spokesperson Linda Bartlett. “That can only help society become more informed.”
      </p>

      <p>
        Yet not all viewers agree. Letters to the editor and radio call-ins reveal a growing unease that the genre may be reinforcing stereotypes—of who commits crimes, how law enforcement operates, and what justice looks like. Minority groups in particular have raised concerns that TV’s portrayal of criminals often reflects racial and class bias.
      </p>

      <p>
        “If all the criminals on screen look like my neighbors,” said one Harlem resident, “it gets harder for people to see us any other way—even in real courtrooms.”
      </p>

      <h2>The Verdict</h2>

      <p>
        As televisions flicker each evening with scenes of swift justice, Americans continue to wrestle with the gap between image and reality. For many, the courtroom remains a symbol of fairness and truth. But for others, it is increasingly clear that the truth cannot always be packaged in prime time.
      </p>

      <p>
        “Television can inspire us,” said Professor Cline. “But it can also lull us. If we’re not careful, we’ll confuse entertainment with truth—and we’ll forget that justice, in the real world, requires more than a catchphrase and a commercial break.”
      </p>
      `),
    tags: ["Crime", "Television", "Justice", "Entertainment"],
    relatedArticles: [
      {
        title: "A Nation Divided: Segregation in Schools Sparks Protest",
        image: "/english-news-website/brownvsboe.webp?height=400&width=600",
        category: "Politics",
        slug: "brown-vs-boe",
      },
      {
        title:
            "New Heights: The USSR Launches Sputnik, Igniting the Space Race",
        image: "/english-news-website/sputnik.jpg?height=400&width=600",
        category: "Technology",
        slug: "sputnik-launch",
      },
      {
        title: "Voices from the Fringe: Jazz and Rock Stir Social Change",
        image: "/english-news-website/jazz-rock.jpg?height=400&width=600",
        category: "Entertainment",
        slug: "jazz-rock",
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
