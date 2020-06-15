<template>
	<view class="require_content">
		<u-search style="color: #fff;" bg-color='#55536c' :action-style='actionstyle' placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
		<view style="color:#fff" v-html="requiremess">
		</view>
	</view>
</template>

<script src='./Require.js'>
</script>

<style lang="less" scoped>
	.require_content{
		height: calc(100vh - 44px);
		background-color: #1F1E27;
		.u-search{
			padding-top: 10px;
		}
	}
</style>
