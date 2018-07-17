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
document.querySelectorAll("div").forEach(div1 => {
    console.log(div1);
});

console.log(audioList);
audioList.forEach(audio => {
    console.log(audio);
});

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
