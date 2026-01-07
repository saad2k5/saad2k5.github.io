const input = document.getElementById('command-input');
const output = document.getElementById('output');

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

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    if (command === 'clear') {
      output.innerHTML = '';
    } else if (commands[command]) {
      appendLine(commands[command]);
    } else if (command) {
      appendLine(`Command not found: ${command}. Type 'help' to see commands.`);
    }
    input.value = '';
  }
});

function appendLine(text) {
  const lines = text.split('\n');
  lines.forEach(line => {
    const div = document.createElement('div');
    div.className = 'line';
    div.innerHTML = line;
    output.appendChild(div);
  });
  // Scroll to bottom
  output.scrollTop = output.scrollHeight;
}
