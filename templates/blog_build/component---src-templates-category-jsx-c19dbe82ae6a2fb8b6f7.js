(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1wty":function(t,e,a){"use strict";var n=a("VbXa"),r=a.n(n),o=(a("LJRI"),a("VSsl"),a("q1tI")),s=a.n(o),p=a("Wbzz"),c=(a("oEGL"),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.avatar,a=t.name;return e&&a?s.a.createElement("img",{className:"author-thumb",src:e,alt:a,"data-pin-nopin":"true"}):null},e}(s.a.Component)),i=a("KDyN"),l=a("IpnI"),m=a.n(l),u=a("ufpW"),d=a("Wrry"),h=a("Myj9"),f=a("W9jU"),E=a("kEWb"),g=(a("ELO7"),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e,a=(t=this.props.postEdges,e=this.props.postAuthors,t.map((function(t){return{path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,author:E.a.getAuthor(e,t.node.frontmatter.author,m.a.blogAuthorId),excerpt:t.node.excerpt,timeToRead:t.node.timeToRead}})));return s.a.createElement("div",null,a.map((function(t){var e=t.title,a=t.path,n=t.excerpt,r=t.author,o=t.tags,l=t.date,m=t.post_class?t.post_class:"post";return s.a.createElement(d.a,{className:m,key:e},s.a.createElement(h.a,null,s.a.createElement("h2",{className:"post-title"},s.a.createElement(p.Link,{to:a},e))),s.a.createElement("section",{className:"post-excerpt"},s.a.createElement("p",null,n," ",s.a.createElement(p.Link,{className:"read-more",to:a},"»"))),s.a.createElement("footer",{className:"post-meta"},s.a.createElement(c,{avatar:r.image,name:r.name}),s.a.createElement(u.a,{url:"/author/"+r.uid,name:r.name}),s.a.createElement(i.a,{prefix:" on ",tags:o}),s.a.createElement(f.a,{date:l})))})))},e}(s.a.Component));e.a=g},ELO7:function(t,e,a){},amwm:function(t,e,a){"use strict";a.r(e);var n=a("VbXa"),r=a.n(n),o=a("q1tI"),s=a.n(o),p=a("TJpk"),c=a.n(p),i=a("1wty"),l=a("IpnI"),m=a.n(l),u=a("L12J"),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.pageContext.category,e=this.props.data.allMarkdownRemark.edges,a=this.props.data.authors.edges;return s.a.createElement(u.a,{location:this.props.location},s.a.createElement("div",{className:"category-container"},s.a.createElement(c.a,{title:'Posts in category "'+t+'" | '+m.a.siteTitle}),s.a.createElement(i.a,{postEdges:e,postAuthors:a})))},e}(s.a.Component);e.default=d},oEGL:function(t,e,a){}}]);
//# sourceMappingURL=component---src-templates-category-jsx-c19dbe82ae6a2fb8b6f7.js.map