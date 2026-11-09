---
title: Keith \| Full-stack software engineer
description: Full-stack software engineer in Denver. I build reliable financial systems in C#/.NET and SQL Server, and full-stack TypeScript apps with React and Postgres. Security-minded, with a background in security automation.
image: /assets/og.png
layout: default
---

<div class="terminal-titlebar">
  <span class="terminal-dots" aria-hidden="true"><span></span><span></span><span></span></span>
  <span class="terminal-title">keith@heykeith.dev: ~</span>
</div>

# Hey, I'm Keith 👋

## whoami

Full-stack software engineer in Denver. I build reliable financial systems in C#/.NET and SQL Server, and full-stack TypeScript apps with React and Postgres. Security-minded, with a background in security automation.

## cat work.log
- **Software Engineer (Specialist), Charles Schwab** <span class="muted">June 2026–present</span>
  - Develop C#/.NET and SQL Server applications for daily reserve calculations and monthly balance certification, partnering with Treasury and Finance.
  - Sped up data loads up to 30x (15 min to 30 s, 90 min to 10 min) with C# bulk inserts and set-based SQL.
  - Support production for the team's daily batch ETL jobs (Informatica IICS, Control-M).
  - Rolled out SAST and SCA scanning in the team's CI/CD pipelines.
- **Cybersecurity Automation Engineer (Associate), Charles Schwab** <span class="muted">June 2025–June 2026</span>
  - Designed and built an OAuth 2.0 integration with a data security platform; passed architecture review.
  - Built API integrations with new security platforms for other security teams.
  - Created a new connection method giving security teams centralized access to an internal security data warehouse.
  - Delivered a DLP metrics dashboard from design through UAT to production, with automated daily metrics emails.
- **Cybersecurity Automation Engineer (Intern), Charles Schwab** <span class="muted">June–August 2024</span>
  - Wrote Python playbooks in Google Chronicle SOAR to automate incident response.
  - Designed new SOAR integrations with product owners.
  - Automated security operations center analyst workflows in Appian.
  - Returned full time to the same team after the internship (return offer).

## ls projects/
- **Open Skillet ([openskillet.com](https://openskillet.com) · [source](https://github.com/dnerever/OpenRecipe)):** version control for recipes. Fork a recipe, edit it, and propose changes back.
  - TypeScript, React, Node.js, PostgreSQL; deployed on Render.
  - Email sign-up, email-based password reset, and rate limiting.
  - CI in GitHub Actions: unit tests, Playwright end-to-end tests, accessibility checks, CodeQL, and Dependabot.
- **DonorEngine ([live demo](https://donorengine.onrender.com/)):** a direct-mail planner for nonprofits, built solo in a 24-hour hackathon. Rules set every amount and date, an LLM writes the copy, and every AI-generated line passes a grounding check. An in-browser prediction model is tested against baselines. TypeScript. Code available on request.

## cat skills.txt

```
$ cat skills.txt

Languages: C#, TypeScript, SQL, Python
Frameworks: .NET, Blazor, React, Node.js
Data: SQL Server, PostgreSQL
Practices: CI/CD (GitHub Actions), automated testing, SAST/SCA, OAuth 2.0
```

## contact &#45;&#45;all
- Email: [keith@heykeith.dev](mailto:keith@heykeith.dev)
- GitHub: [github.com/dnerever](https://github.com/dnerever)
- LinkedIn: [linkedin.com/in/keith-code](https://linkedin.com/in/keith-code)

## cat education.txt
Studied toward a B.A. in Economics with a minor in Computer Science, University of Colorado Boulder.

<div class="terminal-interaction" data-terminal>
  <div class="terminal__output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions text">
    <p class="terminal__response">Type <code>help</code> to explore this page.</p>
  </div>
  <form class="terminal__form" data-terminal-form aria-label="Interactive terminal" hidden>
    <label class="visually-hidden" for="terminal-input">Enter a terminal command</label>
    <span class="terminal__prompt" aria-hidden="true">keith@heykeith.dev:~$</span>
    <span class="terminal__input-wrap">
      <input id="terminal-input" class="terminal__input" name="command" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="try: help, projects, contact" aria-describedby="terminal-help">
      <span class="terminal__cursor" aria-hidden="true"></span>
    </span>
    <button class="terminal__submit" type="submit" aria-label="Run command">↵</button>
  </form>
  <span class="visually-hidden" id="terminal-help">Available commands: help, about, projects, ls, contact, contact --all, education, stack, history, clear. Use the up and down arrow keys to navigate command history.</span>
</div>
<script src="{{ '/assets/js/terminal.js' | relative_url }}" defer></script>
