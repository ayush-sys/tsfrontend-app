"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HiUserCircle } from "@react-icons/all-files/hi/HiUserCircle";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        // Log the input values
        console.log("Sign In button clicked!");
        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    const unsplashImgAddr = "https://images.unsplash.com/photo-1732452792160-c28abdcd4b64?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <>
            <Header />
            <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-4xl lg:my-20 md:my-10 sm:my-6">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(${unsplashImgAddr})` }}></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <HiUserCircle className="w-auto h-7 sm:h-8" />
                    </div>

                    <p className="mt-3 text-xl text-center text-neutral">
                        Welcome back
                    </p>

                    <a
                        href="#"
                        className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-xl text-neutral hover:bg-neutral-content hover:text-neutral"
                    >
                        <div className="px-2 py-2">
                            <FcGoogle className="w-6 h-6" />
                        </div>
                        <span className="w-5/6 px-2 py-3 font-bold text-center tracking-wide">
                            Login with Google
                        </span>
                    </a>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b border-neutral lg:w-1/4"></span>
                        <p className="text-xs text-center uppercase text-neutral font-semibold tracking-wide">
                            or login with email
                        </p>
                        <span className="w-1/5 border-b border-neutral lg:w-1/4"></span>
                    </div>

                    <div className="mt-4">
                        <label
                            className="block mb-2 text-sm font-medium text-neutral"
                            htmlFor="LoggingEmailAddress"
                        >
                            Email Address
                        </label>
                        <input
                            id="LoggingEmailAddress"
                            className="block w-full px-4 py-2 text-neutral bg-base-100 border rounded-lg focus:border-neutral focus:ring-opacity-30 focus:outline-none focus:ring focus:ring-neutral"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label
                                className="block mb-2 text-sm font-medium text-neutral"
                                htmlFor="loggingPassword"
                            >
                                Password
                            </label>
                            <a
                                href="/sign-up"
                                className="text-xs text-neutral hover:underline"
                            >
                                Forget Password?
                            </a>
                        </div>

                        <input
                            id="loggingPassword"
                            className="block w-full px-4 py-2 text-neutral bg-base-100 border rounded-lg focus:border-neutral focus:ring-opacity-30 focus:outline-none focus:ring focus:ring-neutral"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            className="w-full px-6 py-3 text-sm font-medium tracking-wider uppercase text-base-100 transition-colors duration-300 transform bg-neutral rounded-lg focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-0 hover:bg-neutral-content hover:text-neutral"
                            onClick={handleSignIn}
                        >
                            Login
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b border-neutral lg:w-1/4"></span>
                        <a className="text-xs text-center uppercase text-neutral font-semibold tracking-wide hover:underline" href="/sign-up">
                            or sign up
                        </a>
                        <span className="w-1/5 border-b border-neutral lg:w-1/4"></span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
