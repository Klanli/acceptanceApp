<template>
 		<uni-collapse class="assess_content" :accordion="true">
 			<uni-collapse-item style="background-color: #8f8f8f;" v-for="item in accordion" :key="item.id" :title="item.title" :show-animation="item.animation">
 				<uni-collapse :accordion="true">
 					<uni-collapse-item v-for="item in accordion" :key="item.id" :title="'2366' + item.title" :show-animation="item.animation">
						<u-cell-group>
							<u-cell-item :title="item.content" @click='assess'></u-cell-item>
							<u-cell-item title="会员等级" value="新版本" @click='assess'></u-cell-item>
						</u-cell-group>
 					</uni-collapse-item>
 				</uni-collapse>
 			</uni-collapse-item>
 		</uni-collapse>
</template>
 
<script src='./assess.js'>
</script>

<style lang="less" scoped>
</style>