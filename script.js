// Oliveros
// Handle Feedback Form Submission with Math Methods and Conditional Statements
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("comment");
  var resultDiv = document.getElementById("feedbackResult");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Get values
      var email = document.getElementById("email").value.trim();
      var feedback = document.getElementById("feedback").value.trim();
      let rating = document.getElementById("rating").value;

      

      // Validation & Example of Math Methods/Conditionals
      if (isNaN(rating)) {
        resultDiv.innerHTML = '<div class="alert alert-danger">Please enter a valid number for rating.</div>';
        return;
      }

      // Clamp rating between 1 and 5 using Math.min/Math.max
      rating = Math.max(1, Math.min(5, rating));

      // Give feedback based on rating (Conditional Statements)
      let message = "";
      if (rating === 5) {
        message = "Thank you for the amazing rating!";
      } else if (rating >= 4) {
        message = "We're glad you enjoyed it! Thank you!";
      } else if (rating >= 3) {
        message = "Thanks for your feedback! We'll strive to improve.";
      } else if (rating >= 2) {
        message = "We appreciate your honesty. We'll work on getting better.";
      } else {
        message = "Sorry that your experience wasn't great. Please let us know how we can improve.";
      }

      // Display result
      resultDiv.innerHTML = `
        <div class="alert alert-success">
          <strong>${message}</strong><br>
          <em>Your feedback:</em> "${feedback}"<br>
          <em>Your rating:</em> ${rating}
        </div>
      `;
    });
  }
});
