import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Us", href: "about" },
  { name: "Services", href: "services" },
  { name: "Values", href: "values" },
  { name: "Blog", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between bg-cardOverlay backdrop-blur-lg p-2 mt-4 rounded-full lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5" >
            <span className="sr-only">SOWO</span>
            <span className="h-8 text-4xl font-semibold bg-gradient-to-r from-orange-600 to-amber-400 rounded-l-full w-auto pl-3">SO</span>
            <span className="h-8 text-4xl font-semibold text-black w-auto">WO</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <li
              key={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <a href={`#${item.href}`} preventScrollReset={true}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Join Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">SOWO</span>
            <span className="h-8 text-4xl font-semibold bg-gradient-to-r from-orange-600 to-amber-400 rounded-l-full w-auto pl-3">SO</span>
            <span className="h-8 text-4xl font-semibold text-black w-auto">WO</span>
          </a>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
