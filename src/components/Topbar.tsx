import Link from "next/link";
import GithubLogo from "../../public/assets/GithubLogo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { SidebarInset, SidebarTrigger } from "./ui/sidebar";
import MDPVLogo from "../../public/assets/MDPVLogo";

export default function Topbar() {
    return (
        <div className="bg-background border-b py-1 px-4 h-12 flex flex-col justify-center">
            <div className="flex justify-between items-center gap-4 sm:gap-6">
                <MDPVLogo />
                <div className="flex items-center gap-2">
                    <Link href="https://github.com/Rich1997/MarkIt" target="_blank" rel="noopener noreferrer">
                        <Button size="icon" title="GitHub" variant="outline">
                            <GithubLogo />
                        </Button>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}
