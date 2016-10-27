if (typeof (SDK) == "undefined")
{ SDK = { __namespace: true }; }
SDK.WEBAPI = {
_context: function () {
///
/// Private function to the context object.
///
 
///Context
if (typeof GetGlobalContext != "undefined")
{ return GetGlobalContext(); }
else {
if (typeof Xrm != "undefined") {
return Xrm.Page.context;
}
else { throw new Error("Context is not available."); }
}
},
_getClientUrl: function () {
///
/// Private function to return the server URL from the context
///
 
///String
var clientUrl = this._context().getClientUrl()
 
return clientUrl;
},
_WebAPIPath: function () {
///
/// Private function to return the path to the REST endpoint.
///
 
///String
return this._getClientUrl() + "/api/data/v8.0/";
},
_errorHandler: function (req) {
///
/// Private function return an Error object to the errorCallback
///
 
////// The XMLHttpRequest response that returned an error.
/// ///Error
//Error descriptions come from http://support.microsoft.com/kb/193625
if (req.status == 12029)
{ return new Error("The attempt to connect to the server failed."); }
if (req.status == 12007)
{ return new Error("The server name could not be resolved."); }
var errorText;
try
{ errorText = JSON.parse(req.responseText).error.message.value; }
catch (e)
{ errorText = req.responseText }
 
return new Error("Error : " +
req.status + ": " +
req.statusText + ": " + errorText);
},
_dateReviver: function (key, value) {
///
/// Private function to convert matching string values to Date objects.
///
 
////// The key used to identify the object property
/// ////// The string value representing a date
/// var a;
if (typeof value === 'string') {
a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
if (a) {
return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
}
}
return value;
},
_parameterCheck: function (parameter, message) {
///
/// Private function used to check whether required parameters are null or undefined
///
 
/// The parameter to check;
/// The error message text to include when the error is thrown.
    if ((typeof parameter === "undefined") || parameter === null) {
        throw new Error(message);
    }
},
_stringParameterCheck: function (parameter, message) {
///
/// Private function used to check whether required parameters are null or undefined
///
 
///The string parameter to check;
/// The error message text to include when the error is thrown.
    if (typeof parameter != "string") {
        throw new Error(message);
    }
},
_callbackParameterCheck: function (callbackParameter, message) {
///
/// Private function used to check whether required callback parameters are functions
///
 
/// The callback parameter to check;
///  The error message text to include when the error is thrown.
    if (typeof callbackParameter != "function") {
        throw new Error(message);
    }
},
createRecord: function (object, type, successCallback, errorCallback) {
///
/// Sends an asynchronous request to create a new record.
///
 
////// A JavaScript object with properties corresponding to the Schema name of
/// entity attributes that are valid for create operations.
/// ////// The Schema Name of the Entity type record to create.
/// For an Account record, use "Account"
/// ////// The function that will be passed through and be called by a successful response.
/// This function can accept the returned record as a parameter.
/// ////// The function that will be passed through and be called by a failed response.
/// This function must accept an Error object as a parameter.
/// this._parameterCheck(object, "SDK.WEBAPI.createRecord requires the object parameter.");
this._stringParameterCheck(type, "SDK.WEBAPI.createRecord requires the type parameter is a string.");
this._callbackParameterCheck(successCallback, "SDK.WEBAPI.createRecord requires the successCallback is a function.");
this._callbackParameterCheck(errorCallback, "SDK.WEBAPI.createRecord requires the errorCallback is a function.");
 
if (type.slice(-1) != "s") {
type = type + "s";
}
 
var req = new XMLHttpRequest();
req.open("POST", encodeURI(this._WebAPIPath() + type), true);
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
 
req.onreadystatechange = function () {
if (this.readyState == 4 /* complete */) {
req.onreadystatechange = null;
if (this.status == 204) {
var entityUri = this.getResponseHeader("OData-EntityId");
successCallback(entityUri);
}
else {
errorCallback(SDK.WEBAPI._errorHandler(this));
}
}
};
req.send(JSON.stringify(object));
},
retrieveRecord: function (id, type, select, expand, successCallback, errorCallback) {
///
/// Sends an asynchronous request to retrieve a record.
///
 
////// A String representing the GUID value for the record to retrieve.
/// ////// The Schema Name of the Entity type record to retrieve.
/// For an Account record, use "Account"
/// ////// A String representing the $select OData System Query Option to control which
/// attributes will be returned. This is a comma separated list of Attribute names that are valid for retrieve.
/// If null all properties for the record will be returned
/// ////// A String representing the $expand OData System Query Option value to control which
/// related records are also returned. This is a comma separated list of of up to 6 entity relationship names
/// If null no expanded related records will be returned.
/// ////// The function that will be passed through and be called by a successful response.
/// This function must accept the returned record as a parameter.
/// ////// The function that will be passed through and be called by a failed response.
/// This function must accept an Error object as a parameter.
/// this._stringParameterCheck(id, "SDK.WEBAPI.retrieveRecord requires the id parameter is a string.");
this._stringParameterCheck(type, "SDK.WEBAPI.retrieveRecord requires the type parameter is a string.");
if (select != null)
this._stringParameterCheck(select, "SDK.WEBAPI.retrieveRecord requires the select parameter is a string.");
if (expand != null)
this._stringParameterCheck(expand, "SDK.WEBAPI.retrieveRecord requires the expand parameter is a string.");
this._callbackParameterCheck(successCallback, "SDK.WEBAPI.retrieveRecord requires the successCallback parameter is a function.");
this._callbackParameterCheck(errorCallback, "SDK.WEBAPI.retrieveRecord requires the errorCallback parameter is a function.");
 
if (type.slice(-1) != "s") {
type = type + "s";
}
 
var systemQueryOptions = "";
 
if (select != null || expand != null) {
systemQueryOptions = "?";
if (select != null) {
var selectString = "$select=" + select;
if (expand != null) {
selectString = selectString + "," + expand;
}
systemQueryOptions = systemQueryOptions + selectString;
}
if (expand != null) {
systemQueryOptions = systemQueryOptions + "&$expand=" + expand;
}
}
 
var req = new XMLHttpRequest();
req.open("GET", encodeURI(this._WebAPIPath() + type + "(" + id + ")" + systemQueryOptions), true);
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.onreadystatechange = function () {
if (this.readyState == 4 /* complete */) {
req.onreadystatechange = null;
if (this.status == 200) {
var data = JSON.parse(this.response, SDK.WEBAPI._dateReviver)
successCallback(data);
}
else {
errorCallback(SDK.WEBAPI._errorHandler(this));
}
}
};
req.send();
},
updateRecord: function (id, object, type, successCallback, errorCallback) {
///
/// Sends an asynchronous request to update a record.
///
 
////// A String representing the GUID value for the record to retrieve.
/// ////// A JavaScript object with properties corresponding to the Schema Names for
/// entity attributes that are valid for update operations.
/// ////// The Schema Name of the Entity type record to retrieve.
/// For an Account record, use "Account"
/// ////// The function that will be passed through and be called by a successful response.
/// Nothing will be returned to this function.
/// ////// The function that will be passed through and be called by a failed response.
/// This function must accept an Error object as a parameter.
/// this._stringParameterCheck(id, "SDK.WEBAPI.updateRecord requires the id parameter.");
this._parameterCheck(object, "SDK.WEBAPI.updateRecord requires the object parameter.");
this._stringParameterCheck(type, "SDK.WEBAPI.updateRecord requires the type parameter.");
this._callbackParameterCheck(successCallback, "SDK.WEBAPI.updateRecord requires the successCallback is a function.");
this._callbackParameterCheck(errorCallback, "SDK.WEBAPI.updateRecord requires the errorCallback is a function.");
 
if (type.slice(-1) != "s") {
type = type + "s";
}
 
var req = new XMLHttpRequest();
req.open("PATCH", encodeURI(this._WebAPIPath() + type + "(" + id + ")"), true);
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.onreadystatechange = function () {
if (this.readyState == 4 /* complete */) {
req.onreadystatechange = null;
if (this.status == 204 || this.status == 1223) {
successCallback();
}
else {
errorCallback(SDK.WEBAPI._errorHandler(this));
}
}
};
req.send(JSON.stringify(object));
},
deleteRecord: function (id, type, successCallback, errorCallback) {
///
/// Sends an asynchronous request to delete a record.
///
 
////// A String representing the GUID value for the record to delete.
/// ////// The Schema Name of the Entity type record to delete.
/// For an Account record, use "Account"
/// ////// The function that will be passed through and be called by a successful response.
/// Nothing will be returned to this function.
/// ////// The function that will be passed through and be called by a failed response.
/// This function must accept an Error object as a parameter.
/// this._stringParameterCheck(id, "SDK.WEBAPI.deleteRecord requires the id parameter.");
this._stringParameterCheck(type, "SDK.WEBAPI.deleteRecord requires the type parameter.");
this._callbackParameterCheck(successCallback, "SDK.WEBAPI.deleteRecord requires the successCallback is a function.");
this._callbackParameterCheck(errorCallback, "SDK.WEBAPI.deleteRecord requires the errorCallback is a function.");
 
if (type.slice(-1) != "s") {
type = type + "s";
}
 
var req = new XMLHttpRequest();
req.open("DELETE", encodeURI(this._WebAPIPath() + type + "(" + id + ")", true));
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.onreadystatechange = function () {
 
if (this.readyState == 4 /* complete */) {
req.onreadystatechange = null;
if (this.status == 204) {
successCallback();
}
else {
errorCallback(SDK.WEBAPI._errorHandler(this));
}
}
};
req.send();
 
},
retrieveMultipleRecords: function (type, options, successCallback, errorCallback, OnComplete) {
///
/// Sends an asynchronous request to retrieve records.
///
 
////// The Schema Name of the Entity type record to retrieve.
/// For an Account record, use "Account"
/// ////// A String representing the OData System Query Options to control the data returned
/// ////// The function that will be passed through and be called for each page of records returned.
/// Each page is 50 records. If you expect that more than one page of records will be returned,
/// this function should loop through the results and push the records into an array outside of the function.
/// Use the OnComplete event handler to know when all the records have been processed.
/// ////// The function that will be passed through and be called by a failed response.
/// This function must accept an Error object as a parameter.
/// ////// The function that will be called when all the requested records have been returned.
/// No parameters are passed to this function.
/// this._stringParameterCheck(type, "SDK.WEBAPI.retrieveMultipleRecords requires the type parameter is a string.");
if (options != null)
this._stringParameterCheck(options, "SDK.WEBAPI.retrieveMultipleRecords requires the options parameter is a string.");
this._callbackParameterCheck(successCallback, "SDK.WEBAPI.retrieveMultipleRecords requires the successCallback parameter is a function.");
this._callbackParameterCheck(errorCallback, "SDK.WEBAPI.retrieveMultipleRecords requires the errorCallback parameter is a function.");
this._callbackParameterCheck(OnComplete, "SDK.WEBAPI.retrieveMultipleRecords requires the OnComplete parameter is a function.");
 
if (type.slice(-1) != "s") {
type = type + "s";
}
 
var optionsString;
if (options != null) {
if (options.charAt(0) != "?") {
optionsString = "?" + options;
}
else { optionsString = options; }
}
var req = new XMLHttpRequest();
req.open("GET", this._WebAPIPath() + type + optionsString, true);
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.onreadystatechange = function () {
if (this.readyState == 4 /* complete */) {
req.onreadystatechange = null;
if (this.status == 200) {
var data = JSON.parse(this.response, SDK.WEBAPI._dateReviver)
successCallback(data);
OnComplete();
}
else {
errorCallback(SDK.WEBAPI._errorHandler(this));
}
}
};
req.send();
},
__namespace: true
};
