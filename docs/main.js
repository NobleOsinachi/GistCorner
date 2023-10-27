function randomAnswers(index) {
	let answers = Object.values(questions[index].answers);
	let randIndex = Math.floor(Math.random() * answers.length);
	return [answers.splice(randIndex, 1)[0], answers[0]];
}

let panel = document.getElementById("questions__home");

questions.forEach((q, i) => {
	let [ans1, ans2] = randomAnswers(i);

	panel.innerHTML += `
    
        <div class="col-sm-2 mb-4">
            <div class="card">
                <div class="card-body" id="question_${i}">
                    <h5 class="card-title">Question ${i + 1}</h5>
                    <p class="card-text">Which word is <i><b>${q.type}</b></i> to <i><b>${q.word}</b></i></p>
                    <button class="card-link btn btn-outline-secondary" id="${ans1}" onclick="compare(${i}, '${ans1}')">${ans1}</button>
                    <button class="card-link btn btn-outline-secondary" id="${ans2}" onclick="compare(${i}, '${ans2}')">${ans2}</button>
                </div>
            </div>
        </div>

    `;
});

let score = 0;

let questionsAnswered = [];

let compare = (index, answer) => {
	let { correct, incorrect } = questions[index].answers;
	let correctDoc = document.getElementById(correct).classList;
	let incorrectDoc = document.getElementById(incorrect).classList;

	if (questionsAnswered.includes(index + 1)) {
		alert("Oops, You can't answer a question twice!");
	} else {
		questionsAnswered.push(index + 1);
		if (answer === correct) {
			correctDoc.remove("btn-outline-secondary");
			correctDoc.add("btn-outline-success");
			score += 1;
		} else {
			correctDoc.remove("btn-outline-secondary");
			correctDoc.add("btn-outline-success");
			incorrectDoc.remove("btn-outline-secondary");
			incorrectDoc.add("btn-outline-danger");
		}
	}

	questionsAnswered.length === questions.length
		? (panel.innerHTML = `
    
    <div class="col-sm-2 mb-4 offset-sm-3">
        <div class="card">
            <div class="card-body" id="">
                <h5 class="card-title text-center">Your score is ${score}</h5>
                <svg class="dial">
                    <circle
                        fill="transparent"
                        stroke="green"
                        stroke-width="15"
                        r="90"
                        stroke-dasharray = ${90 * 2 * Math.PI}
                        stroke-dashoffset = ${((90 * 2 * Math.PI * score) / 10) - (90 * 2 * Math.PI)}
                        cx="0"
                        cy="200"
                        transform="rotate(-90 100 100)"
                    />
                    <h3 class="controls">${score} / ${questions.length}</h3>
                </svg>
            </div>
        </div>
    </div>

`)
        : "";
};
