(this["webpackJsonpleaflet-markerclusters-performance-test-addlayers-clearlayers"]=this["webpackJsonpleaflet-markerclusters-performance-test-addlayers-clearlayers"]||[]).push([[0],{20:function(e,r,a){},27:function(e,r,a){"use strict";a.r(r);var t=a(0),n=a(11),o=a.n(n),c=(a(19),a(20),a(9)),s=a(12),i=a(29),l=a(28),u=a(1),d=a.n(u),m=(a(21),a(22),a(23),a(7)),p=d.a.markerClusterGroup(),f=new d.a.Icon({iconUrl:"https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",iconSize:[25,41]}),h=function(e){var r=e.markers,a=e.addMarkers,n=Object(m.b)().map;return Object(t.useEffect)((function(){p.clearLayers(),r.forEach((function(e){var r=e.position;return d.a.marker(new d.a.LatLng(r.lat,r.lng),{icon:f}).addTo(p)})),n.addLayer(p)}),[r,n]),n.on("moveend",(function(){var e=window.performance.now();a();var t=[];p.clearLayers(),r.forEach((function(e){var r=e.position,a=d.a.marker(new d.a.LatLng(r.lat,r.lng),{icon:f});void 0!==a&&t.push(a)})),p.addLayers(t);var n=window.performance.now();console.log("Time of adding markers and clusters: ".concat(n-e,"ms"))})),null},j=a(5),g=[51.505,-.09],b={height:"90vh"},k=function(){var e,r=function(){var r=Object(s.a)(Object(c.a)().mark((function r(){var a,t;return Object(c.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("../data/trivial.json");case 2:for(a=r.sent,console.log(a),e=[],t=0;t<1e4;t++)e.push({position:{lng:200*Math.random()-122.673447,lat:45.5225581-60+80*Math.random()}});case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return r(),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(i.a,{center:g,zoom:2,style:b,maxZoom:20,children:[Object(j.jsx)(l.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(j.jsx)(h,{markers:e,addMarkers:r})]}),Object(j.jsx)("div",{children:"clearLayers and addLayers used. Look at the console to check performance"})]})},v=function(){return Object(j.jsx)(k,{})},y=document.getElementById("root");o.a.render(Object(j.jsx)(v,{}),y)}},[[27,1,2]]]);
//# sourceMappingURL=main.755130ae.chunk.js.map