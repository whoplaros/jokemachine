function showAnswer(response) {
	let joke = document.querySelector("#joke");
	joke.innerHTML = response.data.answer;
	new Typewriter("#joke", {
		strings: response.data.answer,
		autoStart: true,
		delay: 10,
	});
}
function tellJoke(event) {
	event.preventDefault();
	let apiKey = "e546fd9teb385774339o4d3b5b79c3a0";
	let prompt =
		"Please tell me a unique joke. Please provide your answer in HTML format but without including the word html or any extra unnecessary punctuation. Please also include two emojis. Example as in the following example: <p>Joke question here</p><p>Joke answer here</p><p>🤣</p>";
	let context =
		"These jokes should be short and aimed at people under 12 years old";
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
	let joke = document.querySelector("#joke");
	joke.innerHTML = "</br>Please wait while we find you a doozy...";
	axios.get(apiURL).then(showAnswer);
}

let button = document.querySelector("#button");
button.addEventListener("click", tellJoke);
