const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function previewText() {
    const text = editor.value;
    const html = marked(text, { breaks: true });
    preview.innerHTML = html;
}

editor.addEventListener('input', previewText);