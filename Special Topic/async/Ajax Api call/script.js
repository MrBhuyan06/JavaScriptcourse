// `https://restcountries.com/v2/name/${country}`;

function getCountry(country) {
  const resquest = new XMLHttpRequest();
  //open the request
  resquest.open("GET", `https://restcountries.com/v2/name/${country}`);
  resquest.send();
  resquest.addEventListener("load", function () {
    //   console.log("data just come");
    // console.log(resquest.responseText);
    //request we get is in json format
    //   console.log();
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(country);
  });
}
getCountry("usa");
getCountry("germany");
console.log("synoco");
