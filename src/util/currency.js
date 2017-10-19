let currency = '¥';

function setCurrency(arg) {
    if(!arg) {
        return;
    }
    currency = arg;
}

function getCurrency() {
    return currency;
}

module.exports = {
    setCurrency,
    getCurrency
};