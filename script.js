
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

})

