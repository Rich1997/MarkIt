import type { Metadata } from "next";
import "./globals.css";
import "./ace.css";
import "./highlights.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
    title: "MDPV",
    description: "Markdown editor and previewer built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://rsms.me/" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </head>
            <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <SidebarProvider>{children}</SidebarProvider>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
