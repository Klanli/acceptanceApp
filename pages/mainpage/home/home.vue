<template>
	<view class="home_content">
		<view class="top_mes">
			<text>完成率</text>
			<text style="font-size: 36px;font-weight: 600;">{{ percent }}</text>%
			<u-line-progress 
			style="margin-top: 20px;"
			active-color="#2979ff" 
			:striped="true" 
			:percent="percent" 
			:striped-active="true"
			:show-percent="false"></u-line-progress>
			<view class="option_mes">
				<text style="font-size: 16px;margin: 6px 0;" v-for="(item,index) in optionData" :key='index'>{{item.label}}:{{item.value}}</text>
			</view>
		</view>
		<view class="buttom_list">
			<view class="title">
				<text style="font-size: 20px;">工程项目</text>
				<view>
					<u-button plain size='mini' type="primary">新增 +</u-button>
				</view>
			</view>
			<u-section v-for="(item,index) in list" :key="index" font-size='36' :title="item.title" sub-title=""></u-section>
		</view>
	</view>
</template>

<script src="./home.js"></script>

<style lang="less" scoped>
	.home_content {
		text-align: center;
		height: calc(100vh - 44px - 50px);
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		.top_mes{
			width: 80vw;
			padding-top: 24px;
			padding-bottom: 16px;
			.option_mes{
				padding-top: 16px;
				text{
					display: inline-block;
					width: 33%;
				}
			}
		}
		.buttom_list{
			width: 100vw;
			.title{
				padding: 0 10px;
				background: #ccc;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.u-section{
				height: 40px;
				border-bottom: 1px solid #ccc;
			}
		}
	}
</style>
