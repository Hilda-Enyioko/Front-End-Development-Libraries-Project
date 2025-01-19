const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function previewText() {
    const text = editor.value;
    const html = marked(text, { breaks: true });
    preview.innerHTML = html;
}

function initializeText() {
    const defaultMarkdown = `
# Welcome to the Markdown Previewer
---

This is a simple markdown previewer created by: [**Hilda Enyioko**](https://github.com/Hilda-Enyioko).


## Features
---
- Live Preview
- Easy to Use

### You can add:

### A Heading
\`Inline Code\`
\`\`\`
Block Quote
\`\`\`

![An Image](./image.jpg)
`;

    editor.value = defaultMarkdown;
    previewText();
}

editor.addEventListener('input', previewText);
initializeText();