import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Vaibhav Pandey - AI | Machine Learning | Data Science",
        template: "%s | Portfolio",
    },
    description:
        "Personal portfolio showcasing machine learning projects, technical skills and professional experience.",
    keywords: [
        "AI Engineer",
        "Data Science",
        "Machine Learning",
        "Software Engineer",
        "Portfolio",
        "Python",
        "NLP",
    ],
    authors: [{ name: "Vaibhav Pandey" }],
    openGraph: {
        title: "Portfolio - Software Engineer",
        description:
            "Personal portfolio showcasing AI, machine learning, and data science projects, experience, and skills.",
        type: "website",
        locale: "en_US",
        siteName: "Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio - Software Engineer",
        description:
            "Personal portfolio showcasing AI, machine learning, and data science projects, experience, and skills.",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/page-icon.png",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                >
                    Skip to main content
                </a>
                <ThemeProvider>
                    <div
                        id="main-content"
                        className="flex-1 flex flex-col"
                        tabIndex={-1}
                    >
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
