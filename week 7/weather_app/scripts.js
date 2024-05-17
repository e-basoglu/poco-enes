document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
  });
  
  function fetchWeather(city) {
   
    const apiKey = '80b6273138ec128a3e6745a7f87ced91';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching weather data');
        }
        return response.json();
      })
      .then(data => {
        const temperature = data.main.temp;
        document.getElementById('temperature').textContent = temperature + '°C';
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
      });
  }
  

  /* function fetchBackground(city) {
    const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY';
    const query = encodeURIComponent(city);
    const backgroundUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`;
  
    fetch(backgroundUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching background image');
        }
        return response.json();
      })
      .then(data => {
        const imageUrl = data.urls.regular;
        document.getElementById('backgroundImage').style.backgroundImage = `url(${imageUrl})`;
      })
      .catch(error => {
        console.error('Error fetching background image:', error);
        // Optionally, you can display a default background image here
      });
  } */