(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6452e2"],{"6bac":function(t,e,i){},"8b48":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter  justify-center login-page"},[l("vs-card",{staticClass:" login-navbar",staticStyle:{"margin-top":"-5px","margin-bottom":"0"}},[l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-3/5"},[l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-1/4 "},[l("img",{attrs:{src:i("a4ef")}})]),l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-1/2 col-lg text-center border border-dark mt-8",staticStyle:{"text-align":"center"}},[l("div",{staticStyle:{"border-bottom":"2px solid black","line-height":"1.2 !important"}},[l("h4",{staticClass:"font-bold"},[t._v("\n              KILITECH ESTRO BIOTECH PLC\n              ")])])])])]),l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-2/5"},[l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-2/5"},[l("span",{staticStyle:{color:"white"}},[t._v(t._s(t.$t("Email")))]),l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"email",icon:"icon icon-mail","icon-pack":"feather"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),l("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("email")))])],1),l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-1/3"},[l("span",{staticStyle:{color:"white"}},[t._v(t._s(t.$t("Password")))]),l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password",icon:"icon icon-lock","icon-pack":"feather"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),l("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("password")))])],1),l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-1/4 mt-5"},[l("vs-button",{on:{click:t.login}},[t._v(t._s(t.$t("Login")))])],1)]),l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-1/3 mt-2 ml-4"},[l("router-link",{staticStyle:{color:"white"},attrs:{to:"/pages/forgot-password"}},[t._v(t._s(t.$t("Forgot Password?")))])],1),l("div",{staticClass:"vx-col xs:w-full sm:w-full md:w-full lg:w-1/3 mt-2 ml-12"},[l("router-link",{staticStyle:{color:"white"},attrs:{to:"/pages/register"}},[t._v("New? "+t._s(t.$t("Signup")))])],1)])])])]),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"vx-col"},[l("div",{staticClass:"vx-col hidden lg:block lg:w-full md:w-full sm:w-full"},[l("img",{staticStyle:{height:"540px",width:"1400px"},attrs:{src:i("9a00")}})])])}],a=i("41cb"),o=i("7bb1"),r={custom:{password:{required:"Please enter password",alpha:"Please enter password"},email:{required:"Please enter email",alpha:"Please enter email"}}};o["a"].localize("en",r);var n={data:function(){return{email:"",password:"",confirmedEmail:"",verificationtoken:"",popupActive:!1,logedin:!1}},methods:{resend:function(){this.$http.post("/verify/resend/"+this.email).then((function(t){this.$vs.notify({title:this.$t("Resend"),text:this.$t("Verification token sent agian"),iconPack:"feather",icon:"icon-alert-circle",color:"success"})}))},updateLocale:function(t){this.$i18n.locale=t,localStorage.setItem("locale",t)},login:function(){var t=this;this.$validator.validateAll().then((function(e){if(e){t.$vs.loading();var i={userDetails:{email:t.email,password:t.password},notify:t.$vs.notify,closeAnimation:t.$vs.loading.close};t.$store.dispatch("auth/loginAttempt",i)}}))},registerUser:function(){this.$router.push("/pages/register")}},computed:{isNew:function(){return this.confirmedEmail=this.$store.state.confirm.email,""!=this.$store.state.confirm.email&&(this.confirmedEmail=this.$store.state.confirm.email,this.email=this.confirmedEmail,!0)},validateForm:function(){return!this.errors.any()&&""!=this.email&&""!=this.password},getCurrentLocaleData:function(){if(null==localStorage.getItem("locale")){var t=this.$i18n.locale;if("en"==t)return{flag:"us",lang:"English"};if("am"==t)return{flag:"am",lang:"Amharic"}}else{var e=localStorage.getItem("locale");if("en"==e)return{flag:"us",lang:"English"};if("am"==e)return{flag:"am",lang:"Amharic"}}}},created:function(){this.$router.query&&""!=this.$router.query.email&&(this.email=this.$router.query.email),null!=localStorage.getItem("userId")&&null!=localStorage.getItem("accessToken")&&(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),a["a"].push("/pages/eCommerce/shop"))}},c=n,u=(i("f499"),i("2877")),m=Object(u["a"])(c,l,s,!1,null,null,null);e["default"]=m.exports},"9a00":function(t,e,i){t.exports=i.p+"img/login.2a9afe65.jpg"},a4ef:function(t,e){t.exports="data:image/png;base64,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"},f499:function(t,e,i){"use strict";i("6bac")}}]);
//# sourceMappingURL=chunk-5a6452e2.f867ea7d.js.map