// `totalSales` accepts one argument, an object containing an employee who manages
// a sales team, and returns the total sales for the entire team. Note: it is possible
// that any employee also manages a team.
//
// An employee looks like this:
//
// {
//   name: 'Fred Zirdung'
//   individualSales: 125
//   manages: [/* ... */]
// }
//
// EXAMPLE:
//
// var salesTeam = {
//   name: 'Arnaldo McDermott',
//   individualSales: 14,
//   manages: [
//     {
//       name: 'Lavina Romaguera',
//       individualSales: 15,
//       manages: [
//         {
//           name: 'Glen Hodkiewicz',
//           individualSales: 12,
//           manages: []
//         }
//       ]
//     },
//     {
//       name: 'Rey Hills',
//       individualSales: 19,
//       manages: []
//     }
//   ]
// };
//
//
// totalSales(salesTeam)
//
// returns 60


var totalSales = function(salesTeam){
var total = 0;
var count = 0;
var step = salesTeam.manages;
function first(x){
total = total + x.individualSales;
if(x.manages.length > 0){
count = step.indexOf(x);
step = x.manages;
}
}

function second(){
for(var i = 0; i < step.length; i++){
first(step[i]);
}
}
if(salesTeam.manages[count + 1]){
count++;
step = salesTeam.manages[count];
}
second()
return total;
}







