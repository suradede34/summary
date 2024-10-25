const summaryData = [
    {

      score: 80,
    },
    {

      score: 92,
    },
    {

      score: 61,
    },
    {

      score: 73,
    },
  ];




  function generateRandomScores(count) {
    const scores = [];
    for (let i = 0; i < count; i++) {
        scores.push(Math.floor(Math.random() * 101)); 
    }
    return scores; 
}

document.addEventListener('DOMContentLoaded', () => {
    const scoreList = document.getElementById('scoreList');
    const totalScoreElement = document.getElementById('totalScore');
    const showResultsButton = document.getElementById('showResultsButton');

    showResultsButton.addEventListener('click', () => {
        const summaryData = generateRandomScores(4); 
        let totalScore = 0; 
        scoreList.innerHTML = ''; 

        summaryData.forEach(score => {
            console.log(score); 


            const listItem = document.createElement('li');
             
            listItem.textContent = score; 
            scoreList.appendChild(listItem); 
            totalScore += score; 
        });

        totalScoreElement.textContent = ` ${totalScore}`;
    });
});