const setText = () => {
    const micButton = document.getElementsByClassName("player-button talkback");
    if (micButton.length > 0) {
        micButton[0].innerText = "microphone";
    } else {
        console.log("button unavailable");
        setTimeout(setText, 5000);
    }
};

setText();

