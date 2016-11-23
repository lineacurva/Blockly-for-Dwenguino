var DwenguinoBlockly = {};
//only use english and dutch for now
DwenguinoBlockly.LANGUAGE_NAME = {
      'en': 'English',
      'nl': 'Nederlands',
  };

/**
* Extracts a parameter from the URL.
* If the parameter is absent default_value is returned.
* @param {string} name The name of the parameter.
* @param {string} defaultValue Value to return if paramater not found.
* @return {string} The parameter value or the default value if not found.
*/
function getStringParamFromUrl(name, defaultValue) {
var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
function getLang() {
  var lang = getStringParamFromUrl('lang', '');
  if (DwenguinoBlockly.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'en';
  }
  return lang;
};

// Load the Code demo's language strings.
document.write('<script src="msg/' + getLang() + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../../msg/js/' + getLang() + '.js"></script>\n');