"use client";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-base-200 font-medium p-10">
        <div className="footer">
          <nav>
            <h6 className="footer-title font-bold tracking-wider">Services</h6>
            <a className="link link-hover">Puja ceremony</a>
            <a className="link link-hover">Order prasad</a>
            <a className="link link-hover">Book temple visit</a>
          </nav>
          <nav>
            <h6 className="footer-title font-bold tracking-wider">Company</h6>
            <a className="link link-hover" href="/about-us">
              About us
            </a>
            <a className="link link-hover" href="#contact">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-6">
              <a href="/1">
                <FaFacebook className="text-neutral h-6 w-6" />
              </a>
              <a href="/2">
                <FaInstagram className="text-neutral h-6 w-6" />
              </a>
              <a href="/3">
                <FaTwitter className="text-neutral h-6 w-6" />
              </a>
            </div>
          </nav>
        </div>
        <div className="text-center text-sm mt-6">
          <hr className="h-0.5 border-t-0 bg-neutral mb-2" />
          <p>&copy; {currentYear} digimind solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
