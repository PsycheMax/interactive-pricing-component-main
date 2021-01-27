const body = document.body;
const card = document.body.getElementsByClassName("card")[0];

let rangePageviews = document.getElementById("pageviewsCounter");
let pageviews = document.getElementById("pageviews");
let pricingValue = document.getElementById("pricingValue");
let billingPeriod = document.getElementById("billingPeriod");

const firstRow = document.getElementById("first-row");
const secondRow = document.getElementById("second-row");
const sRowA = document.getElementById("second-row-a");
const sRowB = document.getElementById("second-row-b");

function rangeMovement() {
    let rangePosition = rangePageviews.valueAsNumber;
    switch (rangePosition) {
        case 1:
            pageviews.innerText = "10k";
            pricingValue.innerText = "8";
            if (!billingPeriod.checked) {
                break;
            } else {
                billingPeriodSwitch();
            }
            break;
        case 2:
            pageviews.innerText = "50k";
            pricingValue.innerText = "12";
            if (!billingPeriod.checked) {
                break;
            } else {
                billingPeriodSwitch();
            }
            break;
        case 3:
            pageviews.innerText = "100k";
            pricingValue.innerText = "16";
            if (!billingPeriod.checked) {
                break;
            } else {
                billingPeriodSwitch();
            }
            break;
        case 4:
            pageviews.innerText = "500k";
            pricingValue.innerText = "24";
            if (!billingPeriod.checked) {
                break;
            } else {
                billingPeriodSwitch();
            }
            break;
        case 5:
            pageviews.innerText = "1M";
            pricingValue.innerText = "36";
            if (!billingPeriod.checked) {
                break;
            } else {
                billingPeriodSwitch();
            }
            break;
        default:

            break;
    }

}

function billingPeriodSwitch() {
    let discountApplied = billingPeriod.checked;
    switch (discountApplied) {
        case true:
            let newPrice = parseInt(pricingValue.innerText) - (parseInt(pricingValue.innerText) / 4);
            pricingValue.innerText = newPrice;
            break;
        case false:
            rangeMovement();
            break;
        default:
            break;
    }
}

const baseCard = document.getElementsByClassName('card')[0].innerHTML;
let smallFirstRow = "";
let smallSecondRow = "";
let reshaped = false;

function reshapeRows() {
    if (!reshaped) {
        firstRowChange();
        secondChange();
        smallFirstRow = firstRow.innerHTML;
        smallSecondRow = secondRow.innerHTML;
        reshaped = true;
    } else {
        console.log(reshaped);
        document.getElementById('first-row').innerHTML = smallFirstRow;
        document.getElementById('second-row').innerHTML = smallSecondRow;
    }
    rangePageviews = document.getElementById("pageviewsCounter");
    pageviews = document.getElementById("pageviews");
    pricingValue = document.getElementById("pricingValue");
    billingPeriod = document.getElementById("billingPeriod");

    function firstRowChange() {
        let firstRowCol1 = `<div class="row align-left"> <div class="col pl-5-plus mt-3 pageviews">${firstRow.children[0].innerHTML} </div><div class="col-1"></div>`;
        let firstRowCol2 = `<div class="col mt-2">${firstRow.children[2].innerHTML}</div></div>`;
        let remaining = firstRow.children[1].innerHTML + firstRow.children[3].innerHTML;
        firstRow.innerHTML = firstRowCol1 + firstRowCol2 + remaining;
    }

    function secondChange() {
        let secondRowCol1 = `<div class="row"><div class="col pl-5-plus"> ${sRowA.innerHTML} </div>`;
        let secondRowCol2 = `<div class="col"> ${sRowB.innerHTML} </div></div>`;
        secondRow.innerHTML = "";
        secondRow.innerHTML = secondRowCol1 + secondRowCol2;
    }
}

function resetRows() {
    document.getElementsByClassName('card')[0].innerHTML = baseCard;
    rangePageviews = document.getElementById("pageviewsCounter");
    pageviews = document.getElementById("pageviews");
    pricingValue = document.getElementById("pricingValue");
    billingPeriod = document.getElementById("billingPeriod");
}

reshapeRows();
resetRows();

function checkSize() {
    if (document.body.clientWidth >= 960) {
        reshapeRows();
    } else {
        resetRows();
    }
}