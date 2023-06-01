document.getElementById('discordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the form data
    var form = event.target;
    var url = form.action + '?' + new URLSearchParams(new FormData(form)).toString();
  
    // Open the authorization URL in a new window or redirect to it
    window.open(url, '_blank'); // Open in a new tab
    // window.location.href = url; // Redirect to the authorization URL
  });