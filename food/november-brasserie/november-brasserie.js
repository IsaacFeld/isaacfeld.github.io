console.log($('#nextSection'))
$('section')[1].style.display = 'none'
$('#nextSection')[0].onclick = function(event){
    window.scrollTo(0, 0)
    $('section')[0].style.display = 'none'
    $('section')[1].style.display = 'block'
    


}