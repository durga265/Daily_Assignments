// Task 1: Generate Random Numbers 
// Create a function that takes two arguments (min and max) and returns a random number between them, inclusive.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(1, 100)); // Should print a random number between 1 and 100

//Task 2: Round Numbers

function roundedNumbers(num) {
    return {
        roundedUp: Math.ceil(num),
        roundedDown: Math.floor(num),
        rounded: Math.round(num)
    };
}
console.log(roundedNumbers(4.7));

//Task 3: Find Maximum and Minimum

function findMaxMin(numbers) {
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)
    };
}
console.log(findMaxMin([3, 5, 7, 2, 8]));

//Task 4: Calculate Power and Square Root

function calculatePowerAndSquareRoot(base, exponent) {
    return {
        power: Math.pow(base, exponent),
        squareroot: Math.sqrt(base)
    };
}
console.log(calculatePowerAndSquareRoot(4, 3));

//Task 5: Current Date and Time

function CurrentDateTime() {
    let date = new Date();

    let currentDate = date.toISOString().split('T')[0]; //[0] select the first element of the array[date part]
    let currentTime = date.toTimeString().split(' ')[0].slice(0, 5);

    return {
        currentDate: currentDate,
        currentTime: currentTime
    };
}

console.log(CurrentDateTime());



//Task 6: Get Date Methods
function getDateMethods(date) {
    return {
        Day: date.getDate(),
        Month: date.getMonth() + 1,
        FullYear: date.getFullYear()
    };
}

console.log(getDateMethods(new Date()));

//Task 7: Format Date in Different Locales
function formatDateInLocales(date) {
    return {
        enUS: date.toLocaleDateString("en-US"),
        frFR: date.toLocaleDateString("fr-FR")
    }
}

console.log(formatDateInLocales(new Date()));

//Task 8: Add Days to a Date

const add = (function () {
    return function (date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
})();

console.log(add(new Date(), 5));



//Bonus Task 1: Explore More Math Methods
function exploreMathMethods(num) {
    return {
        abs: Math.abs(num),
        floor: Math.floor(num),
        ceil: Math.ceil(num),
        logarithm: Math.log(num),
        exponential: Math.exp(num),
    }
}

console.log(exploreMathMethods(-5));

//Bonus Task 2: Advanced Date Manipulations

const datemanipulation = function (date1, date2) {
    const differenceindays = Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24));
    const isEarlier = date1 < date2;
    const formatedDates = [date1, date2].map(date => {
        const month = (date.getMonth() + 1).toString();
<<<<<<< HEAD
        const day = date.getDate().toString());
=======
        const day = date.getDate().toString();
>>>>>>> bee82c6 (Daily-Assignments)
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    });

    return {
        differenceindays: differenceindays,
        isEarlier: isEarlier,
        formatedDates: formatedDates
    };
};

console.log(datemanipulation(new Date('2024-10-10'), new Date('2024-12-30')));


