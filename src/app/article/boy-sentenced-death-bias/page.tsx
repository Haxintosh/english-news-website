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
    image: "/english-news-website/placeholder.svg?height=720&width=1280",
    content: DOMPurify.sanitize(`

      <p>In a highly anticipated event at their headquarters yesterday, tech giant Horizon unveiled their latest breakthrough in artificial intelligence technology: Aura, an AI assistant that promises to revolutionize how we interact with technology.</p>

      <p>Aura represents a significant leap forward in natural language processing and contextual understanding, according to Horizon's CEO Sarah Williams. "What sets Aura apart is its ability to understand not just what you're asking, but why you're asking it," Williams explained during the keynote presentation.</p>

      <h2>Advanced Capabilities</h2>

      <p>Unlike existing AI assistants that often struggle with complex queries or maintaining context across multiple questions, Aura demonstrated remarkable capabilities during the live demonstration:</p>

      <ul>
        <li>Contextual memory that retains information across conversations</li>
        <li>Ability to understand and respond to multi-part questions</li>
        <li>Natural language generation that mimics human conversation patterns</li>
        <li>Multimodal understanding, allowing it to process both text and images</li>
        <li>Real-time learning from interactions to improve responses</li>
      </ul>

      <p>During the demonstration, Aura successfully handled a series of increasingly complex queries about climate science, maintaining context and providing nuanced responses that impressed the audience of tech journalists and industry analysts.</p>

      <h2>Technical Innovations</h2>

      <p>According to Dr. James Park, Horizon's Chief AI Scientist, Aura is built on a new neural architecture called "Recursive Contextual Framework" (RCF) that allows for more efficient processing of complex language patterns.</p>

      <p>"Traditional transformer models have limitations when it comes to maintaining long-term context," Dr. Park explained. "Our RCF architecture introduces a novel approach to memory management that allows Aura to maintain and reference information across much longer conversations."</p>

      <p>The system runs on Horizon's custom-designed AI chips, which the company claims deliver 3x the performance of previous generation hardware while consuming 40% less energy.</p>

      <h2>Industry Reactions</h2>

      <p>Industry analysts have responded positively to the announcement, with many suggesting that Aura represents a significant step forward in conversational AI.</p>

      <p>"What Horizon demonstrated today goes beyond incremental improvements," said Maria Rodriguez, senior AI analyst at Tech Insights. "The contextual understanding and natural responses position Aura as potentially the most advanced consumer-facing AI assistant we've seen to date."</p>

      <p>However, some experts have expressed caution about the real-world performance of the system. "Demo environments are carefully controlled," noted AI ethics researcher Dr. Thomas Lee. "The true test will be how Aura performs in diverse, unpredictable real-world scenarios."</p>

      <h2>Privacy and Ethics</h2>

      <p>Addressing growing concerns about AI and privacy, Williams emphasized Horizon's commitment to responsible AI development. "Aura processes most queries on-device, minimizing data transmission to our servers," she stated. "And when cloud processing is required, we've implemented end-to-end encryption and strict data retention policies."</p>

      <p>The company also announced the formation of an external AI Ethics Advisory Board comprised of independent experts in ethics, privacy, and digital rights.</p>

      <h2>Availability and Integration</h2>

      <p>Aura will be available next month on Horizon's flagship smartphones and smart home devices, with plans to expand to their entire product ecosystem by the end of the year. The company also announced an API that will allow third-party developers to integrate Aura into their applications.</p>

      <p>"We see Aura not just as a product feature, but as a platform that will transform how people interact with technology across their digital lives," Williams concluded.</p>

      <p>The announcement comes amid increasing competition in the AI assistant space, with several major tech companies expected to announce their own next-generation AI systems in the coming months.</p>
    `),
    tags: [
      "Artificial Intelligence",
      "Technology",
      "Horizon",
      "Aura",
      "AI Assistant",
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
