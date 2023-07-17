const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.addEventListener("load", request);
function request() {
  let data = JSON.parse(this.responseText);
  let Population = data.filter((e) => {
    if (e.population < 200000) {
      return e;
    }
  });
  console.log(Population);
}
