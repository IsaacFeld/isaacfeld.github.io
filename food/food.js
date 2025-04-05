$('searchresult')[0].style.height = `${$('searchresult')[0].children.length * 200}px`
$('#food-search')[0].oninput = function(){
    isaacSearch(this.value)
}
function checkTags(index, key){
    let tagString = ''
    for(let i = 0; i < $('.tagContainer')[index].children.length; i++){
        tagString += $('.tagContainer')[index].children[i].textContent.toLowerCase()
    }
    return tagString.includes(key)
}
function isaacSearch(key){
        for(let i = 0; i < $('if-title').length; i++){
            if(!$('if-title')[i].textContent.toLowerCase().includes(key.toLowerCase()) && !$('if-subtitle')[i].textContent.toLowerCase().includes(key.toLowerCase()) && !checkTags(i, key)){
                $('article')[i].classList.add('out')
            }
            else{
                if($('article')[i].classList.contains('out')){
                    $('article')[i].classList.remove('out')
                }
            }
        }
        // Isaacs search algorithm
}
