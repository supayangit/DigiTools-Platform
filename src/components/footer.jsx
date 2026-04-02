import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
    return (
        <div>
            <footer className="bg-[#0B1C3A] text-gray-300">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">

                    <div className="sm:col-span-2 md:col-span-2 text-center sm:text-center">
                        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">DigiTools</h2>
                        <p className="text-gray-400 max-w-sm leading-relaxed mx-auto sm:mx-0">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 sm:space-y-3 text-gray-400">
                            <li className="hover:text-white cursor-pointer">Features</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                            <li className="hover:text-white cursor-pointer">Templates</li>
                            <li className="hover:text-white cursor-pointer">Integrations</li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 sm:space-y-3 text-gray-400">
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Press</li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 sm:space-y-3 text-gray-400">
                            <li className="hover:text-white cursor-pointer">Documentation</li>
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Community</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-white font-semibold mb-4">Social Links</h3>
                        <div className="flex justify-center sm:justify-start gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm text-center sm:text-left">

                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 sm:mt-0">
                        <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-white cursor-pointer">Terms of Service</p>
                        <p className="hover:text-white cursor-pointer">Cookies</p>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default footer;