<template>
	<view class="require_content">
		<view style="color:#fff">
			{{ruleContent}}
		</view>
	</view>
</template>

<script src='./rule.js'>
</script>

<style lang="less" scoped>
	.require_content{
		height: calc(100vh - 44px);
		// background-color: #1F1E27;
		.u-search{
			padding-top: 10px;
		}
	}
</style>
