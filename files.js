const fs = require("fs");

// fs.readFile("./docs/hello.txt", (error, datainformation) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(datainformation.toString());
// });

// fs.writeFile("./docs/hello1.jpeg", "From WriteFile", (err, data) => {
//     console.log("Success");
// })

// fs.mkdir("./assets2", (err) => {

//     if (fs.existsSync("./assets2")) {
//         fs.mkdir("./assets", (err) => {
//             if (err) {
//                 console.log(err);
//             }
            
//         })
        
//     }
//     console.log("Folder created");
    
// });

const readStream = fs.createReadStream("./big.txt", {encoding:"utf-8"});

readStream.on("data", (chunk) => {
    console.log("new data--------------")
    console.log(chunk);
})