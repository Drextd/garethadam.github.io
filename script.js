
const cardMarkup = `
    <div class="cardLayoutContainer">

        <section class="leftSection">
            <div id="leftPictureContainer">
                <div id="leftPicture"></div>
            </div>
            <div id="leftPictureTitle"></div>
            <div id="leftExtraInfo"></div> 
        </section>

        <section class="rightSection">
            <div class="rightElementStyling" id="rightAreaTop"></div>
            <div class="rightElementStyling" id="rightAreaMiddle"></div>
            <div class="rightElementStyling" id="rightAreaBottom"></div>
        </section>
    </div>
`;


window.addEventListener('DOMContentLoaded', function (){
    document.getElementById('cardDisplayContainer').innerHTML = cardMarkup;
    document.getElementById('leftPictureTitle').innerHTML = 'Gareth Adam'
    document.getElementById('leftExtraInfo').innerHTML = 'Web Developer, I.T Professional'
    document.getElementById('rightAreaTop').innerHTML = 'Welcome to my Portfolio.'
    document.getElementById('rightAreaMiddle').innerHTML = 'Most recent position held was a Graduate Support Engineer to get my foot in the door after graduating from University of Canberra (QLD TAFE Campus).'
    document.getElementById('rightAreaBottom').innerHTML = 'Now seeking to take the next step in my career as a Junior Web Developer / Software Engineer.'
})

document.getElementById('home').addEventListener('click', popluateRightCard_Home)
document.getElementById('about').addEventListener('click', popluateRightCard_About)
document.getElementById('github').addEventListener('click', popluateRightCard_Github)
document.getElementById('resume').addEventListener('click', popluateRightCard_Resume)

function popluateRightCard_Home(){
    // WIP
}

function popluateRightCard_About(){
    // WIP
}

function popluateRightCard_Github(){
    // WIP
}

function popluateRightCard_Resume(){
    // WIP
}

