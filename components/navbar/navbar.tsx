import Logo from "./logo";
import Search from "./search";

import MainNav from "@/components/navbar/main-nav";
import Container from "@/components/container";
import getCategories from "@/actions/get-categories";
import UserMenu from "@/components/navbar/user-menu";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="relative w-full bg-white z-10 shadow-sm">
      <div
        className="
                py-2 
                border-b-[1px]
            "
      >
        <Container>
          <div
            className="
                        flex 
                        flex-row 
                        items-center 
                        justify-between 
                        gap-3
                        md:gap-0
                    "
          >
            <Logo />
            <div className="flex">
              <MainNav data={categories} />
              <Search />
            </div>
            <div className="flex">
              <UserMenu />
              <NavbarActions />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
