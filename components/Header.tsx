import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MicNoneIcon from '@mui/icons-material/MicNone';
import Image from 'next/image';
import profileImage from "../public/picture/photo_2023-12-19_10-18-08-56.jpg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Header = () => {
    return ( 
        <>
          
          <div className="w-full h-12 bg-[#EEEEEE] gap-4 flex justify-end items-center ">
              <div className="w-[290px] relative h-10">
              <input placeholder="search..." type="search" className="w-full h-full outline-none -z-30 ps-8 rounded-full " />
                <button>
                  <SearchIcon className='absolute z-30 start-2 top-2' color='action'/>
                  </button>
                <button>
                  <MicNoneIcon className='absolute z-30 end-2 top-2 ' color='primary'/>
                  </button>
              </div>
              <NotificationsNoneIcon/>

              <div className='flex '>
                <div className='flex '>
                  <div className='flex justify-end flex-col items-end pe-2'>

                    <p className='flex flex-col text-sm font-bold justify-end text-[#1A1A1A]'>
                      reza
                    </p>
                      <span className='font-medium text-[13px] text-[#757575]'> 
                      front-end developer
                      </span>
                  </div>

                  <Image
                  className='rounded-lg h-10 w-10 '
                  src={profileImage}
                  alt='profile'
                  />
                  
                </div>
                <div className='w-6 h-full'>
                  <ArrowDropDownIcon/>
                </div>
              </div>

            </div>


        </>
     );
}
 
export default Header;