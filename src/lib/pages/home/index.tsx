/* eslint-disable import/no-extraneous-dependencies */
import { Grid, Box } from '@chakra-ui/react';
import ReactFullpage from '@fullpage/react-fullpage';

import SomeImage from './components/SomeImage';
import SomeText from './components/SomeText';

const Home = () => (
  <ReactFullpage
    anchors={['About', 'Projects', 'Blog', 'Contact']}
    licenseKey="gplv3-license"
    scrollingSpeed={1000}
    lockAnchors={false}
    credits={{ enabled: true, label: 'Yuma' }}
    render={() => (
      <ReactFullpage.Wrapper>
        <Box className="section">
          <Grid gap={2}>
            <SomeText />
          </Grid>
        </Box>
        <Box className="section">
          <SomeImage />
        </Box>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Home;
