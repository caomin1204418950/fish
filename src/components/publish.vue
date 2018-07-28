<template>
  <div class="container" @click="back()">
      点出来
  </div>
</template>

<script>
import Tabar from '@/components/tabar/tabar'
export default {
    components:{
      Tabar
    },
    methods: {
      back(){
        this.$router.go('-1');
      }
    }
}
</script>

<style >

</style>
