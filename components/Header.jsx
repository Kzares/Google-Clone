import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import {XIcon, MicrophoneIcon, SearchIcon} from '@heroicons/react/outline'
import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = e =>{
        e.preventDefault()
        const term = searchInputRef.current.value

        if(!term) return

        router.push(`/search?term=${term}`)
    }



    return (
        <header className='sticky top-0 bg-white'>
            <div className="flex w-full p-6 items-center">
            <Image
                src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                height={40}
                width={120}
                classname='cursor-pointer'
                onClick={() => router.push('/')}
            />

            <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-4 ml-10 mr-5 max-w-3xl items-center flex-grow' >
                <input className='flex-grow w-full focus:outline-none' type="text" ref={searchInputRef} />

                <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 hover:scale-125' onClick={() =>{searchInputRef.current.value = ''}} />

                <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
                <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                <button hidden type='submit' onClick={search} >Search</button>

            
            </form>
            </div>

            <HeaderOptions/>
        </header>
    )
}

export default Header