if("__TAURI__"in window){var __TAURI_PLUGIN_CLIPBOARDMANAGER__=function(n){"use strict";async function r(n,r={},a){return window.__TAURI_INTERNALS__.invoke(n,r,a)}return"function"==typeof SuppressedError&&SuppressedError,n.clear=async function(){await r("plugin:clipboard-manager|clear")},n.readText=async function(){return(await r("plugin:clipboard-manager|read")).plainText.text},n.writeHtml=async function(n,a){return r("plugin:clipboard-manager|write_html",{data:{html:{html:n,altHtml:a}}})},n.writeText=async function(n,a){return r("plugin:clipboard-manager|write",{data:{plainText:{label:a?.label,text:n}}})},n}({});Object.defineProperty(window.__TAURI__,"clipboardManager",{value:__TAURI_PLUGIN_CLIPBOARDMANAGER__})}