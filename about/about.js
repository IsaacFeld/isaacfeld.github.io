
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
// 02 05 2006
$('pink')[0].textContent = calculateAge()