document.querySelector(".btnSubmit").addEventListener("click", function (e) {
	e.preventDefault();
	const inputFields = document.querySelectorAll("input");

	inputFields.forEach((field, i) => {
		field.classList.remove("invalid");
		const thisErrorDiv = document.querySelector(`.validation-container--${i}`);
		thisErrorDiv.classList.add("hidden");

		if (field.value === "") {
			field.classList.add("invalid");
			thisErrorDiv.classList.remove("hidden");
		}

		if (field.type === "email") {
			field.placeholder = "email@example/com";
		}
	});
});
