(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1052:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=n(24),r=n(25),l=i(n(1073));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(p(p(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?p(e):t}(this,s(t).call(this,e)))),"addRule",function(){var e=p(p(n)),t=n.state,a=t.site,o=t.shop,l=t.version;n.props.dispatch({type:"image/addVersion",payload:{site:a,shop:o,version:l},callback:function(t){0===t&&(0,r.confirm)({caption:"添加版本成功",text:"马上为该版本编辑规则？",type:"success"}).then(function(t){"cancel"===t||(e.props.dispatch({type:"image/change",payload:{site:a,shop:o,version:l,ver_com_key:"".concat(a,"_").concat(o,"_").concat(l)}}),e.props.history.replace("/suggest/image"))})}})}),d(p(p(n)),"handleSiteChange",function(e){n.setState({site:e.target.value})}),d(p(p(n)),"handleShopChange",function(e){n.setState({shop:e.target.value})}),d(p(p(n)),"handleVersionChange",function(e){n.setState({version:e.target.value})}),n.state={site:"",shop:"",version:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.default.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"image/fetchRuleInfos"})}},{key:"render",value:function(){return a.default.createElement("div",{className:"main adc-manage-main"},a.default.createElement("div",{className:"manage-area"},a.default.createElement(l.default,{title:"新建规则版本"}),a.default.createElement("div",{className:"manage-area-main"},a.default.createElement("div",{className:"manage-area-main-inner"},a.default.createElement("div",{className:"tc-panel"},a.default.createElement("div",{className:"tc-panel-bd"},a.default.createElement("div",{className:"param-box"},a.default.createElement("div",{className:"param-bd"},a.default.createElement("p",{className:"text"},"规则版本由厂区、厂别、版本号3个字段组成，添加后不支持修改或删除，请谨慎填写。")))),a.default.createElement("div",{className:"tc-panel-ft"},a.default.createElement("div",null,a.default.createElement("ul",{className:"form-list"},a.default.createElement("li",null,a.default.createElement("div",{className:"form-label"},a.default.createElement("label",{htmlFor:"addSite"},"厂区")),a.default.createElement(r.Input,{id:"addSite",placeholder:"如T1",onChange:this.handleSiteChange,value:this.state.site})),a.default.createElement("li",null,a.default.createElement("div",{className:"form-label"},a.default.createElement("label",{htmlFor:"addShop"},"厂别")),a.default.createElement(r.Input,{id:"addShop",placeholder:"如ARRAY",onChange:this.handleShopChange,value:this.state.shop})),a.default.createElement("li",null,a.default.createElement("div",{className:"form-label"},a.default.createElement("label",{htmlFor:"addVersion"},"版本")),a.default.createElement(r.Input,{id:"addVersion",placeholder:"如v1.0",onChange:this.handleVersionChange,value:this.state.version})))),a.default.createElement("div",{style:{fontSize:"14px"}}," "),a.default.createElement(r.Button,{className:"tc-15-btn m",disabled:!(this.state.site&&this.state.shop&&this.state.version),loading:this.props.loading,onClick:this.addRule},"添加新规则版本")))))))}}]),t}(),h=(0,o.connect)(function(e){var t=e.apply,n=e.image;return{loading:t.loading,ruleInfos:n.ruleInfos,site:n.site,shop:n.shop,version:n.version}})(m);t.default=h},1053:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(1135)).default;t.default=a},1073:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,i(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a.default.Component),function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(t,[{key:"render",value:function(){var e=this.props.title;return a.default.createElement("div",{className:"manage-area-title"},a.default.createElement("h2",null,e))}}]),t}();t.default=c},1135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=n(24),r=n(25),l=i(n(1073));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return d(p(p(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?p(e):t}(this,(e=s(t)).call.apply(e,[this].concat(o))))),"applySetting",function(){var e=n.props,t=e.site,a=e.shop,o=e.version;n.props.dispatch({type:"apply/applySetting",payload:{site:t,shop:a,version:o}})}),d(p(p(n)),"handleSiteChange",function(e){n.props.dispatch({type:"image/change",payload:{site:e,shop:"",version:""}})}),d(p(p(n)),"handleShopChange",function(e){n.props.dispatch({type:"image/change",payload:{shop:e,version:""}})}),d(p(p(n)),"handleVersionChange",function(e){var t=n.props,a=t.site,o=t.shop;n.props.dispatch({type:"image/change",payload:{version:e,ver_com_key:"".concat(a,"_").concat(o,"_").concat(e)}})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.default.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"image/fetchRuleInfos"})}},{key:"render",value:function(){var e=this.props,t=e.site,n=e.shop,o=e.version,i=e.ruleInfos,u=[],c=[],s=[],f=!0,p=!1,d=void 0;try{for(var m,h=function(){var e=m.value;e.site&&!u.some(function(t){return t.value==e.site})&&u.push({text:e.site,value:e.site})},y=i[Symbol.iterator]();!(f=(m=y.next()).done);f=!0)h()}catch(e){p=!0,d=e}finally{try{f||null==y.return||y.return()}finally{if(p)throw d}}if(t){var v=!0,b=!1,g=void 0;try{for(var E,_=function(){var e=E.value;e.site==t&&(c.some(function(t){return t.value==e.shop})||c.push({text:e.shop,value:e.shop}),n&&e.shop==n&&!s.some(function(t){return t.value==e.version})&&s.push({text:e.version,value:e.version}))},S=i[Symbol.iterator]();!(v=(E=S.next()).done);v=!0)_()}catch(e){b=!0,g=e}finally{try{v||null==S.return||S.return()}finally{if(b)throw g}}}return a.default.createElement("div",{className:"main adc-manage-main"},a.default.createElement("div",{className:"manage-area"},a.default.createElement(l.default,{title:"规则生效"}),a.default.createElement("div",{className:"manage-area-main"},a.default.createElement("div",{className:"manage-area-main-inner"},a.default.createElement("div",{className:"tc-panel"},a.default.createElement("div",{className:"tc-panel-bd"},a.default.createElement("div",{className:"param-box"},a.default.createElement("div",{className:"param-bd"},a.default.createElement("p",{className:"text"},"为了避免设置项频繁刷新，请在配置Image信息和Glass开单建议后，点击下方按钮应用当前配置。")))),a.default.createElement("div",{className:"tc-panel-ft"},a.default.createElement("div",null,a.default.createElement("span",{style:{color:"red"}},"选择规则版本："),a.default.createElement(r.Select,{className:"tc-15-select s",value:t,list:u,selectFirstByDefault:!1,placeholder:"请选择厂区",onChange:this.handleSiteChange}),a.default.createElement(r.Select,{className:"tc-15-select s",value:n,list:c,selectFirstByDefault:!1,placeholder:"请选择厂别",onChange:this.handleShopChange,disabled:!t}),a.default.createElement(r.Select,{className:"tc-15-select s",value:o,list:s,selectFirstByDefault:!1,placeholder:"请选择版本",onChange:this.handleVersionChange,disabled:!n})),a.default.createElement("div",{style:{fontSize:"14px"}}," "),a.default.createElement(r.Button,{className:"tc-15-btn m",disabled:!(t&&n&&o),loading:this.props.loading,onClick:this.applySetting},"应用当前配置")))))))}}]),t}(),h=(0,o.connect)(function(e){var t=e.apply,n=e.image;return{loading:t.loading,ruleInfos:n.ruleInfos,site:n.site,shop:n.shop,version:n.version}})(m);t.default=h}}]);
//# sourceMappingURL=apply.36ca5f71.js.map