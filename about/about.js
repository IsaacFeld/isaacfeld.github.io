
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

}
$('#showGameList')[0].onclick = function(event){

    $('#showGameList')[0].disabled = true
    $('.gameList')[0].classList.toggle('in')
    setTimeout(() => {
        $('#showGameList')[0].disabled = false
    }, 1000)


}
   
/*
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        width: '33%',
        height: '150',
        uri: 'spotify:track:2QdcmNlQdW8iA4JEg29cgx'
      };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };
  */