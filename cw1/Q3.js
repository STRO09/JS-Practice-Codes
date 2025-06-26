    // Implement an anonymous function assigned to the variable multiplyByTwo that Take number as a parameter and multiplies each element by 2. 
    
    const multiplyByTwo = function(num) {

        newnum = '';
        while(num!=0){
            temp  = num%10;
            newnum = temp*2+ newnum;
            num = Math.floor(num/10);
        }
        return newnum;
    }

    console.log(multiplyByTwo(123));