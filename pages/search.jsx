import Head from 'next/head'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults';
import Header from '../components/Header'
import { API_KEY , CONTEXT_KEY} from '../keys';
import response from '../response';


function Search({results}) {
    const router = useRouter()
    console.log(results)

  return (
    <div>
        
        <Head>
            <title> {router.query.term} - Google Search </title>
            <link rel="stylesheet" href="/favicon.ico" />
        </Head>

        <Header/>

        <SearchResults results={results} />


    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
    const  useDummyData = false;
    const startIndex = context.query.start || '0'

    const data = useDummyData ? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(res => res.json())

    return{
        props:{
            results: data
        }
    }
}