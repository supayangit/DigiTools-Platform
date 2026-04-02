import React from 'react';

const footer = () => {
    return (
        <div>
            <footer className="bg-[#0B1C3A] text-gray-300">
                <div className="mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-6 gap-12">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-white cursor-pointer">Features</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                            <li className="hover:text-white cursor-pointer">Templates</li>
                            <li className="hover:text-white cursor-pointer">Integrations</li>
                        </ul>
                    </div>

                    {/* company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Press</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-white cursor-pointer">Documentation</li>
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Community</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Social Links</h3>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                i
                            </a>

                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                f
                            </a>

                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                x
                            </a>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700"></div>

                {/* Bottom */}
                <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div className="flex gap-8 mt-4 md:mt-0">
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