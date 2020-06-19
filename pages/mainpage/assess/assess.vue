<template>
	<view class="assess_content">
		<u-icon name="list-dot" color="#2979ff" size="40" @click="onProjectList()" class="choseProjectIcon"></u-icon>
		<view class="selectList">
			<u-select v-model="show" mode="single-column" :list="projectList" @confirm="confirm"></u-select>
		</view>
		<uni-collapse class="assess_content" :accordion="true">
 			<uni-collapse-item style="background-color: #8f8f8f;" v-for="(item,index) in accordion" :key="index" :title="item.title" :show-animation="item.animation">
 				<uni-collapse :accordion="true">
 					<uni-collapse-item v-for="(i,index) in item.children" :key="index" :title="i.title" :show-animation="item.animation">
						<u-cell-group>
							<u-cell-item :title="j.title" @click='assess' v-for="(j,index) in i.children" :key='index'></u-cell-item>
							<u-cell-item title="会员等级" value="新版本" @click='assess'></u-cell-item>
						</u-cell-group>
 					</uni-collapse-item>
 				</uni-collapse>
 			</uni-collapse-item>
 		</uni-collapse>
	</view>
 		
</template>
 
<script src='./assess.js'>
</script>

<style lang="less" scoped>
	.assess_content{
		.choseProjectIcon{
			position: absolute;
			right: 20upx;
			bottom: 40upx;
			z-index: 20;
		}
	}
</style>