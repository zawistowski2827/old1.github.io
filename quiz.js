function check()
{
    var score=0;
    var feedback=[];

    if (document.quiz.a1.value === 'Gearbox')
    {
        score++;
        feedback.push("Q1 is Correct")

    }
    else
    {
        feedback.push("Q1 is Incorrect")
    }

    var Q1Answer = document.quiz.a2.value.toLowerCase();
    if (Q1Answer === 'zero')
    {
        score++;
        feedback.push("Q2 is correct");
    }
    else
    {
        feedback.push("Q2 is incorrect");
    }

    if (document.quiz.a3.value === 'knuckle')
    {
        score++;
        feedback.push("Q3 is Correct")

    }
    else
    {
        feedback.push("Q3 is Incorrect")
    }
    
    if (document.quiz.a4A.checked === true && document.quiz.a4B.checked === false && document.quiz.a4C.checked === true && document.quiz.a4D.checked === false)
    {
        score++;
        feedback.push("Q4 is correct")
    }
    else
    {
        feedback.push("Q4 is incorrect")
    }

    var Q5Answer = document.quiz.a5.value.toLowerCase();
    if (Q5Answer === 'handsome jack')
    {
        score++;
        feedback.push("Q5 is correct");
    }
    else
    {
        feedback.push("Q5 is incorrect");
    }

    if (document.quiz.a6A.checked === true && document.quiz.a6B.checked === true && document.quiz.a6C.checked === false && document.quiz.a6D.checked === true && document.quiz.a6E.checked === false)
    {
        score++;
        feedback.push("Q4 is correct")
    }
    else
    {
        feedback.push("Q4 is incorrect")
    }



alert(score);
alert(feedback);
}