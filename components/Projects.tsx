"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

function ViewAllProjects({ className }: { className?: string }) {
    return (
        <Link
            href="#projects"
            className={`inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-primary-text transition-all hover:bg-card-hover hover:shadow-md hover:shadow-accent-primary/10 active:scale-[0.98] ${className ?? ""}`}
        >
            View All Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
    );
}

export function Projects() {
    const featured = projects.filter(p => p.featured);
    if (featured.length === 0) return null;

    return (
        <section
            id="projects"
            className="section-padding bg-card border-y border-border"
            aria-labelledby="projects-heading"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-between">
                        <h2
                            id="projects-heading"
                            className="text-3xl font-bold text-primary-text sm:text-4xl"
                        >
                            Featured Projects
                        </h2>
                        <div className="hidden sm:block">
                            <ViewAllProjects />
                        </div>
                    </div>
                    <p className="mt-3 max-w-2xl text-secondary-text">
                        Showcasing AI, data science, and full-stack development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.35, delay: i * 0.08 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-12 text-center sm:hidden"
                >
                    <ViewAllProjects />
                </motion.div>
            </div>
        </section>
    );
}
