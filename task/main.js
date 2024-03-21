document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color='blue';
document.querySelector("h1").style.fontSize='80px';
document.querySelector("h1").style.fontWeight='bold';
document.querySelector("h1").style.textAlign='center';
document.querySelector("h1").style.fontFamily='arial';

console.log("%cElzero %cWeb %cSchool", "color: red; font-size:40px", "color: green; font-size:40px; font-weight: bold;" , "color: white; font-size:40px background-color:blue;");

console.groupc("group 1");
console.logO("Massage one");
console.logO("Massage two");
console.group("child group");
console.logO("Massage one");
console.logO("Massage two");
console.group(" Grand child group");
console.logO("Massage one");
console.logO("Massage two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.groupc("group 2");
console.logO("Massage one");
console.logO("Massage two");

console.table(["Elzero","Mustafa","Sleem","Ahmed","Alaa"]);

//console.log("Iam In Console");
// document.write("Iam In Page");

/*console.log("Iam In Console");
document.write("Iam In Page");*/