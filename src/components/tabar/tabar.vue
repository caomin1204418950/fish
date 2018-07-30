<template>
  <div class="tabarContainer">
      <div class="tabar">
            <div class="tab_left">
							<router-link to="/" class="xianYu router_link" >
                <div  >
                  <div class="img_box" >
										<img v-if="xianyu" class="xianyuImg" src="@/assets/sel_xianyu.png" alt="">
										<img v-else class="xianyuImg" src="@/assets/xianyu.png" alt="">
									</div>
                  <div class="text">闲鱼</div>
                </div>
							</router-link>
							
							<router-link to="/fishPond" class="yuTang router_link" >
                <div>
                  <div class="img_box">
										<img v-if="yutang" class="yutangImg" src="@/assets/sel_yutang.png" alt="">
										<img v-else class="yutangImg" src="@/assets/yutang.png" alt="">
									</div>
                  <div class="text">鱼塘</div>
                </div>
							</router-link>
            </div>
						<router-link to="/publish" class="tab_mid router_link">
								<div class="border">
										<div class="push">
											<img class="addImg" src="@/assets/add.png" alt="">
										</div>
								</div>
									<div class="pushText">
										发布
									</div>
						</router-link>
									

            <div class="tab_right">
							<router-link to="/news" class="xiaoXi router_link" >
                <div >
                  <div class="img_box">
										<img v-if="xiaoxi" class="xiaoxiImg" src="@/assets/sel_xiaoxi.png" alt="">
										<img v-else class="xiaoxiImg" src="@/assets/xiaoxi.png" alt="">
									</div>
                  <div class="text">消息</div>
                </div>
							</router-link>
							
							<router-link to="/mine" class="woDe router_link" >
                <div >
                  <div class="img_box">
										<img v-if="mine" class="mineImg" src="@/assets/sel_mine.png" alt="">
										<img v-else class="mineImg" src="@/assets/mine.png" alt="">
									</div>
                  <div class="text">我的</div>
                </div>
							</router-link>
            </div>
      </div>
  </div>

</template>

<script>
export default {
  name: "Tabar",
  data() {
    return {
			tab_mid_active:false,
			xianyu:true,
			yutang:false,
			xiaoxi:false,
			mine:false
		};
	},
	methods:{
		clickPublish() {
			this.tab_mid_active=true;
		}
	}
};
</script>

<style scoped>
.mineImg{
	width: 1rem;
	height: 1rem;
}
.xiaoxiImg{
	width: 1rem;
	height: 1rem;
}
.yutangImg{
	width: 1rem;
	height: 1rem;
}
.xianyuImg{
	width: 1rem;
	height: 1rem;
}
.router_link {
    text-decoration: none;
		color: black;
}
.img_box {
	width: 1.3rem;
	height: 1.3rem;
	/* background-color: greenyellow; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.addImg{
	width: 0.8rem;
	height: 0.8rem;
}

.tabarContainer {
  width: 10rem;
  height: 3rem;
	/* background-color: red; */
  position: fixed;
  bottom: 0;
}
.tabar {
  width: 10rem;
  height: 2.3rem;
	margin-top: 0.7rem;
  background-color: white;
	display: flex;
  flex-direction: row;
  align-items: center;
	border-top: 2px solid #f4f4f4;
}
.tab_left {
	width: 4rem;
	height: 100%;
	/* background-color: red;	 */
  display: flex;
  flex-direction: row;
  align-items: center;
}
.xianYu{
	width: 2rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.yuTang{
	width: 2rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* background-color: yellow; */
}
.tab_right{
	width: 4rem;
	height: 100%;
	/* background-color: red;	 */
  display: flex;
  flex-direction: row;
  align-items: center;
}
.xiaoXi{
	width: 2rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.woDe{
	width: 2rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* background-color: yellow; */
	
}
.tab_mid {
	width: 2rem;
	height: 100%;
	/* background-color:green; */
	display: flex;
	flex-direction: column;
	align-items: center;
}
.border{
	width: 1.8rem;
	height: 1.8rem;
	border-radius: 50%;
	background-color: white;
	margin-top: -0.7rem;
	border: 0.05714rem solid #f4f4f4;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.push{
	width: 1.73rem;
	height: 1.73rem;
	background-color: #ffdd43;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.pushText{
	margin-top: 0.077rem;
}

</style>
