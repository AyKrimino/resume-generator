import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                aria-label="Open menu"
                className="p-2 rounded-md cursor-pointer"
              >
                ☰
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent
                sideOffset={8}
                align="end"
                className="w-44 rounded-md bg-white border shadow-lg py-1 z-50 focus:outline-none"
              >
                <DropdownMenuItem>
                  <Link
                    href="#features"
                    className="block px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                  >
                    Features
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="#templates"
                    className="block px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                  >
                    Templates
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="#about"
                    className="block px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100"
                  >
                    About
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-2" />

                <DropdownMenuItem asChild>
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-sm rounded-sm hover:bg-gray-100 focus:bg-gray-100"
                  >
                    Sign in
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
