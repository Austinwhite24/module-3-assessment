addEventListener

function myFavColor () {
    alert('Blue')
}

function myFavPlace (){
    alert('Your moms house')
}
function myFavRitual (){
    alert('Playing Football')
}
function selectYes () {
    alert('The Form had been submitted Succesfully')
}


let favColor = document.querySelector('#color')
let favPlace = document.querySelector('#place')
let favRitual = document.querySelector('#ritual')

favColor.addEventListener('click', myFavColor)
favPlace.addEventListener('click', myFavPlace)
favRitual.addEventListener('click', myFavRitual)
favsubmit.addEventListener('click', selectYes)

let submit = document.querySelector('#buttonPro')



