$(document).ready(function(){

//variables
$surface=$('.surface');
$car=$('.car');
$img=$('.car img');
let flag=true;

const cars=['./Img_05.png','./Img_06.png']

//keypress event
$(document).on('keypress',function(e){
    if(e.which==13){
        $($surface).toggleClass('moveRight')
        $($car).toggleClass('suspension')
    }
})


});
