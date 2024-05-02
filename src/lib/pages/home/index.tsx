/* eslint-disable import/no-extraneous-dependencies */
import { Box } from '@chakra-ui/react';
import ReactFullpage from '@fullpage/react-fullpage';

import SomeImage from './components/SomeImage';
import SomeText from './components/SomeText';

const Home = () => (
  <ReactFullpage
    anchors={['Home', 'About', 'Projects', 'Blog', 'Contact']}
    licenseKey="gplv3-license"
    scrollingSpeed={1000}
    lockAnchors={false}
    credits={{ enabled: false, label: 'Yuma' }}
    render={() => (
      <ReactFullpage.Wrapper>
        <Box className="section">
          <SomeText />
        </Box>
        <Box className="section">
          <SomeImage />
        </Box>
        <Box className="section">
          <SomeImage />
        </Box>
        <Box className="section">
          <SomeImage />
        </Box>
        <Box className="section">
          <SomeImage />
        </Box>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Home;
