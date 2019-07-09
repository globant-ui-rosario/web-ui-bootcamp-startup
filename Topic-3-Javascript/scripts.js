

function check(word){
    if (typeof word === "string")
      return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
    else {
    return "Please enter a string."}
  }
  
  console.log(checkPal("Racecar"));    
  /* true */
  console.log(checkPal("racecar"));     
  /* true */
  console.log(checkPal("race"));          
  /* false*/
  console.log(checkPal(12345));         
  /* Please enter a string.*/

