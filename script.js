
const cardMarkup = `
    <div class="cardLayoutContainer">

        <section id="itemLeft" class="leftSection">
            <div id="leftPictureContainer">
                <div id="leftPicture"></div>
            </div>
            <div id="leftPictureTitle"></div>
            <div id="leftExtraInfo"></div> 
        </section>

        <section id="itemRight" class="rightSection">
            <div class="rightElementStyling" id="rightAreaTop"></div>
            <div class="rightElementStyling" id="rightAreaMiddle"></div>
            <div class="rightElementStyling" id="rightAreaBottom"></div>
        </section>
    </div>
`

window.addEventListener('DOMContentLoaded', function (){
    document.getElementById('cardDisplayContainer').innerHTML = cardMarkup;
    popluateRightCard_Home()
})

document.getElementById('home').addEventListener('click', popluateRightCard_Home)
document.getElementById('home').addEventListener('click', animationWrapper)
document.getElementById('about').addEventListener('click', popluateRightCard_About)
document.getElementById('about').addEventListener('click', animationWrapper)
document.getElementById('github').addEventListener('click', popluateRightCard_Github)
document.getElementById('github').addEventListener('click', animationWrapper)
document.getElementById('resume').addEventListener('click', popluateRightCard_Resume)
document.getElementById('resume').addEventListener('click', animationWrapper)

function popluateRightCard_Home(){
    document.getElementById('leftPicture').style.background = '#FFFFFF url("https://drextd.github.io/garethadam.github.io/images/personalPicture.jpg") no-repeat center'
    document.getElementById('leftPicture').style.backgroundSize = 'cover'
    document.getElementById('leftPictureTitle').textContent = 'Gareth Adam'
    document.getElementById('leftExtraInfo').textContent = 'Web Developer, I.T Professional'
    document.getElementById('rightAreaTop').textContent = 'Welcome to my Portfolio.'
    document.getElementById('rightAreaMiddle').textContent = 'Most recent position held was a Graduate Support Engineer of 2 years to get my foot in the door into the I.T industry.'
    document.getElementById('rightAreaBottom').textContent = 'Now seeking to take the next step in my career as a Junior Web Developer / Software Engineer. Currently working towards my AWS Cloud Practitioner certification.'
}

function popluateRightCard_About(){
    document.getElementById('leftPicture').style.background = '#FFFFFF url("https://drextd.github.io/garethadam.github.io/images/personalPicture.jpg") no-repeat center'
    document.getElementById('leftPicture').style.backgroundSize = 'cover'
    document.getElementById('leftPictureTitle').textContent = 'Gareth Adam'
    document.getElementById('leftExtraInfo').textContent = 'Web Developer, I.T Professional'
    document.getElementById('rightAreaTop').textContent = 'A little bit about myself.'
    document.getElementById('rightAreaMiddle').textContent = `After graduating from University of Canberra (QLD TAFE Campus) back in 2018 I went straight into the I.T industry as a Graduate Support Engineer. 
                                                            This position opened up the world to what it means to work in a larger team and gave me first hand experience working within a Monolithic system.
                                                            Additionally has granted me a unique perspective of being able on both sides of the fence with supporting applications and developing them.`
    document.getElementById('rightAreaBottom').textContent = `My interests lie within problem solving, running on the treadmill of always learning, curiousity to dive deeper that what is required.
                                                            Lastly, I spend my free time with my loving family and being an avid gamer (video and tabletop).`                                                       
}

