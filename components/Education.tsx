"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
    if (education.length === 0) return null;

    return (
        <section
            id="education"
            className="section-padding bg-card border-y border-border"
            aria-labelledby="education-heading"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <h2
                        id="education-heading"
                        className="text-3xl font-bold text-primary-text sm:text-4xl"
                    >
                        Education
                    </h2>
                    <p className="mt-3 max-w-2xl text-secondary-text">
                        Academic background and qualifications.
                    </p>
                </motion.div>

                <div className="space-y-5">
                    {education.map((edu, i) => (
                        <motion.div
                            key={`${edu.institution}-${edu.degree}`}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.35, delay: i * 0.08 }}
                            className="rounded-xl border border-border bg-background p-6 transition-colors hover:bg-card-hover"
                        >
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <GraduationCap
                                            className="h-5 w-5 text-accent-primary"
                                            aria-hidden="true"
                                        />
                                        <h3 className="text-lg font-semibold text-primary-text">
                                            {edu.degree}
                                        </h3>
                                    </div>
                                    <p className="mt-0.5 ml-7 text-sm font-medium text-accent-primary">
                                        {edu.institution}
                                    </p>
                                    <p className="mt-0.5 ml-7 text-sm text-secondary-text">
                                        {edu.specialization}
                                    </p>
                                </div>
                                <span className="ml-7 inline-flex items-center gap-1.5 text-sm text-muted-text sm:ml-0">
                                    <Calendar
                                        className="h-3.5 w-3.5"
                                        aria-hidden="true"
                                    />
                                    {edu.startDate} — {edu.endDate}
                                </span>
                            </div>

                            {edu.details.length > 0 && (
                                <ul className="mt-4 ml-7 space-y-1.5">
                                    {edu.details.map(detail => (
                                        <li
                                            key={detail}
                                            className="flex gap-2 text-sm text-secondary-text"
                                        >
                                            <span
                                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary"
                                                aria-hidden="true"
                                            />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
