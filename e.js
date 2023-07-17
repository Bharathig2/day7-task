const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.addEventListener("load", request);
function request() {
let data = JSON.parse(this.responseText);
let filteredCountryWithCurrencies=data.filter((e) => {
  if(e.currencies!=undefined){
      return e;
  }
});
filteredCountryWithCurrencies.forEach((e)=>{
  if(e.currencies.USD){
      console.log(e.name.common)
  }
})
}