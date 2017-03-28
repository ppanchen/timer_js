window.onload = function () {
    var timer_form = document.getElementById("timer-form");
    var timer = {
        sec: 0,
        min: 0,
        msec: 0
    };
    var inter;
    document.getElementById("start").onclick = function () {
        var loop_p = document.getElementsByClassName('del');
        for (var i = loop_p.length; i > 0; i--)
            loop_p[i - 1].remove();
        inter = setInterval(addmsec, 10, timer);
        document.getElementById("start").disabled = true;
    };
    document.getElementById("end").onclick = function () {
        clearInterval(inter);
        for (var field in timer)
            timer[field] = 0;
        document.getElementById("start").disabled = false;
    };
    document.getElementById("loop").onclick = function () {
        var p = document.createElement('p');
        p.innerHTML = document.getElementById("output").innerHTML;
        p.className = 'small-text del';
        timer_form.appendChild(p);
    };
};

function addmsec(timer) {
    var output = document.getElementById("output");
    var arr = {};
    timer.msec++;
    if (timer.msec == 100)
    {
        timer.sec++;
        timer.msec = 0;
    }
    if (timer.sec == 60)
    {
        timer.min++;
        timer.sec = 0;
    }
    for (var index in timer)
    {
        arr[index] = timer[index] < 10 ? "0" + timer[index] : "" + timer[index];
    }
    output.innerHTML = arr.min + ":" + arr.sec + ":" + arr.msec;
}
