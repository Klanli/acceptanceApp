<template>
	<view class="projectInfo_content">
		<u-icon name="list-dot" color="#2979ff" size="40" @click="onProjectList()" class="choseProjectIcon"></u-icon>
		<!-- <u-button @click="onProjectList()">选择项目</u-button> -->
		<view class="selectList">
			<u-select v-model="show" mode="single-column" :list="projectList" @confirm="confirm"></u-select>
		</view>
		<u-collapse :item-style="itemStyle"  @change='OnBuild'>
			<u-collapse-item title="项目基本信息" index='1'>
				<view class="collapse-item">
					<view style="padding:4px 0" v-for="(item,index) in baseInfo" :key='index'>
						<span>{{item.label}}</span>
						<span>{{item.value}}</span>
					</view>
				</view>
			</u-collapse-item>
			<u-collapse-item title="建(构)筑信息" index='2'>
				<view>
					<u-tabs bg-color=' #ccc' :list="list" :is-scroll="false" :current="current" @change="changetab"></u-tabs>
					<view class="tabView" v-for="(item,index) in basetabInfo" :key='index'>
						<view class="" v-for="(i,ind) in item" :key='ind'>
							<span>{{i.label}}</span>
						<span>{{i.value}}</span>
						</view>
					</view>
				</view>
			</u-collapse-item>
			<u-collapse-item title="建筑消防设施" index='3'>
				<view class="collapse-item">
					<u-checkbox-group :wrap='true' disabled>
						<u-checkbox 
							style="margin: 4px 0;"
							v-model="item.checked" 
							v-for="(item, index) in checkboxlist" :key="index" 
							:name="item.name"
						>{{item.name}}</u-checkbox>
					</u-checkbox-group>
				</view>
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script src='./ProjectInfo.js'>
</script>

<style lang='less' scoped>
	.projectInfo_content{
		
	.choseProjectIcon{
		position: absolute;
		right: 20upx;
		bottom: 66upx;
		z-index: 100;
	}
	}
.collapse-item {
	background-color: #ccc;
	padding-left: 18px;
}
.tabView{
	padding:4px 0px 4px 18px;
	background-color: #ccc;
}
</style>