function popluateRightCard_Github(){
    document.getElementById('leftPicture').style.background = '#FFFFFF url("https://drextd.github.io/garethadam.github.io/images/githubLogo.png") no-repeat center'
    document.getElementById('leftPicture').style.backgroundSize = 'cover'
    document.getElementById('leftPictureTitle').textContent = 'Github Links'
    document.getElementById('leftExtraInfo').textContent = 'Code examples / Previous projects'
    document.getElementById('rightAreaTop').innerHTML = `Leetcode
                                                        <a href="https://leetcode.com/problemset/all/">https://leetcode.com/problemset/all/</a>
                                                        Github repo
                                                        <a href="https://github.com/Drextd/garethadam.github.io/tree/main/Leetcode%20Solutions">garethadam.github.io - Leetcode Solutions</a>
                                                        `               
    document.getElementById('rightAreaMiddle').innerHTML = `TAFE - Nov 2016
                                                            <a href="https://github.com/Drextd/QuoteSystem">QuoteSytem</a>
                                                            University - Feb 2017 to Nov 2018
                                                            <a href="https://github.com/Drextd/socialmedia">socialmedia - replicated</a>
                                                            <a href="https://github.com/Drextd/weatherApp">weatherApp - Public API (Dark Sky)</a>
                                                            <a href="https://github.com/Drextd/getthatrecipe">getthatrecipe - Public API (Edamam)</a>
                                                            The Odin Project
                                                            <a href="https://github.com/Drextd/theOdinProject/tree/main/full_stack_javascript">The Odin Project - Full Stack Javascript</a>
                                                            `
    document.getElementById('rightAreaBottom').textContent = 'The primary focus has been with Javascript as this is my preferred language of choice and my most proficient.'


}

function popluateRightCard_Resume(){
    document.getElementById('leftPicture').style.background = '#FFFFFF url("https://drextd.github.io/garethadam.github.io/images/resumePicture.png") no-repeat center'
    document.getElementById('leftPicture').style.backgroundSize = 'cover'
    document.getElementById('leftPictureTitle').textContent = 'Resume and Contact'
    document.getElementById('leftExtraInfo').innerHTML = `Email
                                                        <a href="mailto:garethadam@live.com.au">garethadam@live.com.au</a>
                                                        `
    document.getElementById('rightAreaTop').innerHTML = `Resume
                                                        <a href="https://drive.google.com/file/d/1Zbr_aK7ifeTWd9ADqn_9BHDzyZ7lrBrI/view?usp=sharing">Google Drive: CV - Gareth Adam</a>
                                                        `                 
    document.getElementById('rightAreaMiddle').innerHTML = `Social Links
                                                            <ul>
                                                                <li id='facebookIcon'></li>
                                                                <li><a href="https://www.facebook.com/gareth.adam.5/">Facebook</a></li>
                                                            </ul>
                                                            <ul>
                                                                <li id='discordIcon'></li>
                                                                <li><a>Discord - Gression#0076 </a></li>
                                                            </ul>
                                                            <ul>
                                                                <li id='battleNetIcon'></li>
                                                                <li><a>Battle.Net - Drextd#6654 </a></li>
                                                            </ul>
                                                            `
    document.getElementById('facebookIcon').style.background = 'url("https://drextd.github.io/garethadam.github.io/images/facebookIcon.png") no-repeat center'
    document.getElementById('facebookIcon').style.backgroundSize = 'contain'
    document.getElementById('discordIcon').style.background = 'url("https://drextd.github.io/garethadam.github.io/images/discordIcon.png") no-repeat center'
    document.getElementById('discordIcon').style.backgroundSize = 'contain'    
    document.getElementById('battleNetIcon').style.background = 'url("https://drextd.github.io/garethadam.github.io/images/battleNetIcon.png") no-repeat center'
    document.getElementById('battleNetIcon').style.backgroundSize = 'contain'          
    document.getElementById('rightAreaBottom').innerHTML = ''                 
}


function leftAnimation(){
    document.getElementById('itemLeft').animate([
        {
            opacity: 0,
            transform: 'translateX(-20%)'
        },
        {
        opacity: 1,
        transform: 'translateX(0%)'
        }
    ], 1000)
}

function rightAnimation(){
    document.getElementById('itemRight').animate([
        {
            opacity: 0,
            transform: 'translateX(20%)'
        },
        {
        opacity: 1,
        transform: 'translateX(0%)'
        }
    ], 1000)
}

function animationWrapper(){
    leftAnimation()
    rightAnimation()
}
