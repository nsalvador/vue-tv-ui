(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],p=0,h=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("router-view")],1),r("app-footer")],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{app:""}},[r("div",{attrs:{cols:"12"}},[e._v("© "+e._s((new Date).getFullYear()))])])},c=[],i=r("2877"),l=r("6544"),u=r.n(l),p=r("553a"),h={},v=Object(i["a"])(h,o,c,!1,null,null,null),d=v.exports;u()(v,{VFooter:p["a"]});var f={name:"App",created:function(){this.$vuetify.theme.dark=!0},components:{appFooter:d}},m=f,b=r("7496"),g=r("a75b"),w=Object(i["a"])(m,a,s,!1,null,null,null),_=w.exports;u()(w,{VApp:b["a"],VContent:g["a"]});var x=r("f309");n["a"].use(x["a"]);var y=new x["a"]({}),O=r("2f62");n["a"].use(O["a"]);var V=new O["a"].Store({}),j=r("8c4f"),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-header")},k=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-app-bar",{attrs:{app:""}},[r("v-spacer"),e.isVisible?r("app-search",{on:{search:e.search}}):e._e(),r("v-toolbar-items",[r("v-btn",{attrs:{text:""},on:{click:e.goToHome}},[e._v("Home")]),r("v-btn",{attrs:{text:""},on:{click:e.goToSearch}},[e._v("Search")])],1)],1)],1)},C=[],E=(r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",dense:"","hide-details":"",outlined:"",placeholder:"Search..."},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},"click:append":e.search},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)}),P=[],R={name:"SearchBar",data:function(){return{show:""}},methods:{search:function(){""!==this.show&&(this.$emit("search",this.show),this.show="")}}},I=R,T=r("a523"),L=r("8654"),B=Object(i["a"])(I,E,P,!1,null,null,null),H=B.exports;u()(B,{VContainer:T["a"],VTextField:L["a"]});var A={name:"Header",computed:{isVisible:function(){return"search"==this.$route.name}},components:{appSearch:H},methods:{goToHome:function(){"search"===this.$route.name&&Ae.push({name:"home"})},goToSearch:function(){"home"===this.$route.name&&Ae.push({name:"search"})},search:function(e){this.$emit("search",{show:e,page:"1"})}}},F=A,M=r("40dc"),N=r("8336"),U=r("2fa4"),J=r("2a7f"),K=Object(i["a"])(F,$,C,!1,null,null,null),z=K.exports;u()(K,{VAppBar:M["a"],VBtn:N["a"],VContainer:T["a"],VSpacer:U["a"],VToolbarItems:J["a"]});var D={name:"Home",components:{appHeader:z}},Y=D,q=Object(i["a"])(Y,S,k,!1,null,null,null),G=q.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("app-header",{on:{search:e.search}}),e.isLoaded?r("app-progress"):[r("app-banner",{attrs:{banner:{error:e.error,series:e.series,show:e.show}}}),r("app-results",{attrs:{seriesObject:e.series,show:e.show},on:{next:e.search}})]],2)},W=[],X=(r("d3b7"),r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-row",{attrs:{justify:"center"}},[r("v-progress-circular",{attrs:{value:80,indeterminate:""}})],1)],1)],1)],1)}),Z=[],ee=r("62ad"),te=r("490a"),re=r("0fd9"),ne={},ae=Object(i["a"])(ne,X,Z,!1,null,null,null),se=ae.exports;u()(ae,{VCol:ee["a"],VContainer:T["a"],VProgressCircular:te["a"],VRow:re["a"]});var oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[e.banner.error?r("v-banner",[e._v(e._s(e.banner.error.name)+": "+e._s(e.banner.error.message))]):0!==Object.keys(e.banner.series).length?r("v-banner",[e._v(e._s(e.banner.series.results)+" result(s) for '"+e._s(e.banner.show)+"'")]):e._e()],1)},ce=[],ie={name:"Banner",props:{banner:Object}},le=ie,ue=r("e4e5"),pe=Object(i["a"])(le,oe,ce,!1,null,null,null),he=pe.exports;u()(pe,{VBanner:ue["a"],VContainer:T["a"]});var ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{directives:[{name:"show",rawName:"v-show",value:e.pages>1,expression:"pages>1"}]},[r("v-col",[r("v-pagination",{attrs:{length:e.pages},on:{input:e.next},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1),r("v-row",e._l(e.series,(function(e,t){return r("v-col",{key:t,staticClass:"pa-1",attrs:{cols:"6",sm:"3"}},[r("app-image",{attrs:{show:e}})],1)})),1)],1)},de=[],fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{tile:""}},[r("v-responsive",[r("v-img",{staticClass:"img",attrs:{src:e.getImage(e.show),"aspect-ratio":"0.68",contain:""}})],1),r("v-card-actions",[r("span",{staticClass:"text-truncate",attrs:{title:e.show.seriesName}},[e._v(e._s(e.show.seriesName))]),r("v-spacer"),r("v-btn",{staticClass:"px-0",attrs:{icon:""}},[r("v-icon",[e._v("mdi-information-outline")])],1),r("v-btn",{staticClass:"ma-0 px-0",attrs:{icon:""},on:{click:e.subscribe}},[e.isSubscribed?r("v-icon",[e._v("mdi-plus-circle-outline")]):r("v-icon",[e._v("mdi-minus-circle-outline")])],1)],1)],1)},me=[],be=(r("99af"),{data:function(){return{isSubscribed:!0,baseURL:"https://tv-calendar-assets.s3.us-east-2.amazonaws.com/",noImage:"https://via.placeholder.com/680x1000.png?text=No+Image"}},props:["show"],methods:{getImage:function(e){return e.posterKey?"".concat(this.baseURL).concat(e.posterKey):this.noImage},subscribe:function(){this.isSubscribed=!this.isSubscribed}}}),ge=be,we=r("b0af"),_e=r("99d9"),xe=r("132d"),ye=r("adda"),Oe=r("6b53"),Ve=Object(i["a"])(ge,fe,me,!1,null,null,null),je=Ve.exports;u()(Ve,{VBtn:N["a"],VCard:we["a"],VCardActions:_e["a"],VIcon:xe["a"],VImg:ye["a"],VResponsive:Oe["a"],VSpacer:U["a"]});var Se={name:"SearchResults",data:function(){return{page:null}},methods:{next:function(e){this.$emit("next",{show:this.show,page:e})}},mounted:function(){this.page=this.seriesObject.page||1},computed:{series:function(){return this.seriesObject.series||[]},pages:function(){return this.seriesObject.pages||0}},props:{seriesObject:Object,show:String},components:{appImage:je}},ke=Se,$e=r("891e"),Ce=Object(i["a"])(ke,ve,de,!1,null,null,null),Ee=Ce.exports;u()(Ce,{VCol:ee["a"],VContainer:T["a"],VPagination:$e["a"],VRow:re["a"]});var Pe=r("bc3a"),Re=r.n(Pe);Re.a.defaults.baseURL="https://tv-calendar-api.herokuapp.com";var Ie={name:"Search",data:function(){return{show:"",series:{},isLoaded:!1,error:null}},methods:{search:function(e){var t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return this.show=e.show,this.series={},this.isLoaded=!0,this.error=null,r.prev=4,r.next=7,regeneratorRuntime.awrap(Re()({url:"/shows/search?page=".concat(e.page),method:"post",data:{show:e.show}}));case 7:t=r.sent,this.isLoaded=!1,this.series=t.data,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](4),this.isLoaded=!1,this.error=r.t0;case 16:case"end":return r.stop()}}),null,this,[[4,12]])}},components:{appHeader:z,appProgress:se,appBanner:he,appResults:Ee}},Te=Ie,Le=Object(i["a"])(Te,Q,W,!1,null,null,null),Be=Le.exports;n["a"].use(j["a"]);var He=[{path:"/",component:G,name:"home"},{path:"/search",component:Be,name:"search"}],Ae=new j["a"]({mode:"history",routes:He});n["a"].config.productionTip=!1,new n["a"]({store:V,router:Ae,vuetify:y,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.33d198f2.js.map