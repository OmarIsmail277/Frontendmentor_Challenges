// TODO:
// API CALL
// Theme toggle
// Search
// Filter
// Modal

const countriesElement = document.getElementById("countries");
const toggleBtn = document.getElementById("toggle");
const filterBtn = document.getElementById("filter");
const regionFilters = filterBtn.querySelectorAll("li");
const filterList = document.getElementById("filter__list");
const searchElement = document.getElementById("search");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

getCountries();

async function getCountries(){
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();

    displayCountries(countries);
}

function displayCountries(countries){

    countries.forEach( country => {
        const countryElement = document.createElement('div');
        countryElement.classList.add("country");

        if(country.capital === "Jerusalem") {
        country.capital = "No Capital";
        countryElement.style.color='red';
        countryElement.style.textDecoration = "line-through";
        }
        if(country.capital === "Ramallah") {
            country.capital = "Jerusalem";
        }

        countryElement.innerHTML = `
        <div class="country__header">
            <img src="${country.flag}" alt="${country.name}" />
        </div>
        <div class="country__body">
            <h2 class="country__name">${country.name}</h2>
            <p><strong>Population: </strong>${country.population}</p>
            <p class="country__region"><strong>Region: </strong>${country.region}</p>
            <p><strong>Capital: </strong>${country.capital}</p>
        </div>
        `;  

        countryElement.addEventListener('click', () => {
            modal.style.display = "flex";
            showCountryDetails(country);
        });
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
            
        });
        countriesElement.appendChild(countryElement);
    });
}

function showCountryDetails(country){
    const modalInfo =   modal.querySelector(".modal__info");
    const modalImage =   modal.querySelector(".modal__image");

    modalImage.src = country.flag;
    var borders = "";
    for (var i = 0; i<country.borders.length; i++){
        borders += `<span class="border__info">${country.borders[i]}</span>`
    }

    modalInfo.innerHTML = `
        <h2>${country.name}</h2>
        <p><strong>Native Name: </strong>${country.nativeName}</p>
        <p><strong>Population: </strong>${country.population}</p>
        <p>
        <strong>Region: </strong>${country.region}</p>
        <p><strong>Sub Region: </strong>${country.subregion}</p>
        <p><strong>Capital: </strong>${country.capital}</p>
        <p><strong>Top Level Domain: </strong>${country.topLevelDomain[0]}</p>
        <p><strong>Currencies: </strong>
        ${country.currencies.map(currency => currency.code)}
        </p>
        <p><strong>Currencies: </strong>
        ${country.languages.map(lang => lang.name)}
        </p>
        <p><strong>Borders: </strong>
        ${borders}
        </p>
    `;

}

// toggle Theme
toggleBtn.addEventListener('click', () =>{
    document.body.classList.toggle("dark");
});

// Show & Hide Filters
filterBtn.addEventListener('click', () =>{
    filterList.classList.toggle("open");
});

// Search by name
searchElement.addEventListener('input', e =>{
    const { value } = e.target;
    // const val = e.target.value;
    const userName = document.querySelectorAll(".user__name");

    userName.forEach(name => {
        if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
            name.parentElement.parentElement.style.display = "block";
        }
        else {
            name.parentElement.parentElement.style.display = "none";
        }
     });
});

// add a filter on the li's inside the dropdown
regionFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const value = filter.innerText;
        const countryRegion = document.querySelectorAll(".country__region");

        countryRegion.forEach(region => {
            if(region.innerText.toLowerCase().includes(value.toLowerCase()) || value === "All") {
                region.parentElement.parentElement.style.display = "block";
            }
            else {
                region.parentElement.parentElement.style.display = "none";
            }
        });

    })
});

