"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6870],{6870:(O,f,d)=>{d.r(f),d.d(f,{AuthModule:()=>Q});var g=d(9808),s=d(2382),c=d(520),m=d(7979),e=d(1223);let _=(()=>{class t{constructor(n){this.http=n,this.endPoint="http://localhost:64320/"}login(n,o){return this.http.post(this.endPoint+"login/",{email:n,mdp:o})}create(n,o,i,a,l){return this.http.post(this.endPoint+"users/",{nom:n,prenom:o,email:i,mdp:a,mdp1:l})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(c.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=d(9643);function h(t,r){1&t&&(e.TgZ(0,"div",16),e._uU(1," Email is required! "),e.qZA())}function v(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function Z(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function C(t,r){if(1&t&&(e.TgZ(0,"div",16),e.YNc(1,v,2,0,"div",1),e.YNc(2,Z,2,0,"div",1),e.qZA()),2&t){e.oxw();const n=e.MAs(14);e.xp6(1),e.Q6J("ngIf",n.errors.required),e.xp6(1),e.Q6J("ngIf",n.errors.minlength)}}function T(t,r){if(1&t&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.hij(" Login failed: ",n.errorMessage," ")}}function A(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"div",2),e.TgZ(1,"div",3),e.TgZ(2,"form",4,5),e.NdJ("ngSubmit",function(){e.CHM(n);const i=e.MAs(3),a=e.oxw();return i.form.valid&&a.onSubmit()}),e.TgZ(4,"div",6),e.TgZ(5,"label",7),e._uU(6,"Email"),e.qZA(),e.TgZ(7,"input",8,9),e.NdJ("ngModelChange",function(i){return e.CHM(n),e.oxw().form.email=i}),e.qZA(),e.YNc(9,h,2,0,"div",10),e.qZA(),e.TgZ(10,"div",6),e.TgZ(11,"label",11),e._uU(12,"Password"),e.qZA(),e.TgZ(13,"input",12,13),e.NdJ("ngModelChange",function(i){return e.CHM(n),e.oxw().form.password=i}),e.qZA(),e.YNc(15,C,3,2,"div",10),e.TgZ(16,"div",6),e.YNc(17,T,2,1,"div",10),e.qZA(),e.qZA(),e.TgZ(18,"div",6),e.TgZ(19,"button",14),e._uU(20," Login "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"button",15),e._uU(22," Create account "),e.qZA(),e.qZA(),e.qZA()}if(2&t){const n=e.MAs(3),o=e.MAs(8),i=e.MAs(14),a=e.oxw();e.xp6(7),e.Q6J("ngModel",a.form.email),e.xp6(2),e.Q6J("ngIf",o.errors&&n.submitted),e.xp6(4),e.Q6J("ngModel",a.form.password),e.xp6(2),e.Q6J("ngIf",i.errors&&n.submitted),e.xp6(2),e.Q6J("ngIf",n.submitted&&a.isLoginFailed)}}function M(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Vous \xeates d\xe9j\xe0 connect\xe9 !"),e.qZA())}function w(t,r){1&t&&(e.TgZ(0,"div",27),e._uU(1," Name is required! "),e.qZA())}function b(t,r){1&t&&(e.TgZ(0,"div",27),e._uU(1," First name is required! "),e.qZA())}function J(t,r){1&t&&(e.TgZ(0,"div",27),e._uU(1," Email is required! "),e.qZA())}function N(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function y(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1," Password must be at least 6 characters "),e.qZA())}function I(t,r){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,N,2,0,"div",28),e.YNc(2,y,2,0,"div",28),e.qZA()),2&t){e.oxw();const n=e.MAs(29);e.xp6(1),e.Q6J("ngIf",n.errors.required),e.xp6(1),e.Q6J("ngIf",n.errors.minlength)}}function L(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Please confirm password"),e.qZA())}function S(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Please confirm required"),e.qZA())}function Y(t,r){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,L,2,0,"div",28),e.YNc(2,S,2,0,"div",28),e.qZA()),2&t){e.oxw();const n=e.MAs(35);e.xp6(1),e.Q6J("ngIf",n.errors.required),e.xp6(1),e.Q6J("ngIf",n)}}const U=[{path:"login",component:(()=>{class t{constructor(n,o,i,a){this.authService=n,this.tokenService=o,this.router=i,this.http=a,this.form={email:null,password:null},this.isLoggedIn=!1,this.isLoginFailed=!1,this.errorMessage=""}ngOnInit(){this.subscription=this.tokenService.currentLog.subscribe(n=>this.isLoggedIn=n)}onSubmit(){const{email:n,password:o}=this.form;this.authService.login(n,o).subscribe({next:i=>{this.tokenService.saveToken(i.access_token),this.tokenService.changeLog(!0),this.router.navigate(["/accueil"])},error:i=>{this.isLoginFailed=!0,this.errorMessage=i.error.message}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_),e.Y36(p.B),e.Y36(m.F0),e.Y36(c.eN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:2,vars:2,consts:[["class","col-md-12",4,"ngIf"],[4,"ngIf"],[1,"col-md-12"],[1,"card","card-container",2,"width","350px","margin","auto","padding","20px"],["name","form","novalidate","",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","email"],["type","text","name","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["class","alert alert-danger","role","alert",4,"ngIf"],["for","password"],["type","password","name","password","required","","minlength","5",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],[1,"btn","btn-primary","btn-block"],["routerLink","/auth/create","routerLinkActive","active",1,"btn","btn-primary","btn-block"],["role","alert",1,"alert","alert-danger"]],template:function(n,o){1&n&&(e.YNc(0,A,23,5,"div",0),e.YNc(1,M,2,0,"div",1)),2&n&&(e.Q6J("ngIf",!o.isLoggedIn),e.xp6(1),e.Q6J("ngIf",o.isLoggedIn))},directives:[g.O5,s._Y,s.JL,s.F,s.Fj,s.Q7,s.JJ,s.On,s.wO,m.rH,m.Od],styles:[".col-md-12[_ngcontent-%COMP%]{margin:10% auto}"]}),t})()},{path:"logout",component:(()=>{class t{constructor(n){this.tokenService=n,this.isLoggedIn=!1}ngOnInit(){this.tokenService.destroyToken(),this.tokenService.changeLog(!1)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-logout"]],decls:4,vars:0,consts:[["routerLink","/home","routerLinkActive","active"]],template:function(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"Vous \xeates d\xe9connect\xe9"),e.qZA(),e.TgZ(2,"a",0),e._uU(3,"Retour vers l'accueil"),e.qZA())},directives:[m.yS,m.Od],styles:[""]}),t})()},{path:"create",component:(()=>{class t{constructor(n,o,i,a){this.authService=n,this.tokenService=o,this.router=i,this.http=a,this.form={name:null,firstName:null,email:null,password:null,password1:null}}ngOnInit(){}onSubmit(){const{name:n,firstName:o,email:i,password:a,password1:l}=this.form;this.authService.create(n,o,i,a,l).subscribe({next:u=>{this.router.navigate(["/auth/login"])},error:u=>console.error(u)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_),e.Y36(p.B),e.Y36(m.F0),e.Y36(c.eN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create"]],decls:43,vars:10,consts:[[1,"col-md-12"],[1,"card","card-container",2,"width","400px","margin","auto","padding","20px"],["name","form","novalidate","",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","Name"],["type","text","id","Name","placeholder","Name","required","","name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],["class","alert alert-danger","role","alert",4,"ngIf"],["for","FirstName"],["type","text","id","FirstName","placeholder","First name","required","","name","firstName",1,"form-control",3,"ngModel","ngModelChange"],["firstName","ngModel"],[2,"display","flex","flex-direction","row","align-items","baseline"],["for","exampleInputEmail1"],["id","emailHelp",1,"form-text","text-muted"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter email","name","email","required","","name","email",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["for","exampleInputPassword"],["type","password","id","exampleInputPassword","placeholder","Password","required","","minlength","5","name","password",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1","placeholder","Password","required","","minlength","5","name","password1",1,"form-control",3,"ngModel","ngModelChange"],["password1","ngModel"],[1,"form-group","form-check"],["type","checkbox","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],["role","alert",1,"alert","alert-danger"],[4,"ngIf"]],template:function(n,o){if(1&n){const i=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"form",2,3),e.NdJ("ngSubmit",function(){return e.CHM(i),e.MAs(3).form.valid&&o.onSubmit()}),e.TgZ(4,"div",4),e.TgZ(5,"label",5),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"input",6,7),e.NdJ("ngModelChange",function(l){return o.form.name=l}),e.qZA(),e.YNc(9,w,2,0,"div",8),e.qZA(),e.TgZ(10,"div",4),e.TgZ(11,"label",9),e._uU(12,"First name"),e.qZA(),e.TgZ(13,"input",10,11),e.NdJ("ngModelChange",function(l){return o.form.firstName=l}),e.qZA(),e.YNc(15,b,2,0,"div",8),e.qZA(),e.TgZ(16,"div",4),e.TgZ(17,"div",12),e.TgZ(18,"label",13),e._uU(19,"Email address"),e.qZA(),e.TgZ(20,"small",14),e._uU(21,"We'll never share your email with anyone."),e.qZA(),e.qZA(),e.TgZ(22,"input",15,16),e.NdJ("ngModelChange",function(l){return o.form.email=l}),e.qZA(),e.YNc(24,J,2,0,"div",8),e.qZA(),e.TgZ(25,"div",4),e.TgZ(26,"label",17),e._uU(27,"Password"),e.qZA(),e.TgZ(28,"input",18,19),e.NdJ("ngModelChange",function(l){return o.form.password=l}),e.qZA(),e.YNc(30,I,3,2,"div",8),e.qZA(),e.TgZ(31,"div",4),e.TgZ(32,"label",20),e._uU(33,"Confirm password"),e.qZA(),e.TgZ(34,"input",21,22),e.NdJ("ngModelChange",function(l){return o.form.password1=l}),e.qZA(),e.YNc(36,Y,3,2,"div",8),e.qZA(),e.TgZ(37,"div",23),e._UZ(38,"input",24),e.TgZ(39,"label",25),e._uU(40,"I consent I didn't read the privacy policy."),e.qZA(),e.qZA(),e.TgZ(41,"button",26),e._uU(42,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const i=e.MAs(3),a=e.MAs(8),l=e.MAs(14),u=e.MAs(23),P=e.MAs(29),k=e.MAs(35);e.xp6(7),e.Q6J("ngModel",o.form.name),e.xp6(2),e.Q6J("ngIf",a.errors&&i.submitted),e.xp6(4),e.Q6J("ngModel",o.form.firstName),e.xp6(2),e.Q6J("ngIf",l.errors&&i.submitted),e.xp6(7),e.Q6J("ngModel",o.form.email),e.xp6(2),e.Q6J("ngIf",u.errors&&i.submitted),e.xp6(4),e.Q6J("ngModel",o.form.password),e.xp6(2),e.Q6J("ngIf",P.errors&&i.submitted),e.xp6(4),e.Q6J("ngModel",o.form.password1),e.xp6(2),e.Q6J("ngIf",k.errors&&i.submitted)}},directives:[s._Y,s.JL,s.F,s.Fj,s.Q7,s.JJ,s.On,g.O5,s.wO],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch}small[_ngcontent-%COMP%]{font-size:70%;margin:0 0 .5rem .5rem;align-content:baseline}input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:30em}.col-md-12[_ngcontent-%COMP%]{margin:20px auto}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;flex-wrap:wrap}"]}),t})()},{path:"**",redirectTo:"login",pathMatch:"full"}];let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(U)],m.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,F,s.u5,c.JF]]}),t})()}}]);