let londonCity = document.querySelector(".london"),
  parisCity = document.querySelector(".paris"),
  newYorkCity = document.querySelector(".new-york"),
  kharkivCity = document.querySelector(".kharkiv");

function weatherCity() {
  let city = document.querySelector(".i-1").value;

  document.querySelector(".pricing-table").style.display = "flex";

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70e1ed322b02acbc57d443dd91065f3e`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".package-name").textContent = data.name;
      document.querySelector(".price").innerHTML =
        Math.round(data.main.temp - 273) + "&deg;";
      document.querySelector(".disclaimer").textContent =
        data.weather[0]["description"];
      //https://openweathermap.org/img/wn/02d@1x.png
      document.querySelector(
        ".features li"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(function () {
      // catch any errors
    });
}

document.querySelector(".b-1").onclick = weatherCity;
document.querySelector(".Kyiv").onclick = () => {
  document.querySelector(".pricing-table").style.display = "flex";
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=703448&appid=70e1ed322b02acbc57d443dd91065f3e"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".package-name").textContent = data.name;
      document.querySelector(".price").innerHTML =
        Math.round(data.main.temp - 273) + "&deg;";
      document.querySelector(".disclaimer").textContent =
        data.weather[0]["description"];
      //https://openweathermap.org/img/wn/02d@1x.png
      document.querySelector(
        ".features li"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(function () {
      // catch any errors
    });
};

document.querySelector(".London").onclick = () => {
  document.querySelector(".pricing-table").style.display = "flex";
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=70e1ed322b02acbc57d443dd91065f3e"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".package-name").textContent = data.name;
      document.querySelector(".price").innerHTML =
        Math.round(data.main.temp - 273) + "&deg;";
      document.querySelector(".disclaimer").textContent =
        data.weather[0]["description"];
      //https://openweathermap.org/img/wn/02d@1x.png
      document.querySelector(
        ".features li"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(function () {
      // catch any errors
    });
};
document.querySelector(".New-York").onclick = () => {
  document.querySelector(".pricing-table").style.display = "flex";
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=5128581&appid=70e1ed322b02acbc57d443dd91065f3e"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".package-name").textContent = data.name;
      document.querySelector(".price").innerHTML =
        Math.round(data.main.temp - 273) + "&deg;";
      document.querySelector(".disclaimer").textContent =
        data.weather[0]["description"];
      //https://openweathermap.org/img/wn/02d@1x.png
      document.querySelector(
        ".features li"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(function () {
      // catch any errors
    });
};
document.querySelector(".Paris").onclick = () => {
  document.querySelector(".pricing-table").style.display = "flex";
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=6455259&appid=70e1ed322b02acbc57d443dd91065f3e"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".package-name").textContent = data.name;
      document.querySelector(".price").innerHTML =
        Math.round(data.main.temp - 273) + "&deg;";
      document.querySelector(".disclaimer").textContent =
        data.weather[0]["description"];
      //https://openweathermap.org/img/wn/02d@1x.png
      document.querySelector(
        ".features li"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(function () {
      // catch any errors
    });
};
// document.querySelector(".Kharkiv").onclick = () => {
//   document.querySelector(".pricing-table").style.display = "flex";
//   fetch(
//     "http://api.openweathermap.org/data/2.5/weather?id=706483&appid=70e1ed322b02acbc57d443dd91065f3e"
//   )
//     .then(function (resp) {
//       return resp.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       document.querySelector(".package-name").textContent = data.name;
//       document.querySelector(".price").innerHTML =
//         Math.round(data.main.temp - 273) + "&deg;";
//       document.querySelector(".disclaimer").textContent =
//         data.weather[0]["description"];
//       //https://openweathermap.org/img/wn/02d@1x.png
//       document.querySelector(
//         ".features li"
//       ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
//     })
//     .catch(function () {
//       // catch any errors
//     });
// };
