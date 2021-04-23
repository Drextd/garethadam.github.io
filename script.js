
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
    popluateRightCard_Home()
})

document.getElementById('home').addEventListener('click', popluateRightCard_Home)
document.getElementById('about').addEventListener('click', popluateRightCard_About)
document.getElementById('github').addEventListener('click', popluateRightCard_Github)
document.getElementById('resume').addEventListener('click', popluateRightCard_Resume)

function popluateRightCard_Home(){
    document.getElementById('leftPictureTitle').innerHTML = 'Gareth Adam'
    document.getElementById('leftExtraInfo').innerHTML = 'Web Developer, I.T Professional'
    document.getElementById('rightAreaTop').innerHTML = 'Welcome to my Portfolio.'
    document.getElementById('rightAreaMiddle').innerHTML = 'Most recent position held was a Graduate Support Engineer of 2 years to get my foot in the door into the I.T industry.'
    document.getElementById('rightAreaBottom').innerHTML = 'Now seeking to take the next step in my career as a Junior Web Developer / Software Engineer.'
}

function popluateRightCard_About(){
    document.getElementById('rightAreaTop').innerHTML = 'A little bit about myself.'
    document.getElementById('rightAreaMiddle').innerHTML = `After graduating from University of Canberra (QLD TAFE Campus) back in 2018 I went straight into the I.T industry as a Graduate Support Engineer. 
                                                            This position opened up the world to what it means to work in a larger team and gave me first hand experience working within a Monolithic system.
                                                            Additionally has granted me a unique perspective of being able on both sides of the fence with supporting applications and developing them.`
    document.getElementById('rightAreaBottom').innerHTML = `My interests lie within problem solving, running on the treadmill of always learning, curiousity to dive deeper that what is required.
                                                            Lastly, I spend my free time with my loving family and being an avid gamer (video and tabletop).`
}

function popluateRightCard_Github(){
    // WIP
}

function popluateRightCard_Resume(){
    // WIP
}

