"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar, SidebarClose } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PreviewProps {
    markdown: string;
    showEditor: boolean;
    onToggleEditor: () => void;
}

export default function Preview({ markdown, showEditor, onToggleEditor }: PreviewProps) {
    return (
        <div className="h-full w-full flex-grow">
            <div className="flex justify-between items-center gap-2 px-4 py-1 border-b bg-card text-card-foreground">
                <div>Preview</div>
                <Button onClick={onToggleEditor} size="icon" title={showEditor ? "Hide editor" : "Show editor"}>
                    {showEditor ? <Sidebar size={20} /> : <SidebarClose size={20} />}
                </Button>
            </div>
            <ScrollArea className="max-h-[calc(100dvh-87px)] h-[calc(100dvh-87px)] py-6 px-4">
                <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base prose-p:text-base prose-a:text-chart-3 prose-a:visited:text-chart-1 prose-code:text-sm prose-pre:bg-accent prose-pre:text-accent-foreground">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown || "*Nothing to preview*"}</ReactMarkdown>
                </div>
            </ScrollArea>
        </div>
    );
}
