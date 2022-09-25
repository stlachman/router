"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[444],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={title:"Linking",sidebar_position:2},o=void 0,l={unversionedId:"features/linking",id:"features/linking",title:"Linking",description:"The expo-router Link component supports client-side navigation to a route. It is similar to the Link component in react-router-dom and next/link.",source:"@site/docs/features/linking.md",sourceDirName:"features",slug:"/features/linking",permalink:"/router/docs/features/linking",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Linking",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Routes",permalink:"/router/docs/features/routes"},next:{title:"Layouts",permalink:"/router/docs/features/layouts"}},p={},s=[{value:"Imperative API",id:"imperative-api",level:2},{value:"Testing",id:"testing",level:2},{value:"Dev mode",id:"dev-mode",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-router")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component supports client-side navigation to a route. It is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"next/link"),"."),(0,r.kt)("p",null,"When JavaScript is disabled or the client is offline, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component will render a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," element. Otherwise, the default behavior will be intercepted and the client-side router will navigate to the route (faster and smoother)."),(0,r.kt)("p",null,"Meaning you get the best of both worlds: a fast client-side navigation experience, and a fallback for when JavaScript is disabled or hasn't loaded yet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Link } from "expo-router";\n\nexport default function Page() {\n  return (\n    <View>\n      <Link href="/">Home</Link>\n    </View>\n  );\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try to migrate as many: ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation.navigate")," calls to ",(0,r.kt)("inlineCode",{parentName:"li"},"Link")," components. This will make your app faster and more accessible."),(0,r.kt)("li",{parentName:"ul"},"Unlike ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation.navigate"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"Link")," component supports using full paths like ",(0,r.kt)("inlineCode",{parentName:"li"},"/profile/settings"),". This same link could be implemented imperatively using ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation.navigate('profile', { screen: 'settings' })"))),(0,r.kt)("h2",{id:"imperative-api"},"Imperative API"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-prop"},(0,r.kt)("inlineCode",{parentName:"a"},"navigation")," object")," from React Navigation to imperatively navigate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default function Route({ navigation }) {\n  return (\n    <View>\n      <Text\n        onPress={() => {\n          // Go back to the previous screen using the imperative API.\n          navigation.goBack();\n        }}\n      >\n        Details Screen\n      </Text>\n    </View>\n  );\n}\n")),(0,r.kt)("p",null,"Alternatively, you can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop from any component using the hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { useNavigation } from "@react-navigation/native";\n\nfunction MyBackButton() {\n  const navigation = useNavigation();\n\n  return <Button title="Go back" onPress={() => navigation.goBack()} />;\n}\n')),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"On native, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"uri-scheme")," CLI to test opening native links on a device."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx uri-scheme open exp://192.168.87.39:19000/--/form-sheet --ios\n")),(0,r.kt)("p",null,"You can also search for links directly in a browser like Safari or Chrome to test deep linking on physical devices. Learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/deep-linking"},"testing deep links"),"."),(0,r.kt)("h2",{id:"dev-mode"},"Dev mode"),(0,r.kt)("p",null,"We currently inject a ",(0,r.kt)("inlineCode",{parentName:"p"},"/__index")," file which provides a list of all routes in the app. This is useful for debugging and development. This screen is only injected during development, and won't be available in production."),(0,r.kt)("p",null,"We may remove this feature for the official release, but it's useful for now."))}c.isMDXComponent=!0}}]);