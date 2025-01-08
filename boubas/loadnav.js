fetch('/template/navbar.html')  
    .then(response => response.text())  
    .then(data => {
        document.querySelector('.navbarcontainer').innerHTML = data;  
    })
    .catch(error => console.error('Error loading navbar:', error)); 
