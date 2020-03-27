function myGetRequest(url, apiName) {
  $.getJSON(url, function(response) {
    if (apiName === "chuck") {
      for (let i = 0; i < response.value.length; i++) {
        document.getElementById(
          "responses"
        ).innerHTML += `${response.value[i].joke} <br />`;
      }
    } else if (apiName === "breweries") {
      for (let i = 0; i < response.length; i++) {
        document.getElementById(
          "responses"
        ).innerHTML += `${response[i].name} <br /> `;
      }
    } else if (apiName === "nasa") {
      console.log("here");
      document.getElementById("nasaImage").src = response.url;
      document.getElementById(
        "nasaText"
      ).innerHTML = `DATE:<br /> ${response.date} <br /><br /> EXPLANATION:<br /> ${response.explanation} <br /><br /> TITLE:<br /> ${response.title}`;
    }
  });
}
function updateDate() {
  let userDate = document.getElementById("dateInput").value;
  myGetRequest(
    `https://api.nasa.gov/planetary/apod?api_key=dW3wFNXYcSoozTEnFfE7D7wT7SbyF9ccED6iK2yx&date=${userDate}`,
    "nasa"
  );
}
