import Container from "@/components/layout/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"


export default function MySkills() {
    return (
        <>
            <Container >
                <Tabs defaultValue="1" >
                    <div className="flex justify-center items-center">
                        <TabsList className="w-[640px] m-auto">
                            <TabsTrigger className="w-full" value="1">programming languages</TabsTrigger>
                            <TabsTrigger className="w-full" value="2">frameworks</TabsTrigger>
                            <TabsTrigger className="w-full" value="3">tools</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="1">programming languages</TabsContent>
                    <TabsContent value="2">frameworks</TabsContent>
                    <TabsContent value="3">tools</TabsContent>
                </Tabs>
            </Container>



        </>
    );
}

