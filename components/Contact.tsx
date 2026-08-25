"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Send,
    Mail,
    MapPin,
    ExternalLink,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import { profile } from "@/data/profile";
import { sendContactEmail } from "@/app/actions/contact";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [emailCopied, setEmailCopied] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const result = await sendContactEmail(formState);

        if (result.success) {
            setStatus("success");
            setFormState({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 4000);
        } else {
            setStatus("error");
            setErrorMessage(result.error || "Something went wrong.");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section
            id="contact"
            className="section-padding"
            aria-labelledby="contact-heading"
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
                        id="contact-heading"
                        className="text-3xl font-bold text-primary-text sm:text-4xl"
                    >
                        Get In Touch
                    </h2>
                    <p className="mt-3 max-w-2xl text-secondary-text">
                        Have a project in mind or want to collaborate? I&apos;d
                        love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                    >
                        <p className="text-secondary-text leading-relaxed">
                            I&apos;m always open to discussing new projects,
                            creative ideas, or opportunities to be part of your
                            vision.
                        </p>

                        <div className="space-y-4">
                            {profile.email && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            profile.email,
                                        );
                                        setEmailCopied(true);
                                        setTimeout(
                                            () => setEmailCopied(false),
                                            2000,
                                        );
                                    }}
                                    className="group cursor-pointer flex items-center gap-3 text-secondary-text transition-colors hover:text-accent-primary"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary-light transition-colors group-hover:bg-accent-primary group-hover:text-white">
                                        <Mail className="h-5 w-5 text-accent-primary transition-colors group-hover:text-white" />
                                    </div>
                                    <span className="text-sm">
                                        {emailCopied
                                            ? "Copied!"
                                            : profile.email}
                                    </span>
                                </button>
                            )}
                            {profile.location && (
                                <div className="flex items-center gap-3 text-secondary-text">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-secondary-light">
                                        <MapPin className="h-5 w-5 text-accent-secondary" />
                                    </div>
                                    <span className="text-sm">
                                        {profile.location}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-3">
                            {profile.socials.map(social => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-secondary-text transition-all hover:bg-card-hover hover:text-primary-text hover:shadow-sm active:scale-[0.98]"
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

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="space-y-4 rounded-xl border border-border bg-card p-6"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-primary-text"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                value={formState.name}
                                onChange={handleChange}
                                disabled={status === "submitting"}
                                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary-text placeholder-muted-text transition-colors focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:opacity-50"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-sm font-medium text-primary-text"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={formState.email}
                                onChange={handleChange}
                                disabled={status === "submitting"}
                                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary-text placeholder-muted-text transition-colors focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:opacity-50"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="mb-1.5 block text-sm font-medium text-primary-text"
                            >
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                value={formState.subject}
                                onChange={handleChange}
                                disabled={status === "submitting"}
                                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary-text placeholder-muted-text transition-colors focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:opacity-50"
                                placeholder="What's this about?"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-1.5 block text-sm font-medium text-primary-text"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formState.message}
                                onChange={handleChange}
                                disabled={status === "submitting"}
                                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary-text placeholder-muted-text transition-colors focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:opacity-50"
                                placeholder="Tell me about your project or idea..."
                            />
                        </div>

                        {status === "success" && (
                            <div className="flex items-center gap-2 rounded-lg bg-accent-secondary-light px-4 py-3 text-sm text-accent-secondary">
                                <CheckCircle className="h-4 w-4 shrink-0" />
                                Message sent successfully! I&apos;ll get back to
                                you soon.
                            </div>
                        )}

                        {status === "error" && (
                            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-primary-hover hover:shadow-md hover:shadow-accent-primary/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
                        >
                            {status === "submitting" ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
