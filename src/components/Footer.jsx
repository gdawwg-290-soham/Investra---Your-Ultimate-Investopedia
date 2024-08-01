import React from "react";
import { TextField } from "./Fields";
import Button from "./Button";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
        <p className="text-s text-gray-800">
            &copy; Soham Ghosh Inc. | Copyright {new Date().getFullYear()} | All rights reserved.
          </p>
          <p className="text-xs text-gray-800">
            Made with &#128150; from India by Soham Ghosh &#128513;
          </p>
          <form className="flex w-full justify-center md:w-auto mt-6 md:mt-0">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="blue" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
