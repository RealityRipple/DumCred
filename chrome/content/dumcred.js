var dumcred_control =
{
 init: function()
 {
  let observerService = Components.classes['@mozilla.org/observer-service;1'].getService(Components.interfaces.nsIObserverService);
  observerService.addObserver(dumcred_control.eventObserver, 'content-document-global-created', false);
 },
 eventObserver:
 {
  observe: function(subject, topic, data) 
  {
   switch (topic)
   {
    case 'content-document-global-created':
     dumcred_control.handleDocCreated(subject);
     break;
   }
  }
 },
 handleDocCreated: function(wnd)
 {
  if (!(wnd instanceof Window))
   return;
  if (!(wnd.navigator instanceof Navigator))
   return;
  let cc = {
   create: function(options)
   {
    return new wnd.wrappedJSObject.Promise(Components.utils.exportFunction(function(resolve, reject) { resolve(Components.utils.cloneInto(null, wnd.wrappedJSObject)); }, wnd.wrappedJSObject));
   },
   get: function(options)
   {
    return new wnd.wrappedJSObject.Promise(Components.utils.exportFunction(function(resolve, reject) { resolve(Components.utils.cloneInto(null, wnd.wrappedJSObject)); }, wnd.wrappedJSObject));
   },
   preventSilentAccess: function()
   {
    return new wnd.wrappedJSObject.Promise(Components.utils.exportFunction(function(resolve, reject) { resolve(Components.utils.cloneInto(null, wnd.wrappedJSObject)); }, wnd.wrappedJSObject));
   },
   store: function(credential)
   {
    return new wnd.wrappedJSObject.Promise(Components.utils.exportFunction(function(resolve, reject) { resolve(Components.utils.cloneInto(undefined, wnd.wrappedJSObject)); }, wnd.wrappedJSObject));
   }
  };
  wnd.navigator.wrappedJSObject.credentials = Components.utils.cloneInto(cc, wnd.wrappedJSObject, {cloneFunctions: true});
 }
};
addEventListener('load', dumcred_control.init, false);
