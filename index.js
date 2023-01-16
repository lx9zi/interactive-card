


const CardName = document.getElementById('card-name');
const CardNameInput = document.getElementById('card-name-input');

const CardNumber = document.getElementById('card-number');
const CardNumberInput = document.getElementById('card-number-input');

const monthInput = document.getElementById('smallInp month')
const month = document.getElementById('month')

const yearInput = document.getElementById('smallInp year')
const year = document.getElementById('year')

const CvcInp = document.getElementById('largInp');



const NumberError = document.getElementById('error_card');
const ErrorDate = document.getElementById('error_date');
const CvcError = document.getElementById('error_cvc');
const cvc = document.getElementById('cvc');
const rightOne = document.getElementsByClassName('rightOne')[0]


const creditDetails = document.getElementsByClassName('creditDetails')[0]
const thank = document.getElementsByClassName('thank')[0]




const btn = document.querySelector('button');

CardNameInput.addEventListener('keyup', function SetCardName(e) {
    if (e.target.value) {
        CardName.innerText = e.target.value
    }
    else {
        CardName.innerText = 'mohammed'
    }
})

CardNumberInput.addEventListener('keyup', function SetCardNumber(e) {
    if (e.target.value) {
        CardNumber.innerText = e.target.value;
        if (isNaN(e.target.value)) {
            NumberError.style.display = 'flex'
            CardNumberInput.style.borderColor = 'red'
        }
        else {
            NumberError.style.display = 'none'
            CardNumberInput.style.borderColor = 'var(--Dark-grayish)'
        }
    }
    else {
        CardNumber.innerText = 'xxxxxxxxxxxx'
    }
})

monthInput.addEventListener('keyup', function SetMonth(e) {
    if (e.target.value) {
        month.innerText = e.target.value;
    }
    else {
        month.innerText = '09'
    }
})

yearInput.addEventListener('keyup', function SetYear(e) {
    if (e.target.value) {

        year.innerText = e.target.value
    }
    else {
        year.innerText = '23'
    }
})

CvcInp.addEventListener('keyup', function SetCvc(e) {
    if (e.target.value) {
        cvc.innerText = e.target.value
    }
    else {
        cvc.innerText = '000';
    }
})


btn.addEventListener('click', function Submit() {
    if (!monthInput.value || !yearInput.value) {
        ErrorDate.style.display = 'grid';
        monthInput.style.borderColor = 'red'
        yearInput.style.borderColor = 'red'
    }
    else {
        ErrorDate.style.display = 'none'
        monthInput.style.borderColor = 'var(--Dark-grayish)'
        yearInput.style.borderColor = 'var(--Dark-grayish)'
    }

    if (!CvcInp.value) {
        rightOne.style.display = ' grid';
        CvcInp.style.borderColor = 'red'
    }
    else {
        CvcError.style.display = 'none';
        CvcInp.style.borderColor = 'var(--Dark-grayish)'
    }

    if (monthInput.value && yearInput.value && CvcInp.value) {
        creditDetails.style.display = 'none';
        thank.style.display = 'flex';
    }




})