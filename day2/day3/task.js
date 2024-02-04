let XMLHTTPRequest = require('xhr2');

let xhr =new XMLHTTPRequest();

xhr.open("GET",'https://restcountries.com/v3.1/all')



xhr.onload =function(){
    let countries=JSON.parse(xhr.responseText);

    for (let country of countries){
        console.log(country.flag)
    }
    
}
xhr.send();

