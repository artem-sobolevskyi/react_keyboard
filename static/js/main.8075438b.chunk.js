(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),c=n(1),r=n.n(c),o=n(4),i=n(5),u=n(7),p=n(6),l=n(0),y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={key:null},e.handleKeyup=function(t){e.setState({key:t.key})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.handleKeyup)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.handleKeyup)}},{key:"render",value:function(){return Object(l.jsx)("p",{className:"App__message",children:this.state.key?"The last pressed key is [".concat(this.state.key,"]"):"Nothing was pressed yet"})}}]),n}(r.a.Component),d=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(y,{})})};n(13);s.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8075438b.chunk.js.map