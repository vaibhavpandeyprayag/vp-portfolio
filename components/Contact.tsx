"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight, Check } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText(profile.email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };
    const socialLinks = [
        {
            icon: Mail,
            label: "Email Me",
            sublabel: profile.email,
            href: `mailto:${profile.email}`,
            external: false,
        },
        ...profile.socials.map(s => ({
            icon: s.platform === "LinkedIn" ? Linkedin : Github,
            label: s.platform === "LinkedIn" ? "LinkedIn" : "GitHub",
            sublabel:
                s.platform === "LinkedIn"
                    ? "Connect with me"
                    : "Explore my projects",
            href: s.url,
            external: true,
        })),
    ];

    return (
        <section
            id="contact"
            className="section-padding"
            aria-labelledby="contact-heading"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col justify-center"
                    >
                        <h2
                            id="contact-heading"
                            className="text-3xl font-bold text-primary-text sm:text-4xl"
                        >
                            Get In Touch
                        </h2>
                        <p className="mt-4 max-w-md text-secondary-text leading-relaxed">
                            Have an idea, opportunity, or project in mind?
                            I&apos;d love to hear from you.
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-800 dark:bg-green-950/40 dark:text-green-400">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                            </span>
                            Open to opportunities
                        </div>
                    </motion.div>

                    {/* Right — Links card */}
                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="rounded-xl border border-border bg-card overflow-hidden">
                            {socialLinks.map((link, i) => {
                                const Icon = link.icon;
                                const isEmail = link.label === "Email Me";
                                return (
                                    <a
                                        key={link.label}
                                        href={isEmail ? undefined : link.href}
                                        onClick={
                                            isEmail
                                                ? e => {
                                                      e.preventDefault();
                                                      handleEmailClick();
                                                  }
                                                : undefined
                                        }
                                        target={
                                            link.external ? "_blank" : undefined
                                        }
                                        rel={
                                            link.external
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className={`group cursor-pointer flex items-center justify-between px-5 py-4 transition-colors hover:bg-card-hover ${
                                            i !== socialLinks.length - 1
                                                ? "border-b border-border"
                                                : ""
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary-light text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-white">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p
                                                    className={`text-sm font-medium ${isEmail && emailCopied ? "text-green-500" : "text-primary-text"}`}
                                                >
                                                    {isEmail && emailCopied
                                                        ? "Copied!"
                                                        : link.label}
                                                </p>
                                                <p className="text-xs text-muted-text">
                                                    {isEmail && emailCopied
                                                        ? "Email copied to clipboard"
                                                        : link.sublabel}
                                                </p>
                                            </div>
                                        </div>
                                        {isEmail && emailCopied ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <ArrowRight className="h-4 w-4 text-muted-text transition-all group-hover:translate-x-0.5 group-hover:text-accent-primary" />
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
