let zSpacing = -1900; //расстояние между .frame по z-оси
let lastPosition = zSpacing / 6.5
let root = document.querySelector(':root')

let frames = document.getElementsByClassName('frame')
let arrayFrames = Array.from(frames)
let zVals = []

window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPosition - top;
    root.style.setProperty('--depth',arrayFrames.length * 345 + 'px')

    lastPosition = top;
    arrayFrames.forEach(function (el,index) {
        zVals.push((index * zSpacing) + zSpacing)
        zVals[index] += delta * - 6

        let frame = frames[index]
        let transform = `translateZ(${zVals[index]}px)`
        let opacity = zVals[index] < Math.abs(zSpacing) / 2 ? 1 : 0
        frame.setAttribute(`style`,`transform: ${transform} ; opacity: ${opacity}`)
    })
}
document.onload(
    window.scrollTo(0,30)
)