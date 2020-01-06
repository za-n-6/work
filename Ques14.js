var arr=[2,3,8,10,78,79,100,1];
ascOrder(arr);
function ascOrder(value)
{
    for( var i=0; i < arr.length; i++)
    {
        var min = i;
        for(var j = i+1 ; j < arr.length ; j++)
        {
            if(arr[min]> arr[j])
            {
                min= j;
            }
            var temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    for(var i=0 ; i < arr.length; i++)
    {
        console.log(arr[i]);
    }
}