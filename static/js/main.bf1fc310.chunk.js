(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),o=n(2),r=n(3),a=n(5),l=n(4),s=n(1),u=n.n(s),b=(n(12),n(0)),h=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={time:new Date},t.timerId=void 0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({time:new Date}),console.log(t.state.time.toLocaleTimeString(),"- Clock ID:",t.timerId)}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(b.jsx)("span",{children:this.state.time.toLocaleTimeString()})}}]),n}(u.a.Component),j=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.changeClockVisibility=function(e){t.setState({isClockVisible:e})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),Object(b.jsxs)("p",{children:["Current time:"," ",this.state.isClockVisible&&Object(b.jsx)(h,{})]}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.changeClockVisibility(!0)},children:"Show clock"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.changeClockVisibility(!1)},children:"Hide clock"})]})}}]),n}(u.a.Component),d=j;i.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bf1fc310.chunk.js.map