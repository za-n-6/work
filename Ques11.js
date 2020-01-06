var ID = generateId();

function generateId()
    {
        var decimal= Math.random();
        var roundOff = (decimal*1000) +1 ;
        var random= Math.floor(roundOff);
        console.log(random);
         
    }
