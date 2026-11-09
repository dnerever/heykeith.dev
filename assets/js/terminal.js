(() => {
  const terminal = document.querySelector("[data-terminal]");
  if (!terminal) return;

  const form = terminal.querySelector("[data-terminal-form]");
  const input = terminal.querySelector("#terminal-input");
  const inputWrap = terminal.querySelector(".terminal__input-wrap");
  const output = terminal.querySelector("#terminal-output");
  const measureContext = document.createElement("canvas").getContext("2d");
  const history = [];
  let historyIndex = 0;

  const positionCursor = () => {
    const inputStyle = getComputedStyle(input);

    measureContext.font = inputStyle.font;
    const caretPosition = input.selectionStart ?? input.value.length;
    const textWidth = measureContext.measureText(input.value.slice(0, caretPosition)).width;
    inputWrap.style.setProperty("--terminal-cursor-offset", `${textWidth - input.scrollLeft}px`);
  };

  const findSection = (sectionName) => Array.from(document.querySelectorAll(".page-content h2"))
    .find((element) => element.textContent.trim().toLowerCase().includes(sectionName));

  const sectionItems = (sectionName) => {
    const list = findSection(sectionName)?.nextElementSibling;

    return list?.tagName === "UL"
      ? Array.from(list.children)
        .filter((item) => item.tagName === "LI")
        .map((item) => item.textContent.trim())
      : [];
  };

  const sectionParagraph = (sectionName) => {
    const paragraph = findSection(sectionName)?.nextElementSibling;
    return paragraph?.tagName === "P" ? paragraph.textContent.trim() : "";
  };

  const stackItems = () => {
    const paragraph = findSection("whoami")?.nextElementSibling;

    return paragraph
      ? Array.from(paragraph.querySelectorAll("strong, b")).map((item) => item.textContent.trim()).join(", ")
      : "";
  };

  const projectList = () => sectionItems("projects").join("\n") || "No projects are listed on this page.";
  const contactList = () => sectionItems("contact").join("\n") || "No contact details are listed on this page.";

  const writeLine = (text, className = "terminal__response") => {
    const line = document.createElement("p");
    line.className = className;
    line.textContent = text;
    output.append(line);
    output.scrollTop = output.scrollHeight;
  };

  const commands = {
    help: () => "Available commands: help, about, projects (ls), contact, education, stack, history, clear.",
    about: () => sectionParagraph("whoami") || "No about information is listed on this page.",
    projects: projectList,
    ls: projectList,
    contact: contactList,
    "contact --all": contactList,
    education: () => sectionParagraph("education") || "No education details are listed on this page.",
    stack: () => stackItems() || "No technology stack is listed on this page.",
    history: () => history.map((entry, index) => `${index + 1}  ${entry}`).join("\n") || "No commands in history.",
  };
  form.hidden = false;

  input.addEventListener("focus", positionCursor);
  input.addEventListener("input", positionCursor);
  input.addEventListener("keyup", positionCursor);
  input.addEventListener("click", positionCursor);
  input.addEventListener("scroll", positionCursor);
  input.addEventListener("select", positionCursor);
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (historyIndex > 0) {
        historyIndex -= 1;
        input.value = history[historyIndex];
        positionCursor();
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex < history.length) {
        historyIndex += 1;
        input.value = history[historyIndex] ?? "";
        positionCursor();
      }
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = input.value.trim().toLowerCase();

    if (!command) {
      positionCursor();
      return;
    }

    history.push(command);
    historyIndex = history.length;
    writeLine(`keith@heykeith.dev:~$ ${command}`, "terminal__line");
    input.value = "";

    if (command === "clear") {
      output.replaceChildren();
      positionCursor();
      return;
    }

    const response = Object.hasOwn(commands, command)
      ? commands[command]()
      : `Command not found: ${command}. Type "help" to see available commands.`;
    writeLine(response);
    positionCursor();
  });
})();
