(function () {
  "use strict";

  // 1. Mobile menu toggle
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector("nav ul");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // 2. Highlight the current page link
  var current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // 3. Contact form validation
  var form = document.getElementById("contact-form");
  if (!form) return;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(id, message) {
    document.getElementById(id + "-error").textContent = message;
    return message === "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();

    var okName = setError("name", name.length < 2 ? "Enter your full name." : "");
    var okEmail = setError("email", emailPattern.test(email) ? "" : "Enter a valid email address.");
    var okMsg = setError("message", message.length < 10 ? "Write at least 10 characters." : "");

    if (okName && okEmail && okMsg) {
      form.reset();
      document.getElementById("success").classList.add("show");
    }
  });
})();
