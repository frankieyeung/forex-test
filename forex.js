var myHeaders = new Headers();
myHeaders.append("apikey", "bEZaUqSorXdVlcCEQNASITGonBPg5Plu");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

const forexData = fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));





