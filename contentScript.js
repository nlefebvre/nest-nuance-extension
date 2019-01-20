const setText = () => {
    const micButton = document.getElementsByClassName("player-button talkback");
    if (micButton.length > 0) {
        micButton[0].innerText = "microphone";
    } else {
        console.log("mic button unavailable");
        setTimeout(setText, 5000);
    }
};


const setVolume = () => {
    const volumeButton = document.getElementsByClassName("volume player-button");
    if (volumeButton.length > 0) {
        micButton[0].innerText = "unmute";
    } else {
        console.log("volume button unavailable");
        setTimeout(setText, 5000);
    }
};

setText();
setVolume();

