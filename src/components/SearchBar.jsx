import { SearchIcon } from './SearchIcon';

export const SearchBar = () => {

	const handleSearch = (e) => {
		console.log(e.target.value)
	}

	return (
		<form className='w-[500px] relative'>
			<div className='relative'>
				<input
					className='w-full p-4 rounded-full focus-visible:outline-secondary'
					type='search'
					placeholder='Search Movies'
					onChange={(e) => handleSearch(e)}
				/>
				<button className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-dark rounded-full'>
					<SearchIcon />
				</button>
			</div>
		</form>
	);
}