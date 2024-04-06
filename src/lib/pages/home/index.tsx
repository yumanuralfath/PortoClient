import { Grid } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Analytics } from '@vercel/analytics/react';

import CTASection from './components/CTASection';
import SomeImage from './components/SomeImage';
import SomeText from './components/SomeText';

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
      <SomeImage />
      <CTASection />
      <Analytics />
    </Grid>
  );
};

export default Home;
