<template>
	<div id="app">
		<Header />
		<div class="container">
			<div class="layout">
				<div class="layout__left">
					<Navbar />
				</div>
				<div class="layout__right">
					<breadcrumbs/>
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header'
	import Navbar from '@/components/Navbar'
	export default {
		components: {
			Header: Header,
			Navbar: Navbar,
		}
	}
</script>

<style lang="scss">

</style>
