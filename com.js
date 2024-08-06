let votes = {
    feature1: 0,
    feature2: 0,
    feature3: 0
};

function submitPoll() {
    const selectedOption = document.querySelector('input[name="poll"]:checked');
    if (selectedOption) {
        const selectedValue = selectedOption.value;
        votes[selectedValue.toLowerCase().replace(" ", "")]++;
        displayResults();
    } else {
        alert("Please select an option before voting.");
    }
}

function displayResults() {
    document.getElementById("result1").innerText = `Feature 1: ${votes.feature1} votes`;
    document.getElementById("result2").innerText = `Feature 2: ${votes.feature2} votes`;
    document.getElementById("result3").innerText = `Feature 3: ${votes.feature3} votes`;
    document.getElementById("pollResults").style.display = "block";
}
