export function showNotification(message) {
    const notification = document.createElement('div');
    const p = document.createElement('p');
    notification.className = 'notification';
    p.textContent = message;
    notification.appendChild(p);
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000)
}
