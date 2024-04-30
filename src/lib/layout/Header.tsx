import { Box, Flex } from '@chakra-ui/react';

import Logo from '../components/icon/logo';
import Navbar from '../components/Navbar/MenuToggler';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box marginRight="auto">
        <Logo />
      </Box>
      <Navbar />
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
