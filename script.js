document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Send data to Google Apps Script function using fetch API
  fetch('https://script.google.com/macros/s/AKfycbzKx2dG48J3el04L9ZHRO5Q50tYy4XgueoFaL-KaemElEaPS5WmKOZsyg2OH7zdwmST/exec', {
    method: 'POST',
    body: JSON.stringify({ name, date, time }),
  })
  .then(response => response.text())
  .then(data => {
    console.log('Success:', data);
    // Show a success message to the user (optional)
  })
  .catch(error => {
    console.error('Error:', error);
    // Show an error message to the user (optional)
  });
});
