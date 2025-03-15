
function calculateAge(){
    number = null;
    time = new Date()
    number = time.getFullYear() - 2006
    if(time.getMonth() + 1 >= 5 && time.getDate() >= 2){
        
    }
    else{
        number --;
    }
    return number;z
}
$('primary')[0].textContent = calculateAge()
document.onscroll = function(event){
    console.log(window.scrollY)
    if(window.scrollY > 75){
        $('.gameList')[0].classList.add('in')
    }
    else{
        $('.gameList')[0].classList.remove('in')
    }
}