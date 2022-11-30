import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon} from '@heroicons/react/outline'

function HeaderOptions() {
    const HeaderOption = ({title, Icon, selected}) =>{
        return(
            <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-300 cursor-pointer ${selected && 'text-blue-500 border-blue-500'}`}>
                <Icon className='h-4'/>
                <p className="hidden sm:inline-flex">{title}</p>
            </div>
        )
    }

    return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>

        <div className="flex space-x-6">
            <HeaderOption Icon={SearchIcon} title='All' selected />
            <HeaderOption Icon={PhotographIcon} title='Images'  />
            <HeaderOption Icon={PlayIcon} title='Videos'  />
            <HeaderOption Icon={NewspaperIcon} title='News'  />
            <HeaderOption Icon={MapIcon} title='Maps'  />
            <HeaderOption Icon={DotsVerticalIcon} title='More'  />

        </div>

        <div className="flex space-x-4"> 
            <p className="link">Settings</p>
            <p className="link">Tools</p>
        </div>

    </div>
  )
}

export default HeaderOptions