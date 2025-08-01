var d = document.documentElement
var theme = localStorage.getItem('theme')
if(theme == 'light'){
    d.classList.add('lightmode')
    $('#themeicon')[0].innerHTML = '<svg height="20px" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#181411" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
}
else if(theme == 'dark'){
    d.classList.remove('lightmode'),
    $('#themeicon')[0].innerHTML = '<svg height="20px"  width="20px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#F0EDEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
}

$('#themetoggle')[0].addEventListener('click', () =>{
    d.classList.toggle('lightmode')

    if(d.classList.contains('lightmode')){
        localStorage.setItem('theme', 'light')
        $('#themeicon')[0].innerHTML = '<svg height="20px" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#181411" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
    }
    else{
        localStorage.setItem('theme', 'dark')
        $('#themeicon')[0].innerHTML = '<svg height="20px"  width="20px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#F0EDEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'

    }
})
$('#discord')[0].addEventListener('click', () =>{
     // Copy the text inside the text field
    navigator.clipboard.writeText('pugcy');
    $('#discordalert')[0].style.display = "block"
    $('#discordalert')[0].classList.add('out')



    setTimeout(() => {
        $('#discordalert')[0].classList.remove('out')
        setTimeout(() =>{
            $('#discord')[0].style.pointerEvents = 'all'
            $('#discordalert')[0].style.display = "none"
      }, 200)
    }, 1000)
})


function handle_hamburger(){
    console.log('hello')
    if(!$('#nav-menu')[0].classList.contains('disabled')){
        setTimeout(() => {

        $('#nav-menu')[0].classList.remove('disabled')
        }, 400)
        if($('hamburger-menu')[0].classList.contains('in')){
            $('hamburger-menu')[0].classList.remove('in')
            $('hamburger-menu')[0].classList.add('out')
        }
        else if(!$('hamburger-menu')[0].classList.contains('in') && !$('hamburger-menu')[0].classList.contains('out')){
            $('hamburger-menu')[0].classList.add('out')
        }
        else{
            $('hamburger-menu')[0].classList.add('in')
            $('hamburger-menu')[0].classList.remove('out')
        }

        $('#nav-menu')[0].classList.add('disabled')
    }
}
if($('#nav-menu')[0] != null){
$('#nav-menu')[0].onclick = function() {
    handle_hamburger()
}
document.onclick = function(event){
    if($('hamburger-menu')[0].classList.contains('out') && !event.target.classList.contains('hamburger-container') && !event.target.classList.contains('navp-container') && event.target != $('hamburger-menu')[0] && !event.target.classList.contains('navp')){
        handle_hamburger()
    }
}
}

