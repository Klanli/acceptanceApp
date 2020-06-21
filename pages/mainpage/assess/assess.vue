<template>
	<view class="assess_content">
		<u-icon name="list-dot" color="#2979ff" size="40" @click="onProjectList()" class="choseProjectIcon"></u-icon>
		<view class="selectList">
			<u-select v-model="show" mode="single-column" :list="projectList" @confirm="confirm"></u-select>
		</view>
		<uni-collapse :accordion="true">
 			<uni-collapse-item class="firstmenu" v-for="(item,index) in accordion" :key="index" :title="item.title" :show-animation="item.animation">
				<view class="">
					<uni-collapse :accordion="true">
 					<uni-collapse-item class="secmenu" v-for="(i,index) in item.children" :key="index" :title="i.title" :show-animation="item.animation">
						<view class="">
							<u-cell-group >
							<u-cell-item style="background-color: #F5F5F9;" class="thrdmenu" :title="j.title" @click='assess(j)' v-for="(j,index) in i.children" :key='index'></u-cell-item>
							<!-- <u-cell-item title="会员等级" value="新版本" @click='assess'></u-cell-item> -->
						</u-cell-group>
						</view>
						
 					</uni-collapse-item>
 				</uni-collapse>
				</view>
 				
 			</uni-collapse-item>
 		</uni-collapse>
	</view>
</template>
 
<script src='./assess.js'>
</script>

<style lang="less" scoped>
	.assess_content{
		height: calc(100vh - 44px - 50px);
		background-color: #F5F5F9;
		.firstmenu{
			background-color: #fff;
			// color: #fff;
			.secmenu{
				// background-color: #F5F5F9;
				background-color: #f2f2f2;
				.thrdmenu{
					// background-color: #f2f2f2;
					// background-color: #000;
				}
			}
		}
		.choseProjectIcon{
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 60px;
			background-color: #fff;
			position: fixed;
			right: 8px;
			bottom: 58px;
			z-index: 9999;
		}
	}
</style>