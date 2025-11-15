
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-gray py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
                    <div>
                        <h3 className="text-2xl font-extrabold text-white tracking-wider mb-4">
                            <span className="text-brand-blue">Luxe</span>Drive
                        </h3>
                        <p className="text-gray-400">Premium self-drive car rentals for your every need.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Support</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">FAQ</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-brand-blue transition-colors">Facebook</a>
                            <a href="#" className="hover:text-brand-blue transition-colors">Instagram</a>
                            <a href="#" className="hover:text-brand-blue transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-brand-light-gray mt-8 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} LuxeDrive Rentals. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
