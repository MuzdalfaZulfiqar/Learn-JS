 // Printing math object
 let m = Math;
 console.log(m);

 // Printing the constants
 console.log("The value of Math.E = " + m.E);
 console.log("The value of Math.LN10 = " + m.LN10);
 console.log("The value of Math.LN2 = " + m.LN2);
 console.log("The value of Math.PI = " + m.PI);
 console.log("The value of Math.SQRT1_2 = " + m.SQRT1_2);

 // Printing the functions
 let a = 32.64;
 let b = 12;

 console.log("The value of a and b is ",a, "", b);
 console.log("The value of a and b (rounded) is ",Math.round(a), "", Math.round(b));

 console.log("3 raised to power 2 is" , Math.pow(3,2));
 console.log("13 raised to power 2 is" , Math.pow(13,2));
 console.log("1 raised to power 2 is" , Math.pow(1,2));

 console.log("Sqrt of 36 is ",Math.sqrt(36));
 console.log("Sqrt of 16 is ",Math.sqrt(16));
 console.log("Sqrt of 49 is ",Math.sqrt(49));

 console.log("Ceil of 14.5 is ",Math.ceil(14.5));
 console.log("Floor of 49.2 is ",Math.floor(49.9));

 // absolute value gives positive value
 console.log("abs of 14.5 is ",Math.abs(14.5));
 console.log("abs of -14.5 is ",Math.abs(-14.5));
 
 console.log("sin(pi) ",Math.sin(Math.PI));
 console.log("cos(pi)",Math.cos(14.5));
 console.log("tan(pi)",Math.tan(14.5));

 console.log("The max value is ", Math.max(1,2,3,4));
 console.log("The max value is ", Math.min(1,2,3,4));

 // Generating a random number between 1 and 100

 // (high-low)*Math.random() + low
 let ran = (100-1)*Math.random() + 1;
 console.log(Math.round(ran));