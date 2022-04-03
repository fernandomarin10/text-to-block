<template src="./ReadView.html"></template>

<script>
import {  onMounted } from '@vue/runtime-core'
export default {
    name:"ReadView",
    components:"",
    setup(){
        onMounted(()=> {
            console.log("ReadView!!!");
        })
        return{

        }
    }
}
</script>

<style lang="scss" src="./ReadView.scss"></style>