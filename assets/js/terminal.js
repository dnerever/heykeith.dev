const terminal = document.querySelector("[data-terminal]");
const form = terminal.querySelector("[data-terminal-form]");
const input = terminal.querySelector("#terminal-input");
const output = terminal.querySelector("#terminal-output");

const sectionItems = (sectionName) => {
  const heading = Array.from(document.querySelectorAll(".page-content h2"))
    .find((element) => element.textContent.trim().toLowerCase().includes(sectionName));
  const list = heading?.nextElementSibling;

  return list?.tagName === "UL"
    ? Array.from(list.children)
      .filter((item) => item.tagName === "LI")
      .map((item) => item.textContent.trim())
    : [];
};

const writeLine = (text, className = "terminal__response") => {
  const line = document.createElement("p");
  line.className = className;
  line.textContent = text;
  output.append(line);
  output.scrollTop = output.scrollHeight;
};

const commands = {
  help: () => "Available commands: help, projects, contact, clear.",
  projects: () => sectionItems("projects").join("\n") || "No projects are listed on this page.",
  contact: () => sectionItems("contact").join("\n") || "No contact details are listed on this page.",
};

form.hidden = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = input.value.trim().toLowerCase();

  if (!command) return;

  writeLine(`keith@heykeith.dev:~$ ${command}`, "terminal__line");
  input.value = "";

  if (command === "clear") {
    output.replaceChildren();
    return;
  }

  writeLine(commands[command]?.() ?? `Command not found: ${command}. Type "help" to see available commands.`);
});
