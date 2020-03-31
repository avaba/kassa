<template>

	<div class="content">
		<h1>Организации (0)</h1>
		<div class="row">
			<div class="col-md-4">
				<router-link to="/organization/add" class="call d-block">Добавить организацию</router-link>
				<router-view></router-view>
				<div class="info">
					<div class="info__head">
						<h3>Информация</h3>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
								<path id="ic_error_24px" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15H11V15h2Zm0-4H11V7h2Z" transform="translate(-2 -2)" fill="#0068cf"/>
							</svg>
						</div>
					</div>
					<div class="info__content">
						<p>Для работы в сервисе необходимо добавить: <br>
							1.  Организацию<br>
							2. Магазин, интернет-магазин или сайт<br>
							3. Кластер<br>
						4. Кассу</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {}
</script>

<style lang="scss" scoped>

</style>