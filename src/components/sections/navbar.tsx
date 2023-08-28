import Container from "@/components/layout/container";
import ThemeToggle from "@/components/theme/toggle";
import { Menu } from "lucide-react";
import {
    Code2,
    Keyboard,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
    return (
        <>
            <div className="border-b-2 border-slate-400" >
                <Container className="h-16 flex justify-between items-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-semibold flex justify-start items-center gap-4" >
                        <MobileDrawer />
                        <Code2 className="w-8 h-8" />
                        <p>WEBDEV-MOUAYED</p>
                    </div>
                    <div className="flex items-center justify-end" >
                        <ThemeToggle />
                    </div>
                </Container>
            </div>
        </>
    );
}




function MobileDrawer() {
    return (
        <>
            <DropdownMenu modal={true} >
                <DropdownMenuTrigger asChild>
                    <Button className="flex lg:hidden" variant="outline" size="icon">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Keyboard className="mr-2 h-4 w-4" />
                            <span>Keyboard shortcuts</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            <span>Team</span>
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <UserPlus className="mr-2 h-4 w-4" />
                                <span>Invite users</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem>
                                        <Mail className="mr-2 h-4 w-4" />
                                        <span>Email</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        <span>Message</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <PlusCircle className="mr-2 h-4 w-4" />
                                        <span>More...</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem>
                            <Plus className="mr-2 h-4 w-4" />
                            <span>New Team</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}