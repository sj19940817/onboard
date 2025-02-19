import Link from "next/link";
import { ModeToggle } from "@/components/atoms/theme-switcher";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Header = () => {
  return (
    <div className="w-full p-3 px-2 border-b border-border/20 fixed backdrop-blur-md z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <h1 className="text-xl lg:text-2xl font-bold">Onboard</h1>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/sj19940817/onboard" target="_blank">
                <GitHubLogoIcon />
              </a>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
