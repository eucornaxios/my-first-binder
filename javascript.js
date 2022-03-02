function calculate()
{
  
   var Capital = document.getElementById("C").value;
   var Years = document.getElementById("y").value;
   var Rate = document.getElementById("R").value;
   var result = document.getElementById("result");
    
    result.innerHTML = "Your  interest most likely be" + (C*Y*R/100);
    
    
    
}
