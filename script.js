//your JS code here. If required.
let main_container = document.getElementsByClassName("container")[0];

function box() {
	for (let index = 1; index <= 800; index++) {
		const b = document.createElement("div");
		b.classList.add("square");

		b.addEventListener("mouseover", () => {
			// b.style.background = originalColor || "rgb(29, 29,29)"
			let originalColor = b.style.backgroundColor;
			b.style.backgroundColor = getRandomColor();

			setTimeout(() => {
				b.style.background = originalColor || "rgb(29, 29,29)";
			}, 1000);
		});

		
		main_container.appendChild(b);
		// b.style.height="30px";
		// b.style.width="30px";
		// b.style.backgroundColor="gray";
		// b.style.gap = "2px";
		// b.style.margin = "2px";

		
		
		
	}



}

function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let index = 0; index < 6; index++) {
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}
box();