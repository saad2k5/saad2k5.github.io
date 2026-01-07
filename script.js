const output = document.getElementById('output');
const input = document.getElementById('command-input');

const commands = {
  help: `
Available commands:
- about      → About Me
- skills     → My Skills
- projects   → My Projects
- contact    → Contact Info
- clear      → Clear terminal
`,
  about: `
Hi, I'm Saad Waqas 👋
A passionate developer and tech enthusiast.
I create interactive web experiences and terminal-style portfolios.
`,
  skills: `
My Skills:
- HTML / CSS / JavaScript
- React.js / Node.js
- Git & GitHub
- Python & Automation
`,
  projects: `
Projects:
1. Interactive Portfolio → https://saad2k5.github.io/
2. Project 2 → Link here
3. Project 3 → Link here
`,
  contact: `
Contact Me:
- LinkedIn: https://www.linkedin.com/in/muhammad-saad-waqas-91210a331/
- GitHub: https://github.com/saad2k5
- Email: your.email@example.com
`
};

// ----------------- Typing Effect -----------------
function typeLine(text, delay = 30, callback = null) {
  let i = 0;
  const lineDiv = document.createElement('div');
  lineDiv.className = 'line';
  output.appendChild(lineDiv);

  function typeChar() {
    if (i < text.length) {
      lineDiv.innerHTML += text[i];
      i++;
      output.scrollTop = output.scrollHeight;
      setTimeout(typeChar, delay);
    } else if (callback) {
      callback();
    }
  }

  typeChar();
}

// ----------------- Auto Intro -----------------
const intro = [
  "Welcome to \x1b[1mSaad Waqas\x1b[0m's Portfolio!",
  "Type 'help' to see available commands."
];

function startIntro(lines, index = 0) {
  if (index < lines.length) {
    typeLine(lines[index], 50, () => startIntro(lines, index + 1));
  }
}

// Start auto intro
startIntro(intro);

// ----------------- Command Handling -----------------
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    if (command === 'clear') {
      output.innerHTML = '';
    } else if (commands[command]) {
      typeLine(commands[command]);
    } else if (command) {
      typeLine(`Command not found: ${command}. Type 'help' to see commands.`);
    }
    input.value = '';
  }
});
