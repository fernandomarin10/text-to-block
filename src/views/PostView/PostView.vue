<template src="./PostView.html"></template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
    name:"PostView",
    components:"",
    setup(){
        onMounted(()=> {
            console.log("PostView!!!");
        })
        return{

        }
    }
}
</script>
<style lang="scss" src="./PostView.scss"></style>