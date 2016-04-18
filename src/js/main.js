import $ from 'jquery';

var baseURL = 'http://json-data.herokuapp.com/forms';
var formBody = $('.formBody');

// function inputText(form)

function data (type, label, id, icon, options) {
  return `
    <input>${type}, ${label}, ${id}, ${icon}, ${options}</input>`;
}

console.log('all good');

// var formReq = $.getJSON(baseURL + 'forms');
//   formReq.then(
//     function(res){
//       res.results.forEach(function (form) {
//         var html = data(form.type, form.label, form.id, form.icon, form.options);
//         formBody.append(html);
//       });
//     }
//   )

//
// var dataReq = $.getJSON(url);
// dataReq.then(function (){
//   console.log();

// });


// function moviePlanets (climate, films) {
//   return `<li>${climate} * ${films}</li>`;
// }
//
// var planetReq = $.getJSON(baseURL + 'planets');
//
// planetReq.then (
//   function (pla) {
//     pla.results.forEach(function(planets){
//       var html = moviePlanets(planets.climate, planets.films);
//       planetList.append(html);
//
//     });
//   }
// );
