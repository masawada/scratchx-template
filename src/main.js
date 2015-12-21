import * as data from "./data.json"
import { ext as ext } from "./ext.js"

(function(e, ext, data) {
  // Check for GET param 'lang'
  // codes from https://github.com/khanning/scratch-arduino-extension/blob/da1ab317a215a8c1c5cda1b9db756b9edc14ba68/arduino_extension.js#L533-L541
  let variables = window.location.search.replace(/^\?|\/$/g, '').split('&')
  var lang = 'en';
  variables.forEach((variable) => {
    let pair = variable.split('=')
    if (pair.length > 1 && pair[0] == 'lang')
      lang = pair[1];
  })

  Object.keys(ext).forEach((key) => {
    e[key] = ext[key]
  })

  ScratchExtensions.register(data.title, data.descriptor[lang], e)
})({}, ext, data);
