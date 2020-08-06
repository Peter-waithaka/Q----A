function introversion() {
    var socialEvents= document.getElementsByName("socialEvents");
    if(socialEvents[0].checked) {
        var socialEvent= parseInt(document.getElementById("SA").value);
        // document.getElementById("socialEventResult").innerHTML=socialEvent;
    } else if(socialEvents[1].checked){
        var socialEvent= parseInt(document.getElementById("A").value);
        // document.getElementById("socialEventResult").innerHTML=socialEvent;
    } else if(socialEvents[2].checked){
        var socialEvent= parseInt(document.getElementById("N").value);
        // document.getElementById("socialEventResult").innerHTML=socialEvent;
    } else if(socialEvents[3].checked){
        var socialEvent= parseInt(document.getElementById("D").value);
        // document.getElementById("socialEventResult").innerHTML=socialEvent;
    } else if(socialEvents[4].checked){
        var socialEvent= parseInt(document.getElementById("SD").value);
        // document.getElementById("socialEventResult").innerHTML=socialEvent;
    }
    var ideas= document.getElementsByName("ideas");
    if(ideas[0].checked) {
        var idea= parseInt(document.getElementById("SA").value);
        // document.getElementById("ideaResult").innerHTML=idea;
    } else if(ideas[1].checked){
        var idea= parseInt(document.getElementById("A").value);
        // document.getElementById("ideaResult").innerHTML=idea;
    } else if(ideas[2].checked){
        var idea= parseInt(document.getElementById("N").value);
        // document.getElementById("ideaResult").innerHTML=idea;
    } else if(ideas[3].checked){
        var idea= parseInt(document.getElementById("D").value);
        // document.getElementById("ideaResult").innerHTML=idea;
    } else if(ideas[4].checked){
        var idea= parseInt(document.getElementById("SD").value);
        // document.getElementById("ideaResult").innerHTML=idea;
    }
    var easyConversations= document.getElementsByName("easyConversations");
    if(easyConversations[0].checked) {
        var easyConversation= parseInt(document.getElementById("SA").value);
        // document.getElementById("easyConversationResult").innerHTML=easyConversation;
    } else if(easyConversations[1].checked){
        var easyConversation= parseInt(document.getElementById("A").value);
        // document.getElementById("easyConversationResult").innerHTML=easyConversation;
    } else if(easyConversations[2].checked){
        var easyConversation= parseInt(document.getElementById("N").value);
        // document.getElementById("easyConversationResult").innerHTML=easyConversation;
    } else if(easyConversations[3].checked){
        var easyConversation= parseInt(document.getElementById("D").value);
        // document.getElementById("easyConversationResult").innerHTML=easyConversation;
    } else if(easyConversations[4].checked){
        var easyConversation= parseInt(document.getElementById("SD").value);
        // document.getElementById("easyConversationResult").innerHTML=easyConversation;
    }
    var atmospheres= document.getElementsByName("atmospheres");
    if(atmospheres[0].checked) {
        var atmosphere= parseInt(document.getElementById("SA").value);
        // document.getElementById("atmosphereResult").innerHTML=atmosphere;
    } else if(atmospheres[1].checked){
        var atmosphere= parseInt(document.getElementById("A").value);
        // document.getElementById("atmosphereResult").innerHTML=atmosphere;
    } else if(atmospheres[2].checked){
        var atmosphere= parseInt(document.getElementById("N").value);
        // document.getElementById("atmosphereResult").innerHTML=atmosphere;
    } else if(atmospheres[3].checked){
        var atmosphere= parseInt(document.getElementById("D").value);
        // document.getElementById("atmosphereResult").innerHTML=atmosphere;
    } else if(atmospheres[4].checked){
        var atmosphere= parseInt(document.getElementById("SD").value);
        // document.getElementById("atmosphereResult").innerHTML=atmosphere;
    }
    var publicAreas= document.getElementsByName("publicAreas");
    if(publicAreas[0].checked) {
        var publicArea= parseInt(document.getElementById("SA").value);
        // document.getElementById("publicAreaResult").innerHTML=publicArea;
    } else if(publicAreas[1].checked){
        var publicArea= parseInt(document.getElementById("A").value);
        // document.getElementById("publicAreaResult").innerHTML=publicArea;
    } else if(publicAreas[2].checked){
        var publicArea= parseInt(document.getElementById("N").value);
        // document.getElementById("publicAreaResult").innerHTML=publicArea;
    } else if(publicAreas[3].checked){
        var publicArea= parseInt(document.getElementById("D").value);
        // document.getElementById("publicAreaResult").innerHTML=publicArea;
    } else if(publicAreas[4].checked){
        var publicArea= parseInt(document.getElementById("SD").value);
        // document.getElementById("publicAreaResult").innerHTML=publicArea;
    }

    var introvertOrExtrovert= function() {
        return socialEvent+ idea+ easyConversation + atmosphere + publicArea;
    }
    var newIntrovertOrExtrovert= introvertOrExtrovert();
    // var introversionWeight=0

    // if(newIntrovertOrExtrovert<=0){
    //     return introversionWeight +=0;
    // } else if(newIntrovertOrExtrovert>0){
    //     return introversionWeight+=1;
    // }
    // alert(introversionWeight);
    
    var intrigues= document.getElementsByName("intrigues");
    if(intrigues[0].checked) {
        var intrigue= parseInt(document.getElementById("SA").value);
    } else if(intrigues[1].checked){
        var intrigue= parseInt(document.getElementById("A").value);
    } else if(intrigues[2].checked){
        var intrigue= parseInt(document.getElementById("N").value);
    } else if(intrigues[3].checked){
        var intrigue= parseInt(document.getElementById("D").value);
    } else if(intrigues[4].checked){
        var intrigue= parseInt(document.getElementById("SD").value);
    }
    var futuristicViews= document.getElementsByName("futuristicViews");
    if(futuristicViews[0].checked) {
        var futuristicView= parseInt(document.getElementById("SA").value);
    } else if(futuristicViews[1].checked){
        var futuristicView= parseInt(document.getElementById("A").value);
    } else if(futuristicViews[2].checked){
        var futuristicView= parseInt(document.getElementById("N").value);
    } else if(futuristicViews[3].checked){
        var futuristicView= parseInt(document.getElementById("D").value);
    } else if(futuristicViews[4].checked){
        var futuristicView= parseInt(document.getElementById("SD").value);
    }
    var dayDreams= document.getElementsByName("dayDreams");
    if(dayDreams[0].checked) {
        var dayDream= parseInt(document.getElementById("SA").value);
    } else if(dayDreams[1].checked){
        var dayDream= parseInt(document.getElementById("A").value);
    } else if(dayDreams[2].checked){
        var dayDream= parseInt(document.getElementById("N").value);
    } else if(dayDreams[3].checked){
        var dayDream= parseInt(document.getElementById("D").value);
    } else if(dayDreams[4].checked){
        var dayDream= parseInt(document.getElementById("SD").value);
    }
    var realists= document.getElementsByName("realists");
    if(realists[0].checked) {
        var realist= parseInt(document.getElementById("SA").value);
    } else if(realists[1].checked){
        var realist= parseInt(document.getElementById("A").value);
    } else if(realists[2].checked){
        var realist= parseInt(document.getElementById("N").value);
    } else if(realists[3].checked){
        var realist= parseInt(document.getElementById("D").value);
    } else if(realists[4].checked){
        var realist= parseInt(document.getElementById("SD").value);
    }
    var techAdvancements= document.getElementsByName("techAdvancements");
    if(techAdvancements[0].checked) {
        var techAdvancement= parseInt(document.getElementById("SA").value);
    } else if(techAdvancements[1].checked){
        var techAdvancement= parseInt(document.getElementById("A").value);
    } else if(techAdvancements[2].checked){
        var techAdvancement= parseInt(document.getElementById("N").value);
    } else if(techAdvancements[3].checked){
        var techAdvancement= parseInt(document.getElementById("D").value);
    } else if(techAdvancements[4].checked){
        var techAdvancement= parseInt(document.getElementById("SD").value);
    }

    var intuitiveOrSensory= function(){
        return intrigue+ futuristicView+ dayDream+ realist+ techAdvancement;
    }
    var newIntuitiveOrSensory= intuitiveOrSensory();

    var followHearts= document.getElementsByName("followHearts");
    if(followHearts[0].checked) {
        var followHeart= parseInt(document.getElementById("SA").value);
    } else if(followHearts[1].checked){
        var followHeart= parseInt(document.getElementById("A").value);
    } else if(followHearts[2].checked){
        var followHeart= parseInt(document.getElementById("N").value);
    } else if(followHearts[3].checked){
        var followHeart= parseInt(document.getElementById("D").value);
    } else if(followHearts[4].checked){
        var followHeart= parseInt(document.getElementById("SD").value);
    }
    var whims= document.getElementsByName("whims");
    if(whims[0].checked) {
        var whim= parseInt(document.getElementById("SA").value);
    } else if(whims[1].checked){
        var whim= parseInt(document.getElementById("A").value);
    } else if(whims[2].checked){
        var whim= parseInt(document.getElementById("N").value);
    } else if(whims[3].checked){
        var whim= parseInt(document.getElementById("D").value);
    } else if(whims[4].checked){
        var whim= parseInt(document.getElementById("SD").value);
    }
    var feelings= document.getElementsByName("feelings");
    if(feelings[0].checked) {
        var feeling= parseInt(document.getElementById("SA").value);
    } else if(feelings[1].checked){
        var feeling= parseInt(document.getElementById("A").value);
    } else if(feelings[2].checked){
        var feeling= parseInt(document.getElementById("N").value);
    } else if(feelings[3].checked){
        var feeling= parseInt(document.getElementById("D").value);
    } else if(feelings[4].checked){
        var feeling= parseInt(document.getElementById("SD").value);
    }
    var emotions= document.getElementsByName("emotions");
    if(emotions[0].checked) {
        var emotion= parseInt(document.getElementById("SA").value);
    } else if(emotions[1].checked){
        var emotion= parseInt(document.getElementById("A").value);
    } else if(emotions[2].checked){
        var emotion= parseInt(document.getElementById("N").value);
    } else if(emotions[3].checked){
        var emotion= parseInt(document.getElementById("D").value);
    } else if(emotions[4].checked){
        var emotion= parseInt(document.getElementById("SD").value);
    }
    var commitments= document.getElementsByName("commitments");
    if(commitments[0].checked) {
        var commitment= parseInt(document.getElementById("SA").value);
    } else if(commitments[1].checked){
        var commitment= parseInt(document.getElementById("A").value);
    } else if(commitments[2].checked){
        var commitment= parseInt(document.getElementById("N").value);
    } else if(commitments[3].checked){
        var commitment= parseInt(document.getElementById("D").value);
    } else if(commitments[4].checked){
        var commitment= parseInt(document.getElementById("SD").value);
    }

    var thinkingOrFeeling= function(){
       return  followHeart+ whim+ feeling+ emotion+ commitment;
    }
    var newThinkingOrFeeling= thinkingOrFeeling();

    var travelPlans= document.getElementsByName("travelPlans");
    if(travelPlans[0].checked) {
        var travelPlan= parseInt(document.getElementById("SA").value);
    } else if(travelPlans[1].checked){
        var travelPlan= parseInt(document.getElementById("A").value);
    } else if(travelPlans[2].checked){
        var travelPlan= parseInt(document.getElementById("N").value);
    } else if(travelPlans[3].checked){
        var travelPlan= parseInt(document.getElementById("D").value);
    } else if(travelPlans[4].checked){
        var travelPlan= parseInt(document.getElementById("SD").value);
    }
    var priorities= document.getElementsByName("priorities");
    if(priorities[0].checked) {
        var priority= parseInt(document.getElementById("SA").value);
    } else if(priorities[1].checked){
        var priority= parseInt(document.getElementById("A").value);
    } else if(priorities[2].checked){
        var priority= parseInt(document.getElementById("N").value);
    } else if(priorities[3].checked){
        var priority= parseInt(document.getElementById("D").value);
    } else if(priorities[4].checked){
        var priority= parseInt(document.getElementById("SD").value);
    }
    var projectDecisions= document.getElementsByName("projectDecisions");
    if(projectDecisions[0].checked) {
        var projectDecision= parseInt(document.getElementById("SA").value);
    } else if(projectDecisions[1].checked){
        var projectDecision= parseInt(document.getElementById("A").value);
    } else if(projectDecisions[2].checked){
        var projectDecision= parseInt(document.getElementById("N").value);
    } else if(projectDecisions[3].checked){
        var projectDecision= parseInt(document.getElementById("D").value);
    } else if(projectDecisions[4].checked){
        var projectDecision= parseInt(document.getElementById("SD").value);
    }
    var dailyPlans= document.getElementsByName("dailyPlans");
    if(dailyPlans[0].checked) {
        var dailyPlan= parseInt(document.getElementById("SA").value);
    } else if(dailyPlans[1].checked){
        var dailyPlan= parseInt(document.getElementById("A").value);
    } else if(dailyPlans[2].checked){
        var dailyPlan= parseInt(document.getElementById("N").value);
    } else if(dailyPlans[3].checked){
        var dailyPlan= parseInt(document.getElementById("D").value);
    } else if(dailyPlans[4].checked){
        var dailyPlan= parseInt(document.getElementById("SD").value);
    }
    var energyBursts= document.getElementsByName("energyBursts");
    if(energyBursts[0].checked) {
        var energyBurst= parseInt(document.getElementById("SA").value);
    } else if(energyBursts[1].checked){
        var energyBurst= parseInt(document.getElementById("A").value);
    } else if(energyBursts[2].checked){
        var energyBurst= parseInt(document.getElementById("N").value);
    } else if(energyBursts[3].checked){
        var energyBurst= parseInt(document.getElementById("D").value);
    } else if(energyBursts[4].checked){
        var energyBurst= parseInt(document.getElementById("SD").value);
    }

    var judgingOrProspecting= function() {
        return travelPlan+ priority+ projectDecision+ dailyPlan+ energyBurst;
    }
    var newJudgingOrProspecting= judgingOrProspecting();


    if(newIntrovertOrExtrovert<0){
        document.getElementById("introversionExtroversionTrait").innerHTML="You are an INTROVERT. You love your alone time. You'd rather spend a quiet evening by yourself or with a few close friends. You prefer texts and emails to speaking on the phone. You are very observant and you take the time to stop and smell the roses.";
        document.getElementById("introExtroLetter").innerHTML="I";
    } else if(newIntrovertOrExtrovert>0) {
        document.getElementById("introversionExtroversionTrait").innerHTML="You are an EXTROVERT. You love meeting new people and spending time with all your friends. You are energized by group activities and you would rather go to a concert with your peers than sit at home alone.";
        document.getElementById("introExtroLetter").innerHTML="E";
    } else if(newIntrovertOrExtrovert==0){
        document.getElementById("introversionExtroversionTrait").innerHTML="You are an AMBIVERT. You enjoy the best of both worlds. You feel energized when hanging out with your friends but you also need your moments alone to rest and rejuvenate.";
        document.getElementById("introExtroLetter").innerHTML="B";
    } 
    if(newIntuitiveOrSensory>0){
        document.getElementById("intuitiveSensoryTrait").innerHTML="You are INTUITIVE. You love to think abstract thoughts.You read between the lines and you love to find the deeper meaning of things. You love to daydream.";
        document.getElementById("intuSensoLetter").innerHTML="N";
    } else if(newIntuitiveOrSensory<0) {
        document.getElementById("intuitiveSensoryTrait").innerHTML="You are SENSORY. You love to live in the moment.You prefer dealing with facts than unproven ideas. You see things as the are making you very realistic and practical.";
        document.getElementById("intuSensoLetter").innerHTML="S";
    } else if(newIntuitiveOrSensory==0){
        document.getElementById("intuitiveSensoryTrait").innerHTML="You are both INTUITIVE and SENSORY. You have your head in the clouds but your feet are firmly planted on the ground. You can be practical but occasionally, you get lost in your fantasies. For you, some things have deeper meanings while others should be taken at face value.";
        document.getElementById("intuSensoLetter").innerHTML="B";
    } 
    if(newThinkingOrFeeling<0){
        document.getElementById("thinkingFeelingTrait").innerHTML="You are a THINKER. You make decisions based on what you think and not how you feel. You are very logical. You prefer to talk about ideas that interest you than talking about feelings and emotions.";
        document.getElementById("thinkFeelLetter").innerHTML="T";
    } else if(newThinkingOrFeeling>0) {
        document.getElementById("thinkingFeelingTrait").innerHTML="You FEEL deeply. You follow your heart. Your are finely in-tune with your feelings and use them to guide your decision making. You can easily sense what others are feeling and find it easy to read social cues.";
        document.getElementById("thinkFeelLetter").innerHTML="F";
    } else if(newThinkingOrFeeling==0){
        document.getElementById("thinkingFeelingTrait").innerHTML="You are both a THINKER and a FEELER. Even though you often make decisions with your head, you sometimes go with the flow and act how you feel. It's not hard for you to read body language and social cues.";
        document.getElementById("thinkFeelLetter").innerHTML="B";
    } 
    if(newJudgingOrProspecting<0){
        document.getElementById("judgingProspectingTrait").innerHTML="You are a PLANNER. You love to make lists. You find planning for trips to be exciting. You like to keep a detailed record of things. You are very organised.";
        document.getElementById("judgeProsLetter").innerHTML="J";
    } else if(newJudgingOrProspecting>0) {
        document.getElementById("judgingProspectingTrait").innerHTML="You are a FREE SPIRIT. You go where the road takes you. You don't overanalyse things.You are easygoing and you don't take life too seriously.";
        document.getElementById("judgeProsLetter").innerHTML="P";
    } else if(newJudgingOrProspecting==0){
        document.getElementById("judgingProspectingTrait").innerHTML="You are both a PLANNER and a FREE SPIRIT. You enjoy the best of both worlds. You can carve your own path, but you do so with a plan in mind.";
        document.getElementById("judgeProsLetter").innerHTML="B";
    } 
    
}



$(document).ready(function(){
    $("#resultsButton").click(function(){
        $("#results").show();
    })
})
