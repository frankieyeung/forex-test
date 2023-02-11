let myHeaders = new Headers();
myHeaders.append("apikey", "bEZaUqSorXdVlcCEQNASITGonBPg5Plu");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

let getData = () => fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
    .then(response => response.json())

const main = async () => {
    let result;
    try {
        result = await getData();
    } catch (err) {
        console.log(err);
    }
    let forexRates = result.rates;
    let newRates = addValue(forexRates, 10.0002);
    let combinedRates = appendValue(forexRates, newRates);
    buildTable(combinedRates, 'Currency', 'Original Rate', 'Original Rate + 10.0002');
}

main();

const addValue = (obj, num) => {
    newObj = {};
    for (key in obj) {
        newObj[key] = obj[key] + num;
    }
    return newObj;
}

const subtractValue = (obj, num) => {
    newObj = {};
    for (key in obj) {
        newObj[key] = obj[key] - num;
    }
    return newObj;
}

const multiplyValue = (obj, num) => {
    newObj = {};
    for (key in obj) {
        newObj[key] = obj[key] * num;
    }
    return newObj;
}

const divideValue = (obj, num) => {
    newObj = {};
    for (key in obj) {
        newObj[key] = obj[key] / num;
    }
    return newObj;
}

/* This function will push objects key,value pair's value into an array
*/
const appendValue = (...objs) => {
    newObj = {};
    for (obj of objs) {
        for (key in obj) {
            if (key in newObj) {
                newObj[key].push(obj[key]);
            } else {
                newObj[key] = [obj[key]]
            }
        }
    }
    return newObj;
}

/* This function will render a HTML table */
const buildTable = (obj, ...tableHeader) => {
    let forexTable = document.getElementById('forex-table');
    let output = '';
    output += '<thead><tr>'
    for (th of tableHeader) {
        output += `<th>${th}</th>`
    }
    output += '</tr><thead>';
    for (key in obj) {
        output += `<tr><td>${key}</td>`;
        for (value of obj[key]) {
            if (isEven(parseInt(value))) { //if the value is even, create a even class
                output += `<td class="${key} even">${value}</td>`;
            }
            else {
                output += `<td class="${key} odd">${value}</td>`;
            }
        }
        output += '</tr>'
    }
    forexTable.innerHTML = output;
}

const isEven = (value) => {
    return value % 2 == 0 ? true : false;
}
