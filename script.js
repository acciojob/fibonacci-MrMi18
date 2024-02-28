function fibonacci(num) {
// your code here
	let fib = 1;
	if(num==0){
		console.log(0);
	}
	if(num==1){
		console.log(1);
	}
	
	for(let i = 2; i<num ;i++){
		fib+=i;
    }
	console.log(fib);
}

module.exports = fibonacci;
