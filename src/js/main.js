import $ from 'jquery';

var baseURL = 'http://json-data.herokuapp.com/forms';
var formBody = $('.formBody');

// function inputText(form)

function data (type, label, id, icon, options) {
  return `
    <div class="formBody"><input>${type}, ${label}, ${id}, ${icon}, ${options}</input></div>`;
}

console.log('all good');

var formReq = $.getJSON(baseURL);
  formReq.then(
    function(res){
      // console.log(res.results);
      res.forEach(function (forms) {
        var html = data(forms.type, forms.label, forms.id, forms.icon, forms.options);
        formBody.append(html);
      });
    }
  )

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
