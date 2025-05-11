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
    title: "The Cost of Silence: Rosenbergs Executed for Espionag",
    subtitle:
      "Julius and Ethel Rosenberg have been executed for allegedly passing atomic secrets to the Soviets. Debate continues over whether the trial was fair or tainted by Cold War hysteria.",
    author: "Akram Rozakhunov",
    date: "June 20, 1953",
    readTime: "10 min read",
    category: "Politics",
    image: "/english-news-website/jne.jpeg?height=720&width=1280",
    content: DOMPurify.sanitize(`
      <p>
          Yesterday evening, at 8:06 p.m., Julius and Ethel Rosenberg were executed in the electric chair at Sing Sing Prison. Convicted of conspiracy to commit espionage, the couple was accused of passing atomic secrets to the Soviet Union during and after World War II. The Rosenbergs maintained their innocence until the end.
        </p>

        <p>
          Their execution marks a chilling first in American history: the only civilians put to death for espionage in peacetime. Their case, which captivated the nation and divided it bitterly, now enters the history books as one of the most controversial legal proceedings of the 20th century.
        </p>

        <p>
          “This isn’t just a legal matter,” said Professor Alan Rosenthal, a constitutional scholar at Yale. “It’s a mirror of our national psyche—one shaped by fear, suspicion, and the intense pressure to demonstrate loyalty at any cost.”
        </p>

        <h2>The Trial That Shook the Nation</h2>

        <p>
          The Rosenbergs were arrested in 1950, at the height of Cold War paranoia and only months after the Soviet Union successfully tested its first atomic bomb. The prosecution alleged that Julius, an engineer, coordinated a spy ring that included his brother-in-law David Greenglass, who worked at Los Alamos. Ethel was accused of typing up notes.
        </p>

        <p>
          Critics of the trial have long argued that the case against Ethel was tenuous at best, built more on assumption and association than evidence. Greenglass later admitted that he implicated his sister to protect his own wife from prosecution. The decision to execute both Rosenbergs sparked international protest, with letters pouring into Washington from Rome, Paris, and even Moscow. Pope Pius XII and Albert Einstein both publicly urged clemency.
        </p>

        <p>
          “Executing these two will not make us safer,” Einstein wrote in an open letter. “But it may make us harder. More frightened. Less just.”
        </p>

        <h2>A Trial of Fear as Much as Facts</h2>

        <p>
          Many now see the Rosenberg case as the ultimate consequence of an era where fear often replaced reason. Senator Joseph McCarthy’s ongoing campaign to expose communists in government, schools, and Hollywood has only added fuel to the flames. In such an atmosphere, guilt by association is increasingly replacing the presumption of innocence.
        </p>

        <p>
          “The danger,” said civil rights attorney Grace Parkman, “is that we have allowed ideology to override justice. Even if they were guilty, did they receive a fair trial, or a symbolic one?”
        </p>

        <p>
          Echoes of this fear-driven justice are being heard across the nation—from immigration courts to juvenile trials. In a recent controversial case, a 16-year-old boy was sentenced to death for the murder of his father. Observers say his working-class background and ethnic identity may have swayed the jury more than the facts ever did.
        </p>

        <p>
          “When we let bias guide our decisions, we are no longer defending law,” Parkman added. “We’re defending our comfort. That’s not justice. That’s fear in a robe.”
        </p>

        <h2>Silence, Loyalty, and the Price We Pay</h2>

        <p>
          The Rosenbergs’ silence—whether from defiance or true innocence—played a major role in their fate. Some see their refusal to confess or implicate others as an act of bravery. Others see it as justification for the state’s harshest punishment.
        </p>

        <p>
          “They died without a word of regret,” said Warden Wilkins at Sing Sing. “If they were innocent, it was a tragic silence. If guilty, it was a proud one.”
        </p>

        <p>
          But that silence continues to reverberate. In households across America, parents whisper about what to tell their children. Clergy debate whether justice or vengeance was served. In classrooms and jury rooms alike, a new question lingers: Can we ever truly be fair when fear has already rendered its verdict?
        </p>

        <h2>Looking Ahead</h2>

        <p>
          With the executions now complete, attention shifts to how this moment will be remembered. Civil liberties groups are calling for an independent review of the trial, while supporters of the prosecution hail the verdict as a victory for national security.
        </p>

        <p>
          For many Americans, however, the Rosenberg case stands not only as a test of law, but as a test of conscience. And as the Cold War deepens, the nation must ask: what other costs are we willing to bear to feel safe?
        </p>

        <p>
          As one juror in the case said anonymously to the press: “We believed we were doing the right thing. I just pray history agrees with us.”
        </p>
      `),
    tags: ["Espionage", "Cold War", "Justice", "Civil Rights", "Law"],
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
