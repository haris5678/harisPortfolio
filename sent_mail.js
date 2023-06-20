document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  var form = event.target;
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();

  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    if (xhr.status === 200) {
      // Form submission successful
      document.getElementById('popup-message').textContent = 'I will respond to you soon!';
      showPopup();
      form.reset(); // Clear the form fields
    } else {
      // Form submission failed
      document.getElementById('popup-message').textContent = 'Failed to submit the form';
      showPopup();
    }
  };

  xhr.send(formData);
});

function showPopup() {
  var popupOverlay = document.getElementById('popup-overlay');
  var popup = document.getElementById('popup');
  var form = document.getElementById('contact-form');

  popupOverlay.style.display = 'block';
  popup.style.display = 'block';

  // Position the popup in front of the form
  var formRect = form.getBoundingClientRect();
  popup.style.top = formRect.top + formRect.height / 2 + 'px';
  popup.style.left = formRect.left + formRect.width / 2 + 'px';

  setTimeout(function () {
    popupOverlay.style.display = 'none';
    popup.style.display = 'none';
  }, 3000); // Hide the popup after 3 seconds (adjust the duration as needed)
}

document.querySelector('#close').addEventListener('click', function () {
  var popupOverlay = document.getElementById('popup-overlay');
  var popup = document.getElementById('popup');

  popupOverlay.style.display = 'none';
  popup.style.display = 'none';
});