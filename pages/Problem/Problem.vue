<template>
	<view class="problem_content">
		<view class="text" v-for="(item,index) in textList">
			<view class="textHeader">
				{{item.tit}}
			</view>
			<view class="textContent">
				{{item.con}}
			</view>
		</view>
	</view>
</template>

<script src='./Problem.js'>
</script>

<style lang="less" scoped>
	.problem_content{
		height: calc(100vh - 44px);
		background-color: #FFFFFF;
		
	}
</style>
