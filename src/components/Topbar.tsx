import GithubLogo from "../../public/assets/GithubLogo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Topbar() {
    return (
        <div className="bg-background border-b py-1 px-4 h-12 flex flex-col justify-center">
            <div className="flex justify-between items-center gap-4 sm:gap-6">
                <div className="flex gap-6 font-black tracking-tight">MarkIt</div>
                <div className="flex items-center gap-2">
                    <Button size="icon" title="Download as .md" variant="outline">
                        <GithubLogo />
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}
