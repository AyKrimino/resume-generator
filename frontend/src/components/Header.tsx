import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white/90 border-b">
      <div className="max-w-[95%] mx-auto flex items-center justify-between md:px-4 py-3 md:py-4">
        <Link href="/" className="text-lg font-semibold">
          Resume Generator
        </Link>

        <nav className="hidden md:flex gap-4 items-center text-sm">
          <Link href="#features" className="hover:underline">
            Features
          </Link>
          <Link href="#templates" className="hover:underline">
            Templates
          </Link>
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="/login" className="px-3 py-1 rounded-md border text-sm">
            Sign in
          </Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
