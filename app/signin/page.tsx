"use client";


import Link from "next/link";
import { useEffect, useState } from "react";
// ...rest of your code

const imageList = [
  "/images/login/Component 2.svg",
  "/images/login/Component 1.svg",
  "/images/login/Component 3.svg",
];
const SigninPage = () => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
     <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="">
        <div className="-mx-4 flex flex-wrap">
          {/* 🔁 Sliding Image */}
          <img
            src={imageList[currentImageIndex]}
            alt="login-slider"
            className="md:w-[50%] transition-opacity duration-1000 ease-in-out"
          />
            <div className="rounded bg-white shadow-three dark:bg-black sm:p-[38px] md:w-[50%]">
              <h3 className="mb-3 text-2xl font-semibold text-black dark:text-white sm:text-3xl">
              <span className="text-primary"> Welcome to HUMB</span> RWA
              </h3>
              <p className="mb-2 text-base font-normal text-gray">
                Securely access the future of healthcare investments — buy and trade crypto-backed medical assets with confidence.
              </p>
            

             
             
              <form>
                <div className="">
                 
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                     <hr className="w-1/2" />
                   <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
             
                <div className="mb-8">
                 
                 
                </div>
                 <div className="mb-6">
                  <button className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                    Sign in
                  </button>
                </div>
                <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                  
                  <div>
                    <a
                      href="#0"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
               
              </form>
               <div className="mb-8 flex items-center justify-center">
                <span className="hidden h-[1px] w-full max-w-[250px] bg-body-color/50 sm:block"></span>
                <p className="w-full text-center text-base font-medium text-body-color">
                  Or
                </p>
                <span className="hidden h-[1px] w-full max-w-[250px] bg-body-color/50 sm:block"></span>
              </div>
                <button className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                <span className="mr-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_95:967)">
                      <path
                        d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                        fill="#34A853"
                      />
                      <path
                        d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_95:967">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Sign in with Google
              </button>
              <p className="text-center text-base font-medium text-body-color">
               Don’t Have Any Account ? {" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Signup Now
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          {/* <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
      </section>
    </>
  );
};

export default SigninPage;
