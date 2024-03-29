import { Box, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import bootBgVideo from "../assets/videos/boot.mp4";
import logoImg from "../assets/images/logo-black.png";
import powerIcon from "../assets/icons/power.png";
import loader from "../assets/sounds/loader.mp3";
import silence from "../assets/sounds/silence.mp3";

import { useAudio } from "../utils";
import { userAccounts } from "../mock";
import { UserAccountCard } from "../components/Cards";

const BootScreen = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.currentTime = 0.5;
  }, []);

  // console.log(audioRef.current);

  const preWelcomeScreen = (
    <>
      <iframe
        src={silence}
        allow='autoplay'
        id='audio'
        style={{ display: "none" }}
      ></iframe>
      <audio
        autoPlay={true}
        loop={true}
        style={{ display: "none" }}
        ref={audioRef}
      >
        <source src={loader} type='audio/mp3'></source>
      </audio>
      <Flex direction='column' align='center' justify='center'>
        <Text color='#eee' fontSize='18px' mb='20'>
          Press the PS Button(Enter) on your controller
        </Text>
        <Box
          width='90px'
          h='90px'
          border='1px solid #eee'
          rounded='full'
          display='flex'
          alignItems='center'
          justifyContent='center'
          mb='40'
          mt='20'
        >
          <Box
            d='flex'
            alignItems='center'
            justifyContent='center'
            bg='#ccc'
            w='60px'
            height='60px'
            rounded='full'
            cursor='pointer'
            onClick={() => setScreenDisplay(welcomeScreen)}
          >
            <Image src={logoImg} alt='Logo' />
          </Box>
        </Box>
      </Flex>
    </>
  );

  const welcomeScreen = (
    <>
      <iframe
        src={silence}
        allow='autoplay'
        id='audio'
        style={{ display: "none" }}
      ></iframe>
      <audio autoPlay={true} loop={true} style={{ display: "none" }}>
        <source src={loader} type='audio/mp3'></source>
      </audio>
      <Flex
        direction='column'
        w='1200px'
        h='100%'
        align='space-between'
        px='10'
        py='10'
      >
        <Text
          alignSelf='flex-end'
          justifySelf='flex-end'
          color='#eee'
          fontSize='2xl'
        >
          12:30 PM
        </Text>
        <Stack
          align='center'
          justify='center'
          flex='1'
          alignSelf='center'
          justifySelf='center'
        >
          <Box mb='20'>
            <Text color='white' fontSize='4xl' fontWeight='300'>
              Welcome Back to Playstation.
            </Text>
            <Text textAlign='center' color='#eee' fontSize='20px'>
              Who's using this controller?
            </Text>
          </Box>

          <Stack isInline spacing='20' mb='40'>
            <Stack align='center' justify='center'>
              <Box
                w='120px'
                h='120px'
                rounded='full'
                bg='rgba(116, 116, 116, 0.171)'
                d='flex'
                alignItems='center'
                justifyContent='center'
                backgroundBlendMode='multiply'
                mb='10'
                cursor='pointer'
              >
                <Text fontWeight='800' fontSize='6xl' color='#eee'>
                  +
                </Text>
              </Box>
              <Text mt='20' color='#ccc' fontWeight='800' fontWeight='400'>
                Add User
              </Text>
            </Stack>

            {userAccounts.map((user) => (
              <UserAccountCard user={user} key={user.id} />
            ))}
          </Stack>
        </Stack>
        <Flex justify='space-between'>
          <Box></Box>
          <Box
            w='40px'
            h='40px'
            rounded='full'
            bg='rgba(116, 116, 116, 0.171)'
            backgroundBlendMode='multiply'
            d='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              src={powerIcon}
              objectPosition='center'
              alignSelf='center'
              w='20px'
            />
          </Box>
          <Stack isInline align='center'>
            <Box
              w='30px'
              h='30px'
              rounded='full'
              bg='#eee'
              d='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Text textAlign='center' fontWeight='700'>
                X
              </Text>
            </Box>
            <Text textAlign='center' color='#eee'>
              Select
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </>
  );

  const [screenToDisplay, setScreenDisplay] = React.useState(preWelcomeScreen);

  const videoStyles = {
    position: "fixed",
    zIndex: -2,
    width: "100%",
  };

  return (
    <Box d='flex' alignItems='center' justifyContent='center' h='100vh'>
      <video style={videoStyles} autoPlay loop>
        <source src={bootBgVideo} type='video/mp4'></source>
      </video>
      <Box
        bg='#000'
        opacity='.9'
        h='100%'
        w='100%'
        position='absolute'
        zIndex='-1'
      ></Box>
      {screenToDisplay}
    </Box>
  );
};

export default BootScreen;
