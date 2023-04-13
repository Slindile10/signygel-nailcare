const form = document.getElementById('booking-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const phone = form.elements['phone'].value;
  const date = form.elements['date'].value;
  const time = form.elements['time'].value;
  const service = form.elements['service'].value;
  const notes = form.elements['notes'].value;
  
  // Here you can send the booking information to a server or save it to localStorage
  
  alert(`Thank you for booking an appointment, ${name}!`);
  
  form.reset(); // Reset the form after submission
});
