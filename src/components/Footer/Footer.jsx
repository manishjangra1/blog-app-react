import React from 'react'
import Link from 'next/link'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-slate-950 text-slate-300">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center text-white">
                <Logo width="120px" />
              </div>
              <div>
                <p className="text-sm">
                  &copy; Copyright 2025. All Rights Reserved by Manish.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-slate-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Affiliate Program
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-slate-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-slate-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-white" href="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak
