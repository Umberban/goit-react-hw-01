(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports={profile:"UserCard_profile__QN_pF",avatar:"UserCard_avatar__Xqdmy",name:"UserCard_name__28hGP",tag:"UserCard_tag__jAPvo",stats:"UserCard_stats__2c01Y",label:"UserCard_label__1u-SC",quantity:"UserCard_quantity__18-Kj"}},function(e,a,t){e.exports={main:"PricingPlan_main__2o9Zi",icon:"PricingPlan_icon__z8MwW",item:"PricingPlan_item__3yiXC",label:"PricingPlan_label__3ecsq",btn:"PricingPlan_btn__wKXg3",abz:"PricingPlan_abz__3wqLv",price:"PricingPlan_price__Eh3KS"}},function(e,a,t){e.exports={list:"Stats_list__15ZGq",block:"Stats_block__1BxHs",main:"Stats_main__27YKO",item:"Stats_item__KjTqM",title:"Stats_title__3MHIW"}},,,,,,function(e){e.exports=[{id:1,label:"Bronze",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/bronze-icon.png",capacity:"2TB",price:39,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{id:2,label:"Silver",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/silver-icon.png",capacity:"20TB",price:99,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{id:3,label:"Gold",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/gold-icon.png",capacity:"400TB",price:499,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."}]},function(e){e.exports=[{id:"1e0700a2-5183-4291-85cc-2065a036a683",type:"invoice",amount:"964.82",currency:"LRD"},{id:"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",type:"payment",amount:"686.50",currency:"WST"},{id:"44dca67a-8e5a-4798-bf8e-b15efd4e1abd",type:"invoice",amount:"828.62",currency:"UGX"},{id:"ea8ed3dc-2b68-4a53-905a-53ecb0adef33",type:"withdrawal",amount:"527.80",currency:"ALL"},{id:"ea76146a-0b00-4b80-bc02-a8c822176712",type:"withdrawal",amount:"371.43",currency:"MUR"},{id:"63ca02f9-d637-46b5-9237-f3b24425e029",type:"payment",amount:"862.44",currency:"AUD"},{id:"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",type:"withdrawal",amount:"907.00",currency:"GEL"},{id:"6013bad0-750c-4691-8bc2-d8f2b43969c4",type:"withdrawal",amount:"352.52",currency:"UGX"},{id:"252c7be4-8b06-4fa7-8d42-61fb835b70d5",type:"payment",amount:"388.98",currency:"TOP"},{id:"4eaab41b-b967-40ac-82ed-85fc66f646f1",type:"deposit",amount:"103.10",currency:"BWP"},{id:"9648a350-8469-42d5-8bf3-18090de5fe67",type:"withdrawal",amount:"322.32",currency:"MRO"},{id:"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",type:"invoice",amount:"14.79",currency:"PYG"},{id:"43ef232c-80e9-4d6f-b48a-b22405620de3",type:"payment",amount:"904.86",currency:"CHF"},{id:"5161682e-e620-4019-ab0a-24ceb10fbd20",type:"withdrawal",amount:"307.08",currency:"NOK"},{id:"7b119d71-42e6-4c42-a141-6818b07bb9ff",type:"invoice",amount:"275.07",currency:"AWG"},{id:"a4f65722-65c4-4c28-b1f4-b8ed988bb205",type:"deposit",amount:"213.10",currency:"STD"},{id:"c6e5784b-0ca3-48d6-86e5-b5128af5a523",type:"invoice",amount:"116.11",currency:"CUP CUC"},{id:"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",type:"invoice",amount:"878.67",currency:"HKD"},{id:"a4a98b0e-b22c-438b-9f83-de2df52110c8",type:"invoice",amount:"725.03",currency:"UYU UYI"},{id:"b39bfa7a-0166-4c47-94d6-87d20590f746",type:"payment",amount:"405.45",currency:"MDL"}]},function(e,a,t){e.exports={history:"TransactionHistory_history__2jiwv"}},,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),i=t.n(r),l=(t(20),t(6)),s=t(7),m=t(12),o=t(8),u=t(13),d=t(1),p=t.n(d),b=function(e){var a=e.name,t=e.avatar,n=e.tag,r=e.location,i=e.stats;return c.a.createElement("div",{className:p.a.profile},c.a.createElement("div",{className:"description"},c.a.createElement("img",{src:t,alt:"user avatar",className:p.a.avatar}),c.a.createElement("p",{className:p.a.name},a),c.a.createElement("p",{className:p.a.tag},n),c.a.createElement("p",{className:p.a.tag},r)),c.a.createElement("ul",{className:p.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:p.a.label},"Followers"),c.a.createElement("span",{className:p.a.quantity},i.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:p.a.label},"Views"),c.a.createElement("span",{className:p.a.quantity},i.views)),c.a.createElement("li",null,c.a.createElement("span",{className:p.a.label},"Likes"),c.a.createElement("span",{className:p.a.quantity},i.likes))))},y=t(3),f=t.n(y),_=function(e){var a=e.title,t=e.stats;return c.a.createElement("section",{className:f.a.main},c.a.createElement("h2",{className:f.a.title},a),c.a.createElement("ul",{className:f.a.list},t.map(function(e){return c.a.createElement("li",{style:{backgroundColor:"rgb(".concat(Math.floor(255*Math.random()),",").concat(Math.floor(255*Math.random()),",").concat(Math.floor(200*Math.random()),")")},className:f.a.item,key:e.id},c.a.createElement("span",{className:f.a.block},e.label),c.a.createElement("span",{className:f.a.block},e.percentage,"%"))})))};_.defaultProps={title:"Upload stats"};var E=_,h=t(9),g=t(2),w=t.n(g),v=function(e){var a=e.el;return c.a.createElement("div",{className:w.a.item},c.a.createElement("i",{className:w.a.icon},c.a.createElement("img",{src:a.icon,alt:""})),c.a.createElement("h2",{className:w.a.label},a.label),c.a.createElement("p",{className:w.a.abz},a.capacity),c.a.createElement("p",{className:w.a.abz},a.description),c.a.createElement("p",{className:w.a.price},a.price,"/MO"),c.a.createElement("button",{type:"submit",className:w.a.btn},"Get Started"))},N=function(e){var a=e.plan;return c.a.createElement("ul",{className:w.a.main},a.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(v,{el:e}))}))},P=t(10),k=t(11),U=t.n(k),C=function(e){var a=e.trans;return c.a.createElement("table",{className:U.a.history},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,a.map(function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))})))},q=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).state={user:{name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",stats:{followers:5603,views:4827,likes:1308}},stats:[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}]},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.user,t=e.stats;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,a),c.a.createElement(E,{title:"Upload stats",stats:t}),c.a.createElement(N,{plan:h}),c.a.createElement(C,{trans:P}))}}]),a}(n.Component);i.a.render(c.a.createElement(q,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.9a59872e.chunk.js.map