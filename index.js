function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    return console.log(shout(string));
}

function logWhisper(string) {
    return console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
    
    if (string === string.toUpperCase(string)){
        return "YES INDEED!";
    }

    if (string === string.toLowerCase(string)){
        return "I can't hear you!";
    }
}