$("body").keydown(function (event) {
    if(event.which === 65){ //A
        $("audio").get(0).play();
        $("div.keys > div").get(0).addClass(".playing");
    }
    if(event.which === 83){ //S
        $("audio").get(1).play();
        $("div.keys > div").get(1).addClass(".playing");
    }
    if(event.which === 68){ //D
        $("audio").get(2).play();
        $("div.keys > div").get(2).addClass(".playing");
    }
    if(event.which === 70){ //F
        $("audio").get(3).play();
        $("div.keys > div").get(3).addClass(".playing");
    }
    if(event.which === 71){ //G
        $("audio").get(4).play();
        $("div.keys > div").get(4).addClass(".playing");
    }
    if(event.which === 72){ //H
        $("audio").get(5).play();
        $("div.keys > div").get(5).addClass(".playing");
    }
    if(event.which === 74){ //J
        $("audio").get(6).play();
        $("div.keys > div").get(6).addClass(".playing");
    }
    if(event.which === 75){ //K
        $("audio").get(7).play();
        $("div.keys > div").get(7).addClass(".playing");
    }
    if(event.which === 76){ //L
        $("audio").get(8).play();
        $("div.keys > div").get(8).addClass(".playing");
    }
})