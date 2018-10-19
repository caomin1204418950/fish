<template>
  <div class="container">
    <div class="head"></div>
    <div class="body">222</div>
    <div class="itemsHead"></div>
    <div class="itemsBody"></div>
    <div class="filter">补充</div>
    <Tabar/>
  </div>
</template>

<script>
import Tabar from '@/components/tabar/tabar'
export default {
    components:{
      Tabar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .filter{
    width: 10rem;
    height: 130px;
    background-color: white;
  }
  .itemsBody{
    width: 10rem;
    height: 1000px;
    background-color: blue
  }
  .itemsHead{
    width: 10rem;
    height: 30px;
    background-color: green;
    position: relative;
    z-index: 1;
  }
  .body{
    width: 10rem;
    height: 1000px;
    background-color: pink;
    margin-top: 55px;
  }
  .head{
    width: 10rem;
    height: 55px;
    background-color: red;
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 1;
    top: 0
  }
</style>
