(this.webpackJsonppupster=this.webpackJsonppupster||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","clicked":false},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","clicked":false},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","clicked":false},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","clicked":false},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","clicked":false},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","clicked":false},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","clicked":false},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","clicked":false},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","clicked":false},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","clicked":false},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","clicked":false},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","clicked":false}]')},,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(3),c=a.n(o),r=a(4),s=a(5),l=a(6),d=a(9),m=a(7),g=a(10);a(16);var p=function(e){return n.a.createElement("div",{className:"header"},n.a.createElement("p",{id:"headerLeft"}," Pics Clicky Game "),n.a.createElement("p",{id:"headerMiddle"},e.headerText),n.a.createElement("p",{id:"headerRight"},"Score: ",e.score," | Top Score: ",e.topScore," "))};a(17);var u=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(18);var f=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",{id:"footerleft"},"Pics Clicky Game"))},h=a(1),k=a(8),v=a.n(k);a(20);var b=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)}})))},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={topScore:0,score:0,headerText:"Don't click on the same image twice!",friends:h},a.handleClick=function(e){console.log(e);for(var t=a.state.friends,i=0;i<t.length;i++)e===t[i].id&&(!1===t[i].clicked?a.setState({score:a.state.score+1,friends:v()(a.state.friends,Object(r.a)({},i,{clicked:{$set:!0}})),headerText:"You guessed correctly!"}):(a.state.score>a.state.topScore&&a.setState({topScore:a.state.score,score:0,headerText:"Wrong! You guessed incorrectly",friends:h},(function(){console.log("Updated new top score!")})),a.state.score<=a.state.topScore&&a.setState({score:0,headerText:"You guessed wrong!",friends:h},(function(){console.log("Reset the game, you did not beat the top score!")}))))},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[a],e[a]=i}return e},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.friends.map((function(t){return n.a.createElement(b,{name:t.name,image:t.image,key:t.id,id:t.id,handleClick:e.handleClick})}));return n.a.createElement("div",null,n.a.createElement(p,{score:this.state.score,topScore:this.state.topScore,headerText:this.state.headerText}),n.a.createElement(u,null,this.shuffleArray(t)),n.a.createElement(f,null))}}]),t}(i.Component);a(21);c.a.render(n.a.createElement(w,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.17720867.chunk.js.map