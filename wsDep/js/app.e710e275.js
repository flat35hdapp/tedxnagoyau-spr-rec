(function(t){function e(e){for(var i,s,l=e[0],c=e[1],n=e[2],d=0,g=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&g.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);v&&v(e);while(g.length)g.shift()();return o.push.apply(o,n||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var n=0;n<l.length;n++)e(l[n]);var v=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("8a23"),r=a.n(i);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("v-app-bar",{attrs:{app:"",color:"white","inverted-scroll":!0,"scroll-threshold":"600"}},[a("v-img",{attrs:{src:"https://live.staticflickr.com/65535/49633281918_bcdc62932a_b.jpg",contain:!0,"max-height":"25",position:"left"}})],1),a("v-content",[a("section",{attrs:{id:"#setsumeikai"}},[a("v-parallax",{attrs:{src:t.imgLink.firstView,height:"600"}},[a("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[a("h1",{staticClass:"white--text mb-2 display-1 text-xs-center tategaki"},[t._v("求む、熱意ある学生。 ")]),a("div",{staticClass:"white--text subheading mb-3 text-xs-center",staticStyle:{"font-weight":"900","text-shadow":"2px 2px #000000","border-bottom":"solid 2px red"}},[t._v("運営メンバー募集します")])])],1)],1),a("v-container",[a("div",{staticClass:"about_section"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{xs:"12",sm:"10"}},[a("div",[a("v-card",[a("v-img",{attrs:{src:t.imgLink.group2017,alt:""}}),a("v-card-title",[t._v("about us")]),a("v-card-subtitle",[t._v("TEDxNagoyaUについて")]),a("v-card-text",[t._v("TEDxNagoyaUは学生のみで運営されるTED公認のTEDxイベント運営団体です。プレゼンの内容をスピーカーと一緒に考えたり、協力してくださる企業の方々を探したり、マーケティングを行ったりと、イベント運営に必要なことをすべて自分たちで行っています。TEDxNagoyaU 2020に向けて、私たちと一緒に最高のイベントを作り上げませんか？")])],1)],1)])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{xs:"12",sm:"10"}},[a("div",[a("v-card",[a("v-img",{attrs:{src:t.imgLink.mc2017,alt:""}}),a("v-card-title",[t._v("about TEDx")]),a("v-card-subtitle",[t._v("TEDxって？")]),a("v-card-text",[t._v("TEDxとは、「ideas worth spreading」というTEDの 精神のもとに世界各地で発足し、 独自に運営されているイベントです。TEDxはTEDイベントと同じように運営されていますが、TEDに定められたルールの下で独自に運営されています。")])],1)],1)])],1)],1),a("v-row",[a("v-col",{attrs:{xs:"12"}},[a("div",[a("v-card",{attrs:{color:t.gray}},[a("v-card-title",[t._v("Event Content")]),a("v-card-subtitle",[t._v("どんなイベント？")]),a("v-card-text",[t._v("イベントは1日を通して行い、登壇者のトークだけでなく、参加者同士の交流も多くあるのが特徴的です。")]),a("v-row",{staticClass:"mx-1",attrs:{justify:"center"}},t._l(t.eventContents,(function(e){return a("v-col",{key:e.title,attrs:{xs:"12",sm:"6",md:"4"}},[a("div",[a("v-card",[a("v-img",{attrs:{src:e.img,alt:""}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-subtitle",[t._v(t._s(e.subtitle))]),a("v-card-text",[t._v(t._s(e.text))])],1)],1)])})),1)],1)],1)])],1),a("v-row",[a("v-col",{attrs:{xs:"12"}},[a("div",[a("v-card",{attrs:{color:t.gray}},[a("v-card-title",[t._v("Teams")]),a("v-card-subtitle",[t._v("加入したらなにをする？")]),a("v-card-text",[t._v("春から加入したメンバーは、7月（予定）のイベントに向けて以下の3つのチームに分かれて活動を行います。")]),a("v-row",{staticClass:"mx-1",attrs:{justify:"center"}},t._l(t.teamContents,(function(e){return a("v-col",{key:e.title,attrs:{xs:"12",sm:"6",md:"4"}},[a("div",[a("v-card",[a("v-img",{attrs:{src:e.img,alt:""}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-subtitle",[t._v(t._s(e.subtitle))]),a("v-card-text",[t._v(t._s(e.text))])],1)],1)])})),1)],1)],1)])],1),a("v-row",[a("v-col",{attrs:{xs:"12"}},[a("div",[a("v-card",{attrs:{color:t.gray,id:"setsumeikai"}},[a("v-card-title",[t._v("新歓イベント")]),a("v-card-subtitle",[t._v("もしサークル選びの候補になったら")]),a("v-card-text",[t._v("新メンバー募集のため、説明会とサロンイベントを開催します！")]),a("v-row",{staticClass:"mx-1",attrs:{justify:"left"}},t._l(t.shinkanEvents,(function(e){return a("v-col",{key:e.title,attrs:{xs:"12",sm:"6",md:"6"}},[a("div",[a("v-card",[a("v-img",{attrs:{src:e.img}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-subtitle",[t._v(t._s(e.subtitle))]),a("v-card-text",[t._v(t._s(e.text))])],1)],1)])})),1)],1)],1)])],1),a("v-row",[a("v-col",{attrs:{xs:"12"}},[a("div",[a("v-card",{attrs:{color:t.gray}},[a("v-card-title",[t._v("Info")]),a("v-card-subtitle",[t._v("迷っているあなたへ")]),a("v-card-text",[t._v("サークル・部活選びの参考に、TEDxNagoyaUの特徴やメンバーの声をまとめました！")]),a("v-row",{staticClass:"mx-1",attrs:{justify:"left"}},[a("v-col",{attrs:{xs:"6",sm:"6",md:"4"}},[a("div",[a("v-card",{},[a("v-card-title",[t._v("こんな人に入って欲しい！")]),a("v-card-subtitle"),a("v-card-text",[t._v("hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge")])],1)],1)]),a("v-col",{attrs:{xs:"6",sm:"6",md:"4"}},[a("div",[a("v-card",{},[a("v-card-title",[t._v("メンバーの声")]),a("v-card-subtitle"),a("v-card-text",[t._v("hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge")])],1)],1)]),a("v-col",{attrs:{xs:"6",sm:"6",md:"4"}},[a("div",[a("v-card",{},[a("v-card-title",[t._v("参加のメリット")]),a("v-card-subtitle"),a("v-card-text",[t._v("hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge")])],1)],1)]),a("v-col",{attrs:{xs:"6",sm:"6",md:"4"}},[a("div",[a("v-card",{},[a("v-card-title",[t._v("参加のデメリット")]),a("v-card-subtitle"),a("v-card-text",[t._v("hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge")])],1)],1)])],1)],1)],1)])],1),a("v-row",[a("v-col",{attrs:{xs:"12"}},[a("v-card",{attrs:{color:t.gray}},[a("v-card-title",[t._v("Requirements")]),a("v-card-subtitle",[t._v("加入までの流れです。Salonへの参加は必須ではありませんが、毎年好評のコンテンツのためぜひご参加ください。その他説明会、応募、面接は加入する上で必須事項になります。")]),a("v-card-text",[a("v-timeline",{attrs:{dense:""}},t._l(t.timeLineItems,(function(e,i){return a("v-timeline-item",{key:i,attrs:{right:""}},[a("v-card",[a("v-card-title",[t._v(t._s(i+1)+"、"+t._s(e.title))]),a("v-card-text",[a("p",[t._v("日程："+t._s(e.date))]),a("p",[t._v(t._s(e.text))])]),a("v-card-text",[e.btnName?a("v-btn",{staticClass:"mx-auto",attrs:{color:"primary",large:"",depressed:"",disabled:e.disabled},on:{click:function(a){return t.$vuetify.goTo(e.btnLink)}}},[t._v(t._s(e.btnName))]):t._e()],1)],1)],1)})),1)],1)],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("div",{},[a("v-card",[a("v-card-title",[t._v("Contact")]),a("v-card-text",[t._v("不明な点や心配な点などがありましたら、お気軽にご連絡ください。")]),a("v-list",t._l(t.contactList,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-icon",[a("v-icon",{attrs:{href:e.link}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("a",{attrs:{href:e.link}},[a("v-list-item-title",[t._v(t._s(e.title))])],1),e.subtitle?a("v-list-item-subtitle",[t._v(t._s(e.subtitle))]):t._e()],1)],1)})),1)],1)],1)])],1)],1)],1),a("v-footer",[a("v-card-text",{staticClass:"text-center"},[t._v("© TEDxNagoyaU")])],1)],1)},o=[],s={name:"App",data:function(){return{imgLink:{firstView:"https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg",group2017:"https://live.staticflickr.com/4614/28001906269_7c28edf9f3_o.jpg",mc2017:"https://live.staticflickr.com/4727/38653364914_4c0415b74a_k.jpg",tedxnagoyaUlogo:"https://live.staticflickr.com/65535/49633281918_bcdc62932a_b.jpg"},eventContents:[{title:"Talk Session",subtitle:"スピーカーによるトーク",img:"https://live.staticflickr.com/1764/43251114892_a7f2f6c16a_k.jpg",text:"7~9人の"},{title:"Break Session",subtitle:"トークに集中した後に",img:"https://live.staticflickr.com/65535/49596215708_44d57902fe_k.jpg",text:"hogehoge"},{title:"After Party",subtitle:"参加者同士でイベントの感想を共有",img:"https://live.staticflickr.com/65535/48261788467_da6b0df5fd_k.jpg",text:"hogehoge"}],teamContents:[{title:"Speaker Team",subtitle:"スピーカーとトークを一緒に作り上げるチーム",img:"https://live.staticflickr.com/1810/41531993540_04681e7caa_k.jpg",text:"本番イベントのメインコンテンツ、スピーカーのトーク内容に深く関わるチームです。スピーカーの決定から、トーク内容の磨き上げ、Body languageのやり方についてスピーカーの方々にアドバイスしていきます！2019年の登壇者の方々の情報はこちらから!"},{title:"Communication Team",subtitle:"協力企業、大学等と連携するチーム",img:"https://live.staticflickr.com/835/28473721867_c8a63a7647_k.jpg",text:"主にイベントの開催にお力添えいただく協賛企業様とのやり取りを行うチームです。具体的には、メールや電話などで連絡を行ってアポイントメントを取り、企業訪問を行い、協賛をいただくということをやっています。また,当日のブレイクタイムに行われるコンテンツ企画・制作も行っています。"},{title:"Tech Team",subtitle:"SNS, HPの管理からタスク自動化、当日機材操作まで",img:"https://live.staticflickr.com/65535/48195485222_8dbbb4a284_h.jpg",text:"本番では舞台の映像照明音響を一手に引き受け、本番前は当ホームページ管理・SNS管理・団体内システムの構築などを行っている技術系チームです。なにかを作ること・便利にすることに興味がある人大歓迎！"}],shinkanEvents:[{title:"説明会",subtitle:"実際のミーティングに参加して雰囲気をつかもう",date:"4/16, 4/30",img:"https://live.staticflickr.com/65535/49634567807_4dde461a02_b.jpg",text:"TEDxNagoyaUについて、活動内容・イベント詳細はもちろん、「自分がやりたいことができるのか」「雰囲気は合っているか」を肌で確認していただけます！加入を少しでも検討される方には参加していただくことを強くおすすめしています。"},{title:"TEDxNagoyaU Salon",subtitle:"TEDxNagoyaUに興味が無くてもオススメ！！！",date:"",img:"https://live.staticflickr.com/65535/49634344386_00b3cdfd7b_b.jpg",text:"毎年「これで参加を決めた！」という人が多いイベントです！新入生の方々の今後の大学生活に活かされること間違いなしのコンテンツになっています！！"}],timeLineItems:[{title:"説明会に参加",date:"4/16, 4/30",text:"TEDxNagoyaUに加入を希望される方には必ず説明会に参加していただいています。もし参加が難しい場合は別途対応させていただきますので、Twitterやメールでご連絡ください。",btnName:"説明会詳細",btnLink:"#setsumeikai",disabled:!1},{title:"Salonに参加",date:"4/23",text:"夏の本番イベントに向けて活動していくには、どんなものを作り上げていくのかイメージできることが大事です。サロンイベントを経験することで、加入後も明確なイメージを持ちながら活動できます！",btnName:null,btnLink:null,disabled:null},{title:"応募",date:"4/16 ~ 5/8",text:"「TEDxNagoyaUにメンバーとして参加したい！」と意思が固まったら、下記フォームから必要事項を入力してください。後日入力していただいた連絡先に面接日程の調整案内を送らせていただきます。",btnName:"申込フォーム",btnLink:null,disabled:!0},{title:"面接",date:"4/23 ~ 5/13",text:"TEDxNagoyaUは、運営がうまくいくことだけではなく、新メンバーの方々がうまく活動できるかどうかを重視しています。そのため、簡単な面接でなぜ加入したいのかやTEDxNagoyaUを選んでいただいた理由などについてお聞きしています。",btnName:null,btnLink:null,disabled:null}],contactList:[{title:"@TEDxNagoyaU",subtitle:"最新情報を毎日更新中！",icon:"mdi-twitter",link:"https://twitter.com/TEDxNagoyaU"},{title:"@tedxnagoyau",subtitle:null,icon:"mdi-instagram",link:"https://www.instagram.com/tedxnagoyau/"},{title:"info@tedxnagoyau.com",subtitle:null,icon:"mdi-mail",link:"mailto:info@tedxnagoyau.com"},{title:"/tedxnagoyau",subtitle:null,icon:"mdi-facebook",link:"https://www.facebook.com/tedxnagoyau/"}],gray:"#FAFAFA"}}},l=s,c=(a("034f"),a("2877")),n=a("6544"),v=a.n(n),d=a("7496"),g=a("40dc"),u=a("8336"),m=a("b0af"),h=a("99d9"),_=a("62ad"),x=a("a523"),b=a("a75b"),f=a("553a"),p=a("132d"),y=a("adda"),k=a("a722"),w=a("8860"),T=a("da13"),j=a("5d23"),E=a("34c3"),V=a("8b9c"),C=a("0fd9"),D=a("8414"),N=a("1e06"),L=Object(c["a"])(l,r,o,!1,null,null,null),S=L.exports;v()(L,{VApp:d["a"],VAppBar:g["a"],VBtn:u["a"],VCard:m["a"],VCardSubtitle:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:_["a"],VContainer:x["a"],VContent:b["a"],VFooter:f["a"],VIcon:p["a"],VImg:y["a"],VLayout:k["a"],VList:w["a"],VListItem:T["a"],VListItemContent:j["a"],VListItemIcon:E["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VParallax:V["a"],VRow:C["a"],VTimeline:D["a"],VTimelineItem:N["a"]});var U=a("f309");i["a"].use(U["a"]);var I=new U["a"]({icon:{iconfont:"mdiSvg"}});i["a"].config.productionTip=!1,new i["a"]({vuetify:I,render:function(t){return t(S)}}).$mount("#app")},"8a23":function(t,e,a){}});
//# sourceMappingURL=app.e710e275.js.map