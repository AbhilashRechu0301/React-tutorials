var employee = [{
    name: "Kiran",
    Rep_manager: "Rajesh",
    hike: "10%",
    currentCTC: "10LPA",
    revisedCTC: "11LPA",
    role: "Senior Dev"
},
{
    name: "ram",
    Rep_manager: "Rajesh",
    hike: "12%",
    currentCTC: "5LPA",
    revisedCTC: "18LPA",
    role: "front end Dev"
},
{
    name: "viju",
    Rep_manager: "Rajesh",
    hike: "20%",
    currentCTC: "7LPA",
    revisedCTC: "9LPA",
    role: "back end Dev"
},
{
    name: "santu",
    Rep_manager: "Rajesh",
    hike: "5%",
    currentCTC: "6LPA",
    revisedCTC: "7LPA",
    role: "app Dev"
}
];

for (var i=0; i<employee.length; i++){
var str2 = `
                Dear ${employee[i].name}, 
                 
                                          Based on your performance, contribution to the organization. You have got the 
                                          highest hike of ${employee[i].hike}. Your current ctc is ${employee[i].currentCTC} is revised to 
                                          ${employee[i].revisedCTC}.  

                                          Your new role is ${employee[i].role}. 

                 Thanks, 
                  ${employee[i].Rep_manager}
             `;

console.log(str2);
}