let keyList = document.getElementsByClassName("key");
let audioList = document.getElementsByTagName("audio");

let dataObj = Array.prototype.reduce.call(
    keyList,
    (acc, key, i) => {
        acc[key.dataset.key] = { key };
        return acc;
    },
    {}
);

Array.prototype.forEach.call(audioList, audio => {
    dataObj[audio.dataset.key].audio = audio;
});
console.log(dataObj);

addEventListener("keydown", event => {
    dataObj[event.keyCode].key.classList.add("active");
    dataObj[event.keyCode].audio.currentTime = 0;
    dataObj[event.keyCode].audio.play();
    setTimeout(() => {
        dataObj[event.keyCode].key.classList.remove("active");
    }, 100);
});
