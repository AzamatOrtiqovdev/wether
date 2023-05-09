const locationElements = document.querySelector("#location"),
      cardElement = document.querySelector("#card"),
      detailsElement = document.querySelector("#details"),
      wetherIconElement = document.querySelector("#wether-icon"),
      overlayElements = document.querySelector('#overlay')

locationElements.city.focus()

// loader
function loader(status) {
      if(status) {
            overlayElements.classList.remove("d-none")
      } else {
            overlayElements.classList.add("d-none")
      }
}

// Upadate UI
const updateUI = (wether) => {
      // console.log(wether)
      detailsElement.innerHTML = `
      <h5 class="mb-3">${wether.name}, ${wether.sys.country}</h5>
      <p class="mb-3">${wether.weather[0].main}, ${wether.weather[0].description}</p>
      <div class="display-4 mb-3">
            <span>${Math.round(wether.main.temp)}</span>
            <span>&deg;C</span>
      </div>
      `
      if(cardElement.classList.contains("d-none")) {
            cardElement.classList.remove("d-none")
      }

      wetherIconElement.src = `https://openweathermap.org/img/wn/${wether.weather[0].icon}@2x.png`

}


// get wether 
const getWether = async (city) => {
      const data = await getData(city) // This function runs in app.js, because We have attached js files to html file. For the getData function to work, first We must attach script.js file to index.html file, after We must attach app.js file to index.html file.

      if(data.cod != 200) {
            cardElement.classList.add('d-none')
            throw new Error("Bunday Shahar yo'q Iltimos qayta ma'lumot kiriting")
      }

      return data
}

// get Location
locationElements.addEventListener("submit", (event) => {
      event.preventDefault()
      // const cityName = locationElements.querySelector('[name="city"]').value.trim()
      const cityName = locationElements.city.value.trim()
      locationElements.reset()
      getWether(cityName)
            .then((data) => updateUI(data))
            .catch((error) => alert(error.message))
})