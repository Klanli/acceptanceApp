<template>
	<view class="projectInfo_content">
		<u-icon name="list-dot" color="#2979ff" size="40" @click="onProjectList()" class="choseProjectIcon"></u-icon>
		<!-- <u-button @click="onProjectList()">选择项目</u-button> -->
		<view class="selectList">
			<u-select v-model="show" mode="single-column" :list="projectList" @confirm="confirm"></u-select>
		</view>
		<u-collapse :item-style="itemStyle" :head-style="headsty" @change='OnBuild' :body-style='bodyStyle' :open='uCollapseOpen'>
			<u-collapse-item class="collitem" title="项目基本信息" index='1'>
				<view class="collapse-item">
					<view style="padding:4px 0" v-for="(item,index) in baseInfo" :key='index'>
						<span>{{item.label}}</span>
						<span>{{item.value}}</span>
					</view>
				</view>
			</u-collapse-item>
			<u-collapse-item class="collitem" title="建(构)筑信息" index='2'>
				<view>
					<u-tabs :list="list" :current="current" @change="changetab"></u-tabs>
					<view class="tabView">
						<view class="tabContent"  v-for="(item,index) in basetabInfo" :key='index'>
							<view>
								<span>建筑名称：</span>
								<span>{{item.buildName}}</span>
							</view>
							<view>
								<span>结构类型：</span>
								<span>{{item.buildTypeId}}</span>
							</view>
							<view>
								<span>耐火等级：</span>
								<span>{{item.refractoryLevelId}}</span>
							</view>
							<view>
								<span>地上层数：</span>
								<span>{{item.inTheUpperNumber}}</span>
							</view>
							<view>
								<span>地下层数：</span>
								<span>{{item.numberOfUnderground}}</span>
							</view>
							<view>
								<span>建筑高度：</span>
								<span>{{item.buildHeight}}</span>
							</view>
							<view>
								<span>建筑长度：</span>
								<span>{{item.buildLen}}</span>
							</view>
							<view>
								<span>占地面积：</span>
								<span>{{item.coversArea}}</span>
							</view>
							<view>
								<span>地上建筑面积：</span>
								<span>{{item.aboveGroundFloorArea}}</span>
							</view>
							<view>
								<span>地下建筑面积：</span>
								<span>{{item.undergroundFloorSpace}}</span>
							</view>
						</view>

					</view>
				</view>
			</u-collapse-item>
			<u-collapse-item class="collitem" title="建筑消防设施" index='3'>
				<view class="collapse-item">
					<u-checkbox-group :wrap='true' active-color="0E8AFE">
						<u-checkbox style="margin: 4px 0;" v-model="item.checked" v-for="(item, index) in checkboxlist" :key="index"
						 :name="item.name">{{item.name}}</u-checkbox>
					</u-checkbox-group>
				</view>
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script src='./ProjectInfo.js'>
</script>

<style lang='less' scoped>
	.projectInfo_content {
		height: calc(100vh- 44px);
		background-color: #F5F5F9;

		.choseProjectIcon {
			padding: 10px;
			border: 1px solid #ccc;
			background-color: #fff;
			border-radius: 60px;
			position: fixed;
			right: 8px;
			bottom: 58px;
			z-index: 99999;

		}
	}

	.collitem {
		/* background-color: #2979FF!important; */
		color: #fff !important;

		.u-collapse-head {
			color: #fff !important;
		}
	}

	.collapse-item {
		background-color: #fff;
		min-height: 400px;
		padding-left: 18px;
	}

	.tabView {
		height: 400px;
		padding: 4px 0px 4px 18px;
		background-color: #fff;
		overflow-y: scroll;
		.tabContent{
			border-bottom: 1px dashed #ccc;
		}
		
	}
</style>
