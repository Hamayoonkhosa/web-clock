const hourEl = document.getElementById("hours")
const minutEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const AMPMEl = document.getElementById("AMPM")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if(h > 12){
        h= h -12
        AMPM = "PM"
    }
    h=h < 10 ? "0" +h:h
    m=m < 10 ? "0" +m:m
    s=s < 10 ? "0" +s:s
    hourEl.innerText = h
    minutEl.innerText=m
    secondEl.innerText=s
    AMPMEl.innerText=AMPM
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()