(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{53:function(e,n,t){"use strict";t.r(n);var a,i,r,o,c,l,s=t(0),j=t.n(s),d=t(18),u=t.n(d),b=(t.p,t(14)),x=t(15),O=t(5),h=t(6),f=h.a.div(a||(a=Object(O.a)(["\n    text-align: center;\n    height: 398px;\n    width: 600px;\n    left: 60%;\n    margin: auto;\n    border:  1px solid black;\n    background-color:  #f1f1f1;\n    font-family: 'Lucida Sans Unicode','Lucida Grande',sans-serif;\n    font-size: 13px;\n    color: #757575;\n"]))),v=h.a.input(i||(i=Object(O.a)(["\n    text-align: center;\n    border: 1px #042e5d solid;\n    width: 82px;\n    height: 50px;\n    margin-left: 10px;\n    font-size: 30px;\n"]))),m=h.a.input(r||(r=Object(O.a)(["\n    border: 1px #042e5d solid;\n    width: 82px;\n    height: 50px;\n    text-align:center;\n    font-size: 30px;\n    background-color: #042e5d;\n    color: white;\n"]))),p=h.a.div(o||(o=Object(O.a)(["\n    text-align: center;\n    margin-left: 10px;\n    font-size: 30px;\n    padding: 10px;\n\n"]))),g=h.a.label(c||(c=Object(O.a)(["\n    color: #fff;\n    letter-spacing: 3pt;\n    font-size: 15px;\n    padding: 10px;\n    background: rgb(7, 86, 151);\n    text-shadow: 0 1px 0 rgba(255,255,255,0.2);\n    border: 1px #fcfcfc solid;\n    border-radius: 10px;\n    margin-left: 15px;\n    cursor: pointer;\n"]))),y=t(1),S=function(e){var n,t,a,i,r,o,c=e.handleTime,l=e.timeState,s=(e.setOperation,e.doCalc),j=e.result,d=e.setAutoSave,u=function(e){var n=e.target,t=n.name,a=n.value;c((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(b.a)({},t,a))}))},O=function(e){var n=e.target.id;s(n)};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(f,{children:[Object(y.jsxs)(p,{children:[Object(y.jsx)(v,{onChange:u,name:"hour1",type:"text",value:null!==(n=null===l||void 0===l?void 0:l.hour1)&&void 0!==n?n:""}),Object(y.jsx)("label",{for:"hours",children:"Horas"}),Object(y.jsx)(v,{onChange:u,name:"minute1",value:null!==(t=null===l||void 0===l?void 0:l.minute1)&&void 0!==t?t:""}),Object(y.jsx)("label",{for:"mins",children:"Minutos"})]}),Object(y.jsxs)(p,{children:[Object(y.jsx)(v,{onChange:u,name:"hour2",value:null!==(a=null===l||void 0===l?void 0:l.hour2)&&void 0!==a?a:""}),Object(y.jsx)("label",{for:"hours",children:"Horas"}),Object(y.jsx)(v,{onChange:u,name:"minute2",value:null!==(i=null===l||void 0===l?void 0:l.minute2)&&void 0!==i?i:""}),Object(y.jsx)("label",{for:"mins",children:"Minutos"})]}),Object(y.jsxs)(p,{children:[Object(y.jsx)(g,{onClick:O,id:"sum",children:"Adi\xe7\xe3o "}),Object(y.jsx)(g,{onClick:O,id:"reset",children:"Reset"}),Object(y.jsx)(g,{onClick:O,id:"decrease",children:"Subtra\xe7\xe3o"})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)(p,{children:[Object(y.jsx)(m,{id:"resultHour",value:null!==(r=null===j||void 0===j?void 0:j.hours)&&void 0!==r?r:"",type:"text",readonly:!0,maxlength:"2"}),Object(y.jsx)("label",{for:"hours",children:"Horas"}),Object(y.jsx)(m,{id:"resultMinute",value:null!==(o=null===j||void 0===j?void 0:j.minutes)&&void 0!==o?o:"",type:"text",readonly:!0,maxlength:"2"}),Object(y.jsx)("label",{for:"mins",children:"Minutos"})]}),Object(y.jsxs)(p,{children:[Object(y.jsx)("input",{id:"auto",onChange:function(e){var n=e.target.checked;d(n)},type:"checkbox"}),Object(y.jsx)("label",{style:{fontSize:"20px",color:"black"},for:"auto",class:"results",children:"Salvar opera\xe7\xe3o"})]})]})})},C=t(16),k=t(73),M=t(74),H=t(76),T=t(75),w=function(e){return 3600*e},F=function(e){return 60*e},N=function(e){return Math.floor(e/3600)},z=function(e){return Math.floor(e%3600/60)},Y=function(){return 8/7},A=h.a.input(l||(l=Object(O.a)(["\n    font-size: 17px;\n"]))),D=function(e){var n=e.title,t=e.value;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("label",{children:[" ",n," "]}),Object(y.jsx)(A,{readOnly:!0,value:t})]})},I=t(17),P=t.n(I);t(49);P.a.locale("pt-br");var L,R,J,B,G,U,_,q,E,K,Q,V=function(e,n){return P()(e).format(n)},W={shift:"Jornada",nightly:"Noturno",punch:"Batida",leave:"Afastamento",tolerance:"Toler\xe2ncia",intinere:"Intinere",onCalls:"SobreAviso",businessHour:"Hora contratual"},X=h.a.label(L||(L=Object(O.a)(["\n    font-weight: bold;\n"]))),Z=h.a.label(R||(R=Object(O.a)(["\n    color: blue;\n"]))),$=h.a.div(J||(J=Object(O.a)(["\n    border: 0px solid black;\n"]))),ee=function(e){var n,t,a=e.timeline;return Object(y.jsxs)($,{children:[Object(y.jsx)(X,{children:" Inicio periodo: "}),Object(y.jsxs)(Z,{children:[" ",V(a.startInfo,"DD/MM/YYYY HH:MM")," "]}),Object(y.jsx)("br",{}),Object(y.jsx)(X,{children:" Fim Periodo: "}),Object(y.jsxs)(Z,{children:[" ",V(a.endInfo,"DD/MM/YYYY HH:MM")," "]}),Object(y.jsx)("br",{}),Object(y.jsx)(X,{title:"Gerar\xe1 essa hora adicional caso esse per\xedodo seja de batida",children:" Tratamento caso trabalhado neste per\xedodo: "}),Object(y.jsxs)("label",{children:[" ",null===(n=a.options)||void 0===n||null===(t=n.shift)||void 0===t?void 0:t.DESC_TIPO_HORA," "]}),Object(y.jsx)("br",{}),Object(y.jsx)(X,{children:" Tipo do per\xedodo: "}),Object(y.jsxs)("label",{children:[" ",a.type.map((function(e){return W[e]})).join(", ")," "]})]})},ne=(t(50),h.a.div(B||(B=Object(O.a)(["\n    border: 1px solid black;\n    min-width: 300px;\n    height: auto;\n    font-size: 20px;\n    padding-left: 5px;\n    padding-right: 5px;\n"])))),te=h.a.label(G||(G=Object(O.a)(["\n    display: block;\n"]))),ae=function(e){var n,t=e.day,a=e.timeline,i=t.jornada||!1,r=i?a.shifts[i]:null,o=(null===r||void 0===r?void 0:r.ops.HORAS_CONTRATUAIS.join("-"))||"N\xe3o h\xe1 horas previstas";return Object(y.jsxs)(ne,{children:[Object(y.jsxs)(te,{children:["Dia ",V(t.dia,"DD/MM/YYYY")]})," ",Object(y.jsx)("br",{}),Object(y.jsxs)(te,{children:["Dia da semana: ",(n=t.dia,P()(n).format("dddd"))]})," ",Object(y.jsx)("br",{}),Object(y.jsx)(te,{children:" Hor\xe1rio contratual: "}),Object(y.jsxs)(te,{children:[" ",o," "]}),Object(y.jsx)("hr",{}),Object(y.jsx)("label",{children:"H\xe1 feriado neste dia? "}),Object(y.jsxs)("label",{children:[" ",t.events.isHoliday?"Sim":"N\xe3o"," "]}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{children:"H\xe1 afastamento neste dia? "}),Object(y.jsxs)("label",{children:[" ",t.events.leave.range?"Sim":"N\xe3o"," "]}),Object(y.jsx)(te,{children:" Batidas na toler\xe2ncia"}),Object(y.jsxs)(te,{children:[" ",t.punchesInTolerance.map((function(e){return P()(e.hora).format("HH:MM")})).join("-")]}),t.timeline.map((function(e,n){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("br",{}),Object(y.jsxs)("label",{children:["Per\xedodo ",n+1]}),Object(y.jsx)(ee,{timeline:e}),Object(y.jsx)("br",{})]})}))]})},ie=t(71),re=h.a.div(U||(U=Object(O.a)(["\n    display: flex;\n"]))),oe=function(){var e=Object(s.useState)({}),n=Object(C.a)(e,2),t=n[0],a=n[1];return Object(y.jsxs)(y.Fragment,{children:[0==Object.keys(t).length&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("textarea",{onChange:function(e){var n=e.target.value;a(JSON.parse(n))},rows:"20",cols:"150",placeholder:"Cole o Json da timeline aqui"}),Object(y.jsx)(ie.a,{style:{display:"block"},variant:"contained",color:"primary",children:"Parse Timeline"})]}),0!=Object.keys(t).length&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(D,{title:"Periodo",value:t.period}),Object(y.jsx)(D,{title:"Periodo est\xe1 bloqueado?",value:t.blocked?"Sim":"N\xe3o"}),Object(y.jsx)(D,{title:"Utiliza sindicato?",value:t.groupOfRules.length?"Sim":"N\xe3o"}),Object(y.jsx)(re,{children:t.daysInfos.map((function(e){return Object(y.jsx)(ae,{day:e,timeline:t})}))})]})]})},ce=h.a.div(_||(_=Object(O.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    left: 60%;\n    margin: auto;\n    font-family: 'Lucida Sans Unicode','Lucida Grande',sans-serif;\n    font-size: 13px;\n    color: #757575;\n"]))),le=h.a.div(q||(q=Object(O.a)(["\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 20px;\n    margin-top: 25px;\n\n"]))),se=h.a.textarea(E||(E=Object(O.a)(["\n    resize: none;\n"]))),je=h.a.label(K||(K=Object(O.a)(["\n    font-size: 25px;\n    font-weight: bold;\n    margin-right: 5px;\n"]))),de=h.a.input(Q||(Q=Object(O.a)(["\n    max-width: 70px;\n    text-align: center;\n    height: 30px;\n    border-radius: 10px;\n"]))),ue=function(e){var n=e.nightlyTime,t=e.setTime,a=e.calc,i=e.result,r=e.remove,o=function(e){var n=e.target,a=n.value,i=n.name;isNaN(a)||t((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(b.a)({},i,a))}))};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(ce,{children:[Object(y.jsxs)(le,{children:[Object(y.jsx)(je,{children:" Horas"}),Object(y.jsx)(de,{name:"hours",value:(null===n||void 0===n?void 0:n.hours)||"",onChange:o}),Object(y.jsx)(je,{children:" Minutos"}),Object(y.jsx)(de,{name:"minutes",value:(null===n||void 0===n?void 0:n.minutes)||"",onChange:o})]}),Object(y.jsx)(se,{readOnly:!0,cols:"100",rows:"10",value:Object.keys(i).length?"O resultado da opera\xe7\xe3o \xe9 ".concat(i.hours.toString().padStart(2,0),":").concat(i.minutes.toString().padStart(2,0)):""}),Object(y.jsxs)(le,{children:[Object(y.jsx)(ie.a,{variant:"contained",color:"primary",onClick:a,children:"Adicional Noturno"}),Object(y.jsx)(ie.a,{variant:"contained",color:"secondary",onClick:r,children:"Remover adicional noturno"})]})]})})},be=Object(k.a)({root:{flexGrow:1}}),xe=function(){var e=Object(s.useState)(0),n=Object(C.a)(e,2),t=n[0],a=n[1],i=Object(s.useState)({}),r=Object(C.a)(i,2),o=r[0],c=r[1],l=Object(s.useState)({}),j=Object(C.a)(l,2),d=j[0],u=j[1],O=Object(s.useState)(!1),h=Object(C.a)(O,2),f=h[0],v=h[1],m=Object(s.useState)({}),p=Object(C.a)(m,2),g=p[0],k=p[1],A=Object(s.useState)({}),D=Object(C.a)(A,2),I=D[0],P=D[1],L=function(e){var n;return(n={},Object(b.a)(n,"sum"===e,function(e){var n=e.hour1,t=void 0===n?0:n,a=e.hour2,i=void 0===a?0:a,r=e.minute1,o=void 0===r?0:r,c=e.minute2,l=void 0===c?0:c,s=w(t)+w(i),j=F(o)+F(l);return{hours:N(s+j),minutes:z(s+j)}}(o)),Object(b.a)(n,"decrease"===e,function(e){var n=e.hour1,t=void 0===n?0:n,a=e.hour2,i=void 0===a?0:a,r=e.minute1,o=void 0===r?0:r,c=e.minute2,l=void 0===c?0:c,s=w(t)+F(o)-(w(i)+F(l));return{hours:N(s),minutes:z(s)}}(o)),n)[!0]||function(e){return e({}),{}}(c)},R={0:Object(y.jsx)(S,{handleTime:c,timeState:o,doCalc:function(e){var n=L(e);n&&f&&c((function(e){return Object(x.a)(Object(x.a)({},e),{},{hour1:n.hours,minute1:n.minutes,hour2:"",minute2:""})})),u(n)},result:d,setAutoSave:v}),1:Object(y.jsx)(ue,{nightlyTime:g,setTime:k,result:I,calc:function(){var e=function(e){var n=e.hours,t=e.minutes,a=t?F(t):0,i=n?w(n)+a:a;if(!a&&!i)return{};var r=i*Y();return{hours:N(r),minutes:z(r)}}(g);P(e)},remove:function(){var e=function(e){var n=e.hours,t=e.minutes,a=t?F(t):0,i=n?w(n)+a:a;if(!a&&!i)return{};var r=Math.ceil(i/Y());return{hours:N(r),minutes:z(r)}}(g);P(e)}}),4:Object(y.jsx)(oe,{})},J=be();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(M.a,{className:J.root,children:Object(y.jsxs)(H.a,{value:t,onChange:function(e,n){a(n)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(y.jsx)(T.a,{label:"Calculadora"}),Object(y.jsx)(T.a,{label:"Adicional Noturno"}),Object(y.jsx)(T.a,{label:"Conversor"}),Object(y.jsx)(T.a,{label:"Fator Multiplicador"}),Object(y.jsx)(T.a,{label:"Timeline Parser"})]})}),R[t]]})};var Oe=function(){return Object(y.jsx)(xe,{})},he=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),r(e),o(e)}))};u.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(Oe,{})}),document.getElementById("root")),he()}},[[53,1,2]]]);
//# sourceMappingURL=main.6d4b0d2a.chunk.js.map