import Container from "@/components/layout/container";
import ThemeToggle from "@/components/theme/toggle";

export default function Navbar() {
    return (
        <>
            <div className="border-b-2 border-slate-400" >
                <Container className="h-16 flex justify-between items-center">
                    <div className="text-2xl font-semibold" >mouayed</div>
                    <div className="flex items-center justify-end" >
                        <ThemeToggle />
                    </div>
                </Container>
            </div>
        </>
    );
}