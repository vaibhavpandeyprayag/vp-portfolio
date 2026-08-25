# AGENTS.md

## Project

Build my personal portfolio website.

The website should present me professionally as an AI & Data Science professional and showcase my skills, experience, education, projects, achievements, and contact information.

Use the supplied portfolio reference image as visual inspiration. Recreate its overall quality, hierarchy, spacing, card-based structure, and polished feel, but do not copy its personal content, branding, text, or imagery.

---

## Tech Stack

Use:

- Next.js with App Router
- TypeScript
- React
- Tailwind CSS, or another simple CSS solution if it makes implementation cleaner
- Lucide React or another appropriate, consistent icon library
- Framer Motion or a similarly lightweight animation solution where useful

Do not add unnecessary libraries.

---

## Content Management

All portfolio content must be easy to update.

Do NOT hardcode personal content directly inside UI components.

Keep editable content in dedicated files under `/data/`, for example:

```text
data/
├── profile.ts
├── skills.ts
├── experience.ts
├── education.ts
└── projects.ts
```

The exact files may be adjusted if a better structure is appropriate.

These files should contain things such as:

- Name
- Professional title
- Bio
- Location
- Availability
- Social links
- Email
- Resume link
- Statistics
- Skills
- Experience
- Education
- Projects
- Certifications
- Achievements

Components should consume this data rather than containing hardcoded personal information.

Changing a project, skill, education entry, experience entry, or link should normally require editing only a data file.

Never invent personal information, companies, degrees, achievements, project results, years of experience, clients, certifications, or statistics. Use only information provided in the project/data files.

---

## Reference Design

Use:

`public/portfolio-reference.png`

as the primary visual reference.

The reference has:

- large hero section
- professional profile area
- strong typography
- generous whitespace
- compact statistics
- categorized technical skills
- experience cards
- featured project cards
- contact section
- rounded cards
- subtle borders
- restrained shadows
- clear CTA buttons
- clean responsive layout

Use these characteristics as inspiration rather than making a pixel-perfect copy.

Adapt the design to an AI & Data Science portfolio.

---

## Visual Style

The website should look:

- Professional
- Modern
- Premium
- Clean
- Technical
- Credible
- Personal

Do NOT make it purely black and white.

Use a sophisticated accent color system.

Preferred direction:

- warm/off-white or very light cool background
- deep charcoal primary text
- indigo/blue primary accent
- teal/cyan secondary accent used sparingly
- subtle tinted backgrounds
- white/light cards
- subtle cool-gray borders

A possible palette is:

```text
Background:     #F8FAFC
Primary text:   #0F172A
Secondary text: #334155
Primary accent: #4F46E5
Secondary:      #0F766E
Primary tint:   #E0E7FF
Secondary tint: #CCFBF1
Border:         #E2E8F0
```

These values are suggestions, not strict requirements. Read `DESIGN.md` file for accurate design instructions.

Avoid:

- neon colors
- excessive purple
- rainbow gradients
- cyberpunk aesthetics
- huge saturated backgrounds
- excessive glassmorphism
- excessive shadows

The result should feel like a high-quality technology/product website.

---

## Typography

Use a modern readable sans-serif such as:

- Geist
- Inter
- Manrope

Use strong hierarchy:

- large hero heading
- clear section headings
- readable body text
- compact labels
- restrained font weights

Avoid decorative or overly stylized typography.

---

## Page Structure

Use the following structure where content is available:

1. Navbar
2. Hero
3. Statistics / highlights
4. Technical Skills
5. Featured Projects
6. Professional Experience
7. Education
8. Research / Writing, if applicable
9. Contact
10. Footer

Do not create empty sections just because they are listed here.

If a section has no meaningful content, omit it.

---

## Navbar

Desktop:

- name/logo on left
- navigation links on right
- optional highlighted CTA

Keep it compact.

Use a subtle border or light background.

Mobile:

- compact header
- accessible menu button
- simple navigation menu

---

## Hero

Use a two-column layout on desktop.

### Left side

Include:

- availability/status badge if available
- name
- professional title
- concise introduction
- primary CTA
- secondary CTA
- social links

### Right side

Use:

- profile image if one is provided
- subtle decorative visual
- optional availability indicator

Do not invent a human profile photograph.

If no profile image is available, use a tasteful abstract AI/data visual or initials.

The hero should immediately communicate:

**Who I am + what I do + what I am looking for/offering.**

---

## Statistics

Show 3–4 statistics or highlights only when genuine information exists.

Examples:

- Projects
- Certifications
- Publications
- Technologies
- Years of experience

Never fabricate numbers.

If reliable statistics are not available, omit the statistics section or replace it with non-numeric highlights.

---

## Technical Skills

Create categorized skill cards.

Possible categories:

- Programming
- AI / Machine Learning
- Generative AI
- Data Science
- Backend
- Frontend
- Databases
- Cloud / DevOps
- Tools

