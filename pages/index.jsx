import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import { useRef } from 'react'


export default function Home(){
  const router = useRouter()
  const searchInputRef = useRef(null)


  const search = e =>{
    e.preventDefault();
    const term = searchInputRef.current.value

    if(!term) return

    router.push(`/search?term=${term}`)
  }

 
  return(
    <div className='flex flex-col justify-center items-center h-screen' >
      <Head>
        <title>Google 2.0</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>

        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>

          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          <ViewGridIcon className='x-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          
        </div>
      </header>

      <form className='flex flex-col items-center mt-44 flex-grow w-4/5 '>

        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          width={300}
          height={100}
        />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:mx-w-2xl' >
          <SearchIcon className='h-5 mr-3 text-gray-500'/>
          <input ref={searchInputRef} type="text" className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5'/>
        </div>

        <div className=" flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className='btn' onClick={search}>Google Search</button>
          <button className='btn' onClick={search}>I'm feeling Lucky</button>
        </div>

      </form>

      <Footer/>

    </div>
  )
}

