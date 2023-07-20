import Logo from "./logo";
import Search from "./search";

import MainNav from "@/components/navbar/main-nav";
import Container from "@/components/container";
import getCategories from "@/actions/get-categories";
import UserMenu from "@/components/navbar/user-menu";
import NavbarActions from "./navbar-actions";
import getAllProducts from "@/actions/get-all-products";

import { SafeUser } from "@/app/types";

interface NavBarProps {
  currentUser?: SafeUser | null;
}

export const revalidate = 0;

const Navbar: React.FC<NavBarProps> = async ({ currentUser }) => {
  const categories = await getCategories();
  const products = await getAllProducts();
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
            <div
              className="
                        flex flex-row 
                        items-center 
                        gap-1
                        md:gap-2
                        md:w-11/12
                      "
            >
              <Logo />
              <MainNav data={categories} currentUser={currentUser} />
              <Search data={products}/>
            </div>

            <div className=" flex flex-row items-center justify-between">
              <UserMenu currentUser={currentUser} />
              <NavbarActions />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
