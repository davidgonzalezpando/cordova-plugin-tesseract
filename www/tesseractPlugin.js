var TesseractPlugin = {
    recognizeText: function (image, language, successCallback, errorCallback) {
        alert('hello');
        cordova.exec(successCallback, errorCallback, "TesseractPlugin", "recognizeText", [language, image]);
    },
    loadLanguage: function (language, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TesseractPlugin", "loadLanguage", [language]);
    },
    pepes: function (language, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TesseractPlugin", "loadLanguage", [language]);
    }
};
module.exports = TesseractPlugin;
