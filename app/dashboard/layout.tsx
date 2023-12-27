import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
    
    
  }) {
    
    

    return <section className="flex h-screen">
        
        <div className=" w-[20%] h-full flex flex-col bg-[#121212] ">

          <Sidebar />


        </div>


        <div className=" w-[80%] h-screen overflow-y-auto ">

        {children}
        </div>
        </section>
  }