<template>
	<view class="content">
		页面 - 4
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			    title: '现场评定'
			});
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 100vh-50px;
		margin-top: 200upx;
		margin: 0;
		padding: 0;
	}
</style>
