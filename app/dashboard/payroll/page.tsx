import Header from "@/components/Header";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Payroll = () => {
    return ( 
        <>
        <Header/>

        <div className="w-full px-4 mt-6">
          <p className="font-normal text-xl text-[#878787]">Balances</p>

          <div className="mt-4 w-full flex flex-wrap gap-6 ">
            <div className="w-[31.5%] mt-6 bg-white rounded-lg flex flex-col p-5 shadow-[0_35px_60px_-15px_rgba(76,103,100,0.1)]">
              <p className="text-[#878787] font-bold text-base text-center">Cosmetica</p>

              <p className="font-semibold mt-4 text-xl text-[#191919] ">cosmetics business</p>

              <p className="font-normal text-[#9F9F9F] text-sm ">type</p>
              <p className="font-semibold text-xl text-[#191919] mt-4">$25000</p>
              <p className="font-normal text-[#9F9F9F] text-sm ">Total amount</p>
              <div className="w-full flex justify-center mt-6 ">
              <button className="text-white text-sm items-center rounded-lg justify-center px-4 py-2 font-medium bg-[#FF698D] flex p-2 ">
                Details
                <KeyboardArrowRightIcon/>
                
              </button>

              </div>
            </div>

            <div className="w-[31.5%] mt-6 bg-white rounded-lg flex flex-col p-5 shadow-[0_35px_60px_-15px_rgba(76,103,100,0.1)]">
              <p className="text-[#878787] font-bold text-base text-center">Print House</p>

              <p className="font-semibold mt-4 text-xl text-[#191919] ">Printing business</p>

              <p className="font-normal text-[#9F9F9F] text-sm ">type</p>
              <p className="font-semibold text-xl text-[#191919] mt-4">$25000</p>
              <p className="font-normal text-[#9F9F9F] text-sm ">Total amount</p>
              <div className="w-full flex justify-center mt-6 ">
              <button className="text-white text-sm items-center rounded-lg justify-center px-4 py-2 font-medium bg-[#FF698D] flex p-2 ">
                Details
                <KeyboardArrowRightIcon/>
                
              </button>

              </div>
            </div>

            <div className="w-[31.5%] mt-6 bg-white rounded-lg flex flex-col p-5 shadow-[0_35px_60px_-15px_rgba(76,103,100,0.1)]">
              <p className="text-[#878787] font-bold text-base text-center">Agriculture</p>

              <p className="font-semibold mt-4 text-xl text-[#191919] ">Agriculture business</p>

              <p className="font-normal text-[#9F9F9F] text-sm ">type</p>
              <p className="font-semibold text-xl text-[#191919] mt-4">$25000</p>
              <p className="font-normal text-[#9F9F9F] text-sm ">Total amount</p>
              <div className="w-full flex justify-center mt-6 ">
              <button className="text-white text-sm items-center rounded-lg justify-center px-4 py-2 font-medium bg-[#FF698D] flex p-2 ">
                Details
                <KeyboardArrowRightIcon/>
                
              </button>

              </div>
            </div>

            <div className="w-[31.5%] mt-6 bg-white rounded-lg flex flex-col p-5 shadow-[0_35px_60px_-15px_rgba(76,103,100,0.1)]">
              <p className="text-[#878787] font-bold text-base text-center">Crypto</p>

              <p className="font-semibold mt-4 text-xl text-[#191919] ">Money business</p>

              <p className="font-normal text-[#9F9F9F] text-sm ">type</p>
              <p className="font-semibold text-xl text-[#191919] mt-4">$25000</p>
              <p className="font-normal text-[#9F9F9F] text-sm ">Total amount</p>
              <div className="w-full flex justify-center mt-6 ">
              <button className="text-white text-sm items-center rounded-lg justify-center px-4 py-2 font-medium bg-[#FF698D] flex p-2 ">
                Details
                <KeyboardArrowRightIcon/>
                
              </button>

              </div>
            </div>

            <div className="w-[31.5%] mt-6 bg-white rounded-lg flex justify-center flex-col p-5 shadow-[0_35px_60px_-15px_rgba(76,103,100,0.1)]">
              
              <div className="w-full  flex justify-center flex-col items-center mt-6 ">
              <button className="text-white text-sm items-center rounded-md justify-center px-4 py-3 w-8/12 font-medium bg-[#FF698D] flex p-2 ">
                Add Project   
              </button>
              <button className="text-[#9F9F9F] text-sm items-center justify-center py-3 px-4 w-8/12 font-medium flex p-2 ">
                Details
                <KeyboardArrowRightIcon/>
                
              </button>

              </div>
            </div>

            

            

          </div>
        </div>

          
            
        </>
     );
}
 
export default Payroll;