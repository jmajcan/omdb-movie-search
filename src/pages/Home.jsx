
export const Home = () => {
	return (
		<div>
			<div
				class="max-w-md m-5 mx-auto overflow-hidden bg-blue shadow-md rounded-xl md:max-w-2xl"
			>
				<div class="md:flex">
					<div class="md:flex-shrink-0">
					<img
						class="object-cover w-full h-48 md:w-48"
						src="../assets/store.jpg"
						alt="A cool store"
					/>
					</div>
					<div class="p-8">
					<div
						class="text-sm font-semibold tracking-wide text-indigo-500 uppercase"
					>
						The cool store
					</div>
					<p class="mt-2 text-gray-500">
						Visit our cool store and find the best products for you.
					</p>
					</div>
				</div>
			</div>
		</div>
	);
}
