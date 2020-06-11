<template>
	<view class="login_content">
		<u-avatar src="src"></u-avatar>
		<u-form ref="uForm">
			<u-form-item label="姓名" prop="name">
				<u-input v-model="form.name" />
			</u-form-item>
			<u-form-item label="密码" prop="name">
				<u-input type="password" v-model="form.name" />
			</u-form-item>
			<u-button type="primary" @click="login">主要按钮</u-button>
		</u-form>
	</view>
</template>

<script src='./login.js'></script>

<style lang="less">
	.login_content{
		color: #fff;
		height: calc(100vh);
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		p{
			font-size: 60rpx;
			font-weight: 600;
			letter-spacing: 18rpx;
		}
		span{
			
		}
		input{
			color:#000000;
			background-color: #fff;
		}
	}
</style>
