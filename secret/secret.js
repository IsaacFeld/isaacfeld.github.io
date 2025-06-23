/** Intro Sequence */ 
let map = {
    0: [],
    1: [0],
    2: [1, 2, 3, 4, 5, 6],
    3: [7, 8],
    4: [9, 10, 11, 12],
    5: [13, 14, 15],
    6: [16, 17, 18],
    7: [19, 20],
    8: [21, 22, 23, 24]
}

/** Picture/Video Sequence*/

$('.nextLabel')[0].classList.add('disabled')
let screenText = [
    `The Cosmos has no record of your life prior to 2023, therefore your early teenagehood, childhood & infancy is excluded from this simulator.
This photo has been specifically chosen by your Uploader to help remind you of what kind of kid you were. Your Uploader hopes it's sufficient.
Please use the isolated arrow to move through your life, and the set of arrows to traverse handpicked collections of media that will assist you in the second stage of the remember™ process. `,
 `When you were 16 you met a sometimes funny, handsome, and loving boy who's name is "Isaac Feldman". Isaac went to your high school, and was in the grade above. You and Isaac saw each other for the first time at a party. The weeks that followed were full of adventure and love as you started spending more and more time with him. You and Isaac quickly fell into each other's arms, 
 literally and metaphorically. Turns out you and Isaac had similar parenting situations, and you met him in New York City during the Summer. In fact, you loved Isaac so much that you were brave enough to sneak him into your dad's apartment. You and Isaac got along really well, and your proto-relationship survived a month apart until you were both back in Berlin for the next school year.`, 
 'You and Isaac loved going to Christmas markets! Spending time together while sipping on a hot cocoa or munching on a giant bratwurst was the best thing to do outside during the winter. Although you did not like winter due to the cold, the idea of an alcoholic Glühwein and time with Isaac easily convinced you to come.',
  `Throughout your relationship, you and Isaac checked off all the boxes. 
A weekend retreat in the form of a quaint cabin? Check. Going to prom together in matching outfits? Check. Doing an iconic couple's Halloween costume? Check.
Participating in TikTok relationship trends? Check. Going out for a romantic rose dumpling dinner on Valentines Day? 
Check. Being there for each other's birthdays? Check. Going on your own trip to the Netherlands? CHECK!
Wow you must have really loved Isaac to go through with all of this. 
That's quite a huge list, and that's probably not even half of it. The point is, you and Isaac loved each other very much. So much so, 
that when you and Isaac were together you could do anything, including an impossible 30 minute bike ride to catch a train.`, 
`As time went on you and Isaac only grew closer. You and Isaac were practically inseparable. 
Even Isaac's friends started complaining about how he was on your leash, but Isaac assured you that he wouldn't 
spend a second doing something else when that second could be spent with you. You and Isaac did everything together, 
and you made each other very happy. Smiling came naturally around Isaac, and oh how Isaac loved your smile. Your smile would light up his entire world.`, 
`You and Isaac weren’t always up to super serious relationship stuff. There was a lot of cuddling, laughing, and relaxing throughout your relationship. 
Usually, each other’s presence was already enough to make a day a notch above the rest. 
So you often found yourself around Isaac, and even in the most mundane settings you always managed to have a good time.
`, 
`However all that cuddling sometimes led to unforeseen  naps! You and Isaac have both had their fair share of sleepy moments, Isaac more so. In fact, the first night you met Isaac he almost fell asleep on your lap.
Sleeping with Isaac ranged from good to bad. The naps were usually much better as you did not need to hear Isaac’s obvious sleeping noises while trying to go to sleep yourself.`,
`One of your favorite activities with Isaac was eating good food, whether homemade or at a restaurant. It did not matter as long as the food was delicious. You and Isaac often cooked food together or for each other. Your favorite home-cooked food was definitely pasta. 
You and Isaac often ate Mexican food, Italian cuisine, and all types of fried chicken dishes. Food was a way for Isaac to love you, whether it was cooking dinner for you or taking you out to fancy restaurants.
Although you did get hangry at times, Isaac always made sure to figure something out before it was too late…`,


`You and Isaac also got up to very silly activities. No this is not a sexual innuendo. Silly as in goofy, and although you usually enjoyed these silly moments more than Isaac, 
you knew that, deep down, Isaac enjoyed them too. You were always the funnier one in the relationship. Although your jokes often
flew over Isaac's head. Eventually he always laughed, whether at the joke, or at himself for missing the most obvious punchline ever.
Overall your relationship with Isaac was filled with heartwarming, hilarious, and cute moments. 
`,
`After you and Isaac graduated, you both took a leap of faith. You were both heading to university to pursue a degree, 
but unfortunately your universities were at opposite ends of the European continent. 
You were going to study Psychology at Edinburgh, while Isaac was going to study Computer Science in Munich. This meant that you two would have to do long distance 
for an extended period of time. This seemed daunting at first, but Isaac spent half a year in Berlin while you finished up high school giving you some extra time with him.
Eventually Isaac moved away, and he came to visit you once in a while. Though long distance sucked, you and Isaac made it work. You played video games together, watched shows, and called each other. 
However you missed each other intensely at times, and it wasn't always easy.
ERROR! ERROR! ERROR! Failed to retrieve memory... Please come back later.`,
`Hi Tully, this is Isaac. Breaking the 4th wall here, but thank you for making it through the memory retrieval program. As you can see it is not finished yet, 
although I suppose you could expect an update for our next anniversary :).
I came up with this idea as a means to record our relationship. I plan on updating it often with new lore, pictures, videos, and possibly poems. I really hope you enjoyed it, and I am so grateful that I get to be next to you right now, 
and watch you react to my handmade, or rather hand-typed, gift for you.
I worked very hard through spells of laziness to get this done, and through it all 
I was shocked by how much we accomplished together in just two years time. P.S. I wrote a poem for you on the next page.`
]
let poem = 
`
<h3> Step by Step - Isaac </h3>
<p style="font-family: auto; font-size: 1.25em;">
your teeth, beautiful as the pristine crescents of the ocean's endless tide,
<br>
your smile, bright as the luminescent moon floating hopelessly in an empty night sky,
<br>
your eyes, brown like the earth, the earth that sustains you and I,
<br>
this list could keep going on and on forever, 
<br>
all the way to that luminescent moon and back, and even longer

<br>
<br>

being apart from you challenges my soul
<br>
but our distance drives me to create for you, to imagine for you, and to achieve for you

<br>
<br>

seeing you has changed now
<br>
i feel like i never have enough time 
<br>
somethings always rushed, not how I wanted it to be, and our departure always awaits
<br>
like death itself it creeps upon my conscience
<br>
but even then, you remind me that you are the consistent pathfinder in the maze of my life
<br>
you remind me of how grateful i am to be in love with you

<br>
<br>

moving away makes our relationship difficult
<br>
but it gives us the opportunity to forge an irontight bond
<br>
in the depths of our bellows, as i kiss you farewell
<br>
with the assurance of your commitment
<br>
escaping from your lips, seeping into mine

<br>
<br>

two years have flown by, and my life has changed so much
<br>
sometimes i feel like i'm losing myself in the process
<br>
but then again we were made to change right?
<br>
you and I were going to change no matter how much i fought against it
<br>
but the real paradox despite all of our change
<br>
is that I want to keep our love forever

<br>
<br>

star crossed lovers fated to collide
<br>
two lovers who have a dream of a united future
<br>
two lovers trying to find themsleves
<br>
two lovers figuring out love, step by step

<br>
<br>
<br>
With all my heart, I love you Tully ♡
</p>
`
let screenMediaIndex = 0;
let screenMediaSubIndex = 0;
let typeWriterIndex = 0;
txt = screenText[screenMediaIndex]
/* Mailbox */
let chatToLoad = '';
/* Isaac Chats */
let pickedIsaacPath = null;
let isaacChoices = {
    0: ['i am doing great!!! how are you? WHERE ARE YOU!!!!!!!!!!', 'WHAT IS GOING ON ISAAC!!!', 'I THOUGHT I WAS DEAD?!?!?!'],
    1: ['oh my god I get to see you??? I am so excited!', 'I JUST DIED BUT I AM STILL ALIVE? NOTHING MAKES SENSE', 'A body?? What will I Look like?'],
    2: ['Does Earth still look the same?', 'Oh okay, I think I understand. So is this all actually real? ', 'Got it, so is everything normal, or are there some quirks I should know about?']
}
let isaacResponses = {
    1:  [`Oh my god! You finally made it. It's so good to hear you :). Seems like you have acclimated to the digital world quick haha. I am doing amazing!! 
        I can't wait to show you everything there is to offer here. I am nearby, and I am coming to see you asap.`,

        `IT'S OKAY TULLY DON'T PANIC I WAS THE SAME WHEN I FIRST GOT HERE. It's a little overwhelming at first. You should regain all of your memories within the next day or two. 
        You are safe, and in a virtual world with me and countless others. Seems like you haven't remembered the memory of me uploading your consciousness yet. 
        Don't worry everything is going to be okay!`, 

        `You are not dead! Well.. you physically died, as in your material form has disappeared, but you live on mentally in the fields of Elysian. This place is like a simulation of the real world, 
        it's just not actually fully real. Soon enough you'll take on a body and you can join me.`],

    2: [`Me too Tully :) I have been waiting so long for you to get here. You are the only person I would want to spend my afterlife with.`, `Let me explain, I uploaded a copy of your brain to this company back in 2023. They promised that one day they'd be able to "resurrect" us as robots. Seemed like a cool concept, and I thought why not. 
        I did not actually think it would work haha. Here we are hundreds of years after our deaths, reunited.`, 
        `You can choose the "age" of your body, and you can change it at any time. Your genetic makeup was also uploaded which allows the robot-body to accurately recreate how you looked like at any age.`],
    3: [`Yes of course! We can literally do whatever we want to now. There's so much to see, and so much to do. They are even hinting at a possiblity of returning to Earth in the near future.`, 
        `Well everything is semi-real. Some stuff is an illusion, for example it might look, taste, and feel like a pizza. However it could just be an equally nutrient dense artifically created food.`, 
        `No quirks, you still need to do all the things that a human needs to do. This prevents your brain from going insane, and is very important. There is some stuff that you can toggle on and off. 
        However some stuff isn't actually fully real. There are illusions, as not everything can be physically recreated.`]
    }
    
