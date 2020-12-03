import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

import { userGames as USER_GAMES } from "../mock";
import iconEllipsis from "../assets/icons/ellipsis.png";
import { motion } from "framer-motion";

const GameDetailContent = () => {
  const { id } = useParams();

  console.log(id);

  const selectedGame = USER_GAMES.find((game) => game.id === id);

  console.log(selectedGame);

  const MotionBox = motion.custom(Box);

  return (
    <MotionBox
      color='white'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.2 }}
    >
      <VStack align='start' spacing='6'>
        <Image src={selectedGame.logo} w='30%' h='80%' />
        <Text fontSize='2xl' w='40ch'>
          {selectedGame.tagline}
        </Text>
      </VStack>
      <Flex mt='8'>
        <HStack>
          <Flex
            rounded='full'
            p='10px 80px'
            align='center'
            justify='center'
            bg='rgba(224, 255, 231, 0.124)'
            _hover={{ bg: "rgba(224, 255, 231, 0.524)" }}
            cursor='pointer'
          >
            <Text fontWeight='600'>Play</Text>
          </Flex>
          <Box
            w='40px'
            h='40px'
            bg='rgba(224, 255, 231, 0.124)'
            rounded='full'
            d='flex'
            alignItems='center'
            justifyContent='center'
            _hover={{ bg: "rgba(224, 255, 231, 0.524)" }}
            cursor='pointer'
          >
            <Image src={iconEllipsis} w='50%' />
          </Box>
        </HStack>
      </Flex>
    </MotionBox>
  );
};

export default GameDetailContent;
