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
    title: "Voices from the Fringe: Jazz and Rock Stir Social Change",
    subtitle:
        "Jazz and rock 'n' roll are under fire from traditionalists, but young people call them the soundtrack of rebellion and truth. As Elvis tops the charts, America’s youth are asking: Whose voices matter?",
    author: "Justin Yang",
    date: "June 2, 1953",
    readTime: "7 min read",
    category: "Entertainment",
    image: "/english-news-website/jazz-rock.jpg?height=720&width=1280",
    content: DOMPurify.sanitize(`
      <p>Across smoky clubs in Harlem and the dance halls of Memphis, a new sound is shaking the foundations of American society. It’s loud, defiant, and full of rhythm. It’s jazz. It’s rock ‘n’ roll. And it’s not going anywhere quietly.</p>
      
      <p>Parents and politicians alike are sounding the alarm. Some denounce the music as “jungle noise,” while others fear it will corrupt the moral fiber of the nation’s youth. Yet for many teenagers, the allure is undeniable. “It feels like the music knows what we’re going through,” says 17-year-old Connie Myers from Chicago. “Our parents want us quiet. Rock wants us loud.”</p>
      
      <p>The disapproval from older generations only seems to add fuel to the fire. Songs that were once hidden away in jukebox corners now dominate the airwaves. Radio DJs like Alan Freed are popularizing what they call “rock and roll,” blending rhythm and blues with youthful energy — and crossing racial lines in the process.</p>
      
      <h2>Race, Rebellion, and Rhythm</h2>
      
      <p>While the beat is infectious, the implications run deeper. Jazz and rock ‘n’ roll are more than music—they are acts of cultural defiance. Born from Black communities and long marginalized in the mainstream, these genres now find new life in integrated dance halls and record shops. This cultural mixing is rattling the status quo of segregated America.</p>
      
      <p>“Jazz was always dangerous,” says jazz historian Leonard Feather. “It challenged social norms, sexual conventions, and racial hierarchies. Rock is just the next wave of that same revolution.”</p>
      
      <p>As artists like Little Richard and Ray Charles electrify stages, white performers such as Elvis Presley are bringing Black music into white homes. To some, this is cultural theft. To others, it’s the beginning of something radical: a shared cultural voice that refuses to be divided by color.</p>
      
      <p>Still, many mainstream outlets avoid confronting the music’s origins. “They play Elvis and Pat Boone but don’t tell you where the sound comes from,” says saxophonist Milt Jackson. “The sound came from us. From struggle. From truth.”</p>
      
      <h2>Preachers, Politicians, and Panic</h2>
      
      <p>The backlash has been swift. Ministers decry the music from pulpits, warning that swing and rock rhythms will lead youth down a path of sin. In some towns, local governments have attempted to ban “race records” or restrict public dances where “negro music” is played. Yet such actions often have the opposite effect — fueling youth curiosity rather than quelling it.</p>
      
      <p>Senator James Eastland of Mississippi recently declared that “this so-called music is a threat to American decency.” School boards are debating whether students should be allowed to attend rock concerts. Meanwhile, record sales soar.</p>
      
      <p>For the youth, these crackdowns don’t just silence music — they silence identity. “They tell us to shut up, comb our hair, be polite,” says 16-year-old Johnny Delgado from New Jersey. “But this music tells us to be ourselves. To feel things. To shout.”</p>
      
      <h2>The Birth of a New Youth Identity</h2>
      
      <p>More than just a pastime, jazz and rock ‘n’ roll are giving birth to a new youth culture—one that defines itself by contrast to the conformity of postwar America. Where the previous generation sought stability, this one seeks expression. They wear their collars looser, their hair longer, and their music louder.</p>
      
      <p>“There is a restlessness in the hearts of young Americans,” wrote columnist Dorothy Kilgallen last week. “They are not content with the tidy future offered to them. They want to write their own songs, live their own truth.”</p>
      
      <p>This hunger for autonomy is not limited to music. It’s seen in fashion, in protest, in the language of slang and dance. In this sense, jazz and rock are not the end but the beginning — the soundtrack to a generational declaration: We are here. And we are listening to something different.</p>
      
      <h2>Whose Voice Is It, Anyway?</h2>
      
      <p>As the cultural war rages on, one question echoes louder than the amps at a Chuck Berry show: Whose voices matter?</p>
      
      <p>For too long, the answer has been clear—those in power, those with money, those who resemble the status quo. But the rise of jazz and rock ‘n’ roll is challenging that narrative. For every parent who turns down the radio, there’s a teenager turning it up. For every record burned in protest, a thousand more are sold in quiet defiance.</p>
      
      <p>In the end, music may not solve the nation’s deepest divides. But it may do something just as powerful: help a generation find its voice.</p>
      
      <p>And once that voice is found, it’s hard to silence.</p>
      `),
    tags: ["Youth", "Music", "Social Change"],
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
        title: "Crime Drama Captivates Nation: TV's New Obsession with Justice",
        image: "/english-news-website/dragnet.png?height=400&width=600",
        category: "Entertainment",
        slug: "crime-shows",
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
