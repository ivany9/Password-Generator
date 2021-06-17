// Assignment Code
var generateBtn = document.querySelector("#generate"); 

//upperCase Definition
function upperCase() {
  var checkBox = document.getElementById("upp");
  if (checkBox.checked == true){
    return true;
  } else {
    return false;
  }
}

//lowerCase  Definition
function lowerCase() {
  var checkBox = document.getElementById("low");
  if (checkBox.checked == true){
    return true;
  } else {
    return false;
  }
}

//numBer   Definition
function numBer() {
  var checkBox = document.getElementById("num");
  if (checkBox.checked == true){
    return true;
  } else {
    return false;
  }
}
//Special Characters  Definition
function specialCa() {
  var checkBox = document.getElementById("spe");
  if (checkBox.checked == true){
    return true;
  } else {
    return false;
  }
}

// Slider Function return the value of the password Lenght

function slider(){
  
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
    }

  

  return slider.value; 

}






  

 
function writePassword() {
   
  //var definition of the differents cases 
  var x=upperCase();
  var y=lowerCase();
  var z=numBer(); 
  var w=specialCa(); 
  var lon=slider();
  //generatePassword return password, and get the values of the var before.
  var password = generatePassword(x,y,z,w,lon);
  
   var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
{
   
 //firts function to call 
  slider();

  // call the function  generatePassword
  generatePassword();
 
}


function  generatePassword(upcon,lowcon,numcon,escon,longy)
{

    // var Library
   var upperString="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowerString="abcdefghijklmnopqrstuvwxyz";
   var numeric="0123456789";
   var specialChar="!@#%^&*,_=+-?/<>.;'~";
   var resul=""; 
  
     //define cases to be true and go
       if (upcon==true || lowcon==true|| numcon==true|| escon==true) 
            {   
            // loop to get all the information
             while(resul.length<longy)
                 {
                          //evaluate cases   
        
                      if(upcon==true){
             
                         resul+=(upperString[Math.floor(Math.random()*upperString.length)]);
                         resul.length++;
                         }


                          //evaluate cases

                      if(lowcon==true){
              
                        resul+=(lowerString[Math.floor(Math.random()*lowerString.length)]);
                        resul.length++;
                          }
                           //evaluate cases

                       if(numcon==true){ 
  
                         resul+=(numeric[Math.floor(Math.random()*numeric.length)]);
                         resul.length++;
                          }
             
                            //evaluate cases

                       if(escon==true) {
  
                        resul+=(specialChar[Math.floor(Math.random()*specialChar.length)]);     
                        resul.length++;
                         }
                 
                      
                  }        
      
 // return a password    
      return resul;

  }

  //case when the checkBox is no checked
    else 
    return "imput ERROR";    




}
