import { Box, Flex } from '@chakra-ui/react';

import Logo from '../components/logo';

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
      <Box marginLeft="auto">
        <Logo />
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
