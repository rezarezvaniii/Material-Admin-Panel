import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined';
import CameraOutdoorOutlinedIcon from '@mui/icons-material/CameraOutdoorOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';




const Transaction = () => {



const data = [
  {logo: SportsEsportsOutlinedIcon , name:"Odoo - Monthly" , last:"Gadget & Gear" , price:"16000.00" , date:"17 May 2023"},
  {logo: FoundationOutlinedIcon , name:"Grant" , last:"Gadget & Gear" , price:"20000.00" , date:"17 May 2023"},
  {logo: CameraOutdoorOutlinedIcon , name:"salaries" , last:"XL fashions" , price:"125500.00" , date:"17 May 2023"},
  {logo: MovieFilterOutlinedIcon , name:"lunch" , last:"Hajir Biriyani" , price:"11000.00" , date:"17 May 2023"},
  {logo: GarageOutlinedIcon , name:"laptops" , last:"Uber" , price:"16000.00" , date:"17 May 2023"},
  {logo: GarageOutlinedIcon , name:"laptops" , last:"Uber" , price:"16000.00" , date:"17 May 2023"},
]




    return ( 
        <>
          <p className="text-xl font-normal text-[#878787]">Recent Transaction</p>
              <div className="w-full h-full rounded-md mt-2 gap-10 flex flex-col  shadow-[0_35px_60px_-15px_rgba(76,103,100,0.12)] bg-white px-4 pt-6">
                  <div className="w-full flex gap-4">
                    <button className="text-base font-bold border-b-2 border-[#299D91] text-[#299D91]">All</button>
                    <button className="text-base font-bold text-[#525256]">Revenue</button>
                    <button className="text-base font-bold text-[#525256]">Expenses</button>
                  </div>

                  <div className="flex  flex-col w-full ">
                  
                  {
                    data.map((item , index)=>(
                      <div key={index} className="flex py-5 gap-3 items-center">
                        <div className="h-full rounded-lg flex flex-col gap-[2px] w-fit bg-[#D2D2D240] p-2 ">
                        {item.logo && <item.logo />}
                        </div>
                        <div className="flex w-full ">
                          <div className="flex w-full justify-between">
                            <div className="flex flex-col">
                            <p className="font-bold text-base text-[#525256]">{item.name}</p>
                            <p className="text-xs font-normal text-[#9F9F9F]">{item.last}</p>
                            </div>
                            <div>
                            <p className="font-semibold text-base text-[#525256]">{item.price}</p>
                            <p className="text-xs font-normal text-[#9F9F9F]">{item.date}</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))
                  }

                  </div>
              </div>


        </>
     );
}
 
export default Transaction;