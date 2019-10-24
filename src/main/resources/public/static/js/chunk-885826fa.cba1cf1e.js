(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-885826fa"],{"2f88":function(e,t,i){"use strict";var n=i("5c99"),r=i.n(n);r.a},4381:function(e,t,i){"use strict";i("ac4d"),i("8a81"),i("ac6a");var n=i("4360"),r={inserted:function(e,t,i){var r=t.value,s=n["a"].getters&&n["a"].getters.permissions;if(!(r&&r instanceof Array&&r.length>0&&s))throw new Error("need permissions! Like v-permission=\"['/rest/user/list']\"");var a=!1,o=!0,l=!1,c=void 0;try{for(var u,p=s[Symbol.iterator]();!(o=(u=p.next()).done);o=!0){var d=u.value;if(d.url===r[0]){a=!0;break}}}catch(m){l=!0,c=m}finally{try{o||null==p.return||p.return()}finally{if(l)throw c}}a||e.remove()}},s=function(e){e.directive("permission",r)};window.Vue&&(window["permission"]=r,Vue.use(s)),r.install=s;t["a"]=r},"5c99":function(e,t,i){},b9e5:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticStyle:{"margin-top":"20px","max-width":"600px","margin-left":"80px"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:20}},[i("el-input",{attrs:{placeholder:"输入关键字进行过滤",clearable:""},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),e._v(" "),i("el-col",{attrs:{span:4}},[i("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(){return e.handleCreate()}}},[i("i",{staticClass:"el-icon-plus"}),e._v(" 添加\n        ")])],1)],1),e._v(" "),i("el-row",{staticStyle:{"padding-top":"20px"}},[i("el-col",[i("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{data:e.permissions,props:e.defaultProps,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"filter-node-method":e.filterNode},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,r=t.data;return i("span",{staticClass:"custom-tree-node"},[i("span",[e._v(e._s(n.label))]),e._v(" "),i("span",[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/permission/add"],expression:"['/rest/permission/add']"}],attrs:{type:"text",size:"mini"},on:{click:function(){return e.handleCreate(r)}}},[e._v("添加")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/permission/update"],expression:"['/rest/permission/update']"}],attrs:{type:"text",size:"mini"},on:{click:function(){return e.handleEdit(n,r)}}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/permission/delete"],expression:"['/rest/permission/delete']"}],attrs:{type:"text",size:"mini"},on:{click:function(){return e.handleDelete(r)}}},[e._v("删除")])],1)])}}])})],1)],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑":"新增"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{attrs:{model:e.permission,"label-width":"80px","label-position":"left"}},[i("el-form-item",{attrs:{label:"上级权限"}},[i("span",[e._v(e._s(e.permission.parentName))]),e._v(" "),i("treeselect",{attrs:{options:e.permissions,normalizer:e.normalizer,placeholder:"选择上级部门"},model:{value:e.permission.parentId,callback:function(t){e.$set(e.permission,"parentId",t)},expression:"permission.parentId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"权限名"}},[i("el-input",{attrs:{placeholder:"权限名"},model:{value:e.permission.name,callback:function(t){e.$set(e.permission,"name",t)},expression:"permission.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"权限类型"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},model:{value:e.permission.types,callback:function(t){e.$set(e.permission,"types",t)},expression:"permission.types"}},e._l(e.typesOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"url"}},[i("el-input",{attrs:{placeholder:"url"},model:{value:e.permission.url,callback:function(t){e.$set(e.permission,"url",t)},expression:"permission.url"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"排序"}},[i("el-input",{attrs:{placeholder:"排序"},model:{value:e.permission.sorts,callback:function(t){e.$set(e.permission,"sorts",t)},expression:"permission.sorts"}})],1)],1),e._v(" "),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.confirmPermission}},[e._v("确定")])],1)],1)],1)},r=[],s=(i("ac6a"),i("7f7f"),i("96cf"),i("3b8d")),a=i("ca17"),o=i.n(a),l=(i("542c"),i("4381")),c=i("fe22"),u=i("ed08"),p=(i("61f7"),{id:void 0,name:"",parentId:void 0,parentName:"",url:"",types:"",sorts:void 0}),d={name:"Permission",components:{Treeselect:o.a},directives:{permission:l["a"]},data:function(){return{defaultProps:{children:"childrens",label:"name"},permission:Object.assign({},p),permissions:[],dialogVisible:!1,dialogType:"new",typesOptions:[{label:"菜单",key:0},{label:"功能权限",key:1}],filterText:""}},created:function(){this.getPermissions()},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{getPermissions:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:t=e.sent,i=t.result,this.diGuiTree(i),this.permissions=[{id:0,name:"权限树",childrens:i}];case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},diGuiTree:function(e){var t=this;e.forEach(function(e){""===e.childrens||void 0===e.childrens||null===e.childrens?delete e.childrens:t.diGuiTree(e.childrens)})},normalizer:function(e){return{id:e.id,label:e.name,children:e.childrens}},handleCreate:function(e){this.dialogType="new",this.dialogVisible=!0,this.permission=Object.assign({},p),null!=e&&(this.permission.parentId=e.id,this.permission.parentName=e.name)},handleEdit:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,i){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.dialogType="edit",this.dialogVisible=!0,this.permission=Object(u["c"])(i),n=t.parent.data,this.permission.parentId=n.id,this.permission.parentName=n.name;case 6:case"end":return e.stop()}},e,this)}));function t(t,i){return e.apply(this,arguments)}return t}(),confirmPermission:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,!t){e.next=6;break}return e.next=4,Object(c["e"])(this.permission);case 4:e.next=8;break;case 6:return e.next=8,Object(c["a"])(this.permission);case 8:this.dialogVisible=!1,this.$message({showClose:!0,message:"保存成功",type:"success"}),this.getPermissions();case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleDelete:function(e){var t=this;this.$confirm("确认删除?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,Object(c["b"])(e.id);case 2:t.$message({showClose:!0,message:"删除成功",type:"success"}),t.getPermissions();case 4:case"end":return i.stop()}},i)}))).catch(function(e){console.error(e)})}}},m=d,f=(i("2f88"),i("2877")),h=Object(f["a"])(m,n,r,!1,null,null,null);t["default"]=h.exports},fe22:function(e,t,i){"use strict";i.d(t,"c",function(){return r}),i.d(t,"d",function(){return s}),i.d(t,"a",function(){return a}),i.d(t,"e",function(){return o}),i.d(t,"b",function(){return l});var n=i("b775");function r(){return Object(n["a"])({url:"/rest/permission/all",method:"get"})}function s(e){return Object(n["a"])({url:"/rest/permission/allByRole/".concat(e),method:"get"})}function a(e){return Object(n["a"])({url:"/rest/permission/add",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/rest/permission/update",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/rest/permission/delete",method:"get",params:{id:e}})}}}]);