const myPromise = new Promise((resolve,reject)=>{
    let success = true;

    if (success){
        resolve("Task completed")
    }else{
        reject("Task failed")
    }
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("Hello from promise file");

// A Promise is an object that represents:
// "A task that will complete in the future"

//  States of Promise:

// Pending → not completed

// Resolved (Fulfilled) → success

// Rejected → failed