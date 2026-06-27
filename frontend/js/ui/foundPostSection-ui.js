  // District-City mapping
  const districtCities = {
    "Colombo": ["Colombo", "Dehiwala", "Moratuwa", "Nugegoda"],
    "Kandy": ["Kandy", "Peradeniya", "Gampola"]
  };

  const districtFilter = document.getElementById('districtFilter');
  const cityFilter = document.getElementById('cityFilter');

  districtFilter.addEventListener('change', () => {
    const district = districtFilter.value;
    cityFilter.innerHTML = '<option value="">All Cities</option>';

    if(district && districtCities[district]) {
      districtCities[district].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
      });
    }
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