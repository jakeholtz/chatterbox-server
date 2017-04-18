// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'PARSE_APP_ID');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'PARSE_API_KEY');
});

// '{"uri":{"protocol":"http:","slashes":true,"auth":null,"host":"127.0.0.1:3000",
// "port":"3000","hostname":"127.0.0.1","hash":null,"search":null,"query":null,"pathname":
// "/classes/messages","path":"/classes/messages","
// href":"http://127.0.0.1:3000/classes/messages"},"method":"GET","headers":{}}'
