var C='celebi-v1';
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
if(e.request.method!=='GET')return;
e.respondWith(caches.open(C).then(function(c){
return c.match(e.request,{ignoreSearch:true}).then(function(h){
var n=fetch(e.request).then(function(r){
if(r&&(r.ok||r.type==='opaque'))c.put(e.request,r.clone());
return r}).catch(function(){return h});
return h||n})}))});
