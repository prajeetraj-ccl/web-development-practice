let reachE = new Promise ((resolve,reject)=>{
    const reached =true
    if(reached){
        setTimeout(resolve,3000,"client reached home")
    }else{
        reject("client not reached home")
    }
});

async function status() {
    try {
        console.log("status");

        let res = await reachE;

        console.log(res);
        console.log("status completed");
    } catch (err) {
        console.log(err);
    }
}

status();

