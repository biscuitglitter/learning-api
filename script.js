"use strict";

const container = document.querySelector('.countries');

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h4 class="country__name">Name: ${data.name}</h4>
          <h4 class="country__capital">Capital: ${data.capital}</h4>
       </div>
  </article>
`
container.insertAdjacentHTML("beforeend", html)
}

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`).then(
    response => response.json()).then(
      data => renderCountry(data[0])
    ).then(data => renderCountry(data, "neighbour"))
}

getCountryData("algeria")

