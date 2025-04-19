const BASE_URL = 'https://your-app-name.herokuapp.com'; // Замените на ваш URL

document.getElementById('appointmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const specialist = document.getElementById('specialist').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const format = document.getElementById('format').value;
    const name = document.getElementById('name').value;
    const group = document.getElementById('group').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const message = `Запись успешно выполнена!<br>
                     Специалист: ${specialist}<br>
                     Дата: ${date}<br>
                     Время: ${time}<br>
                     Формат: ${format === 'online' ? 'Онлайн (ссылка на встречу в Teams)' : 'Офлайн (кабинет психолога)'}<br>
                     Имя: ${name}<br>
                     Группа: ${group}<br>
                     Телефон: ${phone}<br>
                     Почта: ${email}`;

    document.getElementById('appointmentMessage').innerHTML = message;

    // Отправка данных на сервер
    const response = await fetch(`${BASE_URL}/sessions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date,
            psychologist: specialist,
            reason: 'Консультация',
            report: 'https://example.com/report'
        })
    });

    if (response.ok) {
        alert('Сессия успешно добавлена');
    } else {
        alert('Ошибка при добавлении сессии');
    }
});

// Загрузка сессий при загрузке страницы личного кабинета
document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch(`${BASE_URL}/sessions`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const sessions = await response.json();
    const tableBody = document.querySelector('#sessionsTable tbody');
    sessions.forEach(session => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${session.date}</td>
            <td>${session.psychologist}</td>
            <td>${session.reason}</td>
            <td><a href="${session.report}" target="_blank">Отчет</a></td>
        `;
        tableBody.appendChild(row);
    });
});
