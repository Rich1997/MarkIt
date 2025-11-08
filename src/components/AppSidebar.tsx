"use client";
import * as React from "react";
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar";

export default function AppSidebar() {
    return (
        <Sidebar className="h-[calc(100dvh-70px)] hidden flex-1 md:flex left-12 top-12 z-0">
            <SidebarContent>
                <SidebarHeader className="p-0"></SidebarHeader>
            </SidebarContent>
        </Sidebar>
    );
}
