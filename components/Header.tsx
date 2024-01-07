import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MicNoneIcon from '@mui/icons-material/MicNone';
import Image from 'next/image';
import profileImage from "../public/picture/photo_2024-01-06_19-42-00.jpg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const Header = (props:any) => {



  const { toggleDrawer } = props;

  


    return ( 
        <>
          
          <div className="w-full h-12 bg-[#EEEEEE] gap-4 flex max-[750px]:justify-between justify-end items-center ">

            <button onClick={toggleDrawer(true)} className='min-[750px]:hidden ms-3'> <FormatListBulletedIcon/> </button>
              <div className="w-[290px] max-[600px]:hidden relative h-10">
              <input placeholder="search..." type="search" className="w-full h-full outline-none -z-30 ps-8 rounded-full " />
                <button>
                  <SearchIcon className='absolute z-30 start-2 top-2' color='action'/>
                  </button>
                <button>
                  <MicNoneIcon className='absolute z-30 end-2 top-2 ' color='primary'/>
                  </button>
              </div>

              <NotificationsNoneIcon className='max-[600px]:hidden'/>

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
                <div className='w-6 h-full '>
                  <ArrowDropDownIcon/>
                </div>
              </div>

            </div>


        </>
     );
}
 
export default Header;