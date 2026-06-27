      // Enhanced form functionality
      document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("signupForm");
        const inputs = document.querySelectorAll(".input-field");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirmPassword");
        const submitBtn = document.getElementById("submitBtn");

        // Input focus effects
        inputs.forEach((input) => {
          input.addEventListener("focus", function () {
            this.parentElement.style.transform = "scale(1.02)";
          });

          input.addEventListener("blur", function () {
            this.parentElement.style.transform = "scale(1)";
          });
        });

        // Password strength checker
        passwordInput.addEventListener("input", function () {
          const strength = calculatePasswordStrength(this.value);
          updateStrengthIndicator(strength);
        });

        // Password confirmation
        function checkPasswordMatch() {
          const confirmError = document.querySelector(".confirm-error");
          if (
            confirmPasswordInput.value &&
            passwordInput.value !== confirmPasswordInput.value
          ) {
            confirmError.classList.remove("hidden");
            confirmPasswordInput.style.borderColor = "#ef4444";
          } else {
            confirmError.classList.add("hidden");
            confirmPasswordInput.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }
        }

        confirmPasswordInput.addEventListener("input", checkPasswordMatch);
        passwordInput.addEventListener("input", checkPasswordMatch);

        // Form submission
        form.addEventListener("submit", function (e) {


          // Add loading state
          submitBtn.classList.add("loading");
          submitBtn.disabled = true;

          // Remove loading state after a short delay (form will submit)
          setTimeout(() => {
            submitBtn.classList.remove("loading");
            submitBtn.disabled = false;
          }, 1000);
        });

        // Google Sign In
        googleSignIn.addEventListener("click", function () {
          this.style.transform = "scale(0.98)";
          setTimeout(() => {
            this.style.transform = "scale(1)";
          }, 150);

          // Simulate Google OAuth
          Swal.fire({
            title: "Google Sign In",
            text: "Redirecting to Google OAuth...",
            icon: "info",
            background: "rgba(15, 15, 35, 0.95)",
            color: "#fff",
            confirmButtonColor: "#667eea",
            timer: 2000,
            showConfirmButton: false,
          });
        });
      });

      // Password strength calculation
      function calculatePasswordStrength(password) {
        let strength = 0;
        if (password.length >= 6) strength += 25;
        if (password.length >= 10) strength += 25;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
        if (/\d/.test(password)) strength += 15;
        if (/[^a-zA-Z\d]/.test(password)) strength += 10;
        return Math.min(strength, 100);
      }

      function updateStrengthIndicator(strength) {
        const strengthBar = document.getElementById("strengthBar");
        strengthBar.style.width = strength + "%";

        if (strength < 25) {
          strengthBar.style.background = "#ef4444";
        } else if (strength < 50) {
          strengthBar.style.background = "#f59e0b";
        } else if (strength < 75) {
          strengthBar.style.background = "#10b981";
        } else {
          strengthBar.style.background =
            "linear-gradient(90deg, #10b981, #059669)";
        }
      }

      // Smooth scroll reveal animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      });

      // Observe form elements for reveal animation
      document
        .querySelectorAll(".input-group, .btn-primary, .btn-google")
        .forEach((el, index) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
          observer.observe(el);
        });