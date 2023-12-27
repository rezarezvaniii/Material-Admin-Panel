"use client"
import Image from "next/image";
import { useState } from "react";
import logoImgLogin from "../../../public/picture/INKOMOKO..png"
import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleLogoSvg from "../../../public/picture/Group.svg"
import Checkbox from '@mui/material/Checkbox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation'

// Yup schema to validate the form
const schema = Yup.object().shape({
 
  email: Yup.string().required().email(),
  password: Yup.string().required().min(7),
});

const SignIn = () => {
  const router = useRouter()
  const [visibility , setVisibility] = useState(false)
  const handlevisibility = ()=>{
    setVisibility(!visibility)
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: schema,


    onSubmit: async ({ email, password }) => {
      if(password == "12345678" && email == "hello@gmail.com"){
        localStorage.setItem('token', "thisistoken");

        router.push('/dashboard');
      }
      

    },

  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;




  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return ( 
        <>
            <div className="w-full h-screen flex justify-center items-center">
              <div className="w-3/12 flex flex-col gap-10  items-center ">
              <Image
                src={logoImgLogin}
                
                alt="Picture of the author"
              />
               <form className="w-full " onSubmit={handleSubmit} method="POST">

                <div className="w-full flex flex-col gap-2">

                <label className="font-medium text-base" htmlFor="email">Email Address</label>
                <input
                  className="text-[#4B5768] font-normal text-base outline-none rounded-lg border-[1px] border-[#4B5768] h-10 px-2"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  />
                {errors.email && touched.email && <span className="text-[#FF698D] ">{errors.email}</span>}

                  </div>
                  
                  <div className="w-full flex flex-col gap-2 mt-5">
                <div className="flex justify-between items-center ">
                <label className="text-[#4B5768]  font-medium text-base " htmlFor="password">Password</label>
                  <p className="text-xs font-medium text-[#FF698D]">forget password?</p>
                </div>
                <div className="relative w-full ">

                <input
                className="outline-none w-full rounded-lg border-[1px] border-[#4B5768] h-10 px-2"
                type={visibility ? "name" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                id="password"
                />
                <button onClick={handlevisibility} className="absolute end-4 translate-y-1/2 bottom-1/2">{visibility ? <VisibilityIcon/> : <VisibilityOffIcon />} </button>
                </div>
                {errors.password && touched.password && <span className="text-[#FF698D] ">{errors.password}</span>}

                </div>

                <span className="flex items-center mt-3">
                  <Checkbox
                  id="myCheckbox"
                  {...label}
                  defaultChecked
                  sx={{
                    color: "#FF698D",
                    '&.Mui-checked': {
                      color: "#FF698D",
                    },
                  }}
                />
                <label htmlFor="myCheckbox" className="text-base cursor-pointer font-light text-[#191D23]">Keep me signed in</label>
                </span>

                <button className="w-full mt-3 h-12 bg-[#FF698D] text-white rounded-lg"  type="submit">Login</button>

                <div className="flex justify-center w-full mt-4 relative">
                  <span className="absolute w-9/12 -z-10 h-[1px] bg-[#999DA3] translate-y-1/2 top-1/2  "></span>
                    <p className="text-[#999DA3] px-2 bg-white">or sign in with</p>
                  
                </div>

                <button className="w-full h-12 rounded-lg mt-3 flex justify-center items-center gap-2 bg-[#E4E7EB] ">
                <Image
                src={GoogleLogoSvg}
                
                alt="Picture of the author"
              />
                Continue with Google
                </button>
                <span className="w-full flex justify-center items-center">

                <button className="text-center mt-4 text-[#FF698D]">Create an account</button>
                </span>
              </form>




              </div>
            </div>
        </>
     );
}
 
export default SignIn;