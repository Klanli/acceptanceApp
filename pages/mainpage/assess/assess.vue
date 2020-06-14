<template>
	<view class="assess_content">
		<u-collapse :item-style="itemStyle">
			<u-collapse-item :open='false' :title="item.head" v-for="(item, index) in itemList" :key="index">
				<view>
					asdasfsdf
				</view>
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script src="./assess.js"></script>

<style>
	.assess_content {
		text-align: center;
		height: 100vh-50px;
		margin: 0;
		padding: 0;
	}
</style>
