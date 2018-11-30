function smallToTen(num, base)
{





    num = document.toBinary.input1.value;//13
    base = 2;
    tenNum = 0; //stores number to be output
    numLeangth = num.toString().length;
    //converts num to STRING, then counts the number of characters in this string
    //in this case length of '1101' is 4

    while (numLeangth > 0)
    {
        var denominater = Math.pow(10,(numLeangth-1)); // gets denominator of fraction

        var currentDigit = Math.floor(num/denominater);

        tenNum = tenNum + currentDigit*Math.pow(base, numLeangth-1);

        num = num%denominater;

        numLeangth--; // decreases number value by one
    }
    return tenNum
}

function tenToSmall(num, base) //convert a base 10 number to smaller base
{
    //this function is expecting (num) in base 10
    //it will convert the number (num) to value of base
    num = document.toBinary.input2.value; //number to convert
    base = 2; //destination base
    smallNum =""; // store remainders

    while (num > 0)
    {
        smallNum = num%base + smallNum;
        //setup num for the next iteration of the loop
        num = Math.floor(num/2);
    }
    return smallNum;
}