<script></script>

<template>
	<div class="wrapper">
		<div class="sample">
			<form>
				<div class="form-group">
					<label>field</label>
					<input
						type="text"
						class="form-control"
					/>
				</div>
				...
				<div class="form-group">
					<label>Guests</label>
					<input
						type="button"
						class="btn btn-primary"
						value="+"
					/>
				</div>
				<div class="form-group">Guest 1 ....</div>
				<hr />
				<button class="btn btn-success">Send Data</button>
			</form>
			<div>
				<h2>All done!</h2>
				<table class="table table-bordered">
					<tr>
						<td>Email</td>
						<td></td>
					</tr>
					<tr>
						<td>Guests</td>
						<td></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
