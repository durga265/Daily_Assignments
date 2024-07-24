//1. localStorage: Setting and Getting Data
localStorage.setItem("name", "loaction");
localStorage.setItem("IBM", "banglore");
console.log(localStorage.getItem("name"));

//2. sessionStorage: Setting and Getting Data
sessionStorage.setItem("username", "robert");
sessionStorage.setItem("number", "ID");
console.log(sessionStorage.getItem("username"));

//3. Removing Items from Storage
localStorage.removeItem("IBM");
console.log(localStorage.getItem("IBM"));

sessionStorage.removeItem("number");
console.log(sessionStorage.getItem("number"));

//4. JSON Storage

//local storage
const local = {
    Name: "diya",
    email: "example@email.com"
}
localStorage.setItem("local", JSON.stringify(local));
console.log(JSON.parse(localStorage.getItem("local")));

//session storage
const session = {
    password: "XXXXXXXX",
    registration: "successfully"
}
sessionStorage.setItem("session", JSON.stringify(session));
console.log(JSON.parse(sessionStorage.getItem("session")));

//5. Clearing Storage
localStorage.clear();
console.log(localStorage.getItem("local"));

sessionStorage.clear();
console.log(sessionStorage.getItem("session"));


//What did you learn about using localStorage and sessionStorage in JavaScript?
// -->I learned that localStorage and sessionStorage are the web APIs (application programming interface)
// -->It is used for storing data as key value pairs in string format. In both local and session storage used setItem() to save the data and getItem() to retrive data

//How does storing data in localStorage differ from sessionStorage?
//-->localStorage saved the data until you delete it. The data stays even after you close and reopen the browser.
//-->sessionStorage saved the data only while the browser tab is open. The data is deleted when you close the browser.