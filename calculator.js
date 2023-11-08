var y = "";
function calculate(val){
    
    // alert(val.value)
    if(val.value == "=")
    {
        //alert("=")
        var source =document.getElementById("source");
        //alert(source.value);
        if((source.value).indexOf('tan')>-1)
        {
            var x = (source.value).replace("tan", "");
            //alert(x)
            document.getElementById("source").value=eval(Math.tan(x));
            // alert(Math.sin(x))
            y = "";
        } 
        else if((source.value).indexOf('sin')>-1)
        {
            var x = (source.value).replace("sin", "");
            //alert(x)
            document.getElementById("source").value=eval(Math.sin(x));
            // alert(Math.sin(x))
            y = "";
        } 
        else if((source.value).indexOf('cos')>-1)
        {
            var x = (source.value).replace("cos", "");
            //alert(x)
            document.getElementById("source").value=eval(Math.cos(x));
            y = "";
        } 
        else if((source.value).indexOf('log')>-1)
        {
            var x = (source.value).replace("log", "");
            //alert(x)
            document.getElementById("source").value=eval(Math.log10(x));
            y = "";
        }
        else if((source.value).indexOf('√')>-1)
        {
            var x = (source.value).replace("√", "");
            //alert(x)
            document.getElementById("source").value=(Math.sqrt(x));
            y = "";
        }
        else if((source.value).indexOf('!')>-1)
        {
            var x = (source.value).replace("!", "");
            //alert(x)
             
            let fact = 1;  
                
            if(x === 0) 
                return 1; 
            for (let i = 2; i <= x; i++)  
                fact = fact * i;  
            
            y = fact;
           
            document.getElementById("source").value=y;
            
        }
        else if((source.value).indexOf('^')>-1)
        {
            // alert("hii")
            var n = document.getElementById("source").value;
            const myArray = n.split("^");
            var x = parseInt(myArray[0]);
            var z = parseInt(myArray[1]);
            // alert(x+" "+z)
            document.getElementById("source").value=(Math.pow(x,z));
            y = "";
        }
        else if((source.value).indexOf('%')>-1){
            var n = document.getElementById("source").value;
            var x = (source.value).replace("%", "");
            const myArray = n.split("*");
            var a = parseInt(myArray[0]);
            var b = parseInt(myArray[1]);
            // alert(x+" "+z)
            var percentage = (a * b)/100;
            document.getElementById("source").value=percentage;
            y = "";
        }
        else{
            //alert("else"+source.value)
            document.getElementById("source").value=eval(source.value);
            //alert(source.value)
            y = eval(source.value);
        }
    }
    else if(val.value == "AC")
    {
        document.getElementById("source").value="";
        y="";
    }
    else if(val.value == "π")
    {
        y += "3.14";
        // alert(y)
        document.getElementById("source").value = y;
    }
    else if(val.value == "Del"){
        var source =document.getElementById("source").value;
        y = source.slice(0, -1)
        // alert(source)
        document.getElementById("source").value = y;
    }
    else{
        y += val.value;
        // alert(y)
        document.getElementById("source").value = y;
    }
    
     
}

