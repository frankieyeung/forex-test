var myHeaders = new Headers();
myHeaders.append("apikey", "bEZaUqSorXdVlcCEQNASITGonBPg5Plu");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

const getData = () => fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
    .then(response => response.json())

async function main() {
    let result;
    try {
        result = await getData();
    } catch (err) {
        console.log(err);
    }
    /*     console.log(result); */
    const rates = result.rates;
    /*     console.log(rates); */
    const newRates = changeValue(rates, 'add', 10.0002);
    const combinedRates = appendValue(rates, newRates);
    buildTable(combinedRates, 'Currency', 'Original Rate', 'Original Rate + 10.0002');
}

main();

const changeValue = (obj, operation, num) => {
    newObj = {};
    if (operation === 'add') {
        for (key in obj) {
            newObj[key] = obj[key] + num;
        }
    } else if (operation === 'subtract') {
        for (key in obj) {
            newObj[key] = obj[key] - num;
        }
    } else if (operation === 'multiply') {
        for (key in obj) {
            newObj[key] = obj[key] * num;
        }
    } else if (operation === 'divide') {
        for (key in obj) {
            newObj[key] = obj[key] / num;
        }
    } else {
        return 'Invalid operator'
    }
    return newObj;
}

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

const buildTable = (data, ...tableHeader) => {
    let forexTable = document.getElementById('forex-table');
    let output = '';
    output += '<thead><tr>'
    for (th of tableHeader) {
        output += `<th>${th}</th>`
    }
    output += '</tr><thead>';
    for (key in data) {
        output += `<tr><td>${key}</td>`;
        for (value of data[key]) {
            if (isEven(parseInt(value))) {
                output += `<td class="${key} even">${value}</td>`;
            }
            else {
                output += `<td class="${key} odd">${value}</td>`;
            }
        }
        output += '</tr>'
    }
    /*     console.log(output); */
    forexTable.innerHTML = output;
}

const isEven = (value) => {
    return value % 2 == 0 ? true : false;
}
