
const cardMarkup = `
    <div class="cardLayoutContainer">

        <section class="leftSection">
            <div id="leftPictureContainer"></div>
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
})

