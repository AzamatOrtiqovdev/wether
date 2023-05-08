const locationElements = document.querySelector("#location"),
      cardElement = document.querySelector("#card"),
      detailsElement = document.querySelector("#details"),
      wetherIconElement = document.querySelector("#wether-icon")

// get wether 
const getWether = async (city) => {
      const data = await getData(city)
      return data
}

// get Location
locationElements.addEventListener("submit", (event) => {
      event.preventDefault()
      // const cityName = locationElements.querySelector('[name="city"]').value.trim()
      const cityName = locationElements.city.value.trim()
      locationElements.reset()
      getWether(cityName)
})