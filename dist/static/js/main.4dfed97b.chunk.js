(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,n){e.exports=n(97)},53:function(e,t,n){},54:function(e,t,n){},73:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(12),o=n.n(i),c=n(14),l=(n(53),n(54),n(4)),u=n(13),s=n.n(u),d=n(18),p=n(6),f=n(7),h=n(10),m=n(9),v=n(11),y=n(1),b=n.n(y),O=function(e,t){return{type:"LOAD_CHILDREN_NODES",parent:e,data:t}},g=function(e){return{type:"TOGGLE_CHILDREN_NODES",parent:e}},E=function(e){return{type:"OPEN_MODAL",data:e}},N=function(e){return{type:"SET_FOCUS",id:e}},_=n(15),j=n(25),C=n.n(j),w=function(){var e=Object(d.a)(s.a.mark(function e(t,n){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r={},e.t0=t,e.next=e.t0===L.GET_ROOT?4:e.t0===L.GET_CHILDREN?8:12;break;case 4:return e.next=6,C.a.get(n);case 6:return r=e.sent,e.abrupt("break",13);case 8:return e.next=10,C.a.get(n);case 10:return r=e.sent,e.abrupt("break",13);case 12:return e.abrupt("return",{errors:["Request not found"]});case 13:return e.abrupt("return",r.data);case 14:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),L={GET_CHILDREN:"get_children",GET_ROOT:"get_root"},x=(n(73),function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).onOpenModal=function(){n.props.openModalAction({enrolleeId:n.props.id})},n.handleClick=function(){var e=Object(d.a)(s.a.mark(function e(t){var r,a,i,o,c,l,u,d,p,f,h;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.props,a=r.id,i=r.onLoad,o=r.showChildren,c=r.sourceUrl,l=r.numberOfChildren,u=r.setLoading,d=r.setLoaded,p=r.children,!(l>0)){e.next=11;break}if(u(),f=[],0!==p.length){e.next=9;break}return h=c+"?id="+a,e.next=8,w(L.GET_CHILDREN,h);case 8:f=e.sent;case 9:f.errors||i(a,o,f),d();case 11:n.props.setFocus(t);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.numberOfChildren,i=t.id,o=t.focusNode,c=t.parent,l=["Node__Container"];return 0===r&&i!==o&&l.push("disabled"),c==o&&l.push("focus"),i===o&&l.push("selected"),a.a.createElement(_.Transition,{native:!0,items:!0,from:{opacity:0,marginLeft:-500},enter:{opacity:1,marginLeft:0},leave:{opacity:0,marginLeft:-500}},function(t){return t&&function(t){return a.a.createElement(_.animated.div,{style:t},a.a.createElement("div",{className:l.join(" ")},a.a.createElement("div",{onClick:function(){return e.handleClick(i)},className:"Node__Title"},a.a.createElement("span",null,n),a.a.createElement(_.Spring,{from:{number:0},to:{number:r},config:{duration:1e3}},function(e){return a.a.createElement("div",{style:e},e.number.toFixed())})),a.a.createElement("div",{className:"Node__ModalButtonContainer",onClick:e.onOpenModal},a.a.createElement("i",{className:"fa fa-external-link"}))))}})}}]),t}(a.a.PureComponent)),k={id:b.a.string.isRequired,parent:b.a.string.isRequired,title:b.a.string.isRequired,showChildren:b.a.bool,numberOfChildren:b.a.number.isRequired,children:b.a.arrayOf(b.a.shape({id:b.a.string.isRequired,title:b.a.string.isRequired,numberOfChildren:b.a.number.isRequired})),sourceUrl:b.a.string,setLoading:b.a.func.isRequired,setLoaded:b.a.func.isRequired};k.children=b.a.arrayOf(b.a.shape(k).isRequired),x.defaultProps={showChildren:!1,children:[]};var S=Object(c.b)(function(e){return{sourceUrl:e.variables.sourceUrl,focusNode:e.variables.focusNode}},function(e){return{onLoad:function(t,n,r){n?e(g(t)):(e(O(t,r)),e(g(t)))},setLoading:function(){e({type:"SET_LOADING",data:{loading:!0}})},setLoaded:function(){e({type:"SET_LOADING_END",data:{loading:!1}})},openModalAction:function(t){return e(E(t))},setFocus:function(t){e(N(t))}}})(x),R=(n(86),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e="";switch(this.props.type){case"space":e=" ";break;case"pipe":e=a.a.createElement(_.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:1e3}},function(e){return a.a.createElement("div",{style:e},a.a.createElement("div",{className:"EmptyNode__SVGContainer"},a.a.createElement("svg",{viewBox:"0 0 100% 100%",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%"},a.a.createElement("line",{x1:"0",y1:"0",x2:"0",y2:"100%",className:"SVG_Line"}))))});break;case"line":e=a.a.createElement(_.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:1e3}},function(e){return a.a.createElement("div",{style:e},a.a.createElement("div",{className:"EmptyNode__SVGContainer"},a.a.createElement("svg",{viewBox:"0 0 100% 100%",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%"},a.a.createElement("line",{x1:"0",y1:"0",x2:"0",y2:"100%",className:"SVG_Line"}),a.a.createElement("line",{x1:"0",y1:"50%",x2:"90%",y2:"50%",className:"SVG_Line"}))))});break;case"last-line":e=a.a.createElement(_.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:1e3}},function(e){return a.a.createElement("div",{style:e},a.a.createElement("div",{className:"EmptyNode__SVGContainer"},a.a.createElement("svg",{viewBox:"0 0 100% 100%",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%"},a.a.createElement("line",{x1:"0",y1:"0",x2:"0",y2:"50%",className:"SVG_Line"}),a.a.createElement("line",{x1:"0",y1:"50%",x2:"90%",y2:"50%",className:"SVG_Line"}))))});break;default:e="-"}return a.a.createElement("div",{className:"EmptyNode__Container"},e)}}]),t}(a.a.PureComponent)),I=(n(87),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.nodes.map(function(e,t){return e.isEmpty?a.a.createElement(R,Object.assign({key:t},e)):a.a.createElement(S,Object.assign({key:t},e))});return a.a.createElement("div",{className:"Column__Container"},e)}}]),t}(a.a.PureComponent)),T=n(2),D=function(e){return{type:"LOAD_ROOT_NODE",data:Object(T.a)({},e)}},M=function(){function e(t){Object(p.a)(this,e),this.root=t}return Object(f.a)(e,[{key:"findNode",value:function(t){return e.findInTree(this.root,t)}},{key:"addChildren",value:function(t,n){var r=e.findInTree(this.root,t);r.children||(r.children=[]),r.children=[].concat(Object(l.a)(r.children),Object(l.a)(n))}},{key:"toggleChildren",value:function(t){var n=e.findInTree(this.root,t);return n.showChildren=!n.showChildren}},{key:"getRoot",value:function(){return this.root}}],[{key:"clone",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"getLevels",value:function(e){for(var t=!1,n=[[[e]]],r=0;!t;){var a=n[r].reduce(function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t))},[]).reduce(function(e,t){return t.children||(t.children=[]),t.children.forEach(function(e){e.parentNode=t}),t.children.length&&t.showChildren?[].concat(Object(l.a)(e),[t.children]):e},[]);a.length>0?n[++r]=a:t=!0}return n}},{key:"generateEmptyNodes",value:function(e,t){for(var n=[],r=0;r<t;r++)n.push({isEmpty:!0,type:e});return n}},{key:"getOpenedChildrenWidth",value:function(t){return t.showChildren&&0!==t.children.length?t.children.length+t.children.reduce(function(t,n){return e.getOpenedChildrenWidth(n)+t},0):0}},{key:"getChildren",value:function(e){e.reducers(function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.children))})}},{key:"findInTree",value:function(t,n){if(t.id===n)return t;t.children||(t.children=[]);for(var r=0;r<t.children.length;r++){var a=e.findInTree(t.children[r],n);if(a)return a}return null}}]),e}(),A=function(e){return{type:"ADD_LEVEL_WIDTH",levelWidth:e}},G=(n(88),function(){return a.a.createElement("div",{className:"Spinner__Container"},a.a.createElement("div",{className:"lds-dual-ring"}))}),U=n(42),W=(n(94),function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).onCloseModal=function(){n.props.closeModal()},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.detailsUrl,r=e.id;return a.a.createElement(U.a,{open:t,onClose:this.onCloseModal},a.a.createElement("div",{className:"ModalElement__IframeContainer"},a.a.createElement("iframe",{className:"ModalElement__Iframe",src:n+"/associate/info/"+r})))}}]),t}(a.a.PureComponent)),q=Object(c.b)(function(e){return{open:e.modal.open,detailsUrl:e.variables.detailsUrl,id:e.modal.content.enrolleeId}},function(e){return{closeModal:function(){e({type:"CLOSE_MODAL",data:null})}}})(W),z=(n(95),function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).handleResize=function(e){var t=window.innerWidth,r=Number((t/200).toFixed(0));n.props.addLevelWidth(r)},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(s.a.mark(function e(){var t,n,r,a,i,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.root,r=t.didMount,a=t.sourceUrl,i=t.setLoading,o=t.setLoaded,n){e.next=8;break}return i(),e.next=5,w(L.GET_ROOT,a);case 5:(c=e.sent).errors||r(c),o();case 8:this.handleResize(),window.addEventListener("resize",this.handleResize);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=this.props,t=e.root,n=e.maxColumnSize,r=e.loading,i=t?M.getLevels(M.clone(t)):[],o=[],c=0;c<i.length;c++){o[c]=[];for(var u=0,s=0;s<i[c].length;s++){if(i[c][s].length>0){var d=(i[c][s][0].parentNode?i[c][s][0].parentNode.offset:0)-o[c].length,p=M.generateEmptyNodes("space",d);o[c]=[].concat(Object(l.a)(o[c]),Object(l.a)(p)),u+=d}for(var f=0;f<i[c][s].length;f++){var h=i[c][s][f];h.offset=++u;var m=M.getOpenedChildrenWidth(h);u+=m;var v;v=M.generateEmptyNodes("pipe",m),o[c]=[].concat(Object(l.a)(o[c]),[h],Object(l.a)(v))}}}for(var y=o.length-1;y>0;y--)for(var b=0;b<o[y].length;b++){var O=o[y-1][b];!o[y][b].isEmpty&&O&&O.type&&(O.type="line")}for(var g=o.length-1;g>=0;g--)for(var E=!0,N=!0,_=o[g].length-1;_>0;_--){var j=o[g][_];if(j&&j.type)switch(j.type){case"pipe":E&&(j.type="space");break;case"line":(E||N)&&(E=!1,N=!1,j.type="last-line")}else N=!0,E=!0}for(var C=o.reverse().splice(0,n).reverse(),w=0,L=!0;L;)C[0]&&C[0][w].type&&"space"===C[0][w].type?++w:L=!1;var x=C.map(function(e,t){return a.a.createElement(I,{key:t,nodes:e.splice(w)})});return a.a.createElement("div",{className:"NodeMatrix__Container"},x,a.a.createElement(q,null),r?a.a.createElement(G,null):null)}}]),t}(a.a.PureComponent)),V=Object(c.b)(function(e){return{root:e.nodes.rootNode,width:e.matrix.matrixWidth,maxColumnSize:e.variables.maxColumnSize,loading:e.variables.loading,sourceUrl:e.variables.sourceUrl}},function(e){return{didMount:function(t){e(D(t))},setLoading:function(){e({type:"SET_LOADING",data:{loading:!0}})},setLoaded:function(){e({type:"SET_LOADING_END",data:{loading:!1}})},addLevelWidth:function(t){e(A(t))}}})(z);var B=function(){return a.a.createElement(V,{width:6})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(16),H=n(41),F=(n(96),{open:!1,content:{enrolleeId:""}}),J=function(e){return{type:"SET_SOURCE_URLS",data:e}},Y={visibleIndex:0,maxColumnSize:5,loading:!1,sourceUrl:"",detailsUrl:"",focusNode:1},$=Object(P.c)({nodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{rootNode:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D().type:return{rootNode:Object(T.a)({},t.data)};case O(0).type:var n=new M(M.clone(e.rootNode));return n.addChildren(t.parent,t.data),{rootNode:n.getRoot()};case g(0).type:var r=new M(M.clone(e.rootNode));return r.toggleChildren(t.parent),{rootNode:r.getRoot()};default:return e}},matrix:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(arguments.length>1?arguments[1]:void 0).type,{matrixWidth:6}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E(e).type:var n={open:!0,content:Object(T.a)({},t.data)};return Object(T.a)({},e,n);case"CLOSE_MODAL":return Object(T.a)({},e,{open:!1,content:{enrolleeId:""}});default:return e}},variables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":case"SET_LOADING_END":case J(e).type:return Object(T.a)({},e,t.data);case A(e).type:return Object(T.a)({},e,{maxColumnSize:t.levelWidth});case N(e).type:return Object(T.a)({},e,{focusNode:t.id});default:return e}}});console.log("production");var K=[H.a];var Q={sourceUrl:document.getElementById("rootExplorer").getAttribute("data-source"),detailsUrl:document.getElementById("rootExplorer").getAttribute("data-details")},X=Object(P.d)($,P.a.apply(void 0,K));X.dispatch(J(Q)),o.a.render(a.a.createElement(c.a,{store:X},a.a.createElement(B,null)),document.getElementById("rootExplorer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.4dfed97b.chunk.js.map