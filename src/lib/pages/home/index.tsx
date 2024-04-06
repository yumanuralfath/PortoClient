/* eslint-disable import/no-extraneous-dependencies */
import { Grid } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';

import CTASection from './components/CTASection';
import SomeImage from './components/SomeImage';
import SomeText from './components/SomeText';

const Home = () => {
  return (
    <Grid gap={2}>
      <SomeText />
      <SomeImage />
      <CTASection />
      <Analytics />
    </Grid>
  );
};

export default Home;
