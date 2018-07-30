<template>
  <div class="container">
      我的
      <Tabar/>
  </div>
</template>

<script>
import Tabar from '@/components/tabar/tabar'
export default {
  // props: 
    components:{
      
      Tabar
    },
    mounted(){
    this.$children[0].xianyu=false
    this.$children[0].yutang=false
    this.$children[0].xiaoxi=false
    this.$children[0].mine=true
  },
}
</script>

<style>

</style>
