function noob() {
  document.getElementById("title").innerHTML = "santiago is a noob";
  window.alert("santiago is a nooob");
}
function predictionClick() {
  //prediction 1
  const date = new Date();
  //window.alert("santiago will take a shit at: " + date);
  const pred1 = "santiago will take a shit at: " + new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + 5).toLocaleString();
  
  //prediction 2
  const pred2 = "schools will shutdown again on March 15, 2022"

  //choose prediction
  const rand = Math.floor(Math.random() * 2);
  
  if (rand == 0) {
    document.getElementById("prediction").innerHTML = pred1;
  } else if (rand == 1) {
    document.getElementById("prediction").innerHTML = pred2;
  }
  
}
