// let str1 = "This is a string";
// let str2 = "This is a string";
// let str3 = `This is a string`;
// let str4 = new String("This is a string");

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(str3);
// console.log(str4);

// console.log(str3[0]);

// const str = "Hello World";

// console.log(str.length);
// console.log(str[6]);

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// let str1 = "I'm a string";
// let str2 = "I'm a\0string\"";
// console.log(str2);

// alert("1-ders \n2-Kayit\n3-pre-class");
// alert(`1-ders
// 2-Kayit
// 3-pre-class`);

// let str1 = "Clarusway";
// let str2 = str1.slice(-3);
// console.log(str1);
// console.log(str2);
// console.log(str1.slice(-9, -3));

// let str = "Orange";
// console.log(str.substring(0, 4));
// console.log(str.substring(2));
// console.log(str.substring(4, 0));
// console.log(str.substring(str.length - 4));
// console.log(str.substring(-4));

// console.log(str);

// let str2 = str.substring(0, 4);
// console.log(str2);

// let str1 = "Clarusway";
// let str2 = "Full";
// let str3 = "Stack";
// const result = str1.concat(" ", str2, " ", str3);
// console.log(result);
// console.log(str3);

// let greet = "Hello";

// console.log(greet.concat(" World"));
// console.log("Hello".concat(" World"));

// let isim = prompt("Isminiz nedir?");

// console.log("Merhaba ".concat(isim));
// console.log("Merhaba " + isim);

// let str = "Hello John, welcome to Clarusway.";

// console.log(str.includes("welcome"));
// console.log(str.includes("Welcome"));

// let str1 = "Clarusway";

// console.log(str1.includes("l"));
// console.log(str1.includes("l", 1));
// console.log(str1.includes("l", 2));

// let str1 = "Clarusway";

// console.log(str1.indexOf("a"));
// console.log(str1.indexOf("a", 3));
// console.log(str1.indexOf("l", 3));

// let email = prompt(`Email giriniz`);
// console.log(email.includes("@"));

// function findCount(source, search) {
//   let count = 0;
//   let position = source.indexOf(search);

//   while (position !== -1) {
//     count++;
//     position = source.indexOf(search, ++position);
//   }
//   return count;
// }

// let str = "You do not know what you do not know until you know.";
// console.log(findCount(str, "know"));

let str = "Hello John, welcome to Clarusway.";

console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("o", 6));
console.log(str.lastIndexOf("O", 6));

console.log(str.indexOf("o"));
