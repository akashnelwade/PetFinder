const stateSelect =
document.getElementById("stateFilter") ||
document.getElementById("state");

const districtSelect =
document.getElementById("districtFilter") ||
document.getElementById("district");

const citySelect =
document.getElementById("cityFilter") ||
document.getElementById("city");

function populateStates() {


if (!stateSelect) return;

stateSelect.innerHTML = '<option value="">Select State</option>';

Object.keys(locationData).forEach(state => {

    stateSelect.innerHTML +=
        `<option value="${state}">${state}</option>`;

});


}

function populateDistricts() {


if (!districtSelect || !stateSelect) return;

districtSelect.innerHTML = '<option value="">Select District</option>';

if (citySelect) {
    citySelect.innerHTML = '<option value="">Select City</option>';
}

const state = stateSelect.value;

if (!state || !locationData[state]) {
    return;
}

Object.keys(locationData[state]).forEach(district => {
    districtSelect.innerHTML += `<option value="${district}">${district}</option>`;
});


}

function populateCities() {


if (!citySelect || !districtSelect || !stateSelect) return;

citySelect.innerHTML =
    '<option value="">Select City</option>';

const state = stateSelect.value;
const district = districtSelect.value;

if (
    !state ||
    !district ||
    !locationData[state] ||
    !locationData[state][district]
) {
    return;
}

locationData[state][district].forEach(city => {
    citySelect.innerHTML += `<option value="${city}">${city}</option>`;
});


}

function initializeLocationDropdowns() {

populateStates();

if (stateSelect) {
    stateSelect.addEventListener("change", populateDistricts);
}

if (districtSelect) {
    districtSelect.addEventListener("change", populateCities);
}


}

document.addEventListener("DOMContentLoaded", function () {


initializeLocationDropdowns();


});

