const bookingForm = document.getElementById('bookingForm');
const confirmationDiv = document.getElementById('confirmation');
const dateInput = document.getElementById('date');

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

bookingForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const startPoint = bookingForm.startPoint.value;
  const destination = bookingForm.destination.value;
  const date = bookingForm.date.value;
  const passengers = bookingForm.passengers.value;

  // Validation
  if (!startPoint || !destination || !date || !passengers) {
    alert('Please fill out all fields correctly.');
    return;
  }

  if (startPoint === destination) {
    alert('Start Point and Destination cannot be the same.');
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

  confirmationDiv.textContent = `Booking confirmed from ${startPoint} to ${destination} on ${date}, for ${passengers} passenger${passengers > 1 ? 's' : ''}. Thank you!`;
  confirmationDiv.classList.remove('hidden');

  bookingForm.reset();
  dateInput.setAttribute('min', today);
});
