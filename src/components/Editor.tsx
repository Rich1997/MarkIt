"use client";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarClose, Copy, Download, Check } from "lucide-react";
import { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/ext-language_tools";

interface EditorProps {
    showPreview: boolean;
    onTogglePreview: () => void;
    value: string;
    onChange: (value: string) => void;
    onCursorChange?: (line: number, column: number) => void;
}

interface CursorChangeEvent {
    cursor: {
        row: number;
        column: number;
    };
}

export default function Editor({ showPreview, onTogglePreview, value, onChange, onCursorChange }: EditorProps) {
    const [copied, setCopied] = useState(false);

    const handleCursorChange = (e: CursorChangeEvent) => {
        const line = e.cursor.row + 1;
        const column = e.cursor.column + 1;
        onCursorChange?.(line, column);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleDownload = () => {
        const blob = new Blob([value], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "document.md";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="h-full w-full flex flex-col">
            <div className="flex justify-between items-center gap-2 px-4 p-1 border-b bg-card text-card-foreground select-none">
                <div>Editor</div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <Button onClick={handleCopy} size="icon" title={copied ? "Copied!" : "Copy markdown"}>
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                        </Button>
                        <Button onClick={handleDownload} size="icon" title="Download as .md">
                            <Download size={16} />
                        </Button>
                    </div>
                    <Button
                        onClick={onTogglePreview}
                        size="icon"
                        title={showPreview ? "Hide preview" : "Show preview"}
                        className="md:rotate-0 rotate-90"
                    >
                        {showPreview ? <Sidebar size={20} /> : <SidebarClose size={20} />}
                    </Button>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">
                <AceEditor
                    mode="markdown"
                    value={value}
                    onChange={onChange}
                    name="markdown-editor"
                    width="100%"
                    height="100%"
                    fontSize={16}
                    showPrintMargin={false}
                    showGutter={true}
                    highlightActiveLine={true}
                    onCursorChange={handleCursorChange}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 4,
                        useWorker: false,
                        wrap: true,
                        fontFamily: "Space Mono, monospace",
                        scrollPastEnd: true,
                        mode: "ace/mode/markdown",
                    }}
                />
            </div>
        </div>
    );
}
