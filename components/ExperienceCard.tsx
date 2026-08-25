import type { Experience } from "@/data/types";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-primary-text">{exp.role}</h3>
          <p className="flex items-center gap-1.5 text-sm font-medium text-accent-primary">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
            {exp.company}
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-1 text-sm text-muted-text sm:mt-0 sm:items-end">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {exp.startDate} — {exp.endDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {exp.location} · {exp.type}
          </span>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {exp.description.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-relaxed text-secondary-text"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-accent-secondary-light px-3 py-1 text-xs font-medium text-accent-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
