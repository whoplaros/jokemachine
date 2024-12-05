function showAnswer(response) {
	console.log(response.data.answer);
}

let apiKey = "e546fd9teb385774339o4d3b5b79c3a0";
let context = "politely provide a brief answer";
let prompt = "Who was the first female president";
let apiUrl =
	"https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={apiKey}";

axios.get(apiUrl).then(showAnswer);
