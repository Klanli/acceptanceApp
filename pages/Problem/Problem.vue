<template>
	<view class="problem_content">
		<view class="text" v-for="(item,index) in textList">
			<view class="textHeader">
				<h3>{{item.tit}}</h3>
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
		padding: 0 10upx;
		.textHeader{
			h3{
				font-size: 30upx;
				font-weight: 500;
			}
			
		}
		.textContent{
			text-indent: 10upx;;
		}
	}
</style>
