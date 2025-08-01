$('searchresult')[0].style.height = `${$('searchresult')[0].children.length * 200}px`
$('#food-search')[0].oninput = function(){
    isaacSearch(this.value)
}
$('#reset')[0].onclick = function() {
    for(let i = 1; i < tagList.length + 1; i++){
        if($('tag')[i].classList.contains('enabled')){
            $('tag')[i].classList.remove('enabled')
        }
    }
    targetTags = [];
    isaacTagFilter();
}
foodBlogMetaData = new Map() // Map containing the tags of each article
let tagList = new Array()  // For initializing tag buttons so we don't create duplicate tag buttons (restaurant tag appears multiple times)
let targetTags = new Array(); // Tags that are currently selected for filtering
for(let i = 0; i < $('.tagContainer').length; i++){ // Creating tag buttons
    var tags = new Array(); // For creating the foodBlogMetaData we create an array called tags which contains the tags for each article.
    for(let j = 0; j < $('.tagContainer')[i].children.length; j++){
        tagName = $('.tagContainer')[i].children[j].textContent
        tags.push(tagName);
        if(tagList.indexOf(tagName) == -1){
            tagEl = document.createElement('tag')
            tagEl.textContent = $('.tagContainer')[i].children[j].textContent
            tagEl.onclick = function(event) { 
                if(!event.target.classList.contains('enabled')){ // enable tag and add it's tag to targetTags
                    targetTags.push(event.target.textContent)
                    isaacTagFilter() // Filter results with target tags ^
                    event.target.classList.add('enabled')
                }
                else{ // disable tag, adjust targetTags & show results
                    targetTags.splice(targetTags.indexOf(event.target.textContent), 1)
                    isaacTagFilter()
                    event.target.classList.remove('enabled')
                }
      

            }
            $('#insertSearchTags')[0].appendChild(tagEl)
            tagList.push(tagName);
        }
    }
    foodBlogMetaData.set(i, tags) // Add entry to foodBlogMetaData with each of the article's tags.

}
function isaacSearch(key){
        if(key[0] == ' '){ // check if white space before search
            key = key.trimStart()
        }
        if(targetTags.length > 0){
            // ONLY DO SEARCH WITHIN SHOWN ARTICLES BECAUSE WE ARE FILTERING ANYWAYS
            for(let i = 0; i < $('article.filtered').length; i++){
                if(!$('article.filtered')[i].children[0].children[0].children[0].textContent.toLowerCase().includes(key.toLowerCase())){
                    $('article.filtered')[i].classList.add('out')
                }
                else{
                    if($('article.filtered')[i].classList.contains('out')){
                        $('article.filtered')[i].classList.remove('out')
                    }
                }
            }
        }
        else{
            for(let i = 0; i < $('if-title').length; i++){
              if(!$('if-title')[i].textContent.toLowerCase().includes(key.toLowerCase())){
                    $('article')[i].classList.add('out')
                }
                else{
                    if($('article')[i].classList.contains('out')){
                        $('article')[i].classList.remove('out')
                    }
                }
            }
        }

        // Isaacs search algorithm
}
function isaacTagFilter(){ // tag algorithm 

    if(targetTags.length > 0){
        for(let i = 0; i < $('article').length; i++){
            for(let tag = 0; tag < foodBlogMetaData.get(i).length; tag++){
                if(targetTags.indexOf(foodBlogMetaData.get(i)[tag]) != -1){
                    if($('article')[i].classList.contains('out') && $('if-title')[i].textContent.toLowerCase().includes($('#food-search')[0].value.toLowerCase())){
                        $('article')[i].classList.remove('out')
                    }
                    $('article')[i].classList.add('filtered')
                    
                    break;
                }
                else {
                    $('article')[i].classList.add('out')
                    $('article')[i].classList.remove('filtered')

                }
            }
        }
    }
    else{
        for(let i = 0; i < $('article').length; i++){
            if($('if-title')[i].textContent.toLowerCase().includes($('#food-search')[0].value.toLowerCase())){
                $('article')[i].classList.remove('out')
            }
        }
    }

}

