
var GLOABL_DELAY = 5 * 60

var containers = document.getElementsByClassName("container")
var duration = parseInt(getComputedStyle(containers[0]).animationDuration.substring(0, 2))


var delay = 0;
for (var i = 0; i < containers.length; i++) {
    containers[i].style.animationDelay = delay + "s"
    containers[i].style.animationName = "fade"
    delay += duration
}

function repeat() {
    for (var i = 0; i < containers.length; i++) {
        var e = containers[i]
        e.parentNode.replaceChild(e.cloneNode(true), e)
    }
}


setInterval(repeat, (GLOABL_DELAY + duration * containers.length) * 1000)
