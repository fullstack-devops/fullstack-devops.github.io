"use strict";(self.webpackChunkfullstack_devops_github_io=self.webpackChunkfullstack_devops_github_io||[]).push([[409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"_ release create"},i=void 0,s={unversionedId:"awesome-ci/cli/awesome-ci_release_create",id:"awesome-ci/cli/awesome-ci_release_create",title:"_ release create",description:"awesome-ci release create",source:"@site/docs/03-awesome-ci/02-cli/awesome-ci_release_create.md",sourceDirName:"03-awesome-ci/02-cli",slug:"/awesome-ci/cli/awesome-ci_release_create",permalink:"/docs/awesome-ci/cli/awesome-ci_release_create",draft:!1,editUrl:"https://github.com/fullstack-devops/fullstack-devops.github.io/tree/main/docs/03-awesome-ci/02-cli/awesome-ci_release_create.md",tags:[],version:"current",frontMatter:{title:"_ release create"},sidebar:"default",previous:{title:"_ release",permalink:"/docs/awesome-ci/cli/awesome-ci_release"},next:{title:"_ release publish",permalink:"/docs/awesome-ci/cli/awesome-ci_release_publish"}},l={},c=[{value:"awesome-ci release create",id:"awesome-ci-release-create",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 25-Feb-2023",id:"auto-generated-by-spf13cobra-on-25-feb-2023",level:6}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"awesome-ci-release-create"},"awesome-ci release create"),(0,n.kt)("p",null,"create a GitHub release"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Print all infos about a pull request in GitHub."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"awesome-ci release create [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help   help for create\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -b, --body string             custom release message (markdown string or file)\n      --dry-run                 make dry-run before writing version to Git by calling it\n      --hotfix                  create a hotfix release\n      --merge-sha string        set the merge sha\n  -l, --patch-level string      predefine patch level of version to Update\n      --prnumber int            overwrite the issue number\n      --release-branch string   set release branch (default: git default)\n      --release-prefix string   set a custom release prefix (default -> Release or Hotfix)\n  -v, --verbose                 verbose output\n      --version string          override version to Update\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./awesome-ci_release"},"awesome-ci release"),"\t - release")),(0,n.kt)("h6",{id:"auto-generated-by-spf13cobra-on-25-feb-2023"},"Auto generated by spf13/cobra on 25-Feb-2023"))}m.isMDXComponent=!0}}]);