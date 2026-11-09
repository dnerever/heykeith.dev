const terminal = document.querySelector("[data-terminal]");
const form = terminal.querySelector("[data-terminal-form]");
const input = terminal.querySelector("#terminal-input");
const inputWrap = terminal.querySelector(".terminal__input-wrap");
const output = terminal.querySelector("#terminal-output");
const measureContext = document.createElement("canvas").getContext("2d");

const positionCursor = () => {
  const inputStyle = getComputedStyle(input);

  measureContext.font = inputStyle.font;
  const caretPosition = input.selectionStart ?? input.value.length;
  const textWidth = measureContext.measureText(input.value.slice(0, caretPosition)).width;
  inputWrap.style.setProperty("--terminal-cursor-offset", `${textWidth - input.scrollLeft}px`);
};

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

input.addEventListener("focus", () => {
  form.classList.add("is-active");
  positionCursor();
});
input.addEventListener("blur", () => form.classList.remove("is-active"));
input.addEventListener("input", positionCursor);
input.addEventListener("keyup", positionCursor);
input.addEventListener("click", positionCursor);
input.addEventListener("scroll", positionCursor);
input.addEventListener("select", positionCursor);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = input.value.trim().toLowerCase();

  if (!command) {
    positionCursor();
    return;
  }

  writeLine(`keith@heykeith.dev:~$ ${command}`, "terminal__line");
  input.value = "";

  if (command === "clear") {
    output.replaceChildren();
    positionCursor();
    return;
  }

  writeLine(commands[command]?.() ?? `Command not found: ${command}. Type "help" to see available commands.`);
  positionCursor();
});
