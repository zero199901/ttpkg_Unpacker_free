define("node-modules/@repo/qm-components/src/q-reader/components/set-background.js",(function(e,n,r,o,t,a,c,u,s,d,i,m,f,p,k,l,v,C,_,b,g,y,S,h,j,q,R,T,x,A,B,E,G,I,L,M,w,z,D){"use strict";var F=e("../../../../../../common/vendor.js"),H=F.defineComponent({__name:"set-background",setup:function(e){var n=F.useStoreReader();return function(e,r){return{a:F.unref(n).readerTheme.colorGray,b:F.f(F.unref(F.skinConfigList),(function(e,r,o){return F.e({a:"dark"===e.name},(e.name,{}),{b:e.name,c:e.bgColor,d:F.unref(n).readerStyle.name===e.name?F.unref(n).readerTheme.skinActiveBorderColor:"",e:F.o((function(r){return function(e){n.setReaderStyle(e),n.actionEvents.onMenuClick("skin",e)}(e)}))})}))}}}}),J=F._export_sfc(H,[["__scopeId","data-v-92150a92"]]);tt.createComponent(J)}));
//# sourceMappingURL=set-background.js.map