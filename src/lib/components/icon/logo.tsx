import { Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import Chick from './Chick';

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
        <Chick />
        <Text fontSize="large" fontWeight="bold">
          YUMA
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
