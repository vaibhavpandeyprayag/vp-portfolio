"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Stats() {
  if (profile.stats.length === 0) return null;

  return (
    <section className="border-y border-border bg-card" aria-label="Key statistics">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-accent-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-primary-text">
                {stat.label}
              </div>
              {stat.description && (
                <div className="mt-0.5 text-xs text-muted-text">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
