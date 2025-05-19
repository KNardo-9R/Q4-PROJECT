// Oliveros
// Feedback Form Script with Character Counter and Live Preview

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("comment");
  var resultDiv = document.getElementById("feedbackResult");
  var feedbackInput = document.getElementById("feedback");
  var ratingInput = document.getElementById("rating");
  var emailInput = document.getElementById("email");

  // --- Character counter setup ---
  var maxChars = 200;
  // Create counter element
  var charCounter = document.createElement("div");
  charCounter.style.textAlign = "right";
  charCounter.style.fontSize = "0.9em";
  charCounter.style.color = "#7389AE";
  charCounter.id = "charCounter";
  feedbackInput.parentNode.appendChild(charCounter);

  // --- Live preview setup ---
  var livePreview = document.createElement("div");
  livePreview.className = "mt-2";
  livePreview.id = "livePreview";
  feedbackInput.parentNode.appendChild(livePreview);

  // Update both character counter and live preview on input
  feedbackInput.addEventListener("input", function() {
    var left = maxChars - feedbackInput.value.length;
    if (left < 0) left = 0;
    charCounter.textContent = left + " characters left";
    if (feedbackInput.value.length > 0) {
      livePreview.innerHTML = "<b>Live Preview:</b> " + feedbackInput.value;
    } else {
      livePreview.innerHTML = "";
    }
  });
  // Initialize the character counter
  charCounter.textContent = maxChars + " characters left";

  // --- Feedback form submission handler ---
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Get values and trim
      var email = emailInput.value.trim();
      var feedback = feedbackInput.value.trim();
      var rating = ratingInput.value.trim();

      // Basic validation
      if (email === "" || feedback === "" || rating === "") {
        resultDiv.innerHTML = '<div class="alert alert-danger">Please fill out all fields.</div>';
        return;
      }

      if (isNaN(rating)) {
        resultDiv.innerHTML = '<div class="alert alert-danger">Please enter a number for rating!</div>';
        return;
      }

      // Clamp rating between 1 and 5
      rating = Math.max(1, Math.min(5, Number(rating)));

      // Feedback message
      var message = "";
      if (rating == 5) {
        message = "Wow! Thanks for the awesome rating!";
      } else if (rating >= 4) {
        message = "Thank you! We are happy you liked it!";
      } else if (rating >= 3) {
        message = "Thanks! We will try to get even better.";
      } else if (rating >= 2) {
        message = "Thanks for your honesty. We will work harder!";
      } else {
        message = "Sorry you didn't like it. Please tell us how to improve.";
      }

      // Random emoji for fun
      var emojis = ['😊','👍','🎉','😃','😄','🥳','🙌','✨'];
      var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

      // Show result
      resultDiv.innerHTML =
        "<div class='alert alert-success'><b>" + message + " " + randomEmoji + "</b><br>" +
        "<i>Your feedback:</i> \"" + feedback + "\"<br>" +
        "<i>Your rating:</i> " + rating + "</div>";

      // Reset form, counter, and preview
      form.reset();
      charCounter.textContent = maxChars + " characters left";
      livePreview.innerHTML = "";
    });
  }
});
