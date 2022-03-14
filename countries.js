const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
    console.log(countries);
    const allCountriesHTML = countries.map(country => showCountryHTML(country))
    const div = document.getElementById('countries');
    div.innerHTML = allCountriesHTML.join(' ')
}
const showCountryHTML = country => {
    return `
    <div class="country"><h1>${country.name.common}</h1>
    <img src="${country.flags.png}" width="100px"></img>
    <p>${country.capital} </p></div>`
}

loadCountry();