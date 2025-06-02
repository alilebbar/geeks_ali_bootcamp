new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success !");
    }, 4000);
})
.then((result)=>console.log(result));