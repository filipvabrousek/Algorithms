var person = {
		name: "Filip"
	}

	React(person, "name", "h1");

	function React(obj, key, el) {
		document.querySelector(el).innerText = obj[key];
		Object.defineProperty(obj, key, {
			set(newVal) {
				document.querySelector(el).innerText = newVal;
			}
		});
	}
