import $ from 'jquery';

var baseURL = 'http://json-data.herokuapp.com/forms';
var formBody = $('.formBody');
var menuOptions = $('.Select Language');
var textarea = $('.textarea');
// function inputText(form)

function data (type, label, id, icon, options) {
  return `
    <input placeholder="${label}"></input>
    <i class="fa fa-user"></i>
    `;
}
// This is the comment box.///////////////////////
{/*<textarea name="${textarea}" placeholder="${label}"></textarea>*/}

console.log('all good');

var formReq = $.getJSON(baseURL);
  formReq.then(
    function(res){
      // console.log(res.results);
      res.forEach(function (forms) {
        var html = data(forms.type, forms.label, forms.id, forms.icon, forms.options);
        formBody.append(html);
      });

// The commet box if else or .then statment should go here...///////
      // res.forEach(function(textarea){
      //   var html = ${forms.textarea};
      //   console.log('textarea');
      //   var html = data()
      // })
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
