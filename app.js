function time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    document.getElementById("digital-clock").innerText = `${hour} : ${minute} : ${second}`

    setTimeout(time, 1000);
}

function update(t) {
    if(t < 10) {
        return "0" + t
    }else{
        return t
    }
}

time()