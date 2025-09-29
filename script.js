const bookingForm = document.getElementById('bookingForm');
const confirmationDiv = document.getElementById('confirmation');
const dateInput = document.getElementById('date');

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

bookingForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const route = bookingForm.route.value;
  const date = bookingForm.date.value;
  const passengers = bookingForm.passengers.value;

  // Validation
  if (!route || !date || !passengers) {
    alert('Please fill out all fields correctly.');
    return;
  }

  if (new Date(date) < new Date(today)) {
    alert('Please select a valid travel date.');
    return;
  }

  if (passengers < 1 || passengers > 10) {
    alert('Number of passengers must be between 1 and 10.');
    return;
  }

  // Show confirmation message with icon
  confirmationDiv.innerHTML = `
    <img src="images/success.png" alt="Success" />
    <h2>Booking Confirmed!</h2>
    <p><strong>Route:</strong> ${route.replace('-', ' → ')}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Passengers:</strong> ${passengers}</p>
    <p>Thank you for booking with us! 🚌</p>
  `;
  confirmationDiv.classList.remove('hidden');

  // Reset form
  bookingForm.reset();
  dateInput.setAttribute('min', today);
});
