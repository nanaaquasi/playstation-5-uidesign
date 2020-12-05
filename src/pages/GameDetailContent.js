import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

import iconEllipsis from "../assets/icons/ellipsis.png";
import { AnimatePresence, motion } from "framer-motion";
import select from "../assets/sounds/select.mp3";

const GameDetailContent = ({ selectedGame }) => {
  const MotionBox = motion.custom(Box),
    MotionFlex = motion.custom(Flex);

  const audio = new Audio(select);

  const playAudioEffect = () => {
    audio.load();
    audio.currentTime = 0.25;
    audio.play();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <MotionBox
        color='white'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <VStack align='start' spacing='6'>
          <Image src={selectedGame.logo} w='30%' h='80%' />
          <Text fontSize='2xl' w='40ch'>
            {selectedGame.tagline}
          </Text>
        </VStack>
        <Flex mt='8'>
          <HStack>
            <MotionFlex
              rounded='full'
              p='10px 80px'
              align='center'
              justify='center'
              bg='rgba(224, 255, 231, 0.124)'
              // _hover={{ bg: "rgba(224, 255, 231, 0.524)" }}
              cursor='pointer'
              whileHover={{ border: "3px solid rgba(224, 255, 231, 0.924)" }}
              transition={{ duration: 0 }}
              onMouseEnter={playAudioEffect}
            >
              <Text fontWeight='600'>Play</Text>
            </MotionFlex>
            <MotionBox
              w='40px'
              h='40px'
              bg='rgba(224, 255, 231, 0.124)'
              rounded='full'
              d='flex'
              alignItems='center'
              justifyContent='center'
              // _hover={{ bg: "rgba(224, 255, 231, 0.524)" }}
              cursor='pointer'
              whileHover={{ border: "3px solid rgba(224, 255, 231, 0.924)" }}
              transition={{ duration: 0 }}
              onMouseEnter={playAudioEffect}
            >
              <Image src={iconEllipsis} w='50%' />
            </MotionBox>
          </HStack>
        </Flex>
      </MotionBox>
    </AnimatePresence>
  );
};

export default GameDetailContent;
