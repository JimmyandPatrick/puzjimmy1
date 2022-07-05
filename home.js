var clk = 0;
function addfumc(){
var rm = document.getElementById('rm');
var rmm = document.getElementById('rmm');
clk += 1;
if(clk === 5){
rmm.style.display = "block";
rm.style.display = "none";
}
}