/*

Gameplan

HTML:
(*) calculator window for operations to be shown along with result
() Number buttons for calculator
() operation buttons (+,-,*,etc)
()= button
() reset or clear button
() optional: backspace??

Javascript:
() function that captures what typed in calcWindow
()Seperate functions that add numbers, subtract, etc.
 */

function calculate(expression) //ex. expression is 2+5 or 9*6
{
    //'expression' is a String of everything in calc window
    //Need to extract the first number from 'expression'
    var firstNum = Number(expression.substr(0,1));
    // alert(firstNum);
    var operator = expression.substr(1,1);
    // alert(operator);
    var secondNum = Number(expression.substr(2,1));
    // alert(secondNum)

    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powerNums(firstNum, secondNum);
    }
}

function addNums(p1,p2) //addNums expects 2 paremeters ... p1 and p2
{
    return p1 + p2
}
function subNums(p1,p2) //addNums expects 2 paremeters ... p1 and p2
{
    return p1 - p2
}
function multNums(p1,p2) //addNums expects 2 paremeters ... p1 and p2
{
    return p1 * p2
}
function divNums(p1,p2) //addNums expects 2 paremeters ... p1 and p2
{
    return p1 / p2
}
function powerNums(p1,p2) //addNums expects 2 paremeters ... p1 and p2
{
    return  Math.pow(p1,p2)
}