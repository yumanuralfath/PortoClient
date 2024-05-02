import { Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/PhotoYuma.jpg"
          alt="Alvalen Shafel"
          width={200}
          height={200}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          Yuma Nur Alfath
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mt={2}>
          Full Stack Developer
        </Text>
        <Text textAlign="center" mt={4}>
          A junior fullstack developer who currently focused on Web Development.
          Other than that, I also interested in UX/UI Design, Mobile and AI
          Development. I love to learn new things and always open to new
          opportunities.
        </Text>
      </motion.div>
    </>
  );
};

export default Home;
