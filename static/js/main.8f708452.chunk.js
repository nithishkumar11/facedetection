(this.webpackJsonpimagedetection=this.webpackJsonpimagedetection||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(45),i=a.n(r),s=(a(102),a(90)),o=a(91),c=a(96),m=a(95),u=function(e){var t=e.onRouteChange;return e.isSignedIn?l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link underline dim pa3 pointer"},"Sign Out")):l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link underline dim pa3 pointer"},"Sign In"),l.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link underline dim pa3 pointer"},"Register"))},p=(a(103),function(e){var t=e.lin,a=e.box,n={top:a.top_Row,right:a.right_Col,bottom:a.bottom_Row,left:a.left_Col};return console.log(n),l.a.createElement("div",{className:"center ma2"},l.a.createElement("div",{className:"absolute ma2"},l.a.createElement("img",{id:"image",src:t,alt:"",width:"500px",height:"auto"}),l.a.createElement("div",{className:"bounding-box",style:n})))}),d=function(e){var t=e.onRouteChange;return l.a.createElement("article",{class:"br3  shadow-3 mv4 w-100 w-50-m w-25-l mw6 center "},l.a.createElement("form",{class:"measure"},l.a.createElement("fieldset",{id:"sign_up",class:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{class:"f1 b fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{class:"mt3"},l.a.createElement("label",{class:"db fw6 lh-copy f6",for:"email-address"},"Email"),l.a.createElement("input",{class:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{class:"mv3"},l.a.createElement("label",{class:"db fw6 lh-copy f6",for:"password"},"Password"),l.a.createElement("input",{class:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{class:""},l.a.createElement("input",{onClick:function(){return t("home")},class:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib",type:"submit",value:"Sign in"})),l.a.createElement("div",{class:"lh-copy mt3"},l.a.createElement("p",{onClick:function(){return t("register")},class:"f6 link dim black mt1 db pointer"},"Register"))))},g=function(e){var t=e.onRouteChange;return l.a.createElement("article",{class:"br3 shadow-3 mv6 w-100 w-50-m w-25-l mw6 center "},l.a.createElement("div",{class:"measure"},l.a.createElement("fieldset",{id:"sign_up",class:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{class:"f1 b fw6 ph0 mh0"},"Register"),l.a.createElement("div",{class:"mt3"},l.a.createElement("label",{class:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),l.a.createElement("input",{class:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90",type:"name",name:"name",id:"name"})),l.a.createElement("div",{class:"mt3"},l.a.createElement("label",{class:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{class:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{class:"mv3"},l.a.createElement("label",{class:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{class:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{class:""},l.a.createElement("input",{onClick:function(){return t("home")},class:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer mb2 f4 dib",type:"submit",value:"Register"}))))},h=a(92),E=a.n(h),b=(a(104),a(93)),f=a.n(b),w=function(){return l.a.createElement("div",{className:"ma4 mt0"},l.a.createElement(E.a,{className:"Tilt br2 shadow-2",options:{max:100},style:{height:100,width:100}},l.a.createElement("div",{className:"Tilt-inner tc pa2"},l.a.createElement("img",{src:f.a,alt:"logo"}))))},v=(a(105),function(e){var t=e.onValueChange,a=e.onSubmit;return l.a.createElement("div",null,l.a.createElement("p",{className:"f3 tc"},"I can Detect Your faces!! Give me a chance.."),l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:" bg pa4 shadow-3"},l.a.createElement("input",{onChange:t,className:"bg-light-yellow f3 w-70",type:"text"}),l.a.createElement("button",{onClick:a,className:"w-30 f3 white bg-light-purple link grow"},"Detect"))))}),A=(a(106),function(){return l.a.createElement("div",{className:"white f3"},l.a.createElement("div",null,"Nithish,your Current Rank is.."),l.a.createElement("div",null,"#2"))}),k=a(94),C=a.n(k),y=a(46),B=a.n(y),S={particles:{number:{value:80,density:{enable:!0,color:"#222",value_area:500}}}},D=new B.a.App({apiKey:""}),I=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getUrl=function(t){e.setState({input:t.target.value})},e.calculateBounding=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("image"),n=Number(a.width),l=Number(a.height);return{bottom_Row:t.bottom_row*l,left_Col:t.left_col*n,right_Col:n-t.right_col*n,top_Row:l-t.top_row*l}},e.setBoxValue=function(t){e.setState({box:t})},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):e.setState({isSignedIn:!1}),e.setState({route:t})},e.onButtonSubmit=function(){e.setState({imagelink:e.state.input}),D.models.predict(B.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.setBoxValue(e.calculateBounding(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imagelink:"",box:{},route:"signin",isSignedIn:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.box,a=e.isSignedIn,n=e.imagelink,r=e.route;return l.a.createElement("div",{className:"App"},l.a.createElement(C.a,{className:"particles",params:S}),l.a.createElement(u,{isSignedIn:a,onRouteChange:this.onRouteChange}),"home"===r?l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(A,null),l.a.createElement(v,{onValueChange:this.getUrl,onSubmit:this.onButtonSubmit}),l.a.createElement(p,{box:t,lin:n})):"signin"===r?l.a.createElement(d,{onRouteChange:this.onRouteChange}):l.a.createElement(g,{onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(354);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t){e.exports="data:image/png;base64,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"},97:function(e,t,a){e.exports=a(355)}},[[97,1,2]]]);
//# sourceMappingURL=main.8f708452.chunk.js.map