(function(){"use strict";var a={204:function(a,s,t){var o=t(963),e=t(119),r=t(252);const n={class:"home"},i={class:"container container1 h-100 text-center"},l=(0,r.uE)('<div class="row"><div class="col"><div class="row"><div class="col"><h1 class="tituloPortada text-center mt-5 tituloPortada">PETS APP</h1></div></div></div></div><div class="row"><div class="col"><div class="row"><div class="col"><img class="my-4 w-75" src="https://st3.depositphotos.com/1177973/13992/i/600/depositphotos_139926842-stock-photo-group-of-cute-pets.jpg" alt=""></div></div></div></div>',2),c=(0,r._)("button",{class:"my-4 px-5 fs-2 btn-dark rounded"},"Sign in",-1),u={class:"fs-6 mt-1 mb-0 pb-5"},d=(0,r.Uk)("¿No tienes cuenta? "),m=(0,r._)("b",null,"Regístrate",-1);function p(a,s,t,o,e,p){const v=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",i,[l,(0,r.Wm)(v,{class:"text-dark nav-link",to:"/formulario-login"},{default:(0,r.w5)((()=>[c])),_:1}),(0,r._)("p",u,[(0,r.Wm)(v,{class:"text-dark nav-link",to:"/form-register"},{default:(0,r.w5)((()=>[d,m])),_:1})])])])}var v={name:"HomeView",components:{}},f=t(744);const g=(0,f.Z)(v,[["render",p]]);var b=g;const h=(0,r._)("nav",{class:"mb-5 navbar navbar-light bg-warning d-flex p-4 justify-content-center"},[(0,r._)("h3",{class:"my-4 mx-1"},"Regístrate para poder añadir tu mascota y acceder a todas nuestras funcionalidades.")],-1);function _(a,s,t,o,e,n){const i=(0,r.up)("menu-registrado"),l=(0,r.up)("formulario-registro");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r._)("div",null,[h,(0,r.Wm)(l,{onAddPersona:n.postUsuario},null,8,["onAddPersona"])])],64)}const w=a=>((0,r.dD)("data-v-4b0f1c3f"),a=a(),(0,r.Cn)(),a),y={id:"formulario-persona"},k={class:"container shadow p-3 mb-5 bg-body rounded mt-5"},x={class:"row"},U={class:"col-md-4"},S={class:"form-group"},j=w((()=>(0,r._)("label",null,"Nombre",-1))),A={class:"col-md-4"},O={class:"form-group"},W=w((()=>(0,r._)("label",null,"Usuario",-1))),D={class:"col-md-4"},N={class:"form-group"},T=w((()=>(0,r._)("label",null,"Contraseña",-1))),M={class:"row"},C={class:"col-md-4"},E={class:"form-group"};function I(a,s,t,e,n,i){return(0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("form",{onSubmit:s[4]||(s[4]=(0,o.iM)(((...a)=>i.enviarFormulario&&i.enviarFormulario(...a)),["prevent"]))},[(0,r._)("div",k,[(0,r._)("div",x,[(0,r._)("div",U,[(0,r._)("div",S,[j,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>n.persona.nombre=a),type:"text",class:"form-control"},null,512),[[o.nr,n.persona.nombre]])])]),(0,r._)("div",A,[(0,r._)("div",O,[W,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.persona.user=a),type:"text",class:"form-control"},null,512),[[o.nr,n.persona.user]])])]),(0,r._)("div",D,[(0,r._)("div",N,[T,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>n.persona.pass=a),type:"password",class:"form-control"},null,512),[[o.nr,n.persona.pass]])])])]),(0,r._)("div",M,[(0,r._)("div",C,[(0,r._)("div",E,[(0,r._)("button",{onClick:s[3]||(s[3]=(...a)=>i.showAlert&&i.showAlert(...a)),class:"btn btn-primary"},"Regístrame")])])])])],32)])}var P={name:"formulario-persona",data(){return{persona:{nombre:"",user:"",pass:""}}},methods:{enviarFormulario(){this.$emit("add-persona",this.persona),this.$router.push("/formulario-login")},showAlert(){this.$swal("Te has registrado correctamente")}}};const F=(0,f.Z)(P,[["render",I],["__scopeId","data-v-4b0f1c3f"]]);var $=F,Z=t(455),R=t.n(Z);const V={class:"navbar p-4 navbar-expand-lg navbar-light bg-light mb-5"},J=(0,r.Uk)("PETS APP "),z=(0,r._)("i",{class:"fs-2 fa-solid fa-paw"},null,-1),B=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),H={class:"collapse navbar-collapse",id:"navbarNav"},Y={class:"navbar-nav"},L={class:"nav-item"},K=(0,r.Uk)("Home"),G={class:"nav-item"},q=(0,r.Uk)("Iniciar sesión"),Q={class:"nav-item"},X=(0,r.Uk)("Ver mascotas");function aa(a,s,t,o,e,n){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",V,[(0,r.Wm)(i,{class:"navbar-brand",to:"/"},{default:(0,r.w5)((()=>[J,z])),_:1}),B,(0,r._)("div",H,[(0,r._)("ul",Y,[(0,r._)("li",L,[(0,r.Wm)(i,{class:"nav-link active",to:"/"},{default:(0,r.w5)((()=>[K])),_:1})]),(0,r._)("li",G,[(0,r.Wm)(i,{class:"nav-link",to:"/formulario-login"},{default:(0,r.w5)((()=>[q])),_:1})]),(0,r._)("li",Q,[(0,r.Wm)(i,{class:"nav-link",to:"/tabla-mascotas"},{default:(0,r.w5)((()=>[X])),_:1})])])])])}var sa={name:"menu-registrado"};const ta=(0,f.Z)(sa,[["render",aa]]);var oa=ta,ea={components:{FormularioRegistro:$,MenuRegistrado:oa},methods:{async postUsuario(a){try{const s=await fetch("https://pets-web-app.herokuapp.com/api/registro",{method:"POST",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF-8"}}),t=await s.json();console.log(t),R().fire("Bienvenido !","Te has registrado correctamente","success"),this.$router.push("/formulario-login")}catch(s){console.error(s)}}}};const ra=(0,f.Z)(ea,[["render",_]]);var na=ra;const ia=(0,r._)("nav",{class:"mb-5 navbar navbar-light bg-warning d-flex p-4 justify-content-center"},[(0,r._)("h1",null,"Rellena el formulario con los datos de tu mascota !")],-1);function la(a,s,t,o,e,n){const i=(0,r.up)("menu-registrado"),l=(0,r.up)("formulario-mascota");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),ia,(0,r.Wm)(l,{onAddPet:n.postMascota},null,8,["onAddPet"])])}const ca=a=>((0,r.dD)("data-v-5c15be4d"),a=a(),(0,r.Cn)(),a),ua={id:"formulario-mascota"},da={class:"container shadow p-3 mb-5 bg-body rounded"},ma={class:"row"},pa={class:"col-md-4"},va={class:"form-group"},fa=ca((()=>(0,r._)("label",null,"Nombre",-1))),ga={class:"col-md-4"},ba={class:"form-group"},ha=ca((()=>(0,r._)("label",null,"Descripción",-1))),_a=ca((()=>(0,r._)("div",{class:"col-md-4"},[(0,r._)("div",{class:"form-group"},[(0,r._)("label",null,"Foto"),(0,r._)("input",{type:"file"})])],-1))),wa={class:"row"},ya={class:"col-md-4"},ka={class:"form-group"};function xa(a,s,t,e,n,i){return(0,r.wg)(),(0,r.iD)("div",ua,[(0,r._)("form",{onSubmit:s[3]||(s[3]=(0,o.iM)(((...a)=>i.enviarFormulario&&i.enviarFormulario(...a)),["prevent"]))},[(0,r._)("div",da,[(0,r._)("div",ma,[(0,r._)("div",pa,[(0,r._)("div",va,[fa,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>n.mascota.nombre=a),type:"text",class:"form-control"},null,512),[[o.nr,n.mascota.nombre]])])]),(0,r._)("div",ga,[(0,r._)("div",ba,[ha,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.mascota.descripcion=a),type:"text",class:"form-control"},null,512),[[o.nr,n.mascota.descripcion]])])]),_a]),(0,r._)("div",wa,[(0,r._)("div",ya,[(0,r._)("div",ka,[(0,r._)("button",{onClick:s[2]||(s[2]=(...a)=>i.showAlert&&i.showAlert(...a)),class:"btn btn-primary"},"Añadir mascota")])])])])],32)])}var Ua={name:"formulario-mascota",data(){return{mascota:{nombre:"",descripcion:"",foto:""}}},methods:{enviarFormulario(){this.$emit("add-pet",this.mascota)},showAlert(){this.$swal("Tu mascota ha sido añadida a nuestra base de datos con éxito")}}};const Sa=(0,f.Z)(Ua,[["render",xa],["__scopeId","data-v-5c15be4d"]]);var ja=Sa;const Aa=JSON.parse(localStorage.getItem("token"));var Oa={components:{FormularioMascota:ja,MenuRegistrado:oa},methods:{async postMascota(a){try{const s=await fetch("https://pets-web-app.herokuapp.com/api/mascotas",{method:"POST",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:`Bearer ${Aa}`}}),t=await s.json();console.log(t),R().fire("Perfecto !","Tu mascota ha sido añadido a nuestra base de datos con éxito","success"),this.$router.push("/tabla-mascotas")}catch(s){console.error(s)}}}};const Wa=(0,f.Z)(Oa,[["render",la]]);var Da=Wa,Na=t.p+"img/add.8103b828.png";const Ta=(0,r._)("nav",{class:"mb-5 navbar navbar-light bg-warning d-flex p-4 justify-content-center"},[(0,r._)("i",{class:"mx-4 iconfs1 fa-solid fa-list"}),(0,r._)("i",{class:"mx-4 iconfs1 fa-solid fa-magnifying-glass"})],-1),Ma={class:""},Ca=(0,r._)("figure",{class:"figure"},[(0,r._)("div",{class:"d-flex justify-content-center py-5"},[(0,r._)("img",{src:Na,class:"figure-img img-fluid rounded w-50",alt:"..."})])],-1);function Ea(a,s,t,o,e,n){const i=(0,r.up)("menu-registrado"),l=(0,r.up)("tabla-mascotas"),c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),Ta,(0,r.Wm)(l,{mascotas:e.mascotas,onEliminarMascota:n.deleteMascota},null,8,["mascotas","onEliminarMascota"]),(0,r._)("div",Ma,[(0,r.Wm)(c,{class:"nav-link",to:"/form-mascotas"},{default:(0,r.w5)((()=>[Ca])),_:1})])])}var Ia=t(577),Pa=t.p+"img/cr1.dad25cc7.jpg";const Fa={id:"tabla-mascotas",class:"row"},$a={class:"card m-3 shadow-sm mb-5",style:{width:"28rem"}},Za=(0,r._)("img",{src:Pa,class:"card-img-top",alt:""},null,-1),Ra={class:"card-body"},Va={class:"card-title"},Ja={class:"card-text"},za=["onClick"];function Ba(a,s,t,o,e,n){return(0,r.wg)(),(0,r.iD)("div",Fa,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.mascotas,(s=>((0,r.wg)(),(0,r.iD)("div",{class:"card-container col col-md-4 d-flex flex-wrap justify-content-center",key:s._id},[(0,r._)("div",$a,[Za,(0,r._)("div",Ra,[(0,r._)("h5",Va,(0,Ia.zw)(s.nombre),1),(0,r._)("p",Ja,(0,Ia.zw)(s.descripcion),1),(0,r._)("a",{href:"#",class:"btn btn-danger ml-2",onClick:t=>a.$emit("eliminar-mascota",s)},"🗑️ Borrar",8,za)])])])))),128))])}var Ha={components:{},name:"tabla-mascotas",props:{mascotas:Array}};const Ya=(0,f.Z)(Ha,[["render",Ba]]);var La=Ya,Ka={components:{TablaMascotas:La,MenuRegistrado:oa},data(){return{mascotas:[],mascota:{nombre:"",descripcion:"",foto:""},vls:""}},methods:{async getMascotas(){try{this.vls=JSON.parse(localStorage.getItem("token"));const a=await fetch("https://pets-web-app.herokuapp.com/api/mascotas");this.mascotas=await a.json()}catch(a){console.error(a)}},async deleteMascota(a){try{await fetch(`https://pets-web-app.herokuapp.com/api/mascotas/${a._id}`,{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:`Bearer ${this.vls}`}}),console.log(a._id),this.mascotas=this.mascotas.filter((s=>s._id!==a._id))}catch(s){console.error(s+"No tienes permisos de administrador para borrar mascotas...")}}},mounted(){this.getMascotas()}};const Ga=(0,f.Z)(Ka,[["render",Ea]]);var qa=Ga;function Qa(a,s,t,o,e,n){const i=(0,r.up)("menu-admin"),l=(0,r.up)("tabla-usuarios");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),(0,r.Wm)(l,{usuarios:e.usuarios,onEliminarUsuario:n.deleteUsuario},null,8,["usuarios","onEliminarUsuario"])])}const Xa={id:"tabla-usuarios"},as={class:"table"},ss=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Nombre"),(0,r._)("th",null,"Usuario (Nickname)"),(0,r._)("th",null,"Rol"),(0,r._)("th",null,"Acciones")])],-1),ts=["onClick"];function os(a,s,t,o,e,n){return(0,r.wg)(),(0,r.iD)("div",Xa,[(0,r._)("table",as,[ss,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.usuarios,(s=>((0,r.wg)(),(0,r.iD)("tr",{key:s._id},[(0,r._)("td",null,(0,Ia.zw)(s.nombre),1),(0,r._)("td",null,(0,Ia.zw)(s.user),1),(0,r._)("td",null,(0,Ia.zw)(s.roles),1),(0,r._)("td",null,[(0,r._)("button",{class:"btn btn-danger ml-2",onClick:t=>a.$emit("eliminar-usuario",s)},"🗑️ Borrar",8,ts)])])))),128))])])])}var es={components:{},name:"tabla-usuarios",props:{usuarios:Array}};const rs=(0,f.Z)(es,[["render",os]]);var ns=rs;const is={class:"navbar menu py-4 navbar-expand-lg",id:"mainNav"},ls={class:"container"},cs=(0,r._)("a",{class:"fs-3 navbar-brand fw-bold",href:"#page-top"},[(0,r._)("i",{class:"fs-2 fa-solid fa-paw text-dark"})],-1),us=(0,r._)("button",{class:"p-2 navbar-toggler text-uppercase fw-bold p-2 burguer text-dark rounded",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("i",{class:"fa-solid fa-bars"})],-1),ds={class:"collapse navbar-collapse",id:"navbarResponsive"},ms={class:"navbar-nav"},ps={class:"nav-item"},vs=(0,r.Uk)("Home"),fs={class:"nav-item"},gs=(0,r.Uk)("Añadir mascotas"),bs={class:"nav-item"},hs=(0,r.Uk)("Ver mascotas"),_s={class:"nav-item"},ws=(0,r.Uk)("Ver usuarios");function ys(a,s,t,o,e,n){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("nav",is,[(0,r._)("div",ls,[cs,us,(0,r._)("div",ds,[(0,r._)("ul",ms,[(0,r._)("li",ps,[(0,r.Wm)(i,{class:"text-dark nav-link active",to:"/"},{default:(0,r.w5)((()=>[vs])),_:1})]),(0,r._)("li",fs,[(0,r.Wm)(i,{class:"text-dark nav-link",to:"/form-mascotas"},{default:(0,r.w5)((()=>[gs])),_:1})]),(0,r._)("li",bs,[(0,r.Wm)(i,{class:"text-dark nav-link",to:"/tabla-mascotas"},{default:(0,r.w5)((()=>[hs])),_:1})]),(0,r._)("li",_s,[(0,r.Wm)(i,{class:"text-dark nav-link",to:"/tabla-usuarios"},{default:(0,r.w5)((()=>[ws])),_:1})])])])])])])}var ks={name:"menu-admin"};const xs=(0,f.Z)(ks,[["render",ys]]);var Us=xs,Ss={components:{TablaUsuarios:ns,MenuAdmin:Us},data(){return{usuarios:[],usuario:{nombre:"",user:"",roles:""},vls:""}},methods:{async getUsuarios(){try{this.vls=JSON.parse(localStorage.getItem("token")),console.log(this.vls);const a=await fetch("https://pets-web-app.herokuapp.com/api/usuarios",{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:`Bearer ${this.vls}`}});this.usuarios=await a.json(),console.log(this.usuario.roles)}catch(a){console.error(a)}},async deleteUsuario(a){try{await fetch(`https://pets-web-app.herokuapp.com/api/usuarios/${a._id}`,{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:`Bearer ${this.vls}`}}),console.log(a._id),this.usuarios=this.usuarios.filter((s=>s._id!==a._id))}catch(s){console.log(s)}}},mounted(){this.getUsuarios()}};const js=(0,f.Z)(Ss,[["render",Qa]]);var As=js;const Os=(0,r._)("nav",{class:"mb-5 navbar navbar-light bg-warning d-flex p-4 justify-content-center"},[(0,r._)("h3",{class:"mx-1"},"Inicia sesión con PetsApp para poder añadir a tu mascota y tenerla vigilada.")],-1),Ws={class:"d-flex justify-content-center align-items-center mt-5"};function Ds(a,s,t,o,e,n){const i=(0,r.up)("menu-registrado"),l=(0,r.up)("formulario-login");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),Os,(0,r._)("div",Ws,[(0,r.Wm)(l,{onCheckUser:n.compruebaUsuario},null,8,["onCheckUser"])])],64)}const Ns=a=>((0,r.dD)("data-v-1b3848cc"),a=a(),(0,r.Cn)(),a),Ts={id:"formulario-login"},Ms={class:"container shadow p-3 mb-5 bg-body rounded"},Cs={class:"row"},Es={class:"col-md-4"},Is={class:"form-group"},Ps=Ns((()=>(0,r._)("label",null,"Usuario",-1))),Fs={class:"col-md-4"},$s={class:"form-group"},Zs=Ns((()=>(0,r._)("label",null,"Contraseña",-1))),Rs={class:"row"},Vs={class:"col-md-4"},Js={class:"form-group d-flex"},zs=Ns((()=>(0,r._)("button",{class:"btn btn-warning"},"Iniciar sesión",-1))),Bs=Ns((()=>(0,r._)("i",{class:"fa-solid fa-lock"},null,-1))),Hs=(0,r.Uk)(" Entrar como administrador"),Ys={class:"fs-6 mt-1 mb-0 pb-5"},Ls=(0,r.Uk)("¿No tienes cuenta? "),Ks=Ns((()=>(0,r._)("b",null,"Regístrate",-1)));function Gs(a,s,t,e,n,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",Ts,[(0,r._)("form",{onSubmit:s[2]||(s[2]=(0,o.iM)(((...a)=>i.enviarFormulario&&i.enviarFormulario(...a)),["prevent"]))},[(0,r._)("div",Ms,[(0,r._)("div",Cs,[(0,r._)("div",Es,[(0,r._)("div",Is,[Ps,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>n.usuario.user=a),type:"text",class:"form-control"},null,512),[[o.nr,n.usuario.user]])])]),(0,r._)("div",Fs,[(0,r._)("div",$s,[Zs,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.usuario.pass=a),type:"password",class:"form-control"},null,512),[[o.nr,n.usuario.pass]])])])]),(0,r._)("div",Rs,[(0,r._)("div",Vs,[(0,r._)("div",Js,[zs,(0,r.Wm)(l,{class:"text-dark nav-link text-muted mt-4",to:"/control-admin"},{default:(0,r.w5)((()=>[Bs,Hs])),_:1})])]),(0,r._)("p",Ys,[(0,r.Wm)(l,{class:"text-dark nav-link",to:"/form-register"},{default:(0,r.w5)((()=>[Ls,Ks])),_:1})])])])],32)])}var qs={name:"formulario-login",data(){return{usuario:{user:"admin@gmail.com",pass:"admin"}}},methods:{enviarFormulario(){this.$emit("check-user",this.usuario),this.$router.push("/welcome-page")}}};const Qs=(0,f.Z)(qs,[["render",Gs],["__scopeId","data-v-1b3848cc"]]);var Xs=Qs,at={components:{FormularioLogin:Xs,MenuRegistrado:oa},methods:{async compruebaUsuario(a){try{alert("comprobando usuario....");const s=await fetch("https://pets-web-app.herokuapp.com/api/login",{method:"POST",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF-8"}}),t=await s.json();localStorage.setItem("token",JSON.stringify(t.token)),localStorage.setItem("user",JSON.stringify(t.user)),localStorage.setItem("rol",JSON.stringify(t.rol));const o=JSON.parse(localStorage.getItem("token")),e=JSON.parse(localStorage.getItem("user")),r=JSON.parse(localStorage.getItem("rol"));console.log(o),console.log(e),console.log(r),alert("Te has logeado correctamente. Bienvenido "+t.user),"admin"==t.rol?this.$router.push("/control-admin"):(alert("No tienes permisos para entrar como administrador"),this.$router.push("/welcome-page"))}catch(s){console.error(s)}}}};const st=(0,f.Z)(at,[["render",Ds]]);var tt=st,ot=t.p+"img/img1.fad870d4.jpg";const et={class:"my-5 text"},rt=(0,r.Uk)("Bienvenido "),nt={class:"text-success"},it=(0,r._)("img",{class:"w-100",src:ot,alt:""},null,-1),lt=(0,r._)("nav",{class:"navbar navbar-light bg-warning d-flex p-5 justify-content-center"},[(0,r._)("h1",{class:"navbar-brand mb-0 h1"},"CADA VEZ SOMOS MÁS !")],-1),ct=(0,r._)("nav",{class:"navbar navbar-light bg-warning d-flex p-4 justify-content-center"},[(0,r._)("h1",{class:"navbar-brand mb-0 h1"},"AÑADE A TU MASCOTA"),(0,r._)("h3",null,"No pierdas ni un segundo más !")],-1),ut={class:""},dt=(0,r._)("figure",{class:"figure"},[(0,r._)("div",{class:"d-flex justify-content-center py-5"},[(0,r._)("img",{src:Na,class:"figure-img img-fluid rounded w-50",alt:"..."})])],-1);function mt(a,s,t,o,e,n){const i=(0,r.up)("menu-registrado"),l=(0,r.up)("carrusel-mascotas"),c=(0,r.up)("router-link"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),(0,r._)("h1",et,[rt,(0,r._)("span",nt,(0,Ia.zw)(this.username),1)]),it,lt,(0,r.Wm)(l),ct,(0,r._)("div",ut,[(0,r.Wm)(c,{class:"nav-link",to:"/form-mascotas"},{default:(0,r.w5)((()=>[dt])),_:1})]),(0,r.Wm)(u)])}var pt=t.p+"img/cr2.890ee4cc.jpg",vt=t.p+"img/cr3.376c7826.jpg",ft=t.p+"img/cr4.12b8b0c9.jpg",gt=t.p+"img/cr5.eaa9bd89.jpg";const bt=(0,r.uE)('<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><img src="'+Pa+'" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="'+pt+'" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="'+vt+'" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="'+ft+'" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="'+gt+'" class="d-block w-100" alt="..."></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>',1),ht=[bt];function _t(a,s,t,o,e,n){return(0,r.wg)(),(0,r.iD)("div",null,ht)}var wt={name:"carrousel-vue"};const yt=(0,f.Z)(wt,[["render",_t]]);var kt=yt,xt={name:"welcome-page",data(){return{username:""}},components:{MenuRegistrado:oa,CarruselMascotas:kt},mounted(){this.username=JSON.parse(localStorage.getItem("user"))}};const Ut=(0,f.Z)(xt,[["render",mt]]);var St=Ut;const jt=a=>((0,r.dD)("data-v-73735591"),a=a(),(0,r.Cn)(),a),At={class:"container text-center"},Ot={class:"figure dcol-12 my-5"},Wt=jt((()=>(0,r._)("h2",null,"Ver usuarios",-1))),Dt={class:"verUsuarios mt-4"},Nt=jt((()=>(0,r._)("i",{class:"text-dark iconfs2 mx-3 fa-solid fa-arrow-down-short-wide"},null,-1))),Tt=jt((()=>(0,r._)("i",{class:"text-dark iconfs2 mx-3 fa-solid fa-user"},null,-1))),Mt=jt((()=>(0,r._)("h2",null,"Ver mascotas",-1))),Ct={class:"figure dcol-12"},Et=jt((()=>(0,r._)("div",{class:"verMascotas mt-4"},[(0,r._)("i",{class:"text-dark iconfs2 mx-3 fa-solid fa-arrow-down-short-wide"}),(0,r._)("i",{class:"text-dark iconfs2 mx-3 fa-solid fa-dog"})],-1)));function It(a,s,t,o,e,n){const i=(0,r.up)("menu-admin"),l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),(0,r._)("div",At,[(0,r._)("div",Ot,[Wt,(0,r._)("div",Dt,[(0,r.Wm)(l,{class:"nav-link",to:"/tabla-usuarios"},{default:(0,r.w5)((()=>[Nt,Tt])),_:1})])]),Mt,(0,r._)("div",Ct,[(0,r.Wm)(l,{class:"nav-link",to:"/tabla-mascotas"},{default:(0,r.w5)((()=>[Et])),_:1})])])])}var Pt={components:{MenuAdmin:Us}};const Ft=(0,f.Z)(Pt,[["render",It],["__scopeId","data-v-73735591"]]);var $t=Ft;const Zt=[{path:"/",name:"home",component:b},{path:"/form-register",name:"form-register",component:na},{path:"/form-mascotas",name:"form-mascotas",component:Da},{path:"/tabla-mascotas",name:"tabla-mascotas",component:qa},{path:"/tabla-usuarios",name:"tabla-usuarios",component:As},{path:"/formulario-login",name:"formulario-login",component:tt},{path:"/welcome-page",name:"welcome-page",component:St},{path:"/control-admin",name:"control-admin",component:$t}],Rt=(0,e.p7)({history:(0,e.PO)("/app-mascotas-vue-router/"),routes:Zt});var Vt=Rt;const Jt={id:"app",class:"container-fluid"};function zt(a,s,t,o,e,n){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",Jt,[(0,r.Wm)(i)])}var Bt={name:"app"};const Ht=(0,f.Z)(Bt,[["render",zt]]);var Yt=Ht;(0,o.ri)(Yt).use(Vt).mount("#app")}},s={};function t(o){var e=s[o];if(void 0!==e)return e.exports;var r=s[o]={exports:{}};return a[o].call(r.exports,r,r.exports,t),r.exports}t.m=a,function(){var a=[];t.O=function(s,o,e,r){if(!o){var n=1/0;for(u=0;u<a.length;u++){o=a[u][0],e=a[u][1],r=a[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(a){return t.O[a](o[l])}))?o.splice(l--,1):(i=!1,r<n&&(n=r));if(i){a.splice(u--,1);var c=e();void 0!==c&&(s=c)}}return s}r=r||0;for(var u=a.length;u>0&&a[u-1][2]>r;u--)a[u]=a[u-1];a[u]=[o,e,r]}}(),function(){t.n=function(a){var s=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(s,{a:s}),s}}(),function(){t.d=function(a,s){for(var o in s)t.o(s,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:s[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)}}(),function(){t.p="/app-mascotas-vue-router/"}(),function(){var a={143:0};t.O.j=function(s){return 0===a[s]};var s=function(s,o){var e,r,n=o[0],i=o[1],l=o[2],c=0;if(n.some((function(s){return 0!==a[s]}))){for(e in i)t.o(i,e)&&(t.m[e]=i[e]);if(l)var u=l(t)}for(s&&s(o);c<n.length;c++)r=n[c],t.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return t.O(u)},o=self["webpackChunkapp_mascotas_vue_router"]=self["webpackChunkapp_mascotas_vue_router"]||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(204)}));o=t.O(o)})();
//# sourceMappingURL=app.74a1fd2f.js.map