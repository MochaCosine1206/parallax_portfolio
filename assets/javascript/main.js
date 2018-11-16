

$(document).ready(function(){
    $(".portfolioInset").hide();
    $(".portfolio").click(function(){
        $(".portfolioDiv").show();
        $(".portfolioInset").animate({top: '3%'}, "slow");
        
        $(".portfolioInset").animate({width: '80%'}, "slow");
        $(".portfolioInset").fadeIn();
        $(".portfolioInset").animate({height: '80%'}, "slow");
        
        $(".portfolioDiv").animate({width: '100%', top: '18%'}, "slow");
        // $(".portfolioDiv").animate({top: '15%'}, "slow");
        
    });
});