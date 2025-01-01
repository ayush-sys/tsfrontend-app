"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignUp = (e) => {
        e.preventDefault(); // Prevent page refresh
        console.log("Form Data:", formData);
    };

    const unsplashImgAddr = "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <>
            <Header />
            <section className="lg:m-12 md:my-10 sm:my-8">
                <div className="flex justify-center h-[80vh]">
                    {/* Image Section */}
                    <div className="hidden bg-cover lg:block lg:w-1/2 rounded-l-lg shadow-lg" style={{ backgroundImage: `url(${unsplashImgAddr})` }}></div>

                    {/* Form Section */}
                    <div className="w-full lg:w-1/2 px-6 py-8 md:px-8 bg-base-100 rounded-r-lg shadow-lg">
                        <div className="flex justify-center mx-auto">
                            {/* Logo or Icon */}
                        </div>

                        <p className="mt-3 text-xl text-center text-neutral font-semibold tracking-wide">
                            Sign up to get started
                        </p>

                        <form className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2" onSubmit={handleSignUp}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Ayush"
                                    className="block w-full px-4 py-2 text-neutral bg-base-100 border rounded-lg focus:border-neutral focus:ring-opacity-30 focus:outline-none focus:ring focus:ring-neutral"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Pattanayak"
                                    className="block w-full px-4 py-2 text-neutral bg-base-100 border rounded-lg focus:border-neutral focus:ring-opacity-30 focus:outline-none focus:ring focus:ring-neutral"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral">Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="+91 9999999999"
                                    className="block w-full px-4 py-2 text-neutral bg-base-100 border rounded-lg focus:border-neutral focus:ring-opacity-30 focus:outline-none focus:ring focus:ring-neutral"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ayush.pattanayak@mail.com"
                                    className="block w-full px-4 py-2 text-neutral bg-base-100 border rounded-lg focus:border-neutral focus:ring-opacity-30 focus:outline-none focus:ring focus:ring-neutral"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="block w-full px-4 py-2 text-neutral bg-base-100 border rounded-lg focus:border-neutral focus:ring-opacity-30 focus:outline-none focus:ring focus:ring-neutral"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    className="block w-full px-4 py-2 text-neutral bg-base-100 border rounded-lg focus:border-neutral focus:ring-opacity-30 focus:outline-none focus:ring focus:ring-neutral"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-sm font-medium tracking-wider text-base-100 bg-neutral rounded-lg hover:bg-neutral-content focus:outline-none focus:ring focus:ring-neutral focus:ring-opacity-50 transition-colors duration-300 transform mt-4"
                            >
                                Sign Up <FaChevronRight className="w-5 h-5 inline-block ml-2 rtl:-scale-x-100" />
                            </button>
                        </form>

                        <div className="flex items-center justify-center mt-6 text-neutral">
                            <span className="text-xs">Already have an account? <a href="/login" className="font-semibold hover:underline">Log in</a></span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
