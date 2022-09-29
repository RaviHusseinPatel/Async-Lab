
window.addEventListener("DOMContentLoaded", () => {

const section = document.getElementById("sectioniD");
    const button = document.getElementById("allCountriesButtoniD");

    const fetchallCountries = async () => {

        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        image.src = jsonData.url;
    }
    button.addEventListener("click",fetchallCountries);
})