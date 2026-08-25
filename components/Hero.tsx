"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Hero() {
    return (
        <section className="section-padding" aria-label="Introduction">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-12">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="order-2 lg:order-1"
                    >
                        {profile.availability && (
                            <motion.span
                                variants={item}
                                className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary-light px-3 py-1 text-xs font-medium text-accent-secondary"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary animate-pulse" />
                                {profile.availability}
                            </motion.span>
                        )}

                        <motion.h1
                            variants={item}
                            className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-primary"
                        >
                            Hello, I&apos;m
                        </motion.h1>
                        <motion.h2
                            variants={item}
                            className="mb-4 text-4xl font-bold tracking-tight text-primary-text sm:text-5xl lg:text-[3.25rem]"
                        >
                            {profile.name}
                        </motion.h2>
                        <motion.h3
                            variants={item}
                            className="mb-6 text-xl font-semibold text-secondary-text sm:text-2xl"
                        >
                            {profile.title}
                        </motion.h3>
                        <motion.p
                            variants={item}
                            className="mb-8 max-w-lg leading-relaxed text-secondary-text"
                        >
                            {profile.bio}
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="mb-8 flex flex-wrap items-center gap-3"
                        >
                            {profile.email && (
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-lg bg-accent-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-primary-hover hover:shadow-md hover:shadow-accent-primary/20 active:scale-[0.98]"
                                >
                                    <Mail
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                    Contact Me
                                </a>
                            )}
                            {profile.resumeUrl && (
                                <a
                                    href={profile.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-primary-text transition-all hover:bg-card-hover hover:shadow-sm active:scale-[0.98]"
                                >
                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                    Download Resume
                                </a>
                            )}
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="flex flex-col gap-3 text-sm text-muted-text sm:flex-row sm:items-center"
                        >
                            {profile.location && (
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin
                                        className="h-3.5 w-3.5"
                                        aria-hidden="true"
                                    />
                                    {profile.location}
                                </span>
                            )}
                            <div className="flex items-center gap-3">
                                {profile.socials.map(social => (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-primary"
                                    >
                                        <ExternalLink
                                            className="h-3.5 w-3.5"
                                            aria-hidden="true"
                                        />
                                        {social.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="order-1 flex justify-center lg:order-2"
                    >
                        <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-border bg-surface shadow-lg sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                            <Image
                                src="/images/profile/My_Pic.jpeg"
                                alt={`${profile.name} profile photo`}
                                fill
                                sizes="(max-width: 640px) 14rem, (max-width: 1024px) 18rem, 20rem"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
