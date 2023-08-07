let whoEatsWho = function(zoo){
    let zooArr = zoo.split(',')
    let edible = {
        "antelope": ["grass"],
        "big-fish": ["little-fish"],
        "bug": ["leaves"],
        "bear": ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
        "chicken": ["bug"],
        "cow": ["grass"],
        "fox": ["chicken", "sheep"],
        "giraffe": ["leaves"],
        "lion": ["cow"],
        "panda":["leaves"],
        "sheep":["grass"]    
    }
    for(i = 0; i <= zooArr.length; i++){
        if (edible[zooArr[i]]){
            
        };
    }
    return "finish";
}

console.log(whoEatsWho('fox,bug,chicken,grass,sheep'))