<template>
  <div class="container">
      消息
      <Tabar/>
  </div>
</template>

<script>
import Tabar from '@/components/tabar/tabar'
export default {
  // props: one
    components:{
      Tabar
    },
    mounted(){
    this.$children[0].xianyu=false
    this.$children[0].yutang=false
    this.$children[0].xiaoxi=true
    this.$children[0].mine=false
  },
}
</script>

<style>

</style>
