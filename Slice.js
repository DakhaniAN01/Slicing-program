let Name = "Amazon Web Services";
let a;
let b;
let c;

a = Name.slice(0, Name.indexOf("W"));
b = Name.slice(Name.indexOf(" ") + 1, Name.indexOf("S"));
c = Name.slice(Name.indexOf("S"));
console.log(a);
console.log(b);
console.log(c);