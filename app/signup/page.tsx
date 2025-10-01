"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import * as yup from "yup";

// Define types
type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const imageList = [
  "/images/login/Component 1.svg",
  "/images/login/Component 2.svg",
  "/images/login/Component 3.svg",
];

// Yup validation schema
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required.")
    .email("Please enter a valid email address."),
  password: yup
    .string()
    .trim()
    .required("Password is required.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
      "Password must be at least 8 characters and include uppercase, lowercase, number, and a special character."
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm Password is required.")
    .oneOf([yup.ref("password")], "Passwords do not match."),
});

const SignupPage = () => {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Check if form is valid for enabling button
  const isFormValid = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      return true;
    } catch {
      return false;
    }
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const trimmedData = {
        email: formData.email.trim(),
        password: formData.password.trim(),
        confirmPassword: formData.confirmPassword.trim(),
      };

      await validationSchema.validate(trimmedData, { abortEarly: true });

      setIsSubmitting(true);
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedData),
      });

      const data = await response.json();

      if (response.ok) {
        setErrorMessage("Registration successful! Redirecting...");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setErrorMessage(data.message || "Registration failed.");
      }
    } catch (err: any) {
      if (err.name === "ValidationError") {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="login-wrapper overflow-hidden">
      <div className="flex items-center">
        {/* Sliding Image */}
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

        {/* Signup Form */}
        <div className="rounded bg-white px-8 pt-[5rem] shadow-three dark:bg-black sm:p-[38px] lg:mx-auto lg:w-[35%] lg:px-4">
          <h3 className="mb-3 text-2xl font-semibold text-black dark:text-white sm:text-3xl">
            <span className="text-primary">Welcome to HUMB</span> RWA
          </h3>
          <p className="mb-4 text-base text-gray">
            Securely access the future of healthcare investments — buy and trade
            crypto-backed medical assets with confidence.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color pr-12 outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-500"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="mb-4 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Your Password"
                className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color pr-12 outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-3.5 text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* General error message shown here */}
            {errorMessage && (
              <p
                className={`text-sm mb-3 ${
                  errorMessage.includes("successful")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-sm font-medium text-white ${
                !isSubmitting
                  ? "bg-primary hover:bg-primary/90"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-4 text-sm text-body-color">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
