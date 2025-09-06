// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name && email && message){
    alert("Thank you, " + name + "! Your message has been sent.");
    this.reset();
  } else {
    alert("Please fill all fields before submitting.");
  }
});

function showDetails() {
      const details = document.getElementById("detailsSection");
      // toggle details section
      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
      } else {
        details.style.display = "none";
      }
    }

 function openDetails() {
    // open new page
    window.open("fundamental-rights.html", "_blank"); 
    // if you want to open in same tab, use:
    // window.location.href = "fundamental-rights.html";
  }


  (function() {
    emailjs.init("B15xj_BNW0V4YQqfZ");  // Replace with your EmailJS Public Key
  })();

  // // Contact form submit
  // document.getElementById("contactForm").addEventListener("submit", function(event) {
  //   event.preventDefault();
  //   emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_CONTACT_TEMPLATE_ID", this)
  //     .then(function() {
  //       alert("Message sent successfully ✅");
  //     }, function(error) {
  //       alert("Failed to send ❌: " + JSON.stringify(error));
  //     });
  // });

  // Feedback form submit
  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("service_egbmd1x", "template_jglblww", this)
      .then(function() {
        alert("Feedback submitted successfully 🎉 Thank you!");
      }, function(error) {
        alert("Failed to send feedback ❌: " + JSON.stringify(error));
      });
  });
