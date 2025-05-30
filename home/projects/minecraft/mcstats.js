document.addEventListener("DOMContentLoaded", function () {
    fetch('/mcstats')
        .then(response => response.json())
        .then(data => {
            const statusDiv = document.querySelector('.mc-motd');
            statusDiv.innerHTML = '';

            if (data) {
                const motdInfo = document.createElement('div');
                motdInfo.className = 'motd-info';
                motdInfo.innerHTML = data.result.motd.html;
                statusDiv.appendChild(motdInfo);
            } else {
                statusDiv.innerHTML = '<p>Invalid server response</p>';
            }
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('/mcstats')
        .then(response => response.json())
        .then(data => {
            const statusDiv = document.querySelector('.mc-image');
            statusDiv.innerHTML = '';

            if (data) {
                const iconImg = document.createElement('img');
                iconImg.className = 'server-icon';
                iconImg.src = data.result.icon;
                statusDiv.appendChild(iconImg);
            } else {
                statusDiv.innerHTML = '<p>Invalid server response</p>';
            }
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('/mcstats')
        .then(response => response.json())
        .then(data => {
            const statusDiv = document.querySelector('.mc-online');
            statusDiv.innerHTML = '';

            if (data) {
                const onlineStatus = document.createElement('div');
                onlineStatus.className = 'online-status';
                onlineStatus.innerHTML = `<h3>Online Status:</h3><p>${data.result.online ? 'Online' : 'Offline'}</p>`;
                statusDiv.appendChild(onlineStatus);
            } else {
                statusDiv.innerHTML = '<p>Invalid server response</p>';
            }
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('/mcstats')
        .then(response => response.json())
        .then(data => {
            const statusDiv = document.querySelector('.mc-players');
            statusDiv.innerHTML = '';

            if (data) {
                const playersInfo = document.createElement('div');
                playersInfo.className = 'mc-players';
                playersInfo.innerHTML = `${data.result.players.online || '0'} / ${data.result.players.max || 'N/A'}`;
                statusDiv.appendChild(playersInfo);
            } else {
                statusDiv.innerHTML = '<p>Invalid server response</p>';
            }
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('/mcstats')
        .then(response => response.json())
        .then(data => {
            const statusDiv = document.querySelector('.mc-version');
            statusDiv.innerHTML = '';

            if (data) {
                const versionInfo = document.createElement('div');
                versionInfo.className = 'version-info';
                versionInfo.innerHTML = data.result.version.name_raw;
                statusDiv.appendChild(versionInfo);
            } else {
                statusDiv.innerHTML = '<p>Invalid server response</p>';
            }
        });
});
