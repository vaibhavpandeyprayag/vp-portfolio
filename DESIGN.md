# Design Specification

## Reference

Primary visual reference:

`public/portfolio-reference.png`

The reference is a clean, premium software-engineer portfolio with:

- large hero section
- strong typography
- profile image
- compact statistics
- categorized technical skills
- professional experience cards
- featured project cards
- contact section
- generous whitespace
- rounded cards
- subtle borders
- restrained shadows
- clear CTA buttons

Use this as inspiration, not as a pixel-perfect copy.

## Design Goal

Create a portfolio for an AI & Data Science professional.

The visual language should communicate:

- technical competence
- intelligence
- credibility
- modern engineering
- attention to detail
- professionalism

It should work equally well for:

- recruiters
- engineering managers
- technical interviewers
- potential clients
- collaborators

It must not look like a generic developer template.

## Color System

Do NOT use a pure black-and-white-only design.

Use a restrained technology-oriented palette.

Recommended direction:

- Background: warm/off-white or very light cool neutral
- Primary text: deep charcoal rather than pure black
- Primary accent: sophisticated indigo/blue
- Secondary accent: teal/cyan used sparingly
- Cards: white or very lightly tinted surfaces
- Borders: subtle cool gray
- Muted text: slate gray
- CTA: dark charcoal or primary accent
- Accent backgrounds: very light tinted versions of the primary/secondary colors

Example conceptual palette:

- `#F8FAFC` — page background
- `#0F172A` — primary text
- `#334155` — secondary text
- `#4F46E5` — primary accent
- `#0F766E` — secondary accent
- `#E0E7FF` — light primary tint
- `#CCFBF1` — light secondary tint
- `#E2E8F0` — border

These are starting points, not mandatory exact values. Adjust them to achieve visual harmony.

Avoid:

- pure black backgrounds
- excessive purple
- neon green
- rainbow gradients
- large saturated gradient sections
- excessive glassmorphism

## Typography

Use a modern, highly readable sans-serif.

Suggested options:

- Inter
- Geist
- Manrope

Use a clear hierarchy:

### Hero heading

Large, bold, compact.

Example structure:

`Hello, I'm`

`[Name]`

`AI & Data Science Engineer`

The exact wording must come from the content data.

### Section headings

Large and confident but smaller than the hero.

### Body text

Readable, restrained, medium line height.

### Labels

Small, slightly emphasized, preferably using the accent color where appropriate.

Avoid excessive font weights and decorative typography.

## Page Structure

Recommended order:

1. Navbar
2. Hero
3. Quick statistics
4. Technical skills
5. Featured projects
6. Professional experience
7. Education
8. Research / writing, if content exists
9. Contact
10. Footer

The exact sections should depend on available content.

Do not create empty sections merely because they exist in the reference.

## Navbar

Desktop:

- name/logo on the left
- navigation links on the right
- optional highlighted CTA

Keep it compact.

Use a subtle border or translucent surface if appropriate.

Mobile:

- compact header
- accessible menu button
- simple mobile navigation

Avoid an oversized navbar.

## Hero

Use a two-column layout on desktop.

### Left

Include:

- availability/status badge if available
- name
- professional title
- concise introduction
- primary CTA
- secondary CTA
- social links

### Right

Use:

- professional profile image if supplied
- subtle decorative accent
- optional availability indicator

Do not invent a profile image.

If no profile image exists, use an elegant alternative such as an abstract AI/data visual or initials rather than a fake human photograph.

The hero should immediately communicate:

**Who the person is + what they do + what they are looking for/offering.**

## Statistics

Use 3–4 compact statistics when genuine data is available.

Examples:

- Projects
- Years of experience
- Certifications
- Publications
- Technologies

Never fabricate numerical statistics.

If no reliable statistics exist, omit the section or replace it with meaningful non-numeric highlights.

## Technical Skills

Use categorized cards.

Potential categories:

- Programming
- AI / Machine Learning
- Generative AI
- Data Science
- Backend
- Frontend
- Databases
- Cloud / DevOps
- Tools

Only show categories supported by actual content.

Each skill card may contain:

- small icon
- category title
- short description
- technology badges

