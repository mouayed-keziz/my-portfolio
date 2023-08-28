import Container from "@/components/layout/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";


const skills = [
    {
        name: "programming languages",
        elements: [
            {
                name: "typescript",
                image: "/prog-lang/ts.png",
                image_negative: "/prog-lang/ts.png",
                link: "https://en.wikipedia.org/wiki/TypeScript"
            },
            {
                name: "javascript",
                image: "/prog-lang/js.png",
                image_negative: "/prog-lang/js.png",
                link: "https://en.wikipedia.org/wiki/JavaScript"
            },
            {
                name: "python",
                image: "/prog-lang/python.png",
                image_negative: "/prog-lang/python.png",
                link: "https://en.wikipedia.org/wiki/Python_(programming_language)"
            },
            {
                name: "java",
                image: "/prog-lang/java.png",
                image_negative: "/prog-lang/java.png",
                link: "https://en.wikipedia.org/wiki/Java_(programming_language)"
            },
        ]
    },
    {
        name: "frameworks",
        elements: [
            {
                name: "Nextjs",
                image: "/frameworks/nextjs.png",
                image_negative: "/frameworks/negative-nextjs.png",
                link: "https://nextjs.org/"
            },
            {
                name: "Expressjs",
                image: "/frameworks/expressjs.png",
                image_negative: "/frameworks/negatrive-expressja.png",
                link: "https://nextjs.org/"
            },
            {
                name: "Flask",
                image: "/frameworks/flask.png",
                image_negative: "/frameworks/negative-flask.png",
                link: "https://nextjs.org/"
            },
            {
                name: "Svelte",
                image: "/frameworks/svelte.png",
                image_negative: "/frameworks/svelte.png",
                link: "https://nextjs.org/"
            },
        ]
    }
]

export default function MySkills() {
    const { theme } = useTheme()
    return (
        <>
            <Container >
                <Tabs defaultValue={skills[0].name} className="mt-8">
                    <div className="flex justify-center items-center">
                        <TabsList className="w-[640px] m-auto">
                            {skills.map((skill, index) => (
                                <TabsTrigger key={index} className="w-full" value={skill.name}>{skill.name}</TabsTrigger>
                            ))}

                        </TabsList>
                    </div>

                    {skills.map((skill, index) => (
                        <TabsContent key={index} value={skill.name}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {skill.elements.map((skill, index) => (
                                    <SkillCard key={index} title={skill.name} image={theme === "light" ? skill.image : skill.image_negative} link={skill.link} />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </Container>
        </>
    );
}

interface SkillCardProps {
    title: string;
    image: string;
    link: string;
}

function SkillCard({ title, image, link }: SkillCardProps) {
    return (
        <>
            <Link className="w-full" href={link} target="_blank">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative p-2 h-full flex flex-col justify-between items-center ">
                    <p className="text-xl text-center font-bold mt-4">{title}</p>
                    <AspectRatio className="my-8" ratio={16 / 12}>
                        <Image style={{ objectFit: "contain" }} fill src={image} alt={title} className="w-full h-full" />
                    </AspectRatio>
                </div>
            </Link>
        </>
    );
}



