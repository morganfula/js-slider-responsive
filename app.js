const slider = document.querySelector('.slider-inner');
const progressBar = document.querySelector('.progress-bar-inner');

let sliderGrabbed = false;

const getScrollPercentage = () => {
	return (
		(slider.parentElement.scrollLeft /
			(slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) *
		100
	);
};

slider.addEventListener('mousedown', (e) => {
	sliderGrabbed = true;
	slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseup', (e) => {
	sliderGrabbed = false;
	slider.style.cursor = 'grab';
});

slider.addEventListener('mouseleave', (e) => {
	sliderGrabbed = false;
	slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
	if (sliderGrabbed) {
		slider.parentElement.scrollLeft -= e.movementX;
	}
});

slider.addEventListener('wheel', (e) => {
	e.preventDefault();
	slider.parentElement.scrollLeft += e.deltaY;
});

slider.parentElement.addEventListener('scroll', (e) => {
	progressBar.style.width = `${getScrollPercentage()}%`;
});
