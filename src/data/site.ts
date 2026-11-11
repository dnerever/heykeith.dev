export const profile = {
  name: "Keith",
  title: "Full-stack software engineer",
  description:
    "Full-stack software engineer in Denver. I build reliable financial systems in C#/.NET and SQL Server, and full-stack TypeScript apps with React and Postgres. Security-minded, with a background in security automation.",
  email: "keith@heykeith.dev",
  github: "https://github.com/dnerever",
  linkedin: "https://linkedin.com/in/keith-code",
};

export const projects = [
  {
    name: "Open Skillet",
    image: "/images/open-skillet.webp",
    imageAlt:
      "Open Skillet recipe page for a Tartine Country Loaf, showing version and fork counts, a timeline of the day, and ingredients",
    description:
      "Version control for recipes. Fork a recipe, edit it, and propose changes back.",
    url: "https://openskillet.com",
    source: "https://github.com/dnerever/OpenRecipe",
    details: [
      "TypeScript, React, Node.js, PostgreSQL; deployed on Render.",
      "Email sign-up, email-based password reset, and rate limiting.",
      "CI in GitHub Actions: unit tests, Playwright end-to-end tests, accessibility checks, CodeQL, and Dependabot.",
    ],
  },
  {
    name: "DonorEngine",
    image: "/images/donor-engine.webp",
    imageAlt:
      "DonorEngine mail plan overview with estimated print and postage costs and a table of print runs",
    description:
      "A direct-mail planner for nonprofits, built solo in a 24-hour hackathon. Rules set every amount and date, an LLM writes the copy, and every AI-generated line passes a grounding check. An in-browser prediction model is tested against baselines.",
    url: "https://donorengine.onrender.com/",
    details: ["TypeScript. Code available on request."],
  },
];

export const workHistory = [
  {
    title: "Software Engineer (Specialist), Charles Schwab",
    dates: "June 2026–present",
    details: [
      "Develop C#/.NET and SQL Server applications for daily reserve calculations and monthly balance certification, partnering with Treasury and Finance.",
      "Sped up data loads up to 30x (15 min to 30 s, 90 min to 10 min) with C# bulk inserts and set-based SQL.",
      "Support production for the team's daily batch ETL jobs (Informatica IICS, Control-M).",
      "Rolled out SAST and SCA scanning in the team's CI/CD pipelines.",
    ],
  },
  {
    title: "Cybersecurity Automation Engineer (Associate), Charles Schwab",
    dates: "June 2025–June 2026",
    details: [
      "Designed and built an OAuth 2.0 integration with a data security platform; passed architecture review.",
      "Built API integrations with new security platforms for other security teams.",
      "Created a new connection method giving security teams centralized access to an internal security data warehouse.",
      "Delivered a DLP metrics dashboard from design through UAT to production, with automated daily metrics emails.",
    ],
  },
  {
    title: "Cybersecurity Automation Engineer (Intern), Charles Schwab",
    dates: "June–August 2024",
    details: [
      "Wrote Python playbooks in Google Chronicle SOAR to automate incident response.",
      "Designed new SOAR integrations with product owners.",
      "Automated security operations center analyst workflows in Appian.",
      "Returned full time to the same team after the internship (return offer).",
    ],
  },
];

export const skills = [
  { label: "Languages", value: "C#, TypeScript, SQL, Python" },
  { label: "Frameworks", value: ".NET, Blazor, React, Node.js" },
  { label: "Data", value: "SQL Server, PostgreSQL" },
  {
    label: "Practices",
    value: "CI/CD (GitHub Actions), automated testing, SAST/SCA, OAuth 2.0",
  },
];

export const education =
  "Studied toward a B.A. in Economics with a minor in Computer Science, University of Colorado Boulder.";
