// let prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Inside the timeout function");
//     resolve(); // this promise is resolved now it can go to then
//   }, 2000);
// });

// prom1.then(() => {
//   console.log("Came in then block and fulfilling the promise");
// });

// second way to do this just a slight vhange in syntax
// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Inside the timeout function")
//         resolve() // this promise is resolved now it can go to then
//     }, 2000);
// }).then(()=>{
//     console.log("Came in then block and fulfilling the promise")
// })
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let prom3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Inside the timeout function");
//     resolve({
//       username: "Muzdalfa",
//       email: "muz@gmail.com",
//     }); // this promise is resolved and this parameter will go to then and these parameters will be accessible
//     // in te function which is parameter of then and these parameters will become the parameters
//     // of that function
//   }, 2000);
// });

// prom3.then((obj) => {
//   console.log("Came in then block and fulfilling the promise");
//   console.log(obj.username);
//   console.log(obj.email);

  /*
    Came in then block and fulfilling the promise
    Muzdalfa
    muz@gmail.com
    */
// });


// let prom4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Inside the timeout function");

//       let error = true;
//       if(!true){
//         resolve({
//             username: "Muzdalfa",
//             email: "muz@gmail.com",
//           }); 
//       }
//       else{
//         reject("Error...")
//       }
//     }, 2000);
//   }).then((obj)=>{

//     // is then ke andr aik function ha aur uss function ke argument wo ho ga jo resole se ay ga
//     // phir iss then se function se aik value return ho rhi ha wo next then ke funcion ka parameter ha
//     console.log("Came in then block and fulfilling the promise");
//   console.log(obj.username);
//   console.log(obj.email);
//   return obj.username;
//   })
//   .then((username)=>{
//     console.log(username)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })



let prom = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Inside the timeout function of prom")
        let val = true;
        if(val){
            resolve("Muzdalfa")
        }
        else{
            reject("Error state 1")
        }
    }, 2000);
  })
  .then((fname)=>{
    console.log(fname);
    return "Zulfiqar"
  })
  .then((lname)=>{
    console.log(lname)
    return "End"
  })
  .catch(()=>{
    console.log("error state 2");
  })
  .finally(()=>{
    console.log("The end of the promise")
  })