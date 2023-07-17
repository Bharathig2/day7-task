const req = new XMLHttpRequest();
            req.open("GET", "https://restcountries.com/v3.1/all");
            req.send();
            req.addEventListener("load", request);
            function request() {
              let data = JSON.parse(this.responseText);
              let asianCountries = data.filter((e) => {
                if (e.continents[0] == "Asia") {
                  return e;
                }
              });
              console.log(asianCountries);
            }