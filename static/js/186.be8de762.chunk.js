"use strict";(self.webpackChunkweb_emojify=self.webpackChunkweb_emojify||[]).push([[186],{186:(e,o,n)=>{n.d(o,{Collider:()=>t});var s=n(4709);async function i(e,o,s,i){switch(e.options.collisions.mode){case"absorb":{const{absorb:t}=await n.e(3826).then(n.bind(n,3826));t(e,o,s,i);break}case"bounce":{const{bounce:s}=await n.e(4896).then(n.bind(n,4896));s(e,o);break}case"destroy":{const{destroy:s}=await n.e(1927).then(n.bind(n,1927));s(e,o);break}}}class t extends s.$S{constructor(e){super(e)}clear(){}init(){}async interact(e,o){if(e.destroyed||e.spawning)return;const n=this.container,t=e.getPosition(),a=e.getRadius(),c=n.particles.quadTree.queryCircle(t,2*a);for(const r of c){if(e===r||!r.options.collisions.enable||e.options.collisions.mode!==r.options.collisions.mode||r.destroyed||r.spawning)continue;const c=r.getPosition(),l=r.getRadius();if(Math.abs(Math.round(t.z)-Math.round(c.z))>a+l)continue;(0,s.Sp)(t,c)>a+l||await i(e,r,o,n.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=186.be8de762.chunk.js.map