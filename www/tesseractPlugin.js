// Empty constructor
function TesseractPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
TesseractPlugin.prototype.recognizeText = function(language, image, successCallback, errorCallback) {
  var options = {};
  options.image = image;
  options.language = language;
  cordova.exec(successCallback, errorCallback, 'TesseractPlugin', 'recognizeText', [options]);
}

TesseractPlugin.prototype.echo = function(message, successCallback, errorCallback) {
    var options = {};
    options.message = message;
    cordova.exec(successCallback, errorCallback, 'TesseractPlugin', 'echo', [options]);
}

// Installation constructor that binds TesseractPlugin to window
TesseractPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.tesseractPlugin = new TesseractPlugin();
  return window.plugins.tesseractPlugin;
};
cordova.addConstructor(TesseractPlugin.install);
