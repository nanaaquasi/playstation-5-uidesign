import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import Header from "../components/Header";
import styles from "../components/Home.module.css";
import storeImg from "../assets/icons/store.png";
import exploreImg from "../assets/icons/explore.png";
import plusImg from "../assets/icons/plus.png";
import consoleImg from "../assets/icons/console.png";
import exploreLarge from "../assets/images/astro/astro-bg-duo.png";
import logo from "../assets/images/logo-black.png";

import psImg from "../assets/icons/ps-now.jpg";
import { userGames } from "../mock";
import HomeContentNavigator from "../navigator/HomeContentNavigator";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import navigate from "../assets/sounds/navigate.mp3";
import select from "../assets/sounds/select.mp3";
import logon from "../assets/sounds/logon.mp3";
import spidermanPreview from "../assets/images/spiderman/preview.jpg";

import { AnimatePresence, motion } from "framer-motion";

const ImageWrapper = React.memo((props) => {
  console.log(props.isSelected);
  const audio = new Audio(select);

  const playAudioEffect = () => {
    audio.load();
    audio.currentTime = 0.25;
    audio.play();
  };

  const MotionStack = motion.custom(HStack);

  const variants = {
    hidden: {
      x: 200,
      opacity: 0,
      scale: 0.7,
      transition: {
        x: { stiffness: 1000 },
      },
    },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { stiffness: 600, velocity: -500 },
      },
    },
  };

  return (
    <MotionStack
      variants={variants}
      position='relative'
      onClick={props.onClick}
      transition='all .1s'
      _hover={{
        border: "2px solid #eee",
        rounded: "20%",
        transform: "scale(1.1)",
      }}
    >
      <Flex
        align='center'
        justify='center'
        bg='rgba(8, 2, 2, 0.356)'
        w={props.containerWidth}
        h={props.containerHeight}
        rounded='20%'
        overflow='hidden'
        cursor='pointer'
        onMouseEnter={() => playAudioEffect()}
      >
        {props.children}
      </Flex>
      <Text
        position='absolute'
        bottom='0'
        right='0'
        alignSelf='flex-end'
        display={props.isSelected ? "block" : "none"}
        transform='translate(60px, 0px)'
        color='white'
      >
        {props.title}
      </Text>
    </MotionStack>
  );
});

const HomeScreen = () => {
  const initialGame = {
    id: 7,
    title: "Explore",
    previewImg: exploreImg,
    mainImg: exploreLarge,
  };
  const [selectedGame, setSelectedGame] = React.useState(initialGame);
  const [isSelected, setIsSelected] = React.useState(false);
  const [isNotifShown, setIsNotifShown] = React.useState(false);

  console.log("slecetd", selectedGame);

  const history = useHistory();

  const { path } = useRouteMatch();

  const audio = new Audio(navigate);
  const logonAud = new Audio(logon);

  const playAudioEffect = () => {
    audio.currentTime = 0.1;
    audio.play();
  };

  const showGameContent = (game) => {
    playAudioEffect();
    setSelectedGame(game);

    // setIsSelected(!isSelected);
    history.push(`${path}/game/${game.id}`);
  };

  const showExploreContent = (game) => {
    setSelectedGame(game);
    // setIsSelected(!isSelected);
    history.push(`${path}`);
  };

  React.useEffect(() => {
    audio.load();
    // setTimeout(() => {
    //   setIsNotifShown(!isNotifShown);
    //   playAudioEffect();
    //   setTimeout(() => {
    //     setIsNotifShown(false);
    //   }, 5000);
    // }, 4000);
    // logonAud.load();
    // logonAud.currentTime = 1;
    // logonAud.play();
  }, []);

  const MotionBox = motion.custom(Box),
    MotionFlex = motion.custom(Flex),
    MotionStack = motion.custom(HStack);

  const variants = {
    hidden: { x: 200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,

      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
        delayChildren: 0.2,
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <Box className={styles.Home} position='relative'>
        <Box position='absolute' zIndex='5' top='40%' left='12%'>
          <HomeContentNavigator />
        </Box>
        <AnimatePresence exitBeforeEnter>
          <MotionBox
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            position='absolute'
            exit={{ opacity: 0 }}
            zIndex='-2'
            top='0'
            left='0'
            right='0'
            bottom='0'
            // bg='rgba(0, 5, 1, 0.781)'
          >
            <Image src={selectedGame.mainImg} w='100%' h='100%' />
          </MotionBox>
        </AnimatePresence>

        <Box
          bg='rgba(0, 5, 1, 0.781)'
          position='absolute'
          top='10'
          right='7'
          zIndex='100'
          p='4'
          display={isNotifShown ? "block" : "none"}
          rounded='10px'
        >
          <Flex justify='space-between' align='center'>
            <Image src={spidermanPreview} w='40px' h='40px' />
            <VStack flex='1' color='white' align='start' mx='6' spacing='1'>
              <Text>Marvel's Spiderman: Miles Morales</Text>
              <Text fontWeight='500' fontSize='20px'>
                Ready to play.
              </Text>
            </VStack>
            <Box
              bg='#eee'
              w='30px'
              h='30px'
              rounded='full'
              d='flex'
              justifyContent='center'
              alignItems='center'
              ml='4'
            >
              <Image src={logo} w='30px' />
            </Box>
          </Flex>
        </Box>
        <Box
          position='absolute'
          w='100%'
          h='100%'
          top='0'
          left='0'
          bg='rgba(0, 5, 1, 0.381)'
          zIndex='-1'
        ></Box>

        <Header />
        <Flex align='center' mt='4'>
          <AnimatePresence>
            <MotionStack
              spacing='4'
              variants={variants}
              initial='hidden'
              animate='show'
            >
              <ImageWrapper
                containerWidth='90px'
                containerHeight='80px'
                title='Store'
                isSelected={isSelected}
              >
                <Image src={storeImg} w='30px' />
              </ImageWrapper>
              <Box onClick={() => showExploreContent(initialGame)}>
                <ImageWrapper
                  containerWidth='150px'
                  containerHeight='140px'
                  title='Explore'
                  isSelected={isSelected}
                >
                  <Image src={exploreImg} w='60px' />
                </ImageWrapper>
              </Box>

              {userGames.map((game, index) => (
                <MotionFlex whileTap={{ scale: 0.8 }}>
                  <ImageWrapper
                    containerWidth='80px'
                    containerHeight='80px'
                    isSelected={selectedGame.id === index}
                    title={game.title}
                    key={game.id}
                    onClick={() => showGameContent(game)}
                  >
                    <Image
                      src={game.previewImg}
                      w='100%'
                      h='100%'
                      objectFit='cover'
                      objectPosition='top'
                    />
                  </ImageWrapper>
                  {/* <Text alignSelf='end' display='none'>
                  {game.title}
                </Text> */}
                </MotionFlex>
              ))}

              <ImageWrapper
                containerWidth='90px'
                containerHeight='80px'
                title='PS Plus'
                isSelected={isSelected}
              >
                <Image src={plusImg} w='35px' />
              </ImageWrapper>
              <ImageWrapper
                containerWidth='90px'
                containerHeight='80px'
                title='PS Go'
              >
                <Image src={psImg} w='80px' />
              </ImageWrapper>
              <ImageWrapper
                containerWidth='90px'
                containerHeight='80px'
                title='PS Console'
                isSelected={isSelected}
              >
                <Image src={consoleImg} w='30px' />
              </ImageWrapper>
            </MotionStack>
          </AnimatePresence>
        </Flex>
      </Box>
    </>
  );
};

export default HomeScreen;
