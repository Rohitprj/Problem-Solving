/*

Sync in JS
Synchronous
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.

------------------------------------------------------------------------------------------------------------------------------------

Asynchronous
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.

Example :-
Synchronous
function myDisplayer(some) {
 console.log(some)
}

myDisplayer("A");
myDisplayer("B");
myDisplayer("C");

------------------------------------------------------------------------------------------------------------------------------------

Example :-
Asynchronous
function myDisplayer(some) {
 console.log(some)
}

myDisplayer("A");

setTimeout(function() {
  myDisplayer("B");
}, 1000);

myDisplayer("C");

*/