let isaacChatIndex = 0;
// Initial Chats
let isaacChats = [ 'recare you okay??',
    'recDon\'t worry everything is fine']
/* Company Chats */ 
let pickedCompanyPath = null;
let companyChoices = {
    0: ['What is this place?', 'What am I?', 'Who are you???'],
    1: [`What happens if I die?`, 'Where is my brain?', 'How did you create all of this?'],
    2: [`Do I need to eat food and drink water?`, `What if I don't want to be an angel?`, 'How long did it take?']
}
let companyResponses = {
    1: [`The fields of Elysian is the world's first ever truly virtual world, here you can live your life again on a simulation of Earth with your friends and family.`, 
        `You are a human-like robot connected to a copy of your organic brain. We call it an "Angel"`, 
        `Elysian Technologies is a neurotech company originating from Earth founded in the year 2023. You are talking to a real employee stationed on Earth.`],
    2: [`You have the option to die or loop your life. If you choose to die, your consciousness will be wiped from the Cosmos.`, 
        `We at Elysian Technologies have made sure that your brain is safely stored in the most secure cyber-vault in the world. On top of this, there are several top secret locations scattered around the cosmos (hence the name Cosmos) with backups of your brain stored on them.`, 
        `The fields of Elsyian is a sophisticated megastructure that orbits the moon. By creating a second Earth on our own we were able to control everything. These fields are a real paradise, and most of the stuff you see are illusions which means eating your favorite food will still feel the same way even if it's not physically the same.`],
    3: [`Yes, Elysian is a truly authentic simulation of Earth, however you cannot die in Elysian unless you choose to do so. However not eating will lead to feelings of starvation, and not drinking will lead to dehydration etc.`, 
        `If you would like to die you are free to do so. Thoughts of death will automatically be picked up, and you can then go to consulting where you can choose between a permanent brain death, or a simulated death. 
        If you choose the simulated death, your life will be looped and your memories of your previously simulated life will be erased. `,
         `The fields of Elysian was an architectural feat that was completed in the year 2389. If you are wondering how you made it here, it's because we have offered uploading since 2023, for the chance that the fields might someday exist. 
         Due to climate change, war, famine, and water scarcity Earth has become a hostile and dangerous place.
         Nowadays, people on Earth willingly leave their physical bodies behind to come to the fields, since their lives are so miserable. `]
}
let companyChatIndex = 0;
// Initial Chats
let companyChats = [
    'recWelcome to the fields of Elysian!'
]
// Response System



