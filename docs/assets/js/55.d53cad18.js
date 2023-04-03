(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{406:function(t,e,a){"use strict";a.r(e);var r=a(14),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[t._v("#")]),t._v(" Storage")]),t._v(" "),e("p",[t._v("You can customize the initial state of the module from the editor initialization, by passing the following "),e("a",{attrs:{href:"https://github.com/GrapesJS/grapesjs/blob/master/src/storage_manager/config/config.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Object"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("storageManager")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Once the editor is instantiated you can use its API and listen to its events. Before using these methods, you should get the module from the instance.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Listen to events")]),t._v("\neditor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'storage:start'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the API")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" storageManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Storage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstorageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"available-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-events"}},[t._v("#")]),t._v(" Available Events")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("storage:start")]),t._v(" - Before the storage request is started")]),t._v(" "),e("li",[e("code",[t._v("storage:start:store")]),t._v(" - Before the store request. The object to store is passed as an argument (which you can edit)")]),t._v(" "),e("li",[e("code",[t._v("storage:start:load")]),t._v(" - Before the load request. Items to load are passed as an argument (which you can edit)")]),t._v(" "),e("li",[e("code",[t._v("storage:load")]),t._v(" - Triggered when something was loaded from the storage, loaded object passed as an argument")]),t._v(" "),e("li",[e("code",[t._v("storage:store")]),t._v(" - Triggered when something is stored to the storage, stored object passed as an argument")]),t._v(" "),e("li",[e("code",[t._v("storage:end")]),t._v(" - After the storage request is ended")]),t._v(" "),e("li",[e("code",[t._v("storage:end:store")]),t._v(" - After the store request")]),t._v(" "),e("li",[e("code",[t._v("storage:end:load")]),t._v(" - After the load request")]),t._v(" "),e("li",[e("code",[t._v("storage:error")]),t._v(" - On any error on storage request, passes the error as an argument")]),t._v(" "),e("li",[e("code",[t._v("storage:error:store")]),t._v(" - Error on store request, passes the error as an argument")]),t._v(" "),e("li",[e("code",[t._v("storage:error:load")]),t._v(" - Error on load request, passes the error as an argument")])]),t._v(" "),e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#getconfig"}},[t._v("getConfig")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#isautosave"}},[t._v("isAutosave")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#setautosave"}},[t._v("setAutosave")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getstepsbeforesave"}},[t._v("getStepsBeforeSave")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#setstepsbeforesave"}},[t._v("setStepsBeforeSave")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getstorages"}},[t._v("getStorages")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getcurrent"}},[t._v("getCurrent")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getcurrentstorage"}},[t._v("getCurrentStorage")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#setcurrent"}},[t._v("setCurrent")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getstorageoptions"}},[t._v("getStorageOptions")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#add"}},[t._v("add")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get"}},[t._v("get")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#store"}},[t._v("store")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#load"}},[t._v("load")])])]),t._v(" "),e("h2",{attrs:{id:"getconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getconfig"}},[t._v("#")]),t._v(" getConfig")]),t._v(" "),e("p",[t._v("Get configuration object")]),t._v(" "),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"isautosave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isautosave"}},[t._v("#")]),t._v(" isAutosave")]),t._v(" "),e("p",[t._v("Check if autosave is enabled.")]),t._v(" "),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"setautosave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setautosave"}},[t._v("#")]),t._v(" setAutosave")]),t._v(" "),e("p",[t._v("Set autosave value.")]),t._v(" "),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("value")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"getstepsbeforesave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getstepsbeforesave"}},[t._v("#")]),t._v(" getStepsBeforeSave")]),t._v(" "),e("p",[t._v("Returns number of steps required before trigger autosave.")]),t._v(" "),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t._v("Number"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"setstepsbeforesave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setstepsbeforesave"}},[t._v("#")]),t._v(" setStepsBeforeSave")]),t._v(" "),e("p",[t._v("Set steps required before trigger autosave.")]),t._v(" "),e("h3",{attrs:{id:"parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("value")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t._v("Number"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),e("p",[t._v("Add new storage.")]),t._v(" "),e("h3",{attrs:{id:"parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("type")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1)]),t._v(" Storage type")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("storage")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Storage definition")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("storage.load")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function"),e("OutboundLink")],1)]),t._v(" Load method")]),t._v(" "),e("li",[e("code",[t._v("storage.store")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function"),e("OutboundLink")],1)]),t._v(" Store method")])])])]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("storageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("storageOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("store")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" storageOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),e("p",[t._v("Return storage by type.")]),t._v(" "),e("h3",{attrs:{id:"parameters-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("type")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1)]),t._v(" Storage type")])]),t._v(" "),e("p",[t._v("Returns "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1),t._v(" | null)")])]),t._v(" "),e("h2",{attrs:{id:"getstorages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getstorages"}},[t._v("#")]),t._v(" getStorages")]),t._v(" "),e("p",[t._v("Get all storages.")]),t._v(" "),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"getcurrent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getcurrent"}},[t._v("#")]),t._v(" getCurrent")]),t._v(" "),e("p",[t._v("Get current storage type.")]),t._v(" "),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"setcurrent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setcurrent"}},[t._v("#")]),t._v(" setCurrent")]),t._v(" "),e("p",[t._v("Set current storage type.")]),t._v(" "),e("h3",{attrs:{id:"parameters-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("type")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1)]),t._v(" Storage type")])]),t._v(" "),e("h2",{attrs:{id:"getstorageoptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getstorageoptions"}},[t._v("#")]),t._v(" getStorageOptions")]),t._v(" "),e("p",[t._v("Get storage options by type.")]),t._v(" "),e("h3",{attrs:{id:"parameters-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-6"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("type")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1)]),t._v(" Storage type")])]),t._v(" "),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" store")]),t._v(" "),e("p",[t._v("Store data in the current storage.")]),t._v(" "),e("h3",{attrs:{id:"parameters-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-7"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Project data.")]),t._v(" "),e("li",[e("code",[t._v("options")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1),t._v("?")]),t._v(" Storage options. (optional, default "),e("code",[t._v("{}")]),t._v(")")])]),t._v(" "),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProjectData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" storageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("store")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Stored data.")]),t._v(" "),e("h2",{attrs:{id:"load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[t._v("#")]),t._v(" load")]),t._v(" "),e("p",[t._v("Load resource from the current storage by keys")]),t._v(" "),e("h3",{attrs:{id:"parameters-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-8"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("options")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1),t._v("?")]),t._v(" Storage options. (optional, default "),e("code",[t._v("{}")]),t._v(")")])]),t._v(" "),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" storageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\neditor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadProjectData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Loaded data.")])])}),[],!1,null,null,null);e.default=s.exports}}]);