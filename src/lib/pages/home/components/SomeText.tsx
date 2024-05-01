import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box p={6}>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/PhotoYuma.jpg"
            alt="Yuma Nur Alfath"
            borderRadius="full"
            boxSize="200px"
            mb={4}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Yuma Nur Alfath
          </Text>
          <Text mb={4}>Web Developer</Text>
          <Text textAlign="center">
            Hello! Saya Yuma Nur Alfath, seorang web developer dengan pengalaman
            dalam membangun berbagai jenis aplikasi web. Saya tertarik dengan
            teknologi web terbaru dan senang menciptakan solusi digital yang
            inovatif. Selamat datang di portofolio saya!
          </Text>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Home;
