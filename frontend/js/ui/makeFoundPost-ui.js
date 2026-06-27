    // Dynamic City Dropdown
    const districtCities = {
        "Colombo": ["Colombo", "Dehiwala", "Moratuwa", "Nugegoda"],
        "Kandy": ["Kandy", "Peradeniya", "Gampola"]
    };

    const districtSelect = document.getElementById('district');
    const citySelect = document.getElementById('city');

    districtSelect.addEventListener('change', () => {
        const district = districtSelect.value;
        citySelect.innerHTML = '<option value="">Select City</option>';
        if(district && districtCities[district]){
            districtCities[district].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });

    // Enhanced Pet Image Preview
    const petImageInput = document.getElementById('petImage');
    const imagePreview = document.getElementById('imagePreview');
    const uploadContent = document.getElementById('uploadContent');

    petImageInput.addEventListener('change', function() {
        const file = this.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                imagePreview.style.backgroundImage = `url(${e.target.result})`;
                imagePreview.style.backgroundSize = 'cover';
                imagePreview.style.backgroundPosition = 'center';
                uploadContent.style.display = 'none';

                // Add overlay for re-upload
                const overlay = document.createElement('div');
                overlay.className = 'absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer';
                overlay.innerHTML = '<div class="text-white text-center"><i class="fas fa-camera text-2xl mb-2"></i><p class="text-sm">Change Photo</p></div>';
                imagePreview.appendChild(overlay);
            }
            reader.readAsDataURL(file);
        }
    });

    // Character Counter
    const descriptionTextarea = document.getElementById('postDescription');
    const charCount = document.getElementById('charCount');

    descriptionTextarea.addEventListener('input', function() {
        const count = this.value.length;
        charCount.textContent = count;

        if(count > 450) {
            charCount.style.color = '#ef4444';
        } else if(count > 400) {
            charCount.style.color = '#f59e0b';
        } else {
            charCount.style.color = '#9ca3af';
        }
    });

    // Floating Labels (simplified since we removed them)
    const formInputs = document.querySelectorAll('input, select, textarea');

    formInputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });

    // Profile dropdown
    const profileBtn = document.getElementById("profileBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle("hidden");
    });

    window.addEventListener("click", () => {
        dropdownMenu.classList.add("hidden");
    });

    // Form validation with visual feedback
    // Form validation with visual feedback
    const form = document.getElementById('postForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loader
        document.getElementById('loader').classList.remove('hidden');

        // Simulate form submission
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');

            // Show success message
            if(typeof Swal !== 'undefined') {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your pet post has been created successfully.',
                    icon: 'success',
                    confirmButtonColor: '#667eea',
                    confirmButtonText: 'View Posts'
                }).then(() => {
                    window.location.href = './foundPostSection.html';
                });
            } else {
                alert('Post created successfully!');
                window.location.href = './foundPostSection.html';
            }
        }, 1500);  // ✅ close setTimeout
    }); // ✅ close submit listener