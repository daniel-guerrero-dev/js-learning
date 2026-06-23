//The table with id="age-table".
console.log(document.querySelector("#age-table"));
//All label elements inside that table (there should be 3 of them).
console.log(document.querySelectorAll("#age-table label"));
//The first td in that table (with the word “Age”).
console.log(document.querySelector("#age-table td"));
//The form with name="search".
console.log(document.querySelector("form"));
//The first input in that form.
console.log(document.querySelector("input"));
//The last input in that form.
console.log(document.querySelectorAll("input")[8]);
//slightly better last implementation
console.log([...document.querySelectorAll("input")].at(-1));
