let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let arrayLetters=Array.from(letters)
let lettersContainer=document.querySelector('.Letters')
arrayLetters.forEach(letter=>{
    let span=document.createElement('span')
    let letterText=document.createTextNode(letter)
    span.appendChild(letterText)
    span.classList.add("LetterBox")
    lettersContainer.appendChild(span)
})
const words = {
    programming: ["php", "javascript", "go", "scale", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Gandhi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
let allKeys=Object.keys(words)
let randomWord=Math.floor(Math.random()*allKeys.length)
let name=allKeys[randomWord]
let vluES=words[name]
let random2=Math.floor(Math.random()*vluES.length)
document.querySelector('.CategoryName').innerHTML=name
let letterguess=document.querySelector('.GuessOfWord')
let selectedWord=Array.from(vluES[random2]);
selectedWord.forEach(letter=>{
    let span=document.createElement('span')
    if(letter ===' '){
        let span=document.createElement('span')

        span.classList.add('space-ui')
        letterguess.appendChild(span)
    }
    else {
        let span=document.createElement('span')

        console.log(letter)
        span.classList.add("letterboxstyle")
        letterguess.appendChild(span)
    }
})
thedra=document.querySelector(".hungMan")
console.log(selectedWord)
let wrongTry=0;
 selectedWord=selectedWord.join(',').replaceAll(',','').replaceAll(' ','')
let boxes=document.querySelectorAll('.letterboxstyle')
console.log(selectedWord)
document.addEventListener("click",e=>{

    //console.log(boxes.length)
    if(e.target.classList.contains("LetterBox")){


        let boxesArray=Array.from(boxes)
        e.target.classList.add("clicked")
        let lep=document.querySelectorAll('.LetterBox')
        let op=Array.from(lep)
        index=op.indexOf(e.target)
        let latterOfBox=op[index].innerHTML.toLowerCase()
        //console.log(selectedWord)
        let boool=false

        for(let i=0;i<selectedWord.length;i++){


            //console.log(selectedWord[i]," ",latterOfBox)
            if(selectedWord[i]===' '){
                continue;
            }
            else if (selectedWord[i].toLowerCase()===latterOfBox.toLowerCase()){
                boxes[i].innerHTML=selectedWord[i].toUpperCase()
                document.getElementById('correct').play()
                boool=true
            }

        }

        if(!boool){
            wrongTry++;
            document.getElementById('wrongAnswer').play();
            thedra.classList.add(`wrong-${wrongTry}`)
        }

        if(wrongTry===8)
        {
            document.querySelector('.winAndFail').style.display='block'
            document.querySelector('.winAndFail p').innerHTML=`You Lose 
            The Word Is : <span>${selectedWord}</span>`
            document.querySelector('.container').classList.add('finish')
            document.getElementById('fail').play();
        }
        correct=0
        for(let i=0;i<selectedWord.length;i++) {
            console.log(selectedWord[i])
            if (selectedWord[i] !== '' && selectedWord[i].toLowerCase() === boxes[i].innerHTML.toLowerCase()) {
                correct++;
            }
        }
        if(correct===selectedWord.length){
            document.querySelector('.winAndFail').style.display='block'
            document.querySelector('.winAndFail p').innerHTML=`You Win
                The Word Is : <span>${selectedWord}</span>`
            document.querySelector('.container').classList.add('finish')
            document.getElementById('win').play()
        }


    }

})

document.querySelector('.replay').addEventListener("click",e=>{
    window.location.reload()
})