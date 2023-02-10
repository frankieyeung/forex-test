/* var myHeaders = new Headers();
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
 */

forexData = {
    "success": true,
    "timestamp": 1676034303,
    "base": "EUR",
    "date": "2023-02-10",
    "rates": {
        "AED": 3.924388,
        "AFN": 95.873826,
        "ALL": 115.936725,
        "AMD": 422.283297,
        "ANG": 1.925904,
        "AOA": 538.824449,
        "ARS": 203.525279,
        "AUD": 1.543817,
        "AWG": 1.92583,
        "AZN": 1.819299,
        "BAM": 1.953365,
        "BBD": 2.157529,
        "BDT": 111.864353,
        "BGN": 1.95596,
        "BHD": 0.402669,
        "BIF": 2218.328095,
        "BMD": 1.068422,
        "BND": 1.420027,
        "BOB": 7.38428,
        "BRL": 5.626849,
        "BSD": 1.068627,
        "BTC": 4.9122003e-05,
        "BTN": 88.176249,
        "BWP": 13.969007,
        "BYN": 2.696997,
        "BYR": 20941.067152,
        "BZD": 2.154014,
        "CAD": 1.436333,
        "CDF": 2185.991569,
        "CHF": 0.987467,
        "CLF": 0.031036,
        "CLP": 856.350421,
        "CNY": 7.279268,
        "COP": 5070.761884,
        "CRC": 619.934452,
        "CUC": 1.068422,
        "CUP": 28.313178,
        "CVE": 110.123462,
        "CZK": 23.69578,
        "DJF": 190.215522,
        "DKK": 7.444175,
        "DOP": 60.130033,
        "DZD": 145.889189,
        "EGP": 32.580771,
        "ERN": 16.026327,
        "ETB": 57.400335,
        "EUR": 1,
        "FJD": 2.334396,
        "FKP": 0.879101,
        "GBP": 0.883531,
        "GEL": 2.852383,
        "GGP": 0.879101,
        "GHS": 13.035446,
        "GIP": 0.879101,
        "GMD": 65.284909,
        "GNF": 9196.380202,
        "GTQ": 8.378047,
        "GYD": 225.485014,
        "HKD": 8.386951,
        "HNL": 26.34347,
        "HRK": 7.524038,
        "HTG": 161.893622,
        "HUF": 390.123451,
        "IDR": 16226.76283,
        "ILS": 3.779125,
        "IMP": 0.879101,
        "INR": 88.214785,
        "IQD": 1559.742688,
        "IRR": 45167.531476,
        "ISK": 151.886951,
        "JEP": 0.879101,
        "JMD": 164.900384,
        "JOD": 0.758796,
        "JPY": 139.806733,
        "KES": 133.616621,
        "KGS": 92.702254,
        "KHR": 4380.448942,
        "KMF": 490.031906,
        "KPW": 961.59789,
        "KRW": 1353.652997,
        "KWD": 0.326766,
        "KYD": 0.890481,
        "KZT": 481.780783,
        "LAK": 18002.76313,
        "LBP": 16042.833622,
        "LKR": 390.05249,
        "LRD": 167.956079,
        "LSL": 18.96436,
        "LTL": 3.154771,
        "LVL": 0.646278,
        "LYD": 5.116767,
        "MAD": 10.957304,
        "MDL": 20.06873,
        "MGA": 4600.477043,
        "MKD": 61.53591,
        "MMK": 2244.136954,
        "MNT": 3749.133618,
        "MOP": 8.640389,
        "MRO": 381.426396,
        "MUR": 48.558035,
        "MVR": 16.411048,
        "MWK": 1096.855708,
        "MXN": 20.056303,
        "MYR": 4.628936,
        "MZN": 67.419358,
        "NAD": 18.964449,
        "NGN": 491.976058,
        "NIO": 39.047843,
        "NOK": 10.86835,
        "NPR": 141.083798,
        "NZD": 1.691088,
        "OMR": 0.411314,
        "PAB": 1.068567,
        "PEN": 4.123521,
        "PGK": 3.766329,
        "PHP": 58.27812,
        "PKR": 287.864027,
        "PLN": 4.782901,
        "PYG": 7777.232458,
        "QAR": 3.890391,
        "RON": 4.903306,
        "RSD": 117.296718,
        "RUB": 78.285935,
        "RWF": 1159.05845,
        "SAR": 4.00938,
        "SBD": 8.794935,
        "SCR": 14.044324,
        "SDG": 625.026971,
        "SEK": 11.167914,
        "SGD": 1.419681,
        "SHP": 1.471641,
        "SLE": 21.058117,
        "SLL": 21053.251567,
        "SOS": 607.3953,
        "SRD": 34.449086,
        "STD": 22114.17399,
        "SVC": 9.350208,
        "SYP": 2684.391077,
        "SZL": 19.1192,
        "THB": 36.059215,
        "TJS": 11.096139,
        "TMT": 3.75016,
        "TND": 3.314782,
        "TOP": 2.493216,
        "TRY": 20.124163,
        "TTD": 7.258089,
        "TWD": 32.247645,
        "TZS": 2497.969934,
        "UAH": 39.266461,
        "UGX": 3916.204886,
        "USD": 1.068422,
        "UYU": 41.788353,
        "UZS": 12114.779366,
        "VEF": 2540668.567403,
        "VES": 25.821887,
        "VND": 25188.043781,
        "VUV": 125.006694,
        "WST": 2.873566,
        "XAF": 655.231375,
        "XAG": 0.048413,
        "XAU": 0.000574,
        "XCD": 2.887463,
        "XDR": 0.795419,
        "XOF": 655.115003,
        "XPF": 118.995498,
        "YER": 267.452637,
        "ZAR": 19.097182,
        "ZMK": 9617.074247,
        "ZMW": 20.574808,
        "ZWL": 344.031382
    }
}

const changeValue = (property, operation, num) => {
    newProperty = {};
    if (operation === 'add') {
        for (key in property) {
            newProperty[key] = property[key] + num;
        }
    } else if (operation === 'subtract') {
        for (key in property) {
            newProperty[key] = property[key] - num;
        }
    } else if (operation === 'multiply') {
        for (key in property) {
            newProperty[key] = property[key] * num;
        }
    } else if (operation === 'divide') {
        for (key in property) {
            newProperty[key] = property[key] * num;
        }
    } else {
        return 'Invalid operator'
    }
    return newProperty;
}



