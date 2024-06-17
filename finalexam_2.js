// this example shows how tasks and microtasks are executed asynchronously by event loop.
// below is the whole process of this example.
//
// 1. for loop calls asyncExample with 0 as an argument and the callee is pushed to the call stack.
// 2. asyncExample is executed and "0 started" is printed.
// 3. at the statement with await, new Promise is created and executor callback is executed synchronously.
// 4. setTimeout callbqck is added to the task queue but not executed immediately.
// 5. the number calculated is printed and Promise tmp is resolved. and the rest of the asyncExample goes to the microtask queue.
// 6. again outside of asyncExample, the then callback is reserved to be executed when tmp promise is resolved.
// 7. "0 executed" is printed.
// 8. for loop calls asyncExample with 1 as an argument and the process 1~7 is repeated.
// 9. last synchronous code be executed printing "DONE".
// 10. finally event loop takes control and checks the both promises are resolved. and then adds those reserved callbacks to the microtask queue.
// 11. and executes the microtasks that are added to the queue first. printing "0 finished", "1 finished".
// 12. now two remaining callbacks in microtask queue are executed printing "0 done", "1 done".
// 13. every microtask is done, so event loop executes the tasks which setTimeout added to the queue. printing "0 timeout", "1 timeout".
//
// each index comments below represents each step of the process.
const asyncExample = async (a) => {
    console.log(a, "started") // 2
  
   tmp = await new Promise((resolve,reject) => { // 3
    setTimeout(()=>{ // 4
      console.log(a, "timeout")
    },0)
    let n = a
    for (let i =0;i<10000000;i++) n+=0.0000001
    console.log(n) // 5
    return resolve(a)
  })
  
  console.log(a, "finished") // 11
  return tmp
  }
   
  for (let i = 0; i <2; i++) {
   asyncExample(i).then((d)=>console.log(d,"done")); // 1, 6, 8
   console.log(i, "executed") // 7
  }
  
  console.log("DONE") // 9
  // 10
  // 12
  // 13