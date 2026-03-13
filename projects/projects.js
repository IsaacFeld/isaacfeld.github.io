for(let i = 0; i < $('project').length; i++){
  $('project')[i].addEventListener('click', (e) => {
    if (e.target.classList.contains('link-container'))  return;
    if($('project')[i].classList.contains('out')){
      $('project')[i].classList.remove('out')
      $('project')[i].classList.add('in')
        
    }
    else {
        $('project')[i].classList.remove('in')
        $('project')[i].classList.add('out')
        deactivateAllProjects(i);
        
    }
  })

    
}

function deactivateAllProjects(sparedProject){
    for(let i = 0; i < $('project').length; i++){
        if(i !== sparedProject && $('project')[i].classList.contains('out')){
            $('project')[i].classList.remove('out')
            $('project')[i].classList.add('in')
        }
    }
}

