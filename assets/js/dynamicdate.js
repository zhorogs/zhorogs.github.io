//Add dynamic date to footer function;
const date = function () {
    let time = new Date().getFullYear();
    return time;
}

//Display the dinamyc date;
document.querySelector(".dynamic-date").textContent = `${date()} All rights reserved.`;