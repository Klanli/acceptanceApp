<template>
	<view class="home_content">
		<view class="top_mes">
			<view style="text-align: center;">
				<text>完成率</text>
			<u-count-to bold font-size='70' :start-val="0" :end-val="percent"></u-count-to>%
			</view>
			<u-line-progress 
			style="margin-top: 20px;"
			active-color="#2979ff" 
			:striped="true" 
			:percent="percent" 
			:striped-active="true"
			:show-percent="false"></u-line-progress>
			<view class="option_mes">
				<text style="font-size: 16px;margin: 6px 0;" v-for="(item,index) in optionData" :key='index'>{{item.label}}{{item.value}}</text>
			</view>
		</view>
		<view class="buttom_list">
			<view class="title">
				<text style="font-size: 30upx;">工程项目</text>
				<!-- <view>
					<u-button plain size='mini' type="primary">新增 +</u-button>
				</view> -->
			</view>
			<!-- <u-cell-group>
				<u-cell-item v-for="(item,index) in list" :key='index' :title="item.label" @tap='check(item.value)'></u-cell-item>
			</u-cell-group> -->
			<view class="projects" >
				<view class="project" v-for="(item,index) in list" :key='index' @click='check(item.value)'>
					{{item.label}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script src="./home.js"></script>

<style lang="less" scoped>
	.home_content {
		// text-align: center;
		height: calc(100vh);
		background-color: #F5F5F9;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		.top_mes{
			width: 90vw;
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
				background: #2979ff;
				color: #fff;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
		.projects{
			.project{
				// color: #000;
				font-size: 30upx;
				line-height: 70upx;
				border-bottom: 1px solid #ccc;
				text-indent: 20upx;
			}
			.project:hover{
				background-color: #fff;
			}
		}
	}
</style>
