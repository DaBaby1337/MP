function addition(){
        var p = parseFloat(document.getElementById("p").value);
        var l = parseFloat(document.getElementById("l").value);
        var t = parseFloat(document.getElementById("t").value);
        var i1 = parseFloat(document.getElementById("i1").value);
        var i2 = parseFloat(document.getElementById("i2").value);
        var q1 = parseFloat(document.getElementById("q1").value);
        var q2 = parseFloat(document.getElementById("q2").value);
        var c = ((Math.pow(i1,2)/q1)-(Math.pow(i2,2)/q2))*p*l*t*0.003;
        if (isNaN(c)==true) c='Где то неправильно ввели число'
        document.getElementById("result").innerHTML = c;
}
(function(){
const header = document.querySelector('.header');
window.onscroll = () => {
        if (window.pageYOffset>50){
                header.classList.add('header_active');
        } else{
                header.classList.remove('header_active'); 
        }
};
}());