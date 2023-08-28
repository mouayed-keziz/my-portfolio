import Container from "@/components/layout/container";

export default function AboutMe() {
    return (
        <>

            <Container>
                <h2 className="relative text-3xl font-semibold text-center md:text-3xl lg:text-4xl u-text-gray-900 flex-wrap">
                    About Me :
                </h2>
                <p className="mt-8 text-xl text-center text-gray-500   dark:text-gray-100 leading-8">
                    Greetings! I&lsquo;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Mouayed KEZIZ</span>, currently pursuing a degree in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Computer Science</span> at <a target="_blank" href="https://estin.dz/" className="underline" >ESTIN</a>. With a solid foundation in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">full stack web development</span>, I boast <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">3 years</span> of hands-on experience in this dynamic realm. I possess a strong command over diverse programming languages, frameworks, and tools, thanks to my engagement with a wide spectrum of projects. Navigating through hurdles, I&lsquo;ve adeptly tackled various challenges, gaining insight into emerging technologies. My portfolio encompasses an array of accomplishments, from university assignments to personal endeavors, freelance work, and even contributions as an employee. I&lsquo;m dedicated to continuous growth and innovation in the ever-evolving field of web development.
                </p>
            </Container>
        </>
    );
}