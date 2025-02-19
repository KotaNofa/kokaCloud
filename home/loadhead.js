fetch('/template/head.html')
    .then(response => response.text())
    .then(data => {
        document.head.innerHTML += data;
    })
    .catch(error => console.error('Error loading head:', error));