// Getting the animation delay out of the css root variables
var GLOABL_DELAY = parseInt(getComputedStyle(document.querySelector("html")).getPropertyValue("--delay"))

// Getting all divisions with the "containers" class
var containers = document.getElementsByClassName("container")
// Getting the duration of the animation out of the css file
var duration = parseInt(getComputedStyle(containers[0]).animationDuration.substring(0, 2))

// Sets the animation and delay to the container divisions
var delay = 0;
for (var i = 0; i < containers.length; i++) {
    containers[i].style.animationDelay = delay + "s"
    containers[i].style.animationName = "fade"
    delay += duration
}

// Refreshes the container divisions that they will be animated again
function repeat() {
    for (var i = 0; i < containers.length; i++) {
        var e = containers[i]
        e.parentNode.replaceChild(e.cloneNode(true), e)
    }
}

// Timer wich will repeat the animation
setInterval(repeat, (GLOABL_DELAY + duration * containers.length) * 1000)
