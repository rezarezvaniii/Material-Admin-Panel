



const Upcomming = () => {
    return ( 
        <>
          <p className="text-xl font-normal text-[#878787]">Upcoming Bill</p>
                <div className="w-full rounded-md h-full gap-10 flex flex-col  shadow-[0_35px_60px_-15px_rgba(76,103,100,0.12)] bg-white px-4 py-7">
                  
                  <div className="flex gap-3 items-center">
                    <div className="h-full rounded-lg flex flex-col gap-[2px] w-fit bg-[#D2D2D240] p-2 ">
                      <p className="text-[#666666] font-medium text-xs ">May</p>
                      <p className="font-extrabold text-xl ">15</p>

                    </div>
                    <div className="flex w-full ">
                      <div className="flex w-full justify-between">
                        <div className="flex flex-col">
                        <p className="font-bold text-base text-[#525256]">Odoo - Monthly</p>
                        <p className="text-xs font-normal text-[#9F9F9F]">Last Charge - 14 May, 2022</p>
                        </div>
                        <button className="rounded-lg border-[1px] border-[#E8E8E8] px-3 py-2 font-bold text-base text-[#525256] ">$150</button>
                      </div>

                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="h-full rounded-lg flex flex-col gap-[2px] w-fit bg-[#D2D2D240] p-2 ">
                      <p className="text-[#666666] font-medium text-xs ">May</p>
                      <p className="font-extrabold text-xl ">15</p>

                    </div>
                    <div className="flex w-full ">
                      <div className="flex w-full justify-between">
                        <div className="flex flex-col">
                        <p className="font-bold text-base text-[#525256]">Odoo - Monthly</p>
                        <p className="text-xs font-normal text-[#9F9F9F]">Last Charge - 14 May, 2022</p>
                        </div>
                        <button className="rounded-lg border-[1px] border-[#E8E8E8] px-3 py-2 font-bold text-base text-[#525256] ">$150</button>
                      </div>

                    </div>
                  </div>

                </div>
        </>
     );
}
 
export default Upcomming;