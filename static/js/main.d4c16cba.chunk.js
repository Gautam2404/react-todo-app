(this.webpackJsonptoofanitodo=this.webpackJsonptoofanitodo||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(5),l=n.n(i),r=(n(12),n(13),n(6)),o=n(3),s=n(16),u=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)([{id:50,text:"drinking water",isCompleted:!1},{id:51,text:"eating ",isCompleted:!1},{id:53,text:"coding",isCompleted:!0}]),u=Object(o.a)(l,2),m=u[0],d=u[1];return c.a.createElement("div",{className:"card shadow"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter To Do",value:n,onChange:function(e){return function(e){i(e.target.value)}(e)}}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e={id:Object(s.a)(),text:n,isCompleted:!1};d([e].concat(Object(r.a)(m))),i("")}},"Add To Do"))),c.a.createElement("ul",{className:"list-group list-group-flush"},m.map((function(e){return c.a.createElement("li",{className:"list-group-item d-flex justify-content-between",key:e.id},c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",checked:e.isCompleted,onChange:function(){return function(e){var t=m.map((function(t){return t.id===e?(t.isCompleted=!0,t):t}));d(t)}(e.id)}}),c.a.createElement("span",{className:e.isCompleted?"completed":null},e.text)),c.a.createElement("i",{className:"far fa-trash-alt",onClick:function(){return function(e){var t=m.filter((function(t){return t.id!==e}));d(t),console.log(t)}(e.id)}}))})))))},m=function(){return c.a.createElement("div",{className:"container-fluid vw-100 vh-100"},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center vh-100"},c.a.createElement(u,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d4c16cba.chunk.js.map