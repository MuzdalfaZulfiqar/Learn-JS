let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside the timeout function of prom");
      let val = false;
      if (val) {
        resolve({
          username: "Muz",
          email: "muz@gmail.com",
        });
      } else {
        reject("Error state 1");
      }
    }, 2000);
  });
  
  // async function consumeProm() {
  //   let response = await prom; // not prom()
  //   console.log(response);
  
    /*
      if val = true
  
      Inside the timeout function of prom
  { username: 'Muz', email: 'muz@gmail.com' }
   
      */
  
    // we are resolving a promise await prom storing it in a varibale to know what we will et
    // if this promise is get resolved we will get the resolve value means the argument that was passed in the
    // resolve function
    // now here wo do not have any catch and since the promise is being rejected we will ge an error
    // which is saying that you did not handled the rejection
    /*
  Inside the timeout function of prom
  node:internal/process/promises:389
        new UnhandledPromiseRejection(reason);
        ^
  
  UnhandledPromiseRejection: This error originated either by throwing inside of an async function without 
  a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with 
  the reason "Error state 1".
      at throwUnhandledRejectionsMode (node:internal/process/promises:389:7)
      at processPromiseRejections (node:internal/process/promises:470:17)
      at process.processTicksAndRejections (node:internal/process/task_queues:96:32) {
    code: 'ERR_UNHANDLED_REJECTION'
  }
  
  This error is because that we are facing the rejection from promise and this rejection was not handled
  */
  
    // so we need to use the try catch in async await
  // }
  
  async function consumeProm() {
    try {
      let response = await prom; // not prom()
      console.log(response);  // the one passed in resolve
    } catch (error) {
      console.log(error); // the one passed in catch
    }
  }
  
  consumeProm(); //
  