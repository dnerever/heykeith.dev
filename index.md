---
title: heykeith.dev
description: Software engineer in Denver building reliable data and financial systems in C#/.NET, Blazor, and SQL.
image: /assets/og.png
layout: default
---

<div class="terminal-titlebar">
  <span class="terminal-dots" aria-hidden="true"><span></span><span></span><span></span></span>
  <span class="terminal-title">keith@heykeith.dev: ~</span>
</div>

# Hey, I'm Keith 👋

## whoami

Software engineer in Denver. I build reliable data and financial systems in **C#/.NET, Blazor, and SQL**.

## cat work.log
- **Software Engineer (Specialist), Charles Schwab** <span class="muted">June 2026–present</span>
  - Cut user data upload time from up to 15 minutes to 30 seconds, and bulk upload processing from 1.5 hours to 10 minutes, using C# bulk inserts and set-based SQL.
  - Primary production support for about 30 time-sensitive daily batch jobs; wrote a same-day recovery runbook and reran every job in dependency order to meet audit deadlines.
- **Cybersecurity Automation Engineer (Associate), Charles Schwab** <span class="muted">June 2025–June 2026</span>
  - Automated cybersecurity workflows with Appian and Microsoft Power Platform.
- **Cybersecurity Automation Engineer (Intern), Charles Schwab** <span class="muted">June–August 2024</span>
  - Wrote Python playbooks in Google Chronicle SOAR to automate incident response.
  - Designed new SOAR integrations with product owners.
  - Automated security operations center analyst workflows in Appian.
  - Returned full time to the same team after the internship (return offer).
  <!-- TODO: OWNER CONFIRM whether SOAR playbooks and integrations continued in the Associate role; keep these claims under the internship until confirmed. -->

## ls projects/
- **[Open Skillet](https://openskillet.com):** version control for recipes. Fork a recipe, edit it, and propose changes back. [Source on GitHub](https://github.com/DNEREVER/OpenRecipe).
  - TypeScript, React, Node.js, PostgreSQL; hosted on Render, with GitHub Actions CI, Playwright end-to-end tests, and CodeQL/Dependabot scanning.
- **DonorEngine:** a direct-mail planner for nonprofits, built solo in a 24-hour hackathon. Code available on request.
- **LambdaConf 2024 Hackathon:** track winner; co-built a matching engine in TypeScript on DBOS Cloud.

## contact &#45;&#45;all
- Email: [keith@heykeith.dev](mailto:keith@heykeith.dev)
- GitHub: [github.com/DNEREVER](https://github.com/DNEREVER)
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
