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
      <div  @click="back()">
        <img :class="inActived ? 'imgActive':'img'" src="@/assets/add.png" alt="">
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
      var that = this;
      setTimeout(function() {
      that.inActived=true;    
      }, 200);
      setTimeout(function() {
        that.firstUpText="发布闲置",
        that.midUpText="淘宝转卖",
        that.lastUpText="信用速卖"
      }, 1000);
      setTimeout(function() {
        that.firstUnderText="发布租房",
        that.midUnderText="免费送"
      }, 1200);
    }
    
}
</script>

<style scoped>
.img{
  width: 0.8rem;
  height: 0.8rem;
  margin-top: -0.09rem;
  transition: linear .2s;
}
.imgActive{
  width: 0.8rem;
  height: 0.8rem;
  margin-top: -0.09rem;
  transform: rotateZ(-45deg);
  transition: transform linear .2s;
}
.container{
  width: 100%;
  height: 100%;
  color: #222222;
}
.itemsUp{
  width: 100%;
  height: 100px;
  margin-top: 3.2rem;
  position: absolute;
  bottom: 7.5rem; 
  /* background-color: red; */
  transition:transform 1.5s;
  transform: translate3d(0,700%,0);
  display: flex;
  flex-direction: row;
}
.itemsUpActive{
  width: 100%;
  height: 100px;
  /* background-color: red; */
  position: absolute;
  bottom: 7.5rem; 
  transition:transform .8s;
  transform: translate3d(0,0,0);
  display: flex;
  flex-direction: row;
}
.itemsUnder{
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 4rem;  
  /* background-color: pink; */
  transition:transform 1.2s;
  transform: translate3d(0,600%,0);
  display: flex;
  flex-direction: row;
}
.itemsUnderActive{
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 4rem;  
  /* background-color: pink; */
  transition:transform .9s;
  transform: translate3d(0,0,0);
  display: flex;
  flex-direction: row;
  
}
.back{
  width: 10rem;
  height: 2.3rem;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* background-color: red; */
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
  width: 1.9rem;
  height: 1.9rem;
  background-color: #ffd343;
  border-radius: 50%;
}
.midUpImg{
  width: 1.9rem;
  height: 1.9rem;
  background-color: #ff821f;
  border-radius: 50%;
}
.lastUpImg{
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  background-color: #fe5533;
}
.firstUnderImg{
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  background-color: #27affc;
}
.midUnderImg{
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  background-color: #1cc472;
}
.text{
  margin-top: 15px;
}
</style>
