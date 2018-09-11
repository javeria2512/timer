let count = 0;
let whatToDo = function(){
	count += 1;
	let div = document.querySelector("div");
	div.innerHTML = count;
}
setInterval(whatToDo, 300);