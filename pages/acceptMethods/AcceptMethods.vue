<template>
	<view class="require_content">
		<!-- <u-search style="color: #fff;" bg-color='#55536c' :action-style='actionstyle' placeholder="关键字" v-model="keyword"></u-search> -->
		<view v-html="methods">
		</view>
	</view>
</template>

<script src='./AcceptMethods.js'>
</script>

<style lang="less" scoped>
	.require_content{
		height: calc(100vh - 44px);
		// background-color: #1F1E27;
		padding: 20upx 10upx;
		.u-search{
			padding-top: 10px;
		}
	}
</style>