let imageView = $('#screenMedia')[0]
let videoView = $('#screenVideo')[0]
let videoSource = $('#screenVideoSource')[0]

let nextCounter = 1;
let canNext = false;
let executingMatch = false;

setTimeout(() => {
    canNext = true;

}, 2000)

function initChoices(){
       var chatChoice = document.createElement('div')
       chatChoice.classList.add('chatChoice')
    
       chatChoice.appendChild(document.createElement('p'))
  
       if(chatToLoad == 'isaac'){
            $('.chatInput')[0].innerHTML = '';
            if(!pickedIsaacPath){
                for(let i = 0; i < isaacChoices[isaacChatIndex].length; i++){
                    var choiceToAdd = chatChoice.cloneNode(true)
                    choiceToAdd.classList.add(`choice_${i}`)
                    choiceToAdd.children[0].textContent = isaacChoices[isaacChatIndex][i]
                    $('.chatInput')[0].appendChild(choiceToAdd)
                }
            }
            else{
                if(isaacChoices[isaacChatIndex]){
                    var choiceToAdd = chatChoice.cloneNode(true)
                    choiceToAdd.classList.add(`choice_${pickedIsaacPath}`)
                    choiceToAdd.children[0].textContent = isaacChoices[isaacChatIndex][pickedIsaacPath]
                    $('.chatInput')[0].appendChild(choiceToAdd)
                }

            }

            var chatBox = document.createElement('div')
            chatBox.classList.add('chatBox')
            chatBox.appendChild(document.createElement('p'))
            hydrateChats()
       }
       else if(chatToLoad == 'company'){
            $('.chatInput')[0].innerHTML = '';
            console.log(pickedCompanyPath)
            if(!pickedCompanyPath){
                for(let i = 0; i < companyChoices[companyChatIndex].length; i++){
                    var choiceToAdd = chatChoice.cloneNode(true)
                    choiceToAdd.classList.add(`choice_${i}`)
                    choiceToAdd.children[0].textContent = companyChoices[companyChatIndex][i]
                    $('.chatInput')[0].appendChild(choiceToAdd)
                }
            }else{
                if(companyChoices[companyChatIndex]){
                    var choiceToAdd = chatChoice.cloneNode(true)
                    choiceToAdd.classList.add(`choice_${pickedCompanyPath}`)
                    choiceToAdd.children[0].textContent = companyChoices[companyChatIndex][pickedCompanyPath]
                    $('.chatInput')[0].appendChild(choiceToAdd)
                }

            }

            hydrateChats()
       }
}
function switchToVideo(){
    imageView.classList.add('hidden')
    videoView.classList.remove('hidden')
    videoView.setAttribute('src', `../images/secret project photos/${screenMediaIndex}_${screenMediaSubIndex}.mp4`)
}
function switchOffVideo(){
    videoView.classList.add('hidden')
    videoView.pause()
    videoView.removeAttribute('src')
    videoView.load()
    setTimeout(() => {
         imageView.classList.remove('hidden')
    }, 50)
   
}
function hydrateChats(){
    $('.chatWindow')[0].innerHTML = '';
    var chatBox = document.createElement('div')
    chatBox.classList.add('chatBox')
    chatBox.appendChild(document.createElement('p'))
    if(chatToLoad == 'isaac'){

        for(let i = 0; i < isaacChats.length; i++){
            var newChatMessage = chatBox.cloneNode(true)
            if(isaacChats[i].substring(0, 3) == 'rec'){
                newChatMessage.classList.add('recipient')
                newChatMessage.children[0].textContent = isaacChats[i].substring(3)
                $('.chatWindow')[0].appendChild(newChatMessage)
            }
            else if(isaacChats[i].substring(0, 3) == 'sen'){
                newChatMessage.classList.add('sender')
                newChatMessage.children[0].textContent = isaacChats[i].substring(3)
                $('.chatWindow')[0].appendChild(newChatMessage)
            }
            else{
                console.log('err while parsing chat msgs')
            }
        }
    }
    else if(chatToLoad == 'company'){
        for(let i = 0; i < companyChats.length; i++){
            var newChatMessage = chatBox.cloneNode(true)
            if(companyChats[i].substring(0, 3) == 'rec'){
                newChatMessage.classList.add('recipient')
                newChatMessage.children[0].textContent = companyChats[i].substring(3)
                $('.chatWindow')[0].appendChild(newChatMessage)
            }
            else if(companyChats[i].substring(0, 3) == 'sen'){
                newChatMessage.classList.add('sender')
                newChatMessage.children[0].textContent = companyChats[i].substring(3)
                $('.chatWindow')[0].appendChild(newChatMessage)
            }
            else{
                console.log('err while parsing chat msgs')
            }
        }
    }
    $('.chatWindow')[0].scrollTop = $('.chatWindow')[0].scrollHeight;

}
function getResponse(selectedChoice){
        if(chatToLoad == 'isaac'){
            var response = 'error';
            if(isaacResponses[isaacChatIndex] != null && isaacResponses[isaacChatIndex][selectedChoice] != null){
                response = isaacResponses[isaacChatIndex][selectedChoice]
            }
            return 'rec'+response
        }
        else if(chatToLoad == 'company'){
            var response = 'error';
            if(companyResponses[companyChatIndex] != null && companyResponses[companyChatIndex][selectedChoice] != null){
                response = companyResponses[companyChatIndex][selectedChoice]
            }
            return 'rec'+response
        }
}
function updateMedia(){
    console.log(screenMediaIndex)
    console.log(screenMediaSubIndex)
    if(screenMediaIndex == 1 && screenMediaSubIndex == 1){
        switchToVideo()
    }
    else if(screenMediaIndex == 3 && screenMediaSubIndex == 4){
        switchToVideo()
    }
    else if(screenMediaIndex == 3 && screenMediaSubIndex == 8){
        switchToVideo()
    }
    else if(screenMediaIndex == 3 && screenMediaSubIndex == 14){
        switchToVideo()
    }
    else if(screenMediaIndex == 7 && screenMediaSubIndex == 4){
        switchToVideo()
    }
    else if(screenMediaIndex == 7 && screenMediaSubIndex == 5){
        switchToVideo()
    }
    else{
        imageView.src = `../images/secret project photos/${screenMediaIndex}_${screenMediaSubIndex}.jpg`
        switchOffVideo()
    }
}

