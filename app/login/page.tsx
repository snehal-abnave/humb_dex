"use client";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

// Image slider images
const imageList = [
  "/images/login/Component 2.svg",
  "/images/login/Component 1.svg",
  "/images/login/Component 3.svg",
];

// Yup validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

const SigninPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

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
    setError("");

    // 1. Validate using Yup
    try {
      await loginSchema.validate(formData);
    } catch {
      setError("Invalid email or password");
      return;
    }

    // 2. Submit to backend
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok) {
        toast.success("Login successful!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
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

                {/* ✅ Show one combined error message above login button */}
                {error && (
                  <p className="mt-4 rounded border border-red-300 bg-red-50 p-2 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <div className="mb-6 mt-6">
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
                <span className="mr-3">{/* Google Icon SVG */}</span>
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