Avoid giant walls of technology logos.

Prioritize technologies that are actually relevant to the person's target roles.

## Experience

Use a clean vertical arrangement of experience cards.

Each entry should show:

- role
- company
- location if available
- employment type if available
- dates
- concise impact-oriented description
- technology tags

Use subtle timeline or accent indicators if they improve hierarchy.

Do not make the timeline visually complicated.

## Featured Projects

Projects are one of the most important sections.

Use a responsive grid:

- 3 columns on large desktop
- 2 columns on tablet
- 1 column on mobile

Each project card should include:

- project image
- title
- short description
- technology badges
- GitHub/source link
- live demo link where available

Cards should have subtle hover interaction.

Avoid excessive card animations.

For AI/ML projects, emphasize:

- problem
- approach
- technologies
- measurable result when available

## Education

Use a compact professional presentation.

For each education item:

- institution
- degree/program
- specialization
- dates
- relevant information if available

Do not make education visually dominate the portfolio unless it is especially relevant.

## Research / Writing

If actual articles, papers, technical notes, or research work are provided, create a section for them.

Possible presentation:

- article title
- topic/category
- short description
- date
- read/view link

Do not create fake articles.

## Contact

Use a strong but restrained CTA.

Example layout:

Left:
- short invitation
- email
- LinkedIn
- GitHub
- location if appropriate

Right:
- contact form

The form should include:

- Name
- Email
- Subject
- Message
- Submit button

Use clear labels and validation.

## Footer

Minimal.

Include:

- name
- professional descriptor
- copyright
- social links if appropriate

## Icons

Use a consistent icon set such as Lucide React.

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

Do not mix many unrelated icon libraries.

Icons should support the content rather than dominate it.

## Animation

Use subtle motion.

Recommended:

### On page load

- hero text fades/slides upward slightly
- profile image fades/scales gently
- CTA elements appear sequentially

### On scroll

- sections reveal with small opacity/translate transitions

### On hover

- project cards lift slightly
- buttons transition color/background
- social icons respond subtly

### Avoid

- bouncing text
- spinning cards
- aggressive parallax
- animated gradients everywhere
- cursor-following effects
- excessive blur animations

Use Framer Motion only where it materially improves the experience.

Respect:

`prefers-reduced-motion`

## Spacing

The page should have generous whitespace similar to the reference.

Use consistent section spacing.

Avoid cramped content.

Each section should have:

- section heading
- optional short description
- content
- enough separation from the next section

## Cards

Use:

- rounded corners
- thin subtle borders
- very restrained shadows
- white/light surfaces
- small hover elevation

Avoid excessive shadows and excessive glass effects.

## Buttons

Primary CTA:

- strong contrast
- rounded but not excessively pill-shaped
- clear text
- subtle hover animation

Secondary CTA:

- outlined or lightly tinted

Examples:

- View Projects
- Download Resume
- Contact Me
- View GitHub
- Live Demo

Only show CTAs for actions that actually exist.

## Responsive Behavior

### Desktop

Use the full two-column hero and multi-column grids.

### Tablet

Reduce grid columns and spacing.

### Mobile

Everything becomes single-column where appropriate.

The hero should stack:

1. profile/visual
2. heading
3. description
4. CTAs
5. social links

Ensure text remains readable and buttons are easy to tap.

## Content Management

All editable portfolio content should live outside the visual components.

Recommended:

`data/profile.ts`
`data/skills.ts`
`data/experience.ts`
`data/projects.ts`
`data/education.ts`

The UI should map over these structures.

Example:

```ts
export const projects = [
  {
    title: "Project Name",
    description: "Short description",
    image: "/images/projects/project.png",
    technologies: ["Python", "FastAPI", "Next.js"],
    github: "https://github.com/...",
    demo: "https://..."
  }
];
```

Changing a project should require editing the data file, not the component.

## Overall Quality Bar

The finished website should look like a portfolio produced by a professional product/frontend engineer.

Prioritize:

1. visual hierarchy
2. readability
3. content clarity
4. responsive behavior
5. subtle motion
6. accessibility
7. performance
8. maintainable code

The design should be distinctive enough to feel personal while remaining professional enough for recruiters and employers.
