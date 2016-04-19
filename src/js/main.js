import $ from 'jquery';
// import input from './input';
import textarea from './textarea';
import menuoptions from './menuoptions';

var baseURL = 'http://json-data.herokuapp.com/forms';
var formBody = $('.formBody');

// don't need these variable for menuOptions and textarea
// var menuOptions = $('.Select Language');

// function inputText(form)
function data (type, label, id, icon, options) {
  return `
  <div class="fieldBox">
    <input placeholder="${label}"></input>
    <i class="fa ${icon}"></i>
  </div>
    `;
}

// this is how Tim put the icons on the page.///////////
{/*<i class="fa ${obj.icon}"></i>*/}

// This is the comment box.///////////////////////
// {/*<textarea name="${textarea}" placeholder="${label}"></textarea>*/}
console.log('all good');
// the var formReq makea a request to the server
var formReq = $.getJSON(baseURL);
// the .then request goes through once the callback is resolved.
  formReq.then( function(res){
      // console.log(res.results);
      res.forEach(function (forms) {
        var html = data(forms.type, forms.label, forms.id, forms.icon, forms.options);
        

        if (forms.type === 'textarea') {
          var html = textarea(forms);
        } else if  (forms.type === 'menuoptions') {
          var html = menuoptions(forms);
        // } else {
        //   var html = input(forms);
        }

        formBody.append(html);
      });

// add if/else statement here

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
