<template>
	<view class="content">
		页面 - 2
		
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
			    title: '工程项目'
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
