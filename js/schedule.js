function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function demilitarize(num) {
    if (num > 24) {
        return num - 24;
    } else {
        return num;
    }
}

let times = document.querySelectorAll('span.datetime');
console.log("Times: " + times.length);
for (let i = 0; i < times.length; i++) {
    let time = new Date(times[i].innerText);
    console.log("Time: " + time);
    let hour = demilitarize(parseInt(time.getHours()));
    console.log("Hour: " + hour);
    let minute = time.getMinutes();
    console.log("Minute: " + minute);
    times[i].innerText = pad(hour, 2) + ':' + pad(minute, 2);
    console.log("InnerText: " + pad(hour, 2) + ':' + pad(minute, 2));
}