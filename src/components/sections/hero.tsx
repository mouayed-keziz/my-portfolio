import Container from "@/components/layout/container";

export default function HeroHeader() {
    return (
        <>
            <Container>
                <section className="mt-32" >
                    <h1 className="relative max-w-3xl text-5xl font-semibold text-center sm:text-left md:text-5xl lg:text-6xl u-text-gray-900 flex-wrap">
                        Unveiling <span className="">Mouayed</span>&lsquo;s Web Universe
                    </h1>
                    <p className="mt-8 max-w-lg text-xl text-center text-gray-500 sm:w-3/5 sm:text-left dark:text-gray-100 leading-8">
                        Welcome to my <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">web portfolio</span>. I&lsquo;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Mouayed</span>, a passionate web developer. Explore my projects and dive into my journey of turning code into charming experiences.
                    </p>
                </section>
            </Container>
        </>
    );
}
