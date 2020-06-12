<template>
	<view class="assess_content">
		<u-collapse>
			<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
				<view>
					<u-collapse>
						<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
							{{item.body}}
						</u-collapse-item>
					</u-collapse>
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
