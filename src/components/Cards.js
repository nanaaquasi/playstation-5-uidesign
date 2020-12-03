import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import playButton from "../assets/icons/play.png";
import astroImg from "../assets/images/astro/astro-bg.jpg";
export const Cards = () => {
  return <div></div>;
};

export const UserAccountCard = ({ user }) => {
  const history = useHistory();

  return (
    <Stack>
      <Box
        key={user.id}
        mb='10'
        cursor='pointer'
        onClick={() => history.push("/home")}
      >
        <Image
          src={user.image}
          objectFit='cover'
          rounded='full'
          w='120px'
          h='120px'
          transform={user.defaultUser && "scale(1.5)"}
          border={user.defaultUser && "2px solid #ccc"}
        />
      </Box>
      <Text mt='20' color='#ccc' textAlign='center' fontWeight='400'>
        {user.name}
      </Text>
    </Stack>
  );
};

export const ExploreCard = (props) => {
  return (
    <>
      <Box w='250px' h='150px' position='relative'>
        <Box
          position='absolute'
          w='100%'
          h='100%'
          bg='rgba(0, 5, 1, 0.681)'
          zIndex='60'
        ></Box>
        <VStack
          position='absolute'
          align='start'
          justify='flex-end'
          mt='auto'
          h='100%'
          zIndex='70'
          spacing='1'
          bottom='2'
          left='2'
        >
          <Image src={playButton} w='20px' />
          <Text fontWeight='400'>{props.title}</Text>
        </VStack>
        <Image src={props.image} w='100%' h='100%' objectFit='cover' />
      </Box>
    </>
  );
};

export const GameCard = () => {
  return <></>;
};
