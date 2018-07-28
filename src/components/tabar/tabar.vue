<template>
  <div class="tabarContainer">
      <div class="tabar">
            <div class="tab_left">
							<router-link to="/" class="xianYu router_link" >
                <div >
                  <div class="img_box"></div>
                  <div class="text">闲鱼</div>
                </div>
							</router-link>
							
							<router-link to="/fishPond" class="yuTang router_link">
                <div >
                  <div class="img_box"></div>
                  <div class="text">鱼塘</div>
                </div>
							</router-link>
            </div>
						<router-link to="/publish" class="tab_mid">
								<div class="border">
										<div class="push">
											<div class="pushRow"></div>
											<div class="pushClown"></div>
										</div>
									</div>
									<div class="pushText">
										发布
									</div>
						</router-link>
									

            <div class="tab_right">
							<router-link to="/news" class="xiaoXi router_link">
                <div >
                  <div class="img_box"></div>
                  <div class="text">消息</div>
                </div>
							</router-link>
							
							<router-link to="/mine" class="woDe router_link">
                <div >
                  <div class="img_box"></div>
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
			tab_mid_active:false
		};
	},
	methods:{
		clickPublish() {
			console.log(1)
			this.tab_mid_active=true;
		}
	}
};
</script>

<style scoped>

.router_link {
    text-decoration: none;
		color: black;
}
.pushRow{
	width: 20px;
	height: 1.5px;
	background-color: black
}
.pushClown{
	width: 1.5px;
	height: 20px;
	background-color: black;
	position: absolute;
	z-index: 2
}
.tabarContainer {
  width: 100%;
  height: 110px;
	/* background-color: red; */
  position: fixed;
  bottom: 0;
}
.tabar {
  width: 100%;
  height: 70px;
	margin-top: 40px;
  background-color: white;
	border-top: 2px solid #f4f4f4;
  display: flex;
  flex-direction: row;
  align-items: center;
	font-size: 15px;
}
.tab_left {
	width: 40%;
	height: 100%;
	/* background-color: red;	 */
  display: flex;
  flex-direction: row;
  align-items: center;
}
.xianYu{
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.yuTang{
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* background-color: yellow; */
}
.xiaoXi{
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.woDe{
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* background-color: yellow; */
	
}
.tab_mid {
	width: 20%;
	height: 100%;
	/* background-color:green; */
	display: flex;
	flex-direction: row;
	justify-content: center;
	/* border-top-left-radius: 40px;
	border-top-right-radius: 40px; */
	/* position: fixed;
	z-index: 1; */
	/* border-top:35px;  */
  /* border-top-right-radius:100px;  */
  
}
.border{
	width: 76px;
	height: 76px;
	background-color: white;
	position: fixed;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid #f4f4f4;
	border-radius: 50%;
	margin-top: -35px;
}
.push{
	width: 68px;
	height: 68px;
	background-color: #ffdd43;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.pushText{
	margin-top: 45px;
	color: black;
}
.tab_right {
	width: 40%;
	height: 100%;
	/* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
}
.img_box {
	width: 45px;
	height: 45px;
	background-color: greenyellow
}

</style>
