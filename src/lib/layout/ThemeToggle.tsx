import { IconButton, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div variants={menuVariants} initial="hidden" animate="visible">
      <IconButton
        aria-label="theme toggle"
        icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
        onClick={toggleColorMode}
      />
    </motion.div>
  );
};

export default ThemeToggle;
