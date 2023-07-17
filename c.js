const req = new XMLHttpRequest();
            req.open("GET", "https://restcountries.com/v3.1/all");
            req.send();
            req.addEventListener("load", request);
            function request() {
              let data = JSON.parse(this.responseText);
              data.forEach((e) => {
                console.log(`Country Name : ${e.name.common},
                Country Capital : ${e.capital},
                Country flag : ${e.flag}`);
              });
            }