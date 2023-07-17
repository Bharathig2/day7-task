const req = new XMLHttpRequest();
            req.open("GET", "https://restcountries.com/v3.1/all");
            req.send();
            req.addEventListener("load", request);
            function request() {
              let data = JSON.parse(this.responseText);
              let totalPopulation = data
                .map((e) => {
                  return e.population;
                })
                .reduce((acc, cur) => acc += cur);
              console.log("total population logged below using reduse");
              console.log(totalPopulation);
            }