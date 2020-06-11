<template>
	<view class="login_content">
		<p>登 录</p>
		<u-form ref="uForm">
			<u-form-item label="姓名" prop="name">
				<u-input v-model="form.name" type="text"/>
			</u-form-item>
			<u-form-item label="密码" prop="name">
				<u-input type="password" v-model="form.pasd" />
			</u-form-item>
			<u-button type="primary" @click="login">登录</u-button>
		</u-form>
	</view>
</template>

<script src='./login.js'></script>

<style lang="less">
	.login_content{
		height: calc(100vh);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		p{
			font-size: 28px;
			font-weight: 600;
			color: #3E606F;
			margin: 10vh 0;
		}
		.u-form{
			width: 70vw;
			.u-form-item{
				margin: 4vh 0;
			}
		}
	}
</style>
