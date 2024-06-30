window.addEventListener('DOMContentLoaded', (e) => {

const currentMonth = document.getElementById('current-month');
const currentYear = document.getElementById('current-year');
const days = document.getElementsByClassName('days')[0];



    const convertMonth = (monthInt) => {

        if(monthInt === 0) return 'January'
        if(monthInt === 1) return 'February'
        if(monthInt === 2) return 'March'
        if(monthInt === 3) return 'April'
        if(monthInt === 4) return 'May'
        if(monthInt === 5) return 'June'
        if(monthInt === 6) return 'July'
        if(monthInt === 7) return 'August'
        if(monthInt === 8) return 'September'
        if(monthInt === 9) return 'October'
        if(monthInt === 10) return 'November'
        if(monthInt === 11) return 'December'

    }

    const generateDate = () => {

    let currentDate = new Date();
    let month = convertMonth(currentDate.getMonth());

    currentMonth.innerText = month;
    currentYear.innerText = currentDate.getFullYear();
}
    generateDate();
const generateCalender = () => {
    let dayCounter = 1;
    let maxDays = 31;
    //create 7x6 block layout for days
    for(let i = 0; i < 42; i++) {

        const dayBlock = document.createElement('div');


        if(dayCounter <= maxDays) {
        const day = document.createElement('p');
        day.innerText = dayCounter;
        dayCounter ++;
        dayBlock.append(day);
        };

        dayBlock.setAttribute('class', 'day-block');

        days.append(dayBlock);
    }


};



generateCalender();







});
