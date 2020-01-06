/*Ques 13

function UP(value)
{
    var upperCase=value.toUpperCase();
    console.log(upperCase);
}
 UP("karachi");

 Ques 15
 if the argument passed is a string..if it is then you should concatenate behind the sring "Welcome"  and return it

if the argument passed is a number then it should be multiplied by the power of 2 and return it.*/

function check(value)
{
    
    if(typeof(value)== "string")
    {
        console.log("Welcome" + value);
 
   }
   else if(typeof(value) == "number")
   {
    console.log(Math.pow(value,2));
   }
}
 check(3);
