import { Link, useLocation } from "react-router-dom";

import { Navbar, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const { pathname } = useLocation();

  return (
    <Navbar className="border-b-2">
      <Navbar.Brand as={Link} to="/">
        <span className="self-center whitespace-nowrap sm:text-lg text-sm font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Shayma's
          </span>
          Blog
        </span>
      </Navbar.Brand>

      <form className="hidden lg:inline-block">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className="w-10 h-10 rounded-full lg:hidden" color="gray">
        <AiOutlineSearch className="h-5 w-5" />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="hidden sm:flex" color="gray" pill>
          <FaMoon className="p-0" />
        </Button>
        <Link to="sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign in
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={pathname === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects" active={pathname === "/projects"}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
