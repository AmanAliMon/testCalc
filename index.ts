import inquirer from "inquirer"
let answer = await inquirer.prompt([
{message:"input first operand",
type:"number",
name:"num1"
},
{message:"input second operand",
type:"number",
name:"num2"
},
{message:"Select an operation",
type:"list",
name:"operator",
choices:["+","-","x","/"]
}
])

if(answer.operator =="+"){
    console.log(answer.num1+answer.num2);
    
}
else if(answer.operator =="x"){
    console.log(answer.num1*answer.num2);
    
}
else if(answer.operator =="/"){
    console.log(answer.num1/answer.num2);
    
}
else if(answer.operator =="-"){
    console.log(answer.num1-answer.num2);
    
}

else{
    console.log("We don't do that here");
    
}