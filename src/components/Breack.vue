<template>
	<div class="head__breack">
					<breadcrumbs/>
	</div>
</template>

<script>
	export default {}
	import jQuery from "jquery";
	window.$ = window.jQuery = jQuery;
	import router from "../router.js";

/*	let crumbs = [];
	let urlCrumbs = window.location.href.split('/').slice(3);
	let currentCrumb = '';
	for (let i in urlCrumbs) {
		currentCrumb = currentCrumb + '/'+ urlCrumbs[i];
		let currentTitle;
		for (let routeI in router.options.routes) {
			if (router.options.routes[routeI].path == currentCrumb) {
				crumbs.push(router.options.routes[routeI]);
			}
		}
	}

	console.log(crumbs);

	$(document).ready(function(){
		$.each(crumbs, function(index, i) {
			$('#crumbs').append("<li>" + "<router-link to='"+i.path+"'>" + i.name + "</router-link>" + "</li>");
		})
	});*/

</script>

<style lang="scss" scoped>

</style>
