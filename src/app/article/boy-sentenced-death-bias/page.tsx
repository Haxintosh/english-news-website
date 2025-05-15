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
    title:
      "Boy, 16, Sentenced to Death for Father’s Murder Amid Accusations of Bias",
    subtitle:
      "Public outrage erupts following a controversial guilty verdict in a high-profile murder trial, as critics argue systemic prejudice and rushed judgment doomed a boy to the electric chair.",
    author: "Akram Rozakhunov",
    date: "October 5, 1954",
    readTime: "6 min read",
    category: "Politics",
    image: "/english-news-website/boy.jpg?height=720&width=1280",
    content: DOMPurify.sanitize(`

      <p><strong>NEW YORK CITY</strong> – In a verdict that has already sparked citywide protest and national debate, a jury of twelve men last night found sixteen-year-old Miguel Alvarez guilty of murdering his father. The sentence: death by electric chair. The decision, reached after nearly nine hours of tense deliberation in a sweltering Manhattan courthouse, has left many questioning the fairness of the American justice system.</p>

      <h2>A Jury Room Divided, Then Conformed</h2>
      
      <p>According to sources close to the proceedings, the jury entered the room deeply divided. Several jurors, most notably Juror #8, an architect, and Juror #9, an elderly man, expressed grave doubts about the prosecution’s case. “We’re talking about somebody’s life here,” Juror #8 was overheard saying. “Shouldn’t we at least talk about it before we send a boy off to die?”</p>
      
      <p>Despite his initial resistance, Juror #8’s arguments were gradually worn down by the relentless pressure of the majority. Juror #3, a small business owner, was particularly forceful: “You can’t let these kids get away with murder. My own son’s the same – angry, disrespectful. I know the type.” Juror #10’s infamous outburst – “You know how those people are, coming from the slums. You can’t believe a word they say” – was met with uncomfortable silence, but little protest.</p>
      
      <h2>Doubts Raised – and Dismissed</h2>
      
      <p>The prosecution’s case rested on two eyewitnesses: an elderly neighbor who claimed to have heard the murder, and a woman who said she saw the killing through a passing train. Juror #8 questioned their reliability, pointing out the old man’s limp and the woman’s poor eyesight. In a dramatic moment, he even produced a knife identical to the supposed “unique” murder weapon, showing it was easily available.</p>
      
      <p>But in this trial, the majority was unmoved. Juror #4, a calm, analytical stockbroker, argued, “The odds are too great for this to be a coincidence. The boy’s story doesn’t add up.” Juror #7, impatient and eager to get to a baseball game, pushed for a quick decision: “We’ve been here all day. Let’s just vote and get out.”</p>
      
      <h2>How the Holdouts Fell</h2>
      
      <p>Juror #5, who grew up in a slum, initially sided with Juror #8. But after repeated insinuations from Juror #10 and the group’s growing impatience, he changed his vote. “Maybe I’m just too close to it,” he said quietly. “Maybe I don’t want to admit someone like me could do something like that.”</p>
      
      <p>Juror #9, the oldest man in the room, was the first to support Juror #8’s doubts. But as the group’s unity hardened, he relented: “I suppose I could be wrong. I’ve lived a long time. Maybe I don’t see things as clearly as I used to.”</p>
      
      <p>Juror #11, an immigrant watchmaker, was troubled by the lack of certainty. “In my country, I have seen injustice,” he said, “but here, we must be sure.” When pressed by Juror #4 and the others, he finally agreed: “If everyone else is certain, maybe I am too careful.”</p>
      
      <p>Even Juror #8, the last holdout, broke under the weight of the group’s certainty and exhaustion. “I still have doubts,” he said in a subdued voice, “but I can’t stand alone forever. I hope we’re right.”</p>
      
      <h2>A City Reacts</h2>
      
      <p>As news of the verdict spread, crowds gathered outside the courthouse, chanting, “Justice for Miguel!” Civil rights leaders condemned the decision, calling it “a product of prejudice and fear.” Defense attorney Robert Franklin stated, “This was not justice. This was a lynching in a jury room.”</p>
      
      <p>Juror #12, an advertising executive, told reporters, “I just wanted to get it over with. It’s not my job to question everything.” Juror #6, a house painter, said, “I hope we did the right thing, but I’m not sure.”</p>
      
      <h2>A System on Trial</h2>
      
      <p>Legal experts have pointed to the case as an example of the dangers of the jury system. “When the loudest voices in the room belong to those with the most prejudice, reasonable doubt doesn’t stand a chance,” said Professor Alan Greene of NYU Law.</p>
      
      <p>Miguel Alvarez will be transferred to Sing Sing Prison to await execution. His final words in court: “I didn’t do it.”</p>
    `),
    tags: [
      "Crime",
      "Justice",
      "Jury Duty",
    ],
    relatedArticles: [
      {
        title: "The Cost of Silence: Rosenbergs Executed for Espionage",
        image: "/english-news-website/jne.jpeg?height=400&width=600",
        category: "Politics",
        slug: "julius-rosenberg-execution",
      },
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
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b px-4 sm:px-6 lg:px-8">
        <div className="container flex h-16 items-center justify-between py-4 max-w-full">
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
          <div className="container max-w-full">
            <div className="flex flex-col items-center text-center space-y-4 mx-auto">
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
        <div className="container max-w-full">
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
