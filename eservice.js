document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const notificationsSection = document.getElementById('notifications');

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedServiceCenter = document.getElementById('serviceCenter').value;
        const appointmentDate = document.getElementById('appointmentDate').value;

        // Save appointment data (you'd need a backend for this)
        // Display a success message or update the notifications section
        const notificationMessage = `Appointment scheduled at ${selectedServiceCenter} on ${appointmentDate}`;
        const notificationElement = document.createElement('p');
        notificationElement.textContent = notificationMessage;

        // Append the new notification to the notifications container
        notificationsSection.appendChild(notificationElement);
    });
});