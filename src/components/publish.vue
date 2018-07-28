<template>
  <div class="container">
    <div :class="inActived ? 'itemsUpActive':'itemsUp'">

      <div class="itemUpFirst">
        <div class="firstUpImg"></div>
        <div class="text"></div>
      </div>

      <div class="itemUpMid">
        <div class="firstUpImg"></div>
        <div class="text"></div>
      </div>

      <div class="itemUpLast">
        <div class="firstUpImg"></div>
        <div class="text"></div>
      </div>

    </div>
    <div :class="inActived ? 'itemsUnderActive':'itemsUnder'">
      <div class="itemUnderFirst">
        <div class="firstUnderImg"></div>
        <div class="text"></div>
      </div>

      <div class="itemUnderMid">
        <div class="firstUnderImg"></div>
        <div class="text"></div>
      </div>
    </div>
    <div class="back"  @click="back()">
      <div :class="inActived ? 'addActive':'add'">
        <div class="addRow"></div>
        <div class="addClown"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          inActived:false
        }
    },
    methods: {
      back(){
        var that = this
        that.inActived=false;        
        setTimeout(function() {
          that.$router.go('-1');
        }, 500);
        
      }
    },
    mounted(){
      console.log(1)
      this.inActived=true
    }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.itemsUp{
  width: 100%;
  height: 130px;
  background-color: red;
  margin-top: 300px;
  transition:transform 1.5s;
  transform: translate3d(0,700%,0);
  display: flex;
  flex-direction: row;
}
.itemsUpActive{
  width: 100%;
  height: 130px;
  background-color: red;
  transition:transform .8s;
  transform: translate3d(0,0,0);
  margin-top: 300px;
  display: flex;
  flex-direction: row;
}
.itemsUnder{
  width: 100%;
  height: 130px;
  background-color: pink;
  transition:transform 1.2s;
  transform: translate3d(0,600%,0);
  display: flex;
  flex-direction: row;
}
.itemsUnderActive{
  width: 100%;
  height: 130px;
  background-color: pink;
  transition:transform .9s;
  transform: translate3d(0,0,0);
  display: flex;
  flex-direction: row;
}
.back{
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.add{
  width: 20px;
  height: 20px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 54px;
  transition: transform .2s;
}
.addActive{
  width: 20px;
  height: 20px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 54px;
  transition: transform .2s;
  transform: rotateZ(-45deg);
}
.addRow{
	width: 20px;
	height: 1.5px;
	background-color: black;
}
.addClown{
	width: 1.5px;
	height: 20px;
	background-color: black;
  position: absolute;
  z-index: 2;
}
.itemUpFirst{
  width: 33.333333%;
  height: 100%;
  background-color: green
}
.itemUpMid{
  width: 33.333333%;
  height: 100%;
  background-color: gray
}
.itemUpLast{
  width: 33.333333%;
  height: 100%;
  background-color: yellowgreen
}
.itemUnderFirst{
  width: 33.333333%;
  height: 100%;
  background-color: yellowgreen
}
.itemUnderMid{
  width: 33.333333%;
  height: 100%;
  background-color: green
}
</style>
