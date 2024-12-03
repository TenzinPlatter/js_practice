import "./styles.css"

const body = document.querySelector("body")!;
const dropdown = createDropDown();
const content = dropdown.querySelector(".content");

for (let i = 0; i < 3; i++) {
	const div = document.createElement("button");
	div.textContent = i.toString();
	content?.appendChild(div);
}

body.appendChild(dropdown);


function createDropDown(): HTMLElement {
	const container = <HTMLElement>document.createElement("div");
	const button = <HTMLElement>document.createElement("div");
	const content = <HTMLElement>document.createElement("div");
	let isShown = false;

	container.appendChild(button);
	container.appendChild(content);

	container.classList.add("dropdown-container");
	button.classList.add("button");
	content.classList.add("content");

	for (let i = 0; i < 3; i++) {
		const bar = document.createElement("div");
		bar.classList.add("bar");
		bar.style.border = "1px solid grey";
		button.appendChild(bar);
	}

	// styling
	button.style.width = "30px";
	button.style.height = "30px";
	button.style.display = "flex";
	button.style.flexDirection = "column";
	button.style.justifyContent = "space-evenly";

	container.style.position = "relative";

	content.style.position = "absolute";
	content.style.flexDirection = "column";
	content.style.gap = "8px";
	content.style.top = "36px";
	content.style.width = "120px";
	// using method so that calc() works
	content.style.left = "0";
	content.style.background = "#d3d3d3";
	content.style.padding = "16px";
	content.style.display = "none";

	button.addEventListener("click", () => {
		if (isShown) {
			content.style.display = "none";
		} else {
			content.style.display = "flex";
		}

		isShown = !isShown;
	});

	return container;
}
