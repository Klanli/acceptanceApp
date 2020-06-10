<template>
	<view class="home_content">
		<u-number-box :value="0" @change="valChange"></u-number-box>
	</view>
</template>

<script src="./home.js"></script>

<style>
	.home_content {
		text-align: center;
		height: 50vh;
		/* margin-top: 200upx; */
		margin: 0;
		padding: 0;
		background-color: #24222D;
	}
</style>
