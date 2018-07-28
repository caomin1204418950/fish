<template>
  <div class="container">
    <div :class="inActived ? 'itemsUpActive':'itemsUp'">

      <div class="itemUpFirst">
        <div class="firstUpImg"></div>
        <div class="text">{{firstUpText}}</div>
      </div>

      <div class="itemUpMid">
        <div class="midUpImg"></div>
        <div class="text">{{ midUpText }}</div>
      </div>

      <div class="itemUpLast">
        <div class="lastUpImg"></div>
        <div class="text">{{lastUpText}}</div>
      </div>

    </div>
    <div :class="inActived ? 'itemsUnderActive':'itemsUnder'">
      <div class="itemUnderFirst">
        <div class="firstUnderImg"></div>
        <div class="text">{{firstUnderText}}</div>
      </div>

      <div class="itemUnderMid">
        <div class="midUnderImg"></div>
        <div class="text">{{midUnderText}}</div>
      </div>
    </div>
    <div class="back">
      <div :class="inActived ? 'addActive':'add'" @click="back()">
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
          inActived:false,
          firstUpText:'',
          midUpText:'',
          lastUpText:'',
          firstUnderText:'',
          midUnderText:'',
          
        }
    },
    methods: {
      back(){
        var that = this
        that.inActived=false;
        that.firstUpText="";
        that.midUpText="";
        that.lastUpText=""; 
        that.firstUnderText="";
        that.midUnderText="";
        setTimeout(function() {
          that.$router.go('-1');
        }, 500);
        
      }
    },
    mounted(){
      // console.log(1)
      this.inActived=true;
      AppearItemUnderText();
      var that = this;
      setTimeout(function() {
      that.firstUpText="发布闲置",
      that.midUpText="淘宝转卖",
      that.lastUpText="信用速卖"
      }, 700);
      function AppearItemUnderText(){
      console.log(2)
      setTimeout(function() {
        that.firstUnderText="发布租房",
        that.midUnderText="免费送"
      }, 800);
    }
    }
    
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  color: #222222;
}
.itemsUp{
  width: 100%;
  height: 130px;
  /* background-color: red; */
  margin-top: 310px;
  transition:transform 1.5s;
  transform: translate3d(0,700%,0);
  display: flex;
  flex-direction: row;
}
.itemsUpActive{
  width: 100%;
  height: 130px;
  /* background-color: red; */
  transition:transform .8s;
  transform: translate3d(0,0,0);
  margin-top: 310px;
  display: flex;
  flex-direction: row;
}
.itemsUnder{
  width: 100%;
  height: 130px;
  /* background-color: pink; */
  transition:transform 1.2s;
  transform: translate3d(0,600%,0);
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.itemsUnderActive{
  width: 100%;
  height: 130px;
  /* background-color: pink; */
  transition:transform .9s;
  transform: translate3d(0,0,0);
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  
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
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.itemUpMid{
  width: 33.333333%;
  height: 100%;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.itemUpLast{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.333333%;
  height: 100%;
  /* background-color: yellowgreen */
}
.itemUnderFirst{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.333333%;
  height: 100%;
  /* background-color: yellowgreen */
}
.itemUnderMid{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.333333%;
  height: 100%;
  /* background-color: green */
}
.firstUpImg{
  width: 90px;
  height: 90px;
  background-color: #ffd343;
  border-radius: 50%;
}
.midUpImg{
  width: 90px;
  height: 90px;
  background-color: #ff821f;
  border-radius: 50%;
}
.lastUpImg{
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #fe5533;
}
.firstUnderImg{
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #27affc;
}
.midUnderImg{
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #1cc472;
}
.text{
  margin-top: 15px;
}
</style>
