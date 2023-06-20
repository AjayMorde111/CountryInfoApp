function getCountryInformation() {
    var countryInput = document.getElementById("country-input");
    var countryName = countryInput.value;
  
    fetch(`https://restcountries.com/v2/name/${countryName}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayCountryInformation(data);
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  function displayCountryInformation(countries) {
    var countryInfo = document.getElementById("country-info");
    countryInfo.innerHTML = "";
  
    countries.forEach(function(country) {
      var name = country.name;
      var capital = country.capital;
      var languages = country.languages.map(function(language) {
        return language.name;
      });
      var population = country.population;
      var area = country.area;
  
      var countryName = document.createElement("h2");
      countryName.textContent = name;
  
      var countryCapital = document.createElement("p");
      countryCapital.textContent = "Capital: " + capital;
  
      var countryLanguages = document.createElement("p");
      countryLanguages.textContent = "Languages: " + languages.join(", ");
  
      var countryPopulation = document.createElement("p");
      countryPopulation.textContent = "Population: " + population.toLocaleString();
  
      var countryArea = document.createElement("p");
      countryArea.textContent = "Area: " + area.toLocaleString() + " km²";
  
      countryInfo.appendChild(countryName);
      countryInfo.appendChild(countryCapital);
      countryInfo.appendChild(countryLanguages);
      countryInfo.appendChild(countryPopulation);
      countryInfo.appendChild(countryArea);
    });
  }
  