function assignGrade()
{
    var grade = document.project3.input1.value

    if (grade >= 90)
    {
        return "A";
    }
    else if (grade >= 80)
    {
        return "B"
    }
    else if (grade >= 70)
    {
        return "C"
    }
    else if (grade >=60)
    {
        return "D"
    }
    else if (grade >=50)
    {
        return "F"
    }
    else
    {
        return "F-"
    }

}



function gradeBug()
{
    var temp = document.project5.input1.value

    if (temp == 131515195)
    {
        return "moose"
    }
    else if (temp >= 80)
    {
        return "summer";
    }
    else if (temp >= 65)
    {
        return "spring"
    }
    else if (temp >= 40)
    {
        return "fall"
    }
    else
    {
        return "winter"
    }

}

function returnWork()
{
    var activity = document.getElementById('workList').value;

    return activity;
}






function calories()
{
    var exercise = document.project6.input1.value.toLowerCase();
    var hour = Number(document.project6.input2.value);

    if (exercise == 'pushups')
    {
        return hour*3
    }

    if (exercise == 'situps') 
    {
        return hour*6
    }

    if (exercise == 'curlups')
    {
       return hour+70
    }

    if (exercise == 'run')
    {
        return hour*30000000000000000000000000000000000000000
    }








}















