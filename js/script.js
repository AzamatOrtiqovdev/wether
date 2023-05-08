const KEY = '85eb218234d1f9599736f1276536beeb'

const getData = async (city) => {

      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
      const request = await fetch(URL)
      const data = await request.json()

      return data
}

