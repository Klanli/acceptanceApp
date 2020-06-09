<template>
	<view class="content">
		页面 - 5
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
			    title: '我的信息'
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
		background-color: #aaffff;
		margin: 0;
		padding: 0;
	}
</style>
