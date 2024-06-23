import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" color="white" px={2}>
            Home
          </Link>
          <Link as={NavLink} to="/brand-kit" color="white" px={2}>
            Brand Kit
          </Link>
          <Link as={NavLink} to="/website-builder" color="white" px={2}>
            Website Builder
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;