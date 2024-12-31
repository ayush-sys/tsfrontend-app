"use client";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

export default function Footer() {
  return (
    <footer className="footer bg-base-200 font-medium p-10">
      <nav>
        <h6 className="footer-title font-bold tracking-wider">Services</h6>
        <a className="link link-hover">Puja ceremony</a>
        <a className="link link-hover">Order prasad</a>
        <a className="link link-hover">Book temple visit</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold tracking-wider">Company</h6>
        <a className="link link-hover" href="/about-us">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-6">
          <a>
            <FaFacebook className="text-neutral h-6 w-6" />
          </a>
          <a>
            <FaInstagram className="text-neutral h-6 w-6" />
          </a>
          <a>
            <FaTwitter className="text-neutral h-6 w-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
}