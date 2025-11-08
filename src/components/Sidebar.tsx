"use client";
import { Files, Trash2, Settings, ListTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

type SidebarTab = "files" | "outline" | "trash" | "settings";

interface IconSidebarProps {
    activeTab: SidebarTab;
    onTabChange: (tab: SidebarTab) => void;
}

export default function IconSidebar({ activeTab, onTabChange }: IconSidebarProps) {
    const { toggleSidebar, open } = useSidebar();

    const handleTabClick = (tab: SidebarTab) => {
        if (activeTab === tab && open) {
            toggleSidebar();
        } else {
            onTabChange(tab);
            if (!open) {
                toggleSidebar();
            }
        }
    };

    return (
        <div className="hidden md:flex flex-col items-center justify-between h-full w-12 bg-background py-4 z-20 border-r">
            <div className="flex flex-col">
                <div
                    className={
                        activeTab === "files"
                            ? "border-l-2 border-primary h-12 w-12 flex items-center justify-center"
                            : "h-12 w-12 flex items-center justify-center text-muted-foreground"
                    }
                >
                    <button
                        onClick={() => handleTabClick("files")}
                        title="Files"
                        className={activeTab === "files" ? "-ml-0.5" : ""}
                    >
                        <Files size={24} />
                    </button>
                </div>
                <div
                    className={
                        activeTab === "outline"
                            ? "border-l-2 border-primary h-12 w-12 flex items-center justify-center"
                            : "h-12 w-12 flex items-center justify-center text-muted-foreground"
                    }
                >
                    <button
                        onClick={() => handleTabClick("outline")}
                        title="Document Outline"
                        className={activeTab === "outline" ? "-ml-0.5" : ""}
                    >
                        <ListTree size={24} />
                    </button>
                </div>
                <div
                    className={
                        activeTab === "trash"
                            ? "border-l-2 border-primary h-12 w-12 flex items-center justify-center"
                            : "h-12 w-12 flex items-center justify-center text-muted-foreground"
                    }
                >
                    <button
                        onClick={() => handleTabClick("trash")}
                        title="Trash"
                        className={activeTab === "trash" ? "-ml-0.5" : ""}
                    >
                        <Trash2 size={24} />
                    </button>
                </div>
            </div>
            <Button
                variant={activeTab === "settings" ? "default" : "ghost"}
                size="icon"
                onClick={() => handleTabClick("settings")}
                title="Settings"
            >
                <Settings size={32} />
            </Button>
        </div>
    );
}
