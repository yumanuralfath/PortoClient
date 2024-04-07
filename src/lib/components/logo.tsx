import { Text, Link, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

import ChickIcon from './icons/chick';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <ChickIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontWeight="bold"
        >
          YUMA
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
