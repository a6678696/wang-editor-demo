<template>
  <myEditor ref="wangEditor"/>
  <br>
  <button @click="getHtml">在父组件获取html</button>&nbsp;
  <button @click="setHtml">在父组件设置html</button>
</template>

<script setup>
import {ref} from "vue";
import myEditor from "../components/myEditor.vue";

const wangEditor = ref();

const setHtml=()=>{
  wangEditor.value.valueHtml='<h1>111</h1>'
}

const getHtml=()=>{
  alert(wangEditor.value.valueHtml);
}
</script>

<style scoped>

</style>
