$(function(){
    if($(".home_footer").length){
        var open = false;
        var posi = $(".home_footer").offset().top;
            var top = $('body,html').scrollTop();
            if(top >= posi && !open){
                $(".home_footer video")[0].play();
                open = true;
            }
        $( window ).scroll(function() {
            var posi = $(".home_footer").offset().top;
            var top = $('body,html').scrollTop();
            
            if(top >= posi && !open){
                $(".home_footer video")[0].play();
                open = true;
            }if(top <= posi-1000 && open){
                $(".home_footer video")[0].currentTime=0;
                open = false;
            }
            //console.log(top);
        });
    }
});