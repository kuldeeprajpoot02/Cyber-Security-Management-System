function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('active-section');
        section.classList.add('hidden-section');
    });

    document.getElementById(sectionId).classList.remove('hidden-section');
    document.getElementById(sectionId).classList.add('active-section');
}

function addUser() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (username === '') {
        alert('Please enter a username.');
        return;
    }

    const userList = document.getElementById('userList');
    const li = document.createElement('li');
    li.textContent = username;

    userList.appendChild(li);
    usernameInput.value = '';
}

function addLog() {
    const logList = document.getElementById('logList');
    const li = document.createElement('li');

    const timestamp = new Date().toLocaleString();
    const logEntry = `Security event detected at ${timestamp}`;

    li.textContent = logEntry;
    logList.appendChild(li);
}
