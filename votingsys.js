let candidateNames = [];

function enterCandidates() {
    const candidateCount = parseInt(document.getElementById('candidateCount').value);

    for (let i = 1; i <= candidateCount; i++) {
        const candidateName = prompt(`Enter name for Candidate ${i}`);
        candidateNames.push({ name: candidateName, votes: 0 });
    }

    displayCandidates();
}

function displayCandidates() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Voting System</h1>
            <div id="candidates"></div>
            <button onclick="finishVoting()">Finish Voting</button>
        </div>
    `;

    const candidatesDiv = document.getElementById('candidates');

    candidateNames.forEach(candidate => {
        candidatesDiv.innerHTML += `
            <div>
                <p>${candidate.name}</p>
                <button onclick="voteForCandidate('${candidate.name}')">Vote</button>
            </div>
        `;
    });
}

function voteForCandidate(candidateName) {
    const candidate = candidateNames.find(c => c.name === candidateName);
    candidate.votes++;
    displayCandidates();
}

function finishVoting() {
    const winner = candidateNames.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);
    alert(`Voting Completed!\n\nWinner: ${winner.name} with ${winner.votes} votes.`);
}
