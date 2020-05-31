(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(n,e,t){n.exports=t(21)},21:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(8),o=t.n(c),i=t(3),l=t(1),u=t(13),m=t(9),f=t.n(m),s="375px",d="425px",p="768px",h="1024px",b="1440px",v="2560px",g={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(s,")"),mobileL:"(max-width: ".concat(d,")"),tablet:"(max-width: ".concat(p,")"),laptop:"(max-width: ".concat(h,")"),laptopL:"(max-width: ".concat(b,")"),desktop:"(max-width: ".concat(v,")"),desktopL:"(max-width: ".concat(v,")")},x=t(2);function E(){var n=Object(l.a)(["\n    h1 {\n        color: #fff;\n        font-size: 3rem;\n        font-weight: normal;\n        margin: 10px 0 35px 0;\n    }\n\n    span {\n        color: #808080;\n        font-weight: bold;\n        text-transform: uppercase;\n    }\n\n    button {\n        padding: 10px 30px;\n        font-size: 1.4rem;\n        color: #fff;\n        background-color: #090909;\n        border: 2px solid #fff;\n        text-transform: uppercase;\n        transition: 0.5s;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #fff;\n            color: #090909;\n        }\n    }\n\n    a {\n        display: inline;\n        padding: 0 0 0 20px;\n        color: #808080;\n        font-weight: bold;\n        text-transform: uppercase;\n        text-decoration: none;\n        transition-duration: 0.3s;\n\n        &:hover {\n            color: #ccc;\n        }\n    }\n"]);return E=function(){return n},n}function j(){var n=Object(l.a)(["\n    img {\n        width: 100%;\n        max-width: 400px;\n    }\n\n    @media "," {\n        display: none;\n    }\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n            display: flex;\n        "]);return O=function(){return n},n}function w(){var n=Object(l.a)(["\n    flex: 1;\n    display: none;\n    margin: 0 20px;\n\n    section {\n        display: grid;\n        grid-template-columns: 2fr 1.5fr;\n        gap: 20px;\n        width: 768px;\n        margin: auto;\n\n        @media "," {\n            grid-template-columns: 1fr;\n            width: 576px;\n        }\n    }\n\n    ","\n"]);return w=function(){return n},n}var k=x.c.main(w(),g.tablet,(function(n){return n.active&&Object(x.b)(O())})),y=x.c.aside(j(),g.tablet),z=x.c.div(E());function S(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{active:n.active},r.a.createElement("section",null,r.a.createElement(z,null,r.a.createElement("span",null,"<Hello World>"),r.a.createElement("h1",null,"Hi. My name is Jordev\xe1 Lucas. I'm junior frontend developer from Natal."),r.a.createElement("button",null,"Contact me"),r.a.createElement("a",{href:"#"},"See my work ",r.a.createElement(u.a,{size:"1.2rem"}))),r.a.createElement(y,null,r.a.createElement("img",{src:f.a,alt:"profile"})))))}function C(){var n=Object(l.a)(["\n            display: flex;\n        "]);return C=function(){return n},n}function L(){var n=Object(l.a)(["\n    flex: 1;  \n    display: none;\n\n    ul {\n        margin: auto;\n        text-align: center;\n        text-transform: uppercase;\n        list-style: none;\n\n        li {\n            font-size: 3rem;\n            line-height: 6rem;\n\n            a {\n                color: #fff;\n                text-decoration: none;\n            }\n        }\n    }\n\n    ","\n"]);return L=function(){return n},n}var M=x.c.div(L(),(function(n){return n.active&&Object(x.b)(C())}));function P(n){return r.a.createElement(M,{active:n.active},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"About me")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Skills")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Contact"))))}function H(){var n=Object(l.a)(["\n            div:first-child {\n                transform: rotate(45deg) translate(0.7rem, 0.7rem);\n            }\n\n            div:not(:first-child):not(:last-child) {\n                opacity: 0\n            }\n\n            div:last-child {\n                transform: rotate(-45deg) translate(0.4rem, -0.5rem);\n            }\n        "]);return H=function(){return n},n}function I(){var n=Object(l.a)(["\n    width: 3.0rem;\n    height: 1.8rem;\n    cursor: pointer;\n\n    &:hover div {\n        background-color: #808080\n    }\n\n    &:focus div {\n        background-color: #ccc\n    }\n\n    div {\n        background-color: #ccc;\n        border-radius: 10px;\n        height: 0.2rem;\n        width: 100%;\n        margin-bottom: 0.6rem;\n        transition-duration: 0.2s;\n\n        &:last-child {\n            margin-bottom: 0;\n        }\n    }\n\n    ","\n"]);return I=function(){return n},n}var A=x.c.div(I(),(function(n){return n.active&&Object(x.b)(H())}));function J(n){var e=n.onChildClick,t=Object(a.useState)(!1),c=Object(i.a)(t,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){e(o)}),[o]),r.a.createElement(A,{active:o,onClick:function(){l(!o)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function _(){var n=Object(l.a)(["\n    color: #ccc;\n    font-size: 2.8rem;\n    text-transform: uppercase;\n    transition-duration: 0.2s;\n    cursor: pointer;\n\n    &:hover {\n        color: #808080\n    }\n"]);return _=function(){return n},n}var B=x.c.span(_());function F(){var n=Object(a.useState)("en"),e=Object(i.a)(n,2),t=e[0],c=e[1];return r.a.createElement(B,{onClick:function(){c("en"===t?"pt":"en")}},t)}function N(){var n=Object(l.a)(["\n    font-size: 2.2rem;\n    text-transform: uppercase;\n    font-weight: normal;\n    color: #808080;\n"]);return N=function(){return n},n}var G=x.c.h1(N());function W(n){return r.a.createElement(G,null,n.title)}function q(){var n=Object(l.a)(["\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 20px;\n"]);return q=function(){return n},n}var D=x.c.header(q());function K(n){var e=Object(a.useState)("home"),t=Object(i.a)(e,2),c=t[0],o=t[1];return r.a.createElement(D,null,r.a.createElement(F,null),r.a.createElement(W,{title:c}),r.a.createElement(J,{onChildClick:function(e){e?(o("menu"),n.changePage()):(o(n.title),n.changePage())}}))}function Q(){var n=Object(l.a)(["\n    text-align: center;\n    padding: 20px 0;\n    \n    ul {\n        a {\n            display: inline;\n            padding: 0 10px;\n            color: #808080;\n            font-weight: bold;\n            text-transform: uppercase;\n            text-decoration: none;\n            transition-duration: 0.3s;\n\n            &:hover {\n                color: #ccc;\n            }\n        }\n    }\n"]);return Q=function(){return n},n}var R=x.c.footer(Q());var T=function(){return r.a.createElement(R,null,r.a.createElement("ul",null,r.a.createElement("a",{href:"https://github.com/jordelucas/",target:"_blank"},"GitHub"),r.a.createElement("a",{href:"https://www.instagram.com/jordevalucas/",target:"_blank"},"Instagram"),r.a.createElement("a",{href:"https://www.linkedin.com/in/jordelucas",target:"_blank"},"Linkedin")))};function U(){var n=Object(l.a)(["    \n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    html {\n        font-size: 62.5%;\n\n        @media "," {\n            font-size: 50%;\n        }\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    .App {\n        display: flex;\n        min-height: 100vh;\n        flex-direction: column;\n    }\n\n    body {\n        background: #090909;\n        -webkit-font-smoothing: antialiased;\n        font-size: 1.6rem;\n    }\n\n    body, input, button {\n        font-family: 'IBM Plex Mono', monospace;\n    }\n"]);return U=function(){return n},n}var V=Object(x.a)(U(),g.tablet);var X=function(){var n=Object(a.useState)("home"),e=Object(i.a)(n,2),t=e[0],c=(e[1],Object(a.useState)(!0)),o=Object(i.a)(c,2),l=o[0],u=o[1],m=Object(a.useState)({home:!0}),f=Object(i.a)(m,2),s=f[0],d=f[1];return Object(a.useEffect)((function(){d({home:!s.home})}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement("div",{className:"App"},r.a.createElement(K,{title:t,changePage:function(){u(!l)}}),r.a.createElement(P,{active:l}),r.a.createElement(S,{active:s.home}),r.a.createElement(T,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root"))},9:function(n,e,t){n.exports=t.p+"static/media/profile.c4865f18.jpg"}},[[14,1,2]]]);
//# sourceMappingURL=main.0cf05a62.chunk.js.map