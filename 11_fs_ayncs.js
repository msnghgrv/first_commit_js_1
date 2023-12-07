// const{ readFile, writeFile}= require('fs')
// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result)=>{
// if(err){
//     console.log(err)
//     return
// }
// console.log('reading fisrt para')
// console.log('done 1')
// const first= result
// console.log(result)

// console.log('reading second para')
// readFile('./content/second.txt', 'utf8', (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const second = result
//     console.log(second)
//     console.log('done 2')


// console.log('writing into file')
// writeFile('./content/result_async.txt', `the async result is:${first} ${second}`, {flag:'a'}, (err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// console.log('done 3')
// })
// })
// })
// console.log('result')
const {readFile, writeFie, read, writeFile}= require('fs')
console.log("start")
readFile('./content/first.txt', 'utf8', (err, result)=>{
if(err){
    console.log(err)
    return
}
// console.log(result)
readFile('./content/second.txt', 'utf8',(err, result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
    writeFile('./content/result_async.txt', 'this is the new result', {flag:'a'},(err,reslult)=>{
        if(err){
            console.log(err)
        }
        console.log("done with the task")
    })
})
})
console.log("start with next task")