"use client";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useState } from "react";
import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import { defaultMarkdown } from "@/components/MarkdownExample";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
    const [showPreview, setShowPreview] = useState(true);
    const [showEditor, setShowEditor] = useState(true);
    const [markdown, setMarkdown] = useState(defaultMarkdown);

    return (
        <div className="flex-1 h-full text-sm">
            <div className="flex-1 h-full">
                <ResizablePanelGroup
                    direction={useIsMobile() ? "vertical" : "horizontal"}
                    key={`${showEditor}-${showPreview}`}
                >
                    {showEditor && (
                        <ResizablePanel defaultSize={50} minSize={20}>
                            <Editor
                                showPreview={showPreview}
                                onTogglePreview={() => setShowPreview(!showPreview)}
                                value={markdown}
                                onChange={setMarkdown}
                            />
                        </ResizablePanel>
                    )}
                    {showEditor && showPreview && <ResizableHandle />}
                    {showPreview && (
                        <ResizablePanel minSize={20}>
                            <Preview
                                markdown={markdown}
                                showEditor={showEditor}
                                onToggleEditor={() => setShowEditor(!showEditor)}
                            />
                        </ResizablePanel>
                    )}
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
