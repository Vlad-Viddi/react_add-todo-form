(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),o=a(9),c=a(1),l=a(2),u=a(4),d=a(3),m=a(5),p=(a(15),a(8)),h=a.n(p),b=function(e){var t=e.task,a=e.user;return r.a.createElement("li",{key:t.id},r.a.createElement("div",{className:h()("task",{completed:t.completed,uncompleted:!t.completed})},r.a.createElement("div",null,"Actual status: ".concat(t.completed?"Done":"Not yet")),r.a.createElement("div",null,"Task: ".concat(t.title)),r.a.createElement("div",null,"Maintainer: ".concat(a.name))))},g=function(e){var t=e.tasks;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(b,{task:e,key:e.id,user:e.user})})))},y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={inputTitle:"",selectedPerson:0,currentId:3,inputError:!1,unselectedPersonError:!1},e.changeInput=function(t){e.setState({inputTitle:t.target.value,inputError:!1})},e.addTask=function(){var t=e.state,a=t.inputTitle,n=t.selectedPerson,r=t.currentId;0!==a.trim().length?0!==n?a.trim()&&n&&(e.props.addNewTask(a,n,r),e.setState((function(e){return{inputTitle:"",selectedPerson:"",currentId:e.currentId+1}}))):e.setState({unselectedPersonError:!0}):e.setState({inputError:!0})},e.handleSubmit=function(t){t.preventDefault(),e.addTask()},e.handleSelectChange=function(t){e.setState({selectedPerson:t.target.value,unselectedPersonError:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.inputTitle,n=t.selectedPerson,i=t.inputError,s=t.unselectedPersonError;return r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Add new Todo"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("input",{type:"text",maxLength:10,minLength:3,placeholder:"Enter a new todo",value:a,onChange:this.changeInput,className:"fieldset__input"}),i&&r.a.createElement("span",{className:"error"},"Please input a valid todo")),r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("select",{onChange:this.handleSelectChange,value:n,className:"fieldset__select"},r.a.createElement("option",{hidden:!0},"Choose a victim"),e.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))),s&&r.a.createElement("span",{className:"error"},"Please choose a victim")),r.a.createElement("button",{type:"submit"},"Execute")))}}]),a}(r.a.Component),f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],v=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!0}].map((function(e){return Object(m.a)(Object(m.a)({},e),{},{user:f.find((function(t){return t.id===e.userId}))})})),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={tasks:v},e.addNewTask=function(t,a,n){e.setState((function(e){return{tasks:[].concat(Object(o.a)(e.tasks),[{title:t,user:f.find((function(e){return e.id===+a})),id:n,completed:!1}])}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.tasks;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement(y,{users:f,addNewTask:this.addNewTask}),r.a.createElement(g,{tasks:e}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8a445f4a.chunk.js.map