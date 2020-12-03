import {
  Box,
  Flex,
  HStack,
  StylesProvider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { exploreItems } from "../mock";
import { ExploreCard } from "./Cards";
import styles from "./Home.module.css";
import logon from "../assets/sounds/logon.mp3";
import navigate from "../assets/sounds/navigate.mp3";
import { motion } from "framer-motion";

export const ExploreContent = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();
  const [isActive, setIsActive] = useState(false);

  const dragger = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsActive(true);
    setStartX(e.pageX - dragger.current.offsetLeft);
    setScrollLeft(dragger.current.scrollLeft);
  };

  const handleMouseLeave = (e) => {
    setIsDown(false);
    setIsActive(false);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    const x = e.pageX - dragger.current.offsetLeft;
    const dragSpeed = (x - startX) * 3;
    dragger.current.scrollLeft = scrollLeft - dragSpeed;
  };
  const handleMouseUp = (e) => {
    setIsDown(false);
    setIsActive(false);
  };

  const logonAud = new Audio(logon);
  const hoverFx = new Audio(navigate);

  const playAudioEffect = () => {
    hoverFx.load();
    hoverFx.play();
  };

  React.useEffect(() => {
    logonAud.load();
    logonAud.currentTime = 1;
    logonAud.play();
  }, []);

  const MotionFlex = motion.custom(Flex),
    MotionStack = motion.custom(VStack);

  return (
    <Box
      color='white'
      d='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='start'
    >
      <MotionStack
        spacing='4'
        alignSelf='start'
        align='start'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        <Text fontWeight='300' fontSize='xl'>
          Official News from PlayStation | 10/11/2020
        </Text>
        <Text fontWeight='500' fontSize='4xl'>
          Ready for a PS5 Adventure?
        </Text>
        <Text fontWeight='300' fontSize='2xl'>
          ASTRO's PLAYROOM is pre-loaded and waiting for you!<br></br>Explore
          the new capabilities of PS5 and feel the worl...
        </Text>
        <MotionFlex
          overflow='auto'
          w='1200px'
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseUp={(e) => handleMouseUp(e)}
          ref={dragger}
          className={isActive ? styles.Active : styles.Dragger}
          userSelect='none'
        >
          {exploreItems.map((item, i) => (
            <Box
              ml={i > 0 ? "6" : "0"}
              key={item.id}
              mt='8'
              onMouseEnter={playAudioEffect}
              _hover={{
                border: "2px solid #eee",
                transform: "scale(1.1)",
              }}
            >
              <ExploreCard title={item.title} image={item.mainImg} />
            </Box>
          ))}
        </MotionFlex>
      </MotionStack>
    </Box>
  );
};
