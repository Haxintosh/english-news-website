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
    title: "Fear on Trial: McCarthyism Grips America",
    subtitle:
      "As Senator Joseph McCarthy’s anti-communist crusade continues, citizens and celebrities alike face accusations with little to no evidence. Critics warn that fear is replacing justice in American courtrooms and Congress alike.",
    author: "Justin Yang",
    date: "October 3, 1954",
    readTime: "5 min read",
    category: "Politics",
    image: "/english-news-website/mccarthy.jpg?height=720&width=1280",
    content: DOMPurify.sanitize(`

      <p>As Senator Joseph McCarthy’s anti-communist crusade continues, citizens and celebrities alike face accusations with little to no evidence. Critics warn that fear is replacing justice in American courtrooms and Congress alike.</p>

<h2>The Red Scare Intensifies</h2>
<p>In the wake of World War II and amid mounting tensions with the Soviet Union, fear of communist infiltration has taken firm root in the American psyche. Leading the charge is Senator Joseph McCarthy of Wisconsin, whose high-profile investigations have turned congressional hearings into a national spectacle. Armed with a list of supposed communists in government, McCarthy has turned accusation into theater and suspicion into guilt.</p>

<p>The senator’s claims often come without substantiation, but that has not halted the relentless march of his inquiries. From civil servants to military officials, and most recently, Hollywood actors and writers, the reach of the McCarthy crusade has expanded far beyond Washington. In one recent hearing, McCarthy thundered, “We are engaged in a battle between good and evil, and the hour is late!”</p>

<p>But not all Americans are convinced. The term “McCarthyism” has entered the national lexicon, increasingly associated with reckless allegations and unsubstantiated charges. “I detest communism, but I also detest persecution without proof,” said Senator Margaret Chase Smith of Maine, one of the first to publicly challenge McCarthy’s methods.</p>

<h2>Lives Upended Without Trial</h2>
<p>Among the most troubling consequences of McCarthyism is the destruction of careers and reputations without legal recourse. Those summoned before the Senate Subcommittee on Investigations often face a harsh dilemma: admit to Communist affiliations—real or fabricated—or refuse to testify and be branded un-American. A refusal is tantamount to a conviction in the court of public opinion.</p>

<p>The House Un-American Activities Committee (HUAC) has blacklisted dozens in the entertainment industry. Notable screenwriter Dalton Trumbo, later revealed as one of the Hollywood Ten, was sentenced to prison for contempt of Congress. “The Constitution was not written in the atmosphere of fear,” Trumbo wrote before his conviction. “It was written to guard against it.”</p>

<p>Ordinary citizens, too, are feeling the chill. Teachers, factory workers, and union organizers have found themselves unemployed after mere whispers of Red sympathies. The threat is clear: to be different, to dissent, or even to question, is to risk everything.</p>

<h2>A Nation at a Crossroads</h2>
<p>The McCarthy hearings have reached a fever pitch, with televised broadcasts drawing millions of viewers. For some, the senator is a patriot rooting out insidious enemies. For others, he is a demagogue manipulating fear for political gain. In recent months, the U.S. Army has become McCarthy’s latest target, sparking a series of highly contentious hearings now underway in Washington.</p>

<p>During one exchange, Army counsel Joseph Welch famously rebuked McCarthy with a question that may come to define the era: “Have you no sense of decency, sir, at long last? Have you left no sense of decency?” The moment drew gasps from the audience and is already being seen as a potential turning point in the senator’s fortunes.</p>

<p>Whether McCarthy’s influence will fade or grow remains uncertain, but the damage to civil liberties is already done. “We are seeing a distortion of American justice,” said legal scholar Zechariah Chafee. “Fear should never be the foundation of our democracy.”</p>

<h2>The Cost of Silence</h2>
<p>In today’s climate, silence can be just as perilous as speech. To speak out risks scrutiny, but to remain quiet is to allow the erosion of liberty to continue unchecked. Editors, professors, and ministers now find themselves weighing their words more carefully than ever. It is a moment that calls not just for courage, but for principle.</p>

<p>The Supreme Court has thus far offered limited intervention. While some justices have expressed concern over due process violations, legal precedent remains murky. The First Amendment, though enshrined in the Constitution, finds itself tested like never before.</p>

<p>In the end, the future of McCarthyism will be shaped not only by congressional hearings, but by the will of the American people. Will we be a nation ruled by fear, or one guided by law, fairness, and truth? That question, perhaps more than any single accusation, defines this troubled chapter in our history.</p>
    `),
    tags: ["McCarthy", "Red Scare", "Cold War", "Civil Liberties"],
    relatedArticles: [
      {
        title: "The Cost of Silence: Rosenbergs Executed for Espionage",
        image: "/english-news-website/jne.jpeg?height=400&width=600",
        category: "Politics",
        slug: "julius-rosenberg-execution",
      },
      {
        title:
          "Boy, 16, Sentenced to Death for Father’s Murder Amid Accusations of Bias",
        image: "/english-news-website/placeholder.svg?height=400&width=600",
        category: "Politics",
        slug: "boy-sentenced-death-bias",
      },
      {
        title:
          "New Heights: The USSR Launches Sputnik, Igniting the Space Race",
        image: "/english-news-website/sputnik.jpg?height=400&width=600",
        category: "Technology",
        slug: "sputnik-launch",
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
                              "/english-news-website/placeholder.svg"
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
