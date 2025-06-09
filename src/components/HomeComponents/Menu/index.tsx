'use client'

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Menu = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full fixed top-0 z-20 bg-white/70 backdrop-blur-sm shadow-2xl h-[70px] flex items-center">
      <Container>
        <div className="sm:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="cursor-pointer">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                <SheetDescription className="mt-10">
                  <NavigationMenu>
                    <NavigationMenuList className="gap-5 flex-col items-start">
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="#home"
                          className="font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          Home
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="#services"
                          className="font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          Serviços
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="#depoiments"
                          className="font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          Depoimentos
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="#plan"
                          className="font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          Planos
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="#blog"
                          className="font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          Blog
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                  <Button onClick={() => setIsOpen(false)} className="mt-5">
                    <a href="#contact">Eu vou casar</a>
                  </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="items-center gap-7 w-full justify-between hidden sm:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-x-5">
              <NavigationMenuItem>
                <NavigationMenuLink href="#home" className="font-medium">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#services" className="font-medium">
                  Serviços
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#depoiments" className="font-medium">
                  Depoimentos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#plan" className="font-medium">
                  Planos
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#blog" className="font-medium">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button>
            <a href="#contact">Eu vou casar</a>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
