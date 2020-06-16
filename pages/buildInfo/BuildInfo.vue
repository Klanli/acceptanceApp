<template>
	<view class="buildInfo_content">
		<view class="list" v-for="item in list" :key="item.id">
			<view class="tit">
				{{item.tit}}
			</view>
			<view class="floorName" v-for="i in item.floorNameList" :key="i.id">
				<u-checkbox 
				@change="checkboxChange" 
				v-model="item.checked" 
				:name="item.name"
			>{{i.name}}</u-checkbox>
				
			</view>
		</view>
	</view>
</template>

<script src='./buildInfo.js'>
</script>

<style lang="less" scoped>
	.buildInfo_content {
		height: calc(100vh - 44px);
		background-color: #FFFFFF;
        padding: 20upx;
		.list {
			.tit {
				font-size: 36upx;
				line-height: 40upx;
			}
			.floorName {
				font-size: 28upx;
				line-height: 40upx;
				padding-left:20upx ;
			}
		}

	}
</style>
