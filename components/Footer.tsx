'use client'

import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-white">
      {/* CTA Block */}
      <div className="bg-[#cdb87d] text-black py-20 px-6 text-center">
        <div className="flex justify-center mb-6">
          <FaChevronDown className="text-2xl" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 tracking-wide">
          <span className="text-transparent stroke-text">Ready to start your </span>
          <span className="font-extrabold text-black">Project?</span>
        </h2>

        <Link
          href="/contact"
          className="inline-block mt-4 px-6 py-2 border border-black text-sm font-semibold hover:bg-black hover:text-white transition"
        >
          GET IN TOUCH
        </Link>
      </div>

      {/* Main Footer */}
      <div className="bg-black px-6 py-12 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="uppercase text-white text-base font-semibold border-l-4 border-[#cdb87d] pl-2">
              Reach Out
            </h3>
            <p>Call us at <strong>02392 686368</strong></p>
            <p>
              or email us at{' '}
              <a
                href="mailto:info@southernindustrialroofing.co.uk"
                className="underline hover:text-[#cdb87d]"
              >
                info@southernindustrialroofing.co.uk
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-4 md:text-right">
            <div className="space-y-2">
              <h4 className="font-semibold text-[#cdb87d]">Projects</h4>
              <ul className="space-y-1">
                <li><Link href="/who-we-are" className="hover:text-[#cdb87d]">Who we Are</Link></li>
                <li><Link href="/capabilities" className="hover:text-[#cdb87d]">Capabilities</Link></li>
              </ul>
              <Link href="/contact" className="text-[#cdb87d] font-semibold inline-flex items-center gap-1 mt-2">
                WORK WITH US <span className="text-sm translate-y-[-2px]">&raquo;</span>
              </Link>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#cdb87d]">Services</h4>
              <ul className="space-y-1">
                <li><Link href="/consultancy" className="hover:text-[#cdb87d]">Consultancy</Link></li>
                <li><Link href="/services" className="hover:text-[#cdb87d]">Services</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal line */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs text-zinc-400">
          <span>©2025 SOUTHERN INDUSTRIAL ROOFING</span>
          <span>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>,{' '}
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link> Site by <Link href={'https://www.techsquisitemedia.com'}>Techsquisite Media</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
