/*Write a function that takes an array of numbers as a parameter and function's job

is to multiply each element of an array by 2 and print it*/

var arr=[2,4,6,8,10];
new_arr(arr);

function new_arr(x)
{
var i;
for (i=0; i<x.length ; i++)
{
x[i]=x[i]*2;
}
console.log(x);

}