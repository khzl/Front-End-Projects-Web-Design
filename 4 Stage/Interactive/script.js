// Array To Store All Numeric Scores For Calculating OverAll Average
let scores = [];

// Function To Compute Letter Grade And Description From The Numeric Score

function computeGrade(score)
{
    let grade = '';
    let gradeWord ='';

    if (score >= 90)
    {
        grade = 'A';
        gradeWord = 'Excellent';
    }
    else if (score >= 80)
    {
        grade = 'B';
        gradeWord = 'Very Good';
    }
    else if (score >= 70)
    {
        grade = 'C';
        gradeWord = 'Good';
    }
    else if (score >= 60)
    {
        grade = 'D';
        gradeWord = 'Needs Improvement';
    }
    else
    {
        grade = 'F';
        gradeWord = 'Fail';
    }
    return
    {
        grade,gradeWord
    };
}

    // Function To Update The OverAll Average Display 
    function updateAverage()
    {
        let total = scores.reduce((sum,current) => sum + current,0);
        let avg = scores.length ? (total/scores.length).toFixed(2):0;
        document.getElementById('avgScore').textContent = avg;
    }

    // Listener For Form Submission 
    document.getElementById('gradeForm').addEventListener('submit',
        function(event)
        {
            event.preventDefault();

            // Get User input Values 
            const studentName = document.getElementById('studentName').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const scoreInput = document.getElementById('score').value;
            const numericScore = parseFloat(scoreInput);

            // Validate numeric score 
            if (isNaN(numericScore) || numericScore < 0 || numericScore > 100)
            {
                alert("please enter a valid score between 0 and 100.");
                return;
            }

            // compute grade details 
            const 
            {
                grade,gradeWord
            } = computeGrade(numericScore);

            // create a new table row with the entered data 
            const tbody = document.getElementById('gradeBody');
            const row = document.createElement('tr');

            // conditional class for pass/fail 
            const gradeClass = numericScore >= 60 ? 'pass' : 'fail';

            // create cells for student , subject , numeric score , letter grade , and grade in words 

            row.innerHTML = `
            <td data-label = "Student">${studentName}</td>
            <td data-label = "Subject">${subject}</td>
            <td data-label = "Numeric Score">${numericScore}</td>
            <td data-label = "Letter Grade" class ="${gradeClass}">${grade}</td>
            <td data-label = "Grade In Words">${gradeWord}</td>
            `;

            // Append the row to the table body 
            tbody.appendChild(row);

            // add the score to the scores array and update overall average 
            scores.push(numericScore);
            updateAverage();

            // Clear Form Fields For Next Entry
            event.target.reset();
        });