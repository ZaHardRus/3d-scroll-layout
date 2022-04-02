let zSpacing = -1900,
    lastPosition = zSpacing / 6.5,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zVals = []
    root = document.querySelector(':root')

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
		delta = lastPosition - top

        lastPosition = top

	frames.forEach(function(el, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * - 6
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 2 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(1, 75)
    //root.style.setProperty('--depth',frames.length * 345 + 'px')
 }, false);
