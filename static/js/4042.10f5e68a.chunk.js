"use strict";(self.webpackChunkweb_emojify=self.webpackChunkweb_emojify||[]).push([[4042],{4042:(e,l,o)=>{o.d(l,{RollUpdater:()=>t});var a=o(4709);class n{constructor(){this.enable=!1,this.value=0}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.value&&(this.value=(0,a.Cs)(e.value)))}}class i{constructor(){this.darken=new n,this.enable=!1,this.enlighten=new n,this.mode="vertical",this.speed=25}load(e){e&&(void 0!==e.backColor&&(this.backColor=a.Oz.create(this.backColor,e.backColor)),this.darken.load(e.darken),void 0!==e.enable&&(this.enable=e.enable),this.enlighten.load(e.enlighten),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.speed&&(this.speed=(0,a.Cs)(e.speed)))}}class t{getTransformValues(e){var l;const o=(null===(l=e.roll)||void 0===l?void 0:l.enable)&&e.roll,a=o&&o.horizontal,n=o&&o.vertical;return{a:a?Math.cos(o.angle):void 0,d:n?Math.sin(o.angle):void 0}}async init(e){const{initParticle:l}=await o.e(2494).then(o.bind(o,2494));l(e)}isEnabled(e){const l=e.options.roll;return!e.destroyed&&!e.spawning&&!(null===l||void 0===l||!l.enable)}loadOptions(e){e.roll||(e.roll=new i);for(var l=arguments.length,o=new Array(l>1?l-1:0),a=1;a<l;a++)o[a-1]=arguments[a];for(const n of o)e.roll.load(null===n||void 0===n?void 0:n.roll)}async update(e,l){if(!this.isEnabled(e))return;const{updateRoll:a}=await o.e(2494).then(o.bind(o,2494));a(e,l)}}}}]);
//# sourceMappingURL=4042.10f5e68a.chunk.js.map