<template>
	<view>
		loading...
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// src: 'http://192.168.4.100:8084/'
			}
		},
		onLoad() {
			console.log('[from uniapp placeholder]')
			uni.openLocation({
				longitude: 121.6,
				latitude: 24.9,
				success: this.openLocationSuccess,
				// complete: this.openLocationSuccess
				// complete: () => {
				//   this.setData({ needBack: true });
				// },
			});
		},
		methods: {
			openLocationSuccess() {
				uni.navigateBack();
				// wx.redirectTo({url: "/pages/index/index"})
				console.log("[success uniapp navigateBack from onLoad placeholder]");
			},
		}
	}
</script>

<style>
</style>
