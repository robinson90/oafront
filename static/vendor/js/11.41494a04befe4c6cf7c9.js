webpackJsonp([11],{241:function(t,e,a){var s=a(31)(a(421),a(488),null,null,null);t.exports=s.exports},421:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableData:[]}},methods:{handleEdit:function(t,e){console.log(t,e)},statusFormat:function(t){return"1"==t.status?"正常":"禁用"},fetchList:function(){var t=this;this.$fetch.get("/system/system/accessgrouplist").then(function(e){var a=e.data;t.tableData=a}).catch(function(e){t.$notify.error({title:"错误",message:e.message})})}},created:function(){this.fetchList()}}},488:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push({name:"permission_groups_edit"})}}},[a("i",{staticClass:"el-icon-plus"}),t._v(" 新增权限组")])],1),t._v(" "),a("div",{staticClass:"gaptop-md"},[a("el-alert",{attrs:{title:"无论如何授权, 上帝组用户有始终拥有全部权限. 其他组请按需求进行授权.",type:"info","show-icon":""}})],1),t._v(" "),a("el-table",{staticClass:"gaptop-lg",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"ID",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{label:"权限组",prop:"title"}}),t._v(" "),a("el-table-column",{attrs:{label:"组状态",prop:"status",formatter:t.statusFormat}}),t._v(" "),a("el-table-column",{attrs:{label:"授予权限"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.$router.push({name:"permission_groups_edit",query:{id:e.row.id}})}}},[t._v("查看 | 授权")])]}}])})],1)],1)},staticRenderFns:[]}}});