Only display categories supported by actual content.

Each card can contain:

- icon
- category title
- short description
- technology badges

Avoid overwhelming the page with dozens of logos.

---

## Experience

Present experience using clean cards or a subtle timeline.

Each entry can show:

- role
- company
- location
- employment type
- dates
- concise description
- technology tags

Focus descriptions on meaningful responsibilities and impact.

Do not invent impact metrics.

---

## Featured Projects

Projects should be one of the strongest sections of the website.

Use a responsive grid:

- 3 columns on large screens
- 2 columns on tablets
- 1 column on mobile

Each project card should contain:

- project image when available
- title
- concise description
- technologies
- GitHub/source link
- live demo link when available

Use subtle hover effects.

For AI/ML projects, make the problem, approach, technologies, and results easy to understand.

Do not fabricate project results.

---

## Education

Use a clean, compact presentation.

Each entry may include:

- institution
- degree/program
- specialization
- dates
- relevant details

Education should support the overall profile without overwhelming the projects and technical work.

---

## Research / Writing

If genuine articles, papers, research projects, or technical writing are provided, display them in a dedicated section.

Do not create fake publications or articles.

---

## Contact

Create a strong but restrained contact section.

Possible layout:

Left:

- short CTA
- email
- LinkedIn
- GitHub
- location if appropriate

Right:

- contact form

Form fields:

- Name
- Email
- Subject
- Message
- Submit

Use proper labels and validation.

If server-side form processing is needed, prefer a Next.js Server Action or Route Handler.

Do not introduce a separate backend unless necessary.

---

## Icons

Use one consistent icon system, preferably Lucide React.

Use icons for:

- navigation
- email
- GitHub
- LinkedIn
- location
- skills
- experience
- education
- project actions
- external links

Icons should support the interface, not dominate it.

---

## Animation

Animations should exist, but they must be subtle and professional.

Use animations for:

- hero entrance
- section reveal
- card hover
- button hover
- profile image entrance
- navigation transitions
- subtle page/section transitions

Preferred behavior:

- small opacity transitions
- small translate transitions
- subtle scale/elevation on cards
- smooth button transitions

Avoid:

- bouncing elements
- spinning elements
- excessive parallax
- animated gradients everywhere
- cursor-following effects
- constant movement
- flashy transitions

Respect `prefers-reduced-motion`.

---

## Responsive Design

The site must work properly on:

- desktop
- laptop
- tablet
- mobile

Do not simply shrink the desktop design.

Desktop:

- two-column hero
- multi-column skill/project grids

Tablet:

- reduced grid columns
- adjusted spacing

Mobile:

- single-column content
- stacked hero
- accessible mobile navigation
- readable typography
- touch-friendly buttons

---

## Accessibility

Use:

- semantic HTML
- proper heading hierarchy
- accessible buttons
- form labels
- meaningful alt text
- keyboard navigation
- visible focus states
- sufficient contrast
- reduced-motion support

Do not use icons as the only way to communicate important information.

---

## SEO

Implement appropriate:

- page title
- meta description
- Open Graph metadata
- semantic headings
- descriptive links
- sitemap/robots support where appropriate

---

## Performance

Prefer:

- Next.js Server Components by default
- Client Components only when browser-side interaction is actually required
- optimized images
- `next/image`
- minimal client-side JavaScript
- minimal dependencies
- lazy loading where appropriate

Do not add `"use client"` unnecessarily.

---

## Component Architecture

Prefer a structure similar to:

```text
app/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── Navbar.tsx
├── Hero.tsx
├── Stats.tsx
├── Skills.tsx
├── SkillCard.tsx
├── Experience.tsx
├── ExperienceCard.tsx
├── Projects.tsx
├── ProjectCard.tsx
├── Education.tsx
├── Contact.tsx
└── Footer.tsx

data/
├── profile.ts
├── skills.ts
├── experience.ts
├── education.ts
└── projects.ts
```

Adjust the structure when a simpler or better architecture makes sense.

Do not over-componentize.

---

## Code Quality

Write:

- clean TypeScript
- reusable components
- data-driven UI
- readable code
- maintainable Tailwind classes
- minimal duplication
- sensible file organization

Avoid unnecessary abstraction.

Do not create components just to split tiny pieces of JSX without a real maintenance or reuse benefit.

---

## Important Implementation Rule

Before coding:

1. Inspect `public/portfolio-reference.png`.
2. Inspect the existing project structure.
3. Read this `AGENTS.md` completely.
4. Establish the visual system first.
5. Create the data/content structure.
6. Build reusable components.
7. Populate components from the data files.
8. Test desktop and mobile layouts.
9. Check accessibility.
10. Check animations and reduced-motion behavior.
11. Remove unnecessary dependencies and unused code.

The final result should look like a professionally designed personal portfolio, not a generic generated template.
