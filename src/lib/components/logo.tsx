import { Link, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled('span')`
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
        <Image width={8} src="/assets/chick.svg" />
        Yuma
      </LogoBox>
    </Link>
  );
};

export default Logo;
