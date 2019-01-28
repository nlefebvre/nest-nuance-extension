const getElement = (classNameString) => document.getElementsByClassName(classNameString)[0];
const getVolumeButton = (isMuted) => getElement(`volume player-button${isMuted ? " is-muted" : ""}`);
// const getVolumeButton = (isMuted) => getElement(`volume player-button${isMuted ? " is-muted" :""} player-button`);
const getMicButton = () => getElement("player-button talkback");

const toggleMute = () => {
    const volumeButton = getVolumeButton(true);
    if (volumeButton) {
        volumeButton.click();
    }
}


const setText = () => {
    const micButton = getMicButton()
    if (micButton) {
        micButton.innerText = "microphone";
        micButton.onclick = toggleMute;
    } else {
        console.log("mic button unavailable");
        setTimeout(setText, 5000);
    }
};

const setVolume = () => {
    const volumeButton = getVolumeButton();
    if (volumeButton) {
        volumeButton.innerText = "unmute";
    } else {
        console.log("volume button unavailable");
        setTimeout(setVolume, 5000);
    }
};

setText();
// setVolume();