document.onclick = function(event){
    if(event.target.classList.contains('closeInbox')){
        $('.inbox')[0].classList.add('hidden')
        $('.messageGUI')[0].classList.remove('active')  
        $('.inboxLabel')[0].classList.remove('disabled')
        $('.nextLabel')[0].classList.remove('inboxDisabled')
        $('.prevMedia')[0].classList.remove('inboxDisabled')
        $('.nextMedia')[0].classList.remove('inboxDisabled')
    }
    else if(event.target.classList.contains('inboxLabel')){
        $('.messageGUI')[0].classList.add('active')
        $('.inboxLabel')[0].classList.add('disabled')
        $('.nextLabel')[0].classList.add('inboxDisabled')
        $('.prevMedia')[0].classList.add('inboxDisabled')
        $('.nextMedia')[0].classList.add('inboxDisabled')
        setTimeout(() => {
            $('.loading')[0].classList.remove('hidden')
        }, 400)
        setTimeout(() => {
                $('.loading')[0].classList.add('hidden')
                $('.inbox')[0].classList.remove('hidden');
        }, 2000)

      
    }
    else if(event.target.classList.contains('contact')){
        chatToLoad = event.target.getAttribute('name')
        initChoices()
    }
    else if(event.target.classList.contains('chatChoice')){
        if(chatToLoad == 'isaac'){

            isaacChats.push('sen'+ event.target.children[0].textContent)
            selectedChoice = parseInt(event.target.classList[1].split('_')[1])
            if(!pickedIsaacPath){
                pickedIsaacPath = selectedChoice
            }
            isaacChatIndex++;
            hydrateChats()
            $('.chatInput')[0].innerHTML = '' // loading state?
            setTimeout(() => {
                initChoices()
                isaacChats.push(getResponse(selectedChoice))
                hydrateChats()
            }, 1000)
        }
        else if(chatToLoad == 'company'){
            companyChats.push('sen'+ event.target.children[0].textContent) 
            selectedChoice = parseInt(event.target.classList[1].split('_')[1])
            if(!pickedCompanyPath){
                pickedCompanyPath = selectedChoice
            }
            companyChatIndex++;    
            hydrateChats()    
            $('.chatInput')[0].innerHTML = '' 
            setTimeout(() => {
                initChoices()
                companyChats.push(getResponse(selectedChoice))
                hydrateChats()
            }, 1000)
        }
    }
    else if(event.target.classList.contains('nextLabel')){
        // image & text logic
        if(screenMediaIndex <= 9){
            typeWriterIndex = 0;
            $('.screentext')[0].innerHTML = '';
            $('.nextLabel')[0].classList.add('disabled')
            $('.nextMedia')[0].classList.remove('disabled')
            $('.prevMedia')[0].classList.add('disabled')
            screenMediaIndex++;
            if(screenText[screenMediaIndex] != null){
                txt = screenText[screenMediaIndex]
            }
            else{
                txt = ""
            }
            if(screenMediaIndex == 10){
                $('.screen')[0].children[0].remove()
                $('.screen')[0].children[0].remove()
                $('.screen')[0].children[0].style.width = "100%"
                $('.screen')[0].style.flexDirection = "column"
                $('.screen')[0].style.fontSize = "1.5em"
            }

            typeWriter()
            screenMediaSubIndex = 0
            updateMedia()

        }
        else{
            

            $('.screen')[0].innerHTML = poem;
        }


    }
    else if(event.target.classList.contains('nextMedia')){
    if(screenMediaIndex == 1 && screenMediaSubIndex  < 3 || screenMediaIndex == 2 && screenMediaSubIndex < 3 || screenMediaIndex == 3 && screenMediaSubIndex < 16 
        || screenMediaIndex == 4 && screenMediaSubIndex < 23 || screenMediaIndex == 5 && screenMediaSubIndex < 14 || screenMediaIndex == 6 && screenMediaSubIndex < 6 
        || screenMediaIndex  == 7 && screenMediaSubIndex < 15 || screenMediaIndex == 8 && screenMediaSubIndex < 15 || screenMediaIndex == 9 && screenMediaSubIndex < 4){
        $('.prevMedia')[0].classList.remove('disabled')
        screenMediaSubIndex++;
        if(screenMediaIndex == 1 && screenMediaSubIndex  == 3 || screenMediaIndex == 2 && screenMediaSubIndex == 3 || screenMediaIndex == 3 && screenMediaSubIndex == 16 
        || screenMediaIndex == 4 && screenMediaSubIndex == 23 || screenMediaIndex == 5 && screenMediaSubIndex == 14 || screenMediaIndex == 6 && screenMediaSubIndex == 6
        || screenMediaIndex  == 7 && screenMediaSubIndex == 15 || screenMediaIndex == 8 && screenMediaSubIndex == 15 || screenMediaIndex == 9 && screenMediaSubIndex == 4){
            event.target.classList.add('disabled')
        }
        updateMedia()
    }



    }
    else if(event.target.classList.contains('prevMedia')){
        if(screenMediaSubIndex != 0){
            screenMediaSubIndex--;
            $('.nextMedia')[0].classList.remove('disabled')
            if(screenMediaSubIndex == 0)[
                event.target.classList.add('disabled')
            ]
            updateMedia()
        }



    }
}
document.onkeydown = function(event) {

    console.log({canNext: canNext, nextCounter: nextCounter, executingMatch: executingMatch})
    if(/^.$/u.test(event.key) && nextCounter == 3 && !canNext && !executingMatch || /^.$/u.test(event.key) && nextCounter == 5 && !canNext && !executingMatch || /^.$/u.test(event.key) && nextCounter == 7 && !canNext && !executingMatch){
        $('.input')[0].children[0].textContent += event.key
        if(nextCounter == 3){
            if($('.input')[0].children[0].textContent.replace(/\s/g,'').toLowerCase() == 'tullyantoniacomfort'){
                match()
          
            }
        }
        else if(nextCounter == 5){
            if($('.input')[0].children[0].textContent.replace(/\s/g,'').toLowerCase() == '20/02/2007' ){
                    match()
    
            } 
        }
        else if(nextCounter == 7){
            if($('.input')[0].children[0].textContent.replace(/\s/g,'').toLowerCase() == `isaac'sbutt` || $('.input')[0].children[0].textContent.replace(/\s/g,'').toLowerCase() == `isaacsbutt` ){
                match()
            }
        }

    }
    else if(event.key == 'Backspace' && nextCounter == 3 && !canNext && !executingMatch || event.key == 'Backspace' && !canNext &&  nextCounter ==  5 && !executingMatch || event.key == 'Backspace' && !canNext &&  nextCounter ==  7 && !executingMatch) {
        $('.input')[0].children[0].textContent = $('.input')[0].children[0].textContent.slice(0, -1)
        if(nextCounter == 3){
            if($('.input')[0].children[0].textContent.replace(/\s/g,'').toLowerCase() == 'tullyantoniacomfort'){
                match()
            }
        }
        else if(nextCounter == 5){
            if($('.input')[0].children[0].textContent.replace(/\s/g,'').toLowerCase() == '20/02/2007'){
                match()
            } 
        }
        else if(nextCounter == 7){
            if($('.input')[0].children[0].textContent.replace(/\s/g,'').toLowerCase() == `isaac'sbutt` || $('.input')[0].children[0].textContent.replace(/\s/g,'').toLowerCase() == `isaacsbutt` ){
                match()
            }
        }
    }
    if(event.key == ' ' && canNext){
            $('.dialogue')[0].style.display = 'none'
             canNext = false;
            if(map[nextCounter+1] != null){
                setTimeout(() => {
                    console.log('yo')
                    if(nextCounter != 3 && nextCounter != 5 && nextCounter != 7)
                    canNext = true;
                }, 2000 * map[nextCounter+1].length)
                for(let i = 0; i < map[nextCounter].length; i++){
                    if(nextCounter == 1 && i == 0){
                    }
                    else{
                        $('.dialogue')[map[nextCounter][i]].classList.add('hidden')
                    }
                }
                nextCounter++;
                if(nextCounter == 3 || nextCounter == 5 || nextCounter == 7){
                    $('.input')[0].classList.remove('hidden')
                    canNext = false;
                }
     
                $('.dialogue')[map[nextCounter][0]].classList.remove('hidden')
                for(let j = 1; j < map[nextCounter].length; j++){
                    setTimeout( () => {
                        $('.dialogue')[map[nextCounter][j]].classList.remove('hidden')

                    }, 2000 * (j))
                }


            }
            else {
                for(let i = 0; i < $('.dialogue').length; i++){
                    $('.dialogue')[i].classList.add('hidden')
                }
                $('.textbox')[0].style.display = "none";
                
                $('.screenContainer')[0].classList.remove('hidden')        
                typeWriter()
                updateMedia()        
            }

    }


}

function typeWriter(){
    if(typeWriterIndex < txt.length){
        $('.screentext')[0].innerHTML += txt.charAt(typeWriterIndex)
        typeWriterIndex++;
        setTimeout(typeWriter, 25)
    }
    else{
        $('.nextLabel')[0].classList.remove('disabled')
    }
}
function match(){
    if(nextCounter == 3 || nextCounter ==  5 || nextCounter == 7){
        $('.input')[0].classList.remove('red')
        $('.input')[0].classList.add('correct')
        executingMatch = true;
        setTimeout( () => {
            canNext = true;
            document.dispatchEvent(new KeyboardEvent('keydown', {'key': ' '}))
            $('.input')[0].remove()
            executingMatch = false;
        }, 1000)

    }
}