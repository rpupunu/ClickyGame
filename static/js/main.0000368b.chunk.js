(this.webpackJsonppupster=this.webpackJsonppupster||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bojan Bogdanovic","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png","clicked":false},{"id":2,"name":"Tony Bradley","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628396.png","clicked":false},{"id":3,"name":"Jarrell Brantley","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629714.png","clicked":false},{"id":4,"name":"Jordan Clarkson","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203903.png","clicked":false},{"id":5,"name":"Mike Conley","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png","clicked":false},{"id":6,"name":"Ed Davis","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202334.png","clicked":false},{"id":7,"name":"Rudy Gobert","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203497.png","clicked":false},{"id":8,"name":"Joe Ingles","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/204060.png","clicked":false},{"id":9,"name":"Donovan Mitchell","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628378.png","clicked":false},{"id":10,"name":"Juwan Morgan","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629752.png","clicked":false},{"id":11,"name":"Emmanuel Mudiay","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626144.png","clicked":false},{"id":12,"name":"Georges Niang","image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627777.png","clicked":false}]')},,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),o=a.n(c),i=a(4),r=a(5),l=a(6),d=a(9),m=a(7),p=a(10);a(16);var h=function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("p",{id:"headerLeft"}," Pics Clicky Game "),s.a.createElement("p",{id:"headerMiddle"},e.headerText),s.a.createElement("p",{id:"headerRight"},"Score: ",e.score," | Top Score: ",e.topScore," "))};a(17);var u=function(e){return s.a.createElement("div",{className:"wrapper"},e.children)};a(18);var f=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("p",{id:"footerleft"},"Pics Clicky Game"))},g=a(1),k=a(8),b=a.n(k);a(20);var v=function(e){return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)}})))},x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={topScore:0,score:0,headerText:"Don't click on the same image twice!",friends:g},a.handleClick=function(e){console.log(e);for(var t=a.state.friends,n=0;n<t.length;n++)e===t[n].id&&(!1===t[n].clicked?a.setState({score:a.state.score+1,friends:b()(a.state.friends,Object(i.a)({},n,{clicked:{$set:!0}})),headerText:"You guessed correctly!"}):(a.state.score>a.state.topScore&&a.setState({topScore:a.state.score,score:0,headerText:"Wrong! You guessed incorrectly",friends:g},(function(){console.log("Updated new top score!")})),a.state.score<=a.state.topScore&&a.setState({score:0,headerText:"You guessed wrong!",friends:g},(function(){console.log("Reset the game, you did not beat the top score!")}))))},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.friends.map((function(t){return s.a.createElement(v,{name:t.name,image:t.image,key:t.id,id:t.id,handleClick:e.handleClick})}));return s.a.createElement("div",null,s.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,headerText:this.state.headerText}),s.a.createElement(u,null,this.shuffleArray(t)),s.a.createElement(f,null))}}]),t}(n.Component);a(21);o.a.render(s.a.createElement(x,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.0000368b.chunk.js.map