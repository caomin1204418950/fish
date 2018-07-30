<template>
  <div class="container">
      鱼塘
      <Tabar/>
  </div>
</template>

<script>
import Tabar from '@/components/tabar/tabar'
export default {
  data(){
    return{

    }
      
  },
  mounted(){
    this.$children[0].xianyu=false
    this.$children[0].yutang=true
    this.$children[0].xiaoxi=false
    this.$children[0].mine=false
  },
  components:{
      Tabar
  }
}
</script>

<style scoped>
  

</style>
