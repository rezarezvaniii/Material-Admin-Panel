"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter()
  useEffect(() => {


    if(localStorage.getItem("token")){
      router.push('/dashboard');
    }else{
        router.push('/auth/login');
    }
    }
   , []);
   


   





  return (


    <main className="h-screen w-full ">
      
      
    </main>
  )
}
