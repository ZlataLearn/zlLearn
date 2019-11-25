const replace = (string, search, value) => string.split(search).join(value);
const names = ["greeting", "name", "checkNumber", "date"];
function updateTextarea() {
	const template = document.querySelector('[name="template"]').value;
	let result = template;
    for (let name of names) {
    	result = replace(result, `{${name}}`, document.querySelector(`[name="${name}"]`).value);
    }
    document.querySelector('[name="text"]').value = result;
}
updateTextarea()
for (let name of names) {
	document.querySelector(`[name="${name}"]`).addEventListener('input', updateTextarea);
}
document.querySelector(`[name="template"]`).addEventListener('input', updateTextarea);
/*
const nameInput = document.querySelector('input');
const textarea = document.querySelector('textarea');
const template = document.querySelector('select');

nameInput.addEventListener('input',updateTextarea);
template.addEventListener('change', updateTextarea);
*/