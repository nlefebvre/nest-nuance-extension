chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "Sample Context Menu",
        "contexts": ["selection"]
    });
});

chrome.webNavigation.onCompleted.addListener(function() {
    alert("This is my favorite website!");
    console.log("test");
    console.log(window);
}, {url: [{urlMatches : 'https://home.nest.com/camera/'}]});