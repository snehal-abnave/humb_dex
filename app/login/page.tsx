"use client";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const imageList = [
  "/images/login/Component 2.svg",
  "/images/login/Component 1.svg",
  "/images/login/Component 3.svg",
];

const SigninPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        // localStorage.setItem("token", data.token); // if token is returned
        // router.push("/dashboard"); // if using useRouter
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="login-wrapper overflow-hidden">
        <div className="flex items-center">
          <div>
            <Image
              src={imageList[currentImageIndex]}
              alt="login-slider"
              width={800}
              height={600}
              className="hidden h-full w-full lg:block"
              priority
            />
          </div>

          <div className="rounded bg-white px-8 pt-[5rem] shadow-three dark:bg-black sm:p-[38px] lg:mx-auto lg:w-[35%] lg:px-4">
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-black dark:text-white sm:text-3xl">
                <span className="text-primary"> Welcome to HUMB</span> RWA
              </h3>
              <p className="mb-4 text-base font-normal text-gray lg:w-[100%]">
                Securely access the future of healthcare investments — buy and
                trade crypto-backed medical assets with confidence.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="border-light border-radius-8">
                  <div className="border-radius-8">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="border-bottom-left border-bottom-right border-radius-8 w-full bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#1A1919] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none lg:w-[100%]"
                    />
                  </div>

                  <div className="border-bottom horizontal "></div>

                  <div className="border-radius-8">
                    <div className="border-radius-8 relative w-full lg:w-[100%]">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Your Password"
                        required
                        className="border-top-left border-top-right border-radius-8 w-full bg-[#f8f8f8] px-6 py-3 pr-12 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#1A1919] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-4" />
                <div className="mb-6">
                  <button
                    type="submit"
                    className="border-radius-8 flex w-full items-center justify-center bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark lg:w-[100%]"
                  >
                    Log In
                  </button>
                </div>

                <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
                  <div>
                    <a
                      href="/forgot-password"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </form>

              <div className="mb-4 flex items-center justify-center lg:w-[100%]">
                <span className="hidden h-[1px] w-full max-w-[250px] bg-body-color/50 sm:block"></span>
                <p className="w-full text-center text-base font-medium text-body-color">
                  Or
                </p>
                <span className="hidden h-[1px] w-full max-w-[250px] bg-body-color/50 sm:block"></span>
              </div>

              <button className="border-light border-radius-8 mb-6 flex w-full items-center justify-center rounded-md px-6 py-3 text-base text-body-color outline-none transition-all duration-300 lg:w-[100%]">
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
                Continue With Google
              </button>

              <p className="text-base font-medium text-body-color">
                Don’t Have Any Account ?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Signup Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
