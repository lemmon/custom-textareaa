"use strict";(function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}return b})()({1:[function(a){const b=a("./");customElements.define("custom-textarea",b)},{"./":2}],2:[function(a,b){b.exports=class extends HTMLElement{constructor(){super();const a=this.attachShadow({mode:"open"});this._preview=document.createElement("div"),this._preview.style.color="transparent",this._input=document.createElement("textarea"),this._input.oninput=a=>{this.textContent=a.target.value,this.updatePreview()},this._input.onchange=()=>{this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))};const b=document.createElement("style");b.textContent=":host{display:block;position:relative;white-space:pre-wrap;overflow-wrap:break-word;word-break:normal;}textarea{webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;display:block;position:absolute;left:0;top:0;width:100%;height:100%;resize:none;overflow:hidden;margin:0;border:0;padding:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:inherit;color:var(--color,inherit);background-color:transparent;box-shadow:none;outline:0;}textarea::placeholder{color:var(--placeholder-color,inherit);opacity:var(--placeholder-opacity,.5);}",a.appendChild(b),a.appendChild(this._preview),a.appendChild(this._input)}connectedCallback(){this._input.value=this.textContent,this._input.disabled=this.hasAttribute("disabled"),this._input.readOnly=this.hasAttribute("readonly"),this._input.placeholder=this.getAttribute("placeholder")||"",this.updatePreview()}get name(){return this.getAttribute("name")}get value(){return this._input.value}set value(a){this._input.value=a,this.textContent=a}updatePreview(){this._preview.innerHTML=this._input.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")+" "}}},{}]},{},[1]);