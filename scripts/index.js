function noob() {
	document.getElementById("title").innerHTML = "santiago is a noob";
	window.alert("santiago is a nooob");
}
function predictionClick() {
	const date = new Date();
	//window.alert("santiago will take a shit at: " + date);
	const customDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + 5);
	document.getElementById("prediction").innerHTML = "santiago will take a shit at: " + customDate.toLocaleString();
}
