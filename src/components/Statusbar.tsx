"use client";

interface StatusbarProps {
    lineCount: number;
    charCount: number;
    currentLine?: number;
    currentColumn?: number;
}

export default function Statusbar({ lineCount, charCount, currentLine, currentColumn }: StatusbarProps) {
    return (
        <div className="flex items-center gap-4 px-4 border-t bg-card text-muted-foreground text-xs select-none h-[22px]">
            <div className="flex items-center gap-2">
                <span>{lineCount} lines</span>
                <span>{charCount} characters</span>
            </div>
            {(currentLine !== undefined || currentColumn !== undefined) && (
                <div className="flex items-center gap-2 pl-4 border-l border-border h-full">
                    {currentLine !== undefined && <>Ln {currentLine}, </>}
                    {currentColumn !== undefined && <>Col {currentColumn}</>}
                </div>
            )}
        </div>
    );
}
