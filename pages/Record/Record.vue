<template>
	<view class='record_content'>
		<u-toast ref="uToast" />
		<view style="background-color: #ececec;border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
			<text>验收内容:</text>
			<view>
				<u-button type="primary" style="margin-right: 8px;" size="mini" @click="toMethods()">方法</u-button>
				<u-button type="primary" size="mini" @click="getrequire">要求</u-button>
			</view>
		</view>
		<!-- <u-input v-model="content" :type="type" :border="border" :auto-height="autoHeight" /> -->
		<textarea class="textarea" auto-height v-model='content' disabled placeholder="请输入"/>
		<view v-show="isNoDataReview" style="background-color: #ececec;border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
			<text>检查部位:</text>
			<view>
				<u-button type="primary" size="mini" @click="toBuildInfo()">抽样</u-button>
			</view>
		</view>
		<textarea class="textarea" auto-height v-model='checkList' v-show="isNoDataReview" placeholder="请输入"/>
		<view v-show="isNoDataReview" style="background-color: #ececec;border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
			<text>检查数量:</text>
		</view>
		<textarea class="textarea" auto-height v-model='checkNum' v-show="isNoDataReview" placeholder="请输入"/>
		<view style="background-color: #ececec;border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
			<text>验收记录:</text>
			<view>
				<u-button type="primary" size="mini" @click="toProblem()">问题</u-button>
			</view>
		</view>
		<textarea class="textarea" style="min-height: 22vh;" auto-height v-model='acceptRecode' placeholder="请输入"/>
		<view>
			<u-button type="primary" size="mini" @click=
			"uploadFiles()">文件上传</u-button>
			<!-- <u-button type="primary" size="mini" @click=
			"uploadFiles('MP4')">视频上传</u-button>
			<u-button type="primary" size="mini" @click=
			"uploadFiles('MP3')">录音上传</u-button> -->
		</view>
		<view style="background-color: #ececec;border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
			<text>评定结论:</text>
			<view>
				<u-button type="primary" size="mini" @click="toRules()">规则</u-button>
			</view>
		</view>
		<view style="display: flex;justify-content: center;">
			<u-radio-group v-model="value">
				<u-radio style="margin-right: 30px;" shape="circle" name='1'>合格</u-radio>
				<u-radio shape="circle" name='5'>不合格</u-radio>
			</u-radio-group>
		</view>
		<view style="height: 10vh;">
			<u-button shape="circle" type="warning" @click="onSubmit()">暂时保存</u-button>
			<u-button shape="circle" type="primary" @click="onSubmit()">确认提交</u-button>
		</view>
	</view>
</template>

<script src='./Record.js'>
</script>

<style lang='less' scoped>
	.record_content{
		height: calc(100vh - 44px);
		/* background-color: #1F1E27; */
		&>view{
			/* color: #fff; */
			/* background-color: #292B32; */
			padding: 0 10px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.textarea{
			width: 100vw;
			min-height: 8vh;
			/* background-color: #1F1E27; */
			/* color: #818181; */
			&>uni-view{
				width: 100%!important;
			}
		}
	}
</style>
