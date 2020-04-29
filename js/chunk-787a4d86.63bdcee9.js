(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-787a4d86"],{"10d2":function(t,e,i){"use strict";var a=i("8dd9");e["a"]=a["a"]},"297c":function(t,e,i){"use strict";i("a9e3");var a=i("2b0e"),r=(i("c7cd"),i("5530")),s=i("ade3"),n=(i("6ece"),i("0789")),o=i("a9ad"),c=i("fe6c"),l=i("a452"),u=i("7560"),d=i("80d2"),h=i("58df"),p=Object(h["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],u["a"]),f=p.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(s["a"])(t,this.$vuetify.rtl?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(s["a"])(t,"width",Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["b"]:n["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["k"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=f;e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("fe6c"),r=i("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(r["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"615b":function(t,e,i){},"6ece":function(t,e,i){},"7a74":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{padless:""}},[i("v-container",{staticClass:"d-flex justify-center pa-0"},[i("v-card",{staticClass:"transparent",attrs:{flat:""}},[i("v-card-text",{staticClass:"text-center overline",domProps:{innerHTML:t._s(t.text)}})],1)],1)],1)},r=[],s={name:"Footer",data:function(){return{text:"Copyright &copy; ".concat((new Date).getFullYear(),"<br/>Nigel Salvador, Full Stack Web Developer<br/>Built with <a target='_blank' href='https://vuejs.org/'>Vue.js</a> &amp; <a target='_blank' href='https://vuetifyjs.com/en/'>Vuetify</a>")}}},n=s,o=i("2877"),c=i("6544"),l=i.n(c),u=i("b0af"),d=i("99d9"),h=i("a523"),p=(i("a9e3"),i("c7cd"),i("5530")),f=(i("b5b6"),i("3a66")),g=i("8dd9"),v=i("d10f"),m=i("58df"),b=i("80d2"),y=Object(m["a"])(g["a"],Object(f["a"])("footer",["height","inset"]),v["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(p["a"])({},g["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(p["a"])({},g["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(b["f"])(t),left:Object(b["f"])(this.computedLeft),right:Object(b["f"])(this.computedRight),bottom:Object(b["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),_=Object(o["a"])(n,a,r,!1,null,null,null);e["default"]=_.exports;l()(_,{VCard:u["a"],VCardText:d["b"],VContainer:h["a"],VFooter:y})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c}));var a=i("b0af"),r=i("80d2"),s=Object(r["g"])("v-card__actions"),n=Object(r["g"])("v-card__subtitle"),o=Object(r["g"])("v-card__text"),c=Object(r["g"])("v-card__title");a["a"]},b0af:function(t,e,i){"use strict";i("0481"),i("4069"),i("a9e3");var a=i("5530"),r=(i("615b"),i("10d2")),s=i("297c"),n=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(s["a"],n["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(a["a"])({"v-card":!0},n["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-787a4d86.63bdcee9.js.map