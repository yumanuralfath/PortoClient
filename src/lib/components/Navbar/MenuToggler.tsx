import {
  Button,
  Center,
  Stack,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  RiAccountBoxLine,
  RiBriefcase4Line,
  RiDraftLine,
  RiContactsBookLine,
  RiMenuLine,
} from 'react-icons/ri';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle mobile view
  const toggleMobileView = () => {
    setIsMobile(!isMobile);
    if (!isOpen) {
      onOpen();
    } else {
      onClose();
    }
  };

  // Function to update isMobile based on window width
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
  };

  // Run once on initial component render to set isMobile
  useEffect(() => {
    updateIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', updateIsMobile);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Center>
      <Stack spacing={4} direction={isMobile ? 'column' : 'row'}>
        {/* Show hamburger icon only on small screens */}
        {isMobile && (
          <IconButton
            aria-label="Menu"
            icon={<RiMenuLine />}
            onClick={toggleMobileView}
            variant="ghost"
          />
        )}

        {/* Show menu items */}
        {!isMobile && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            <Button variant="ghost" leftIcon={<RiAccountBoxLine />}>
              About
            </Button>
            <Button variant="ghost" leftIcon={<RiBriefcase4Line />}>
              Project
            </Button>
            <Button variant="ghost" leftIcon={<RiDraftLine />}>
              Blog
            </Button>
            <Button variant="ghost" leftIcon={<RiContactsBookLine />}>
              Contact
            </Button>
          </motion.div>
        )}
      </Stack>
    </Center>
  );
};

export default Navbar;
