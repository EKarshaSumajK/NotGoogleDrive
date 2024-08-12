import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="border-b  bg-gray-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-1 text-lg">
          Not{" "}
          <span>
            <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"></img>
          </span>{" "}
          Drive
        </div>
        <div className="flex gap-2">
          <SignedIn>
            <OrganizationSwitcher></OrganizationSwitcher>
            <UserButton></UserButton>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Header;
