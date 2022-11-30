import PaginationBtn from './PaginationBtn'
function SearchResults( { results } ) {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[15%] lg:pl-52'>


        <p className='text-gray-600 text-md mb-5 mt-3'>About {results.searchInformation?.formattedTotalResults} results in {results.searchInformation?.formattedSearchTime} seconds </p>

        {results.items?.map((result) =>(
            <div className="max-w-xl mb-8 group" key={result.link}>

                <div className="">
                    <a href={result.link} className='text-sm'> {result.formattedUrl} </a>

                    <a href={result.link}>
                        <h2 className='truncate text-xl text-blue-800  font-medium group-hover:underline'> {result.title} </h2>
                    </a>
                </div>

                <p> {result.snippet} </p>
            </div>
        ))}

        <PaginationBtn/>
    </div>
  )
}

export default SearchResults