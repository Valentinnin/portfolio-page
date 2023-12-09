// readmePopup.js
function showReadme() {
    fetch('README.md')
        .then(response => response.text())
        .then(text => {
            var converter = new showdown.Converter();
            var html = converter.makeHtml(text);
            document.getElementById('readmeContent').innerHTML = html;
            document.getElementById('readmePopup').style.display = 'block';
        });
}


function closeReadme() {
    document.getElementById('readmePopup').style.display = 'none';
}
