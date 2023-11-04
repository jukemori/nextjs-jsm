import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-black-200 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="/jsm-logo.svg" alt="logo" width={55} height={40} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
