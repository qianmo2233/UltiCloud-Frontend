(function(t){function a(a){for(var r,i,n=a[0],l=a[1],c=a[2],u=0,d=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(a);while(d.length)d.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,n=1;n<e.length;n++){var l=e[n];0!==o[l]&&(r=!1)}r&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},s=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var v=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},1:function(t,a){},"49f8":function(t,a,e){var r={"./zh_CN.json":"752b"};function o(t){var a=s(t);return e(a)}function s(t){if(!e.o(r,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id="49f8"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{app:""}},[e("SnackBar"),e("NavBar"),e("AppBar"),e("vue-scroll",[e("v-main",[e("v-container",{attrs:{fluid:""}},[e("transition",{attrs:{name:"slide-y-reverse-transition",mode:"out-in"}},[e("router-view")],1)],1)],1)],1)],1)},s=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{attrs:{app:"",width:"280"},model:{value:t.$store.state.NavBar.drawer,callback:function(a){t.$set(t.$store.state.NavBar,"drawer",a)},expression:"$store.state.NavBar.drawer"}},[e("vue-scroll",[e("NoticeCard"),e("v-lazy",{attrs:{transition:"fade-transition"}},[e("v-list",{attrs:{nav:"",dense:""}},[e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.$store.state.NavBar.group,callback:function(a){t.$set(t.$store.state.NavBar,"group",a)},expression:"$store.state.NavBar.group"}},[t._l(t.$store.state.NavItems.items1,(function(a,r){return e("v-list-item",{key:"i1-"+r,attrs:{link:"",to:a.url}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-title",[t._v(t._s(a.text))])],1)})),e("v-subheader",[t._v(t._s(t.$store.state.NavItems.title1))]),t._l(t.$store.state.NavItems.items2,(function(a,r){return e("v-list-item",{key:"i2-"+r,attrs:{link:"",to:a.url}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-title",[t._v(t._s(a.text))])],1)}))],2),e("v-subheader",[t._v(t._s(t.$store.state.NavItems.title2))]),e("v-list-group",{attrs:{"no-action":"","prepend-icon":"mdi-puzzle",color:"white"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-title",[t._v(t._s(t.$store.state.NavItems.title4))])]},proxy:!0}])},[e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.$store.state.NavBar.group,callback:function(a){t.$set(t.$store.state.NavBar,"group",a)},expression:"$store.state.NavBar.group"}},t._l(t.$store.state.NavItems.items3,(function(a,r){return e("v-list-item",{key:"i3-"+r,attrs:{link:"",to:a.url}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.text))]),e("v-list-item-subtitle",[t._v(t._s(a.ver))])],1),e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1)],1)})),1)],1),e("v-list-group",{attrs:{"no-action":"","prepend-icon":"mdi-comment-question",color:"white"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-title",[t._v(t._s(t.$store.state.NavItems.title5))])]},proxy:!0}])},[e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.$store.state.NavBar.group,callback:function(a){t.$set(t.$store.state.NavBar,"group",a)},expression:"$store.state.NavBar.group"}},t._l(t.$store.state.NavItems.items4,(function(a,r){return e("v-list-item",{key:"i4-"+r,attrs:{link:"",to:a.url}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.text))])],1),e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1)],1)})),1)],1),e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.$store.state.NavBar.group,callback:function(a){t.$set(t.$store.state.NavBar,"group",a)},expression:"$store.state.NavBar.group"}},[e("v-list-item",{attrs:{to:"/git"}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-code-braces")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("代码仓库")]),e("v-list-item-subtitle",[t._v("Github")])],1)],1)],1),e("v-subheader",[t._v(t._s(t.$store.state.NavItems.title3))]),e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.$store.state.NavBar.group,callback:function(a){t.$set(t.$store.state.NavBar,"group",a)},expression:"$store.state.NavBar.group"}},t._l(t.$store.state.NavItems.items5,(function(a,r){return e("v-list-item",{key:"i5-"+r,attrs:{link:"",to:a.url}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.text))])],1)],1)})),1)],1)],1)],1)],1)},n=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{attrs:{color:"red",dark:""}},[e("v-card-title",{staticClass:"headline"},[t._v(" 获取最后的永久会员! ")]),e("v-card-subtitle",[t._v("2021年2月后将不再提供永久的UltiKits会员,现在是最后的机会!")]),e("v-card-actions",[e("v-btn",{attrs:{text:""}},[t._v(" 仅需50CNY即可获取 ")])],1)],1)},c=[],v={name:"NoticeCard"},u=v,d=e("2877"),m=e("6544"),p=e.n(m),f=e("8336"),b=e("b0af"),_=e("99d9"),g=Object(d["a"])(u,l,c,!1,null,"1e206369",null),h=g.exports;p()(g,{VBtn:f["a"],VCard:b["a"],VCardActions:_["a"],VCardSubtitle:_["b"],VCardTitle:_["d"]});var x={name:"NavBar",components:{NoticeCard:h},data:function(){return{}},watch:{}},k=x,y=e("132d"),V=e("b687"),C=e("8860"),$=e("56b0"),w=e("da13"),L=e("5d23"),B=e("1baa"),N=e("34c3"),S=e("f774"),O=e("e0c7"),T=Object(d["a"])(k,i,n,!1,null,"68d7c57f",null),F=T.exports;p()(T,{VIcon:y["a"],VLazy:V["a"],VList:C["a"],VListGroup:$["a"],VListItem:w["a"],VListItemContent:L["a"],VListItemGroup:B["a"],VListItemIcon:N["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VNavigationDrawer:S["a"],VSubheader:O["a"]});var U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app-bar",{attrs:{app:"",absolute:"",color:"indigo",dark:"",light:""}},[e("v-toolbar",{attrs:{color:"indigo",dark:"",light:"",flat:""}},[e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.$store.state.NavBar.drawer=!t.$store.state.NavBar.drawer}}}),e("v-toolbar-title",[t._v("UltiCloud")]),e("v-spacer"),e("LoginDialog"),e("UserDialog")],1)],1)},I=[],j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.$store.state.user.status?t._e():e("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on,o=a.attrs;return[e("v-btn",t._g(t._b({attrs:{rounded:"",color:"dark",dark:"",light:"",large:""}},"v-btn",o,!1),r),[e("div",[t._v(" 未登录 "),e("br"),e("div",{staticClass:"text-caption"},[t._v(" 点击登录 ")])]),e("v-icon",{attrs:{dark:"",right:""}},[t._v(" mdi-account-circle ")])],1)]}}],null,!1,1949693018),model:{value:t.LoginForm.dialog,callback:function(a){t.$set(t.LoginForm,"dialog",a)},expression:"LoginForm.dialog"}},[e("v-card",[e("v-card-text",[e("v-tabs",{attrs:{"fixed-tabs":""}},[e("v-tab",{attrs:{disabled:t.LoginForm.loading}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-login")]),t._v("登录")],1),e("v-tab",{attrs:{disabled:t.LoginForm.loading}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-account-multiple-plus")]),t._v("注册")],1),e("v-tab-item",[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-text-field",{attrs:{label:"用户名",filled:""},model:{value:t.LoginForm.username,callback:function(a){t.$set(t.LoginForm,"username",a)},expression:"LoginForm.username"}}),e("v-text-field",{attrs:{label:"密码",filled:"",type:"password"},model:{value:t.LoginForm.password,callback:function(a){t.$set(t.LoginForm,"password",a)},expression:"LoginForm.password"}})],1),e("v-card-actions",[e("v-btn",{attrs:{large:"",color:"blue darken-1",text:""},on:{click:function(a){t.LoginForm.dialog=!1}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-close")]),t._v("关闭")],1),e("v-btn",{attrs:{large:"",color:"blue darken-1",text:"",loading:t.LoginForm.loading,disabled:t.LoginForm.loading},on:{click:function(a){t.LoginForm.loading=!0}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("登录")],1)],1)],1)],1),e("v-tab-item",[e("v-card-text",[e("v-text-field",{attrs:{label:"电子邮箱",filled:""}}),e("v-text-field",{attrs:{label:"用户名",filled:""}}),e("v-text-field",{attrs:{label:"密码",filled:"",type:"password"}}),e("v-text-field",{attrs:{label:"重复密码",filled:"",type:"password"}})],1),e("v-card-actions",[e("v-btn",{attrs:{large:"",color:"blue darken-1",text:""},on:{click:function(a){t.LoginForm.dialog=!1}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-close")]),t._v("关闭")],1),e("v-btn",{attrs:{large:"",color:"blue darken-1",text:""},on:{click:function(a){t.LoginForm.dialog=!1}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("注册")],1)],1)],1)],1)],1)],1)],1)},E=[],A=(e("b0c0"),{name:"LoginDialog",components:{},data:function(){return{LoginForm:{dialog:!1,show:!0,loading:!1,username:"",password:""},LoginMsg:{LoginSuccess:"登录成功",LoginError:"用户名或密码错误",ConnErr:"登陆失败"},SnackBar:{snackbar:!1,text:"",timeout:2e3}}},watch:{"LoginForm.loading":function(){this.LoginForm.loading&&this.Login(),this.LoginForm.loading=!1}},methods:{Login:function(){var t=this,a="http://panel.ultikits.com:8082/user/getToken",e="http://panel.ultikits.com:8082/user/";this.$http.post(a+"?username="+this.LoginForm.username+"&password="+this.LoginForm.password).then((function(t){var a=this;if(""!=t.data&&null!=t.data){var r=JSON.parse(JSON.stringify(t.data));this.$Login.login(r),this.$http.post(e+this.$store.state.user.id,{},{headers:{Authorization:"Bearer "+this.$store.state.user.token.access}}).then((function(t){var a=JSON.parse(JSON.stringify(t.data));this.$store.state.user.name=a.name,this.$store.state.user.status=!0}),(function(){a.$Login.clean(),a.$snackbar.Launch(a.LoginMsg.ConnErr)})),this.LoginForm.dialog=!this.$store.state.user.status,this.$store.state.user.status&&this.$snackbar.Launch(this.LoginMsg.LoginSuccess)}else this.$snackbar.Launch(this.LoginMsg.LoginError)}),(function(a){t.$snackbar.Launch(a.code+t.LoginMsg.ConnErr)}))}}}),M=A,z=e("169a"),D=e("71a3"),P=e("c671"),K=e("fe57"),q=e("8654"),H=Object(d["a"])(M,j,E,!1,null,"7284b425",null),J=H.exports;p()(H,{VBtn:f["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["c"],VDialog:z["a"],VIcon:y["a"],VTab:D["a"],VTabItem:P["a"],VTabs:K["a"],VTextField:q["a"]});var G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.$store.state.user.status?e("v-btn",{attrs:{rounded:"",color:"dark",dark:"",light:"",large:""}},[e("div",[t._v(" "+t._s(t.$store.state.user.name)+" "),e("br"),e("div",{staticClass:"text-caption"},[t._v(" 已登录 ")])]),e("v-icon",{attrs:{dark:"",right:""}},[t._v(" mdi-account-circle ")])],1):t._e()},R=[],Y={name:"UserDialog"},Q=Y,W=Object(d["a"])(Q,G,R,!1,null,"1ec5cd3d",null),X=W.exports;p()(W,{VBtn:f["a"],VIcon:y["a"]});var Z={name:"AppBar",components:{UserDialog:X,LoginDialog:J}},tt=Z,at=e("40dc"),et=e("5bc1"),rt=e("2fa4"),ot=e("71d9"),st=e("2a7f"),it=Object(d["a"])(tt,U,I,!1,null,"1fd5ab82",null),nt=it.exports;p()(it,{VAppBar:at["a"],VAppBarNavIcon:et["a"],VSpacer:rt["a"],VToolbar:ot["a"],VToolbarTitle:st["a"]});var lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-snackbar",{attrs:{timeout:t.$store.state.SnackBar.timeout},scopedSlots:t._u([{key:"action",fn:function(a){var r=a.attrs;return[e("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(a){t.$store.state.SnackBar.snackbar=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}]),model:{value:t.$store.state.SnackBar.snackbar,callback:function(a){t.$set(t.$store.state.SnackBar,"snackbar",a)},expression:"$store.state.SnackBar.snackbar"}},[t._v(" "+t._s(t.$store.state.SnackBar.text)+" ")])},ct=[],vt={name:"SnackBar",data:function(){return{}},methods:{}},ut=vt,dt=e("2db4"),mt=Object(d["a"])(ut,lt,ct,!1,null,"5ea2564a",null),pt=mt.exports;p()(mt,{VBtn:f["a"],VSnackbar:dt["a"]});var ft={name:"App",components:{SnackBar:pt,AppBar:nt,NavBar:F},data:function(){return{}},created:function(){console.log("欢迎来到UltiCloud!\n版本:0.0.1[BETA]"),console.log("前端作者:千沫qianmo\n后端作者: wisdomme")}},bt=ft,_t=(e("034f"),e("7496")),gt=e("a523"),ht=e("f6c4"),xt=Object(d["a"])(bt,o,s,!1,null,null,null),kt=xt.exports;p()(xt,{VApp:_t["a"],VContainer:gt["a"],VMain:ht["a"]});var yt=e("8c4f"),Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-card",{staticClass:"mx-auto"},[e("v-card-text",[e("div",[t._v("欢迎")]),e("p",{staticClass:"display-1 text--primary"},[t._v("欢迎来到全新的UltiCloud云平台!")]),e("p",[t._v("新手入门")]),e("div",{staticClass:"text--primary"},[t._v(" 为方便各位用户更好地使用UltiKits系列插件和管理服务器,特别开发了此平台!"),e("br"),t._v(" 目前还有许多功能正在努力开发中,点击下方了解更多! ")])]),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"teal accent-4"},on:{click:function(a){t.reveal=!0}}},[t._v("开发进程")])],1),e("v-expand-transition",[t.reveal?e("v-card",{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"}},[e("v-card-text",{staticClass:"pb-0"},[e("p",{staticClass:"display-1 text--primary"},[t._v("1.0.0Beta")]),e("p",[t._v("1.添加服务器"),e("br"),t._v("2.管理/购买授权"),e("br"),t._v("3.开发中"),e("br"),t._v("4.开发中"),e("br"),t._v("5.开发中")])]),e("v-card-actions",{staticClass:"pt-0"},[e("v-btn",{attrs:{text:"",color:"teal accent-4"},on:{click:function(a){t.reveal=!1}}},[t._v(" 关闭 ")])],1)],1):t._e()],1)],1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card",{staticClass:"mx-auto"},[e("v-card-text",[e("div",[t._v("UltiKits Unlimited")]),e("p",{staticClass:"display-1 text--primary"},[t._v(" 立即加入UltiKits会员! ")]),e("p",[t._v("享受无限制的高级功能")]),e("div",{staticClass:"text--primary"},[e("v-overlay",{attrs:{absolute:t.absolute,value:t.overlay,opacity:.8}},[e("p",{staticClass:"display-1 text--primary"},[t._v(" 请先登录 ")])]),e("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[t._v("会员: ")]),e("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[t._v("到期: ")])],1)]),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"deep-purple accent-4"}},[t._v(" 续费/购买会员 ")])],1)],1)],1)],1)},Ct=[],$t={name:"Home",components:{},data:function(){return{reveal:!1,absolute:!0,overlay:!0}}},wt=$t,Lt=(e("cccb"),e("cc20")),Bt=e("62ad"),Nt=e("0789"),St=e("a797"),Ot=e("0fd9"),Tt=Object(d["a"])(wt,Vt,Ct,!1,null,null,null),Ft=Tt.exports;p()(Tt,{VBtn:f["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["c"],VChip:Lt["a"],VCol:Bt["a"],VExpandTransition:Nt["a"],VOverlay:St["a"],VRow:Ot["a"]});var Ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-alert",{attrs:{text:"",color:"info"}},[e("h3",{staticClass:"headline"},[t._v("免费体验UltiKits会员!")]),e("div",[t._v("每一个新用户都可以免费领取3天的UltiKits的Pro会员!"),e("br"),t._v("不试试,如何知道好不好?")]),e("v-divider",{staticClass:"my-4 info",staticStyle:{opacity:"0.22"}}),e("v-row",{attrs:{align:"center","no-gutters":""}},[e("v-col",{staticClass:"grow"},[t._v(" 需要通过邮箱验证才能领取"),e("br"),t._v("已是UltiKits会员不可领取 ")]),e("v-spacer"),e("v-col",{staticClass:"shrink"},[e("v-btn",{attrs:{color:"info",outlined:""}},[t._v("点击领取 (*3天会员)")])],1)],1)],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-toolbar",{attrs:{flat:"",color:"deep-orange",dark:""}},[e("v-toolbar-title",[t._v("我的会员"),e("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[t._v("普通会员 到期: 无")])],1)],1),e("v-tabs",{attrs:{vertical:""}},[e("v-tab",[e("v-icon",{attrs:{left:""}},[t._v("mdi-cart")]),t._v("购买/续费")],1),e("v-tab",[e("v-icon",{attrs:{left:""}},[t._v("mdi-barcode-scan")]),t._v("兑换")],1),e("v-tab",[e("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-up-bold-hexagon-outline")]),t._v("升级")],1),e("v-tab-item",[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("p",[t._v("选择时长")]),e("v-btn-toggle",{attrs:{tile:"",color:"deep-purple accent-3",group:""},model:{value:t.time,callback:function(a){t.time=a},expression:"time"}},[e("v-btn",{attrs:{value:"30"}},[t._v("30天")]),e("v-btn",{attrs:{value:"90"}},[t._v("90天")]),e("v-btn",{attrs:{value:"180"}},[t._v("180天")]),e("v-btn",{attrs:{value:"365"}},[t._v("365天")]),e("v-btn",{attrs:{value:"permanent"}},[t._v("永久(无到期时间)")])],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("p",[t._v("优惠&抵扣")])]),e("v-col",{attrs:{cols:"6"}},[e("v-text-field",{attrs:{label:"在这里输入您的优惠码",filled:""}})],1),e("v-col",{attrs:{cols:"6"}},[e("v-switch",{attrs:{label:"使用余额抵扣",inset:""},model:{value:t.balance,callback:function(a){t.balance=a},expression:"balance"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h3",[t._v("总计: "+t._s(t.total+" CNY")+" "),e("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[t._v("折扣 - "+t._s(t.discount)+" CNY")])],1)])],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("p",[t._v("支付方式")]),e("v-btn-toggle",{attrs:{tile:"",color:"teal accent-3",group:""},model:{value:t.payment,callback:function(a){t.payment=a},expression:"payment"}},[e("v-btn",{attrs:{value:"WechatPay"}},[t._v("微信支付")]),e("v-btn",{attrs:{value:"Alipay"}},[t._v("支付宝支付")])],1),e("v-btn",{attrs:{color:"primary",elevation:"2",block:"",disabled:!t.time||!t.payment}},[t._v(t._s(t.buy)+t._s(t.payment))])],1)],1)],1)],1)],1),e("v-tab-item",[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("p",[t._v("使用兑换码")]),e("v-text-field",{attrs:{label:"在这里输入您的兑换码",filled:""}}),e("v-btn",{attrs:{color:"primary",elevation:"2",block:""}},[t._v("兑换")])],1)],1)],1)],1)],1),e("v-tab-item",[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h3",{staticClass:"headline"},[t._v("现可授权服务器数: 0 "),e("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[t._v("已授权: 0")])],1)])],1),e("v-divider"),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-btn",{attrs:{color:"primary",elevation:"2",block:"",disabled:""}},[t._v("请先成为会员后再升级")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},It=[],jt={name:"Vip",data:function(){return{time:null,payment:null,balance:!0,total:NaN,discount:0,buy:"购买"}},watch:{time:function(){switch(this.time){case"30":this.total=20;break;case"90":this.total=60;break;case"180":this.total=120;break;case"365":this.total=240;break;default:this.total=NaN}}}},Et=jt,At=e("0798"),Mt=e("a609"),zt=e("ce7e"),Dt=e("b73d"),Pt=Object(d["a"])(Et,Ut,It,!1,null,"c1da31be",null),Kt=Pt.exports;p()(Pt,{VAlert:At["a"],VBtn:f["a"],VBtnToggle:Mt["a"],VCard:b["a"],VCardText:_["c"],VChip:Lt["a"],VCol:Bt["a"],VDivider:zt["a"],VIcon:y["a"],VRow:Ot["a"],VSpacer:rt["a"],VSwitch:Dt["a"],VTab:D["a"],VTabItem:P["a"],VTabs:K["a"],VTextField:q["a"],VToolbar:ot["a"],VToolbarTitle:st["a"]});var qt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",{attrs:{elevation:"5"}},[e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"10"}},[e("h1",[t._v("授权管理")])]),e("v-col",{attrs:{cols:"2"}},[e("v-btn",{staticClass:"float-right",attrs:{color:"primary",text:""}},[t._v("添加授权规则")])],1)],1)],1)],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-5",attrs:{headers:t.headers,items:t.items,"item-key":"name",search:t.search,"custom-filter":t.filterOnlyCapsText,loading:"","loading-text":"载入数据中... 请稍后"},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{staticClass:"mx-4",attrs:{label:"搜索(服务器名称)",outlined:""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)]},proxy:!0},{key:"body.append",fn:function(){return[e("tr",[e("td"),e("td",{attrs:{colspan:"4"}})])]},proxy:!0},{key:"item.action",fn:function(a){return[e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1)]}}])})],1)],1)],1)},Ht=[],Jt=(e("c975"),e("d3b7"),e("25f0"),{name:"Auth",data:function(){return{search:"",items:[{name:"test",plugin:"UltiTools",exp:"2021-12-30",action:"修改"}]}},computed:{headers:function(){return[{text:"服务器名称",value:"name"},{text:"授权插件",value:"plugin"},{text:"到期时间",value:"exp"},{text:"操作",sortable:!1,value:"action"}]}},methods:{filterOnlyCapsText:function(t,a){return null!=t&&null!=a&&"string"===typeof t&&-1!==t.toString().toLocaleUpperCase().indexOf(a)}}}),Gt=Jt,Rt=e("8fea"),Yt=Object(d["a"])(Gt,qt,Ht,!1,null,"d2de0ade",null),Qt=Yt.exports;p()(Yt,{VBtn:f["a"],VCard:b["a"],VCardText:_["c"],VCol:Bt["a"],VDataTable:Rt["a"],VIcon:y["a"],VRow:Ot["a"],VTextField:q["a"]});var Wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h1",{staticClass:"text-center"},[t._v("制作人员")])])],1),e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-card",{attrs:{color:"teal",dark:""}},[e("v-card-title",{staticClass:"headline"},[t._v(" qianmo千沫 ")]),e("v-card-subtitle",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-chip",{attrs:{color:"primary"}},[t._v("前端")])],1)],1)],1),e("v-card-text",[t._v("其实是一个前端废物......也就只能写一写这种没有技术含量的东西了")]),e("v-card-actions",[e("v-btn",{attrs:{text:""}},[t._v("GitHub主页")]),e("v-btn",{attrs:{text:""}},[t._v("McBBS主页")])],1)],1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card",{attrs:{color:"pink",dark:""}},[e("v-card-title",{staticClass:"headline"},[t._v(" wisdomme ")]),e("v-card-subtitle",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-chip",{attrs:{color:"primary"}},[t._v("后端")])],1)],1)],1),e("v-card-text",[t._v("UltiKits系列插件作者")]),e("v-card-actions",[e("v-btn",{attrs:{text:""}},[t._v("GitHub主页")]),e("v-btn",{attrs:{text:""}},[t._v("McBBS主页")])],1)],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("h1",{staticClass:"text-center"},[t._v("？？？？？还有谁呢？？？？？")])])],1)],1)],1)},Xt=[],Zt={name:"Maker"},ta=Zt,aa=Object(d["a"])(ta,Wt,Xt,!1,null,"6166c06e",null),ea=aa.exports;p()(aa,{VBtn:f["a"],VCard:b["a"],VCardActions:_["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VChip:Lt["a"],VCol:Bt["a"],VRow:Ot["a"]}),r["default"].use(yt["a"]);var ra=[{path:"/",name:"Home",component:Ft},{path:"/vip",name:"Vip",component:Kt},{path:"/auth",name:"Auth",component:Qt},{path:"/maker",name:"Maker",component:ea}],oa=new yt["a"]({routes:ra}),sa=oa,ia=e("f309"),na=e("5025"),la=e.n(na),ca=e("da5b"),va=e.n(ca);r["default"].use(ia["a"]);var ua=new ia["a"]({theme:{dark:!0},lang:{locale:{zhHans:la.a,en:va.a},current:"zhHans"}}),da=e("77a0"),ma=e.n(da),pa=(e("4160"),e("ac1f"),e("466d"),e("159b"),e("ddb0"),e("a925"));function fa(){var t=e("49f8"),a={};return t.keys().forEach((function(e){var r=e.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];a[o]=t(e)}})),a}r["default"].use(pa["a"]);var ba=new pa["a"]({locale:"zh_CN",fallbackLocale:"zh_CN",messages:fa()}),_a=e("2f62"),ga=e("28dd");r["default"].use(_a["a"]),r["default"].use(ga["a"]);var ha=new _a["a"].Store({state:{SnackBar:{timeout:3e3,text:"",snackbar:!1},user:{token:{access:"",refresh:""},id:0,status:!1,name:""},NavBar:{drawer:!0,group:null},LoginForm:{username:"",password:""},RegForm:{username:"",password:"",email:""},NavItems:{title1:"管理",title2:"UltiKits系列",title3:"关于",title4:"插件",title5:"常见问题&修复",items1:[{text:"首页",icon:"mdi-home",url:"/"},{text:"会员",icon:"mdi-chess-king",url:"/vip"},{text:"使用帮助",icon:"mdi-help-box",url:"/help"}],items2:[{text:"服务器",icon:"mdi-server",url:"/server"},{text:"授权",icon:"mdi-key",url:"/auth"}],items3:[{text:"UltiTools",icon:"mdi-tools",ver:"4.2.3",url:"/tools"},{text:"UltiCore",icon:"mdi-codepen",ver:"1.1.3",url:"/core"},{text:"UltiEconomy",icon:"mdi-cash-usd",ver:"2.6.4",url:"/economy"},{text:"UltiLevel",icon:"mdi-anvil",ver:"2.1.2",url:"/level"}],items4:[{text:"自主排错&修复",icon:"mdi-auto-fix",url:"/fix"},{text:"配置文件",icon:"mdi-file-cog",url:"/config"},{text:"YAML语法快速上手",icon:"mdi-file-code",url:"/yaml"}],items5:[{text:"制作人员",icon:"mdi-account-multiple",url:"/maker"},{text:"更新记录",icon:"mdi-update",url:"/update"},{text:"官方QQ群",icon:"mdi-qqchat",url:"/qq"},{text:"BUG反馈",icon:"mdi-alert-decagram-outline",url:"/issue"}]}},mutations:{},actions:{},modules:{}});function xa(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;ha.state.SnackBar.text=t,ha.state.SnackBar.timeout=a,ha.state.SnackBar.snackbar=!0}var ka={Launch:xa};function ya(t){ha.state.user.token.access=t.access_token,ha.state.user.token.access=t.refresh_token,ha.state.user.id=t.id}function Va(){ha.state.user.token.access="",ha.state.user.token.access="",ha.state.user.id="",ha.state.user.status=!1}var Ca={login:ya,clean:Va};r["default"].config.productionTip=!1,r["default"].prototype.$snackbar=ka,r["default"].prototype.$Login=Ca,r["default"].use(ga["a"]),r["default"].use(ma.a,{ops:{vuescroll:{sizeStrategy:"number"},scrollPanel:{scrollingX:!1},rail:{gutterOfSide:"0px"},bar:{background:"#cecece",opacity:.5}}}),new r["default"]({router:sa,vuetify:ua,i18n:ba,store:ha,VueResource:ga["a"],render:function(t){return t(kt)}}).$mount("#app")},"5ced":function(t,a,e){},"752b":function(t){t.exports=JSON.parse('{"Home":"主页","UltiCloud":"UltiCloud","message":"hello i18n !!"}')},"85ec":function(t,a,e){},cccb:function(t,a,e){"use strict";e("5ced")}});
//# sourceMappingURL=app.a9ed2e03.js.map