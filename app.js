//console.log("Hello, Nodemon is running!");

async function fetchData() {
    try{
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
     const data = await response.json()
     console.log(await data[0] )
    }catch(error){
        console.log("This is the error"+ error)
    };
    
}
//console.log("This is the starting Point")
//fetchData()

 function fetchDataTwo() {
    return new Promise((resolve,reject)=>{
        try{
            fetch("https://jsonplaceholder.typicode.com/users")
           .then(response=>response.json())
            resolve(data)
        }catch(error){
            reject(error)
        }
    })
}
fetchDataTwo().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})


