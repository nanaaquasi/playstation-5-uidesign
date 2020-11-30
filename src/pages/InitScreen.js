import { Box, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/logo.png";
import controllerImg from "../assets/images/controller.jpg";
import { useHistory } from "react-router-dom";

export const InitScreen = () => {
  const inputRef = React.useRef(null);
  const history = useHistory();

  const showBootUpScreen = (e) => {
    e.preventDefault();
    console.log("Boot screen");
    history.push("/welcome");
  };

  React.useEffect(() => {
    inputRef.current.blur();
    inputRef.current.focus();
  }, []);

  return (
    <Box
      bg='#000'
      width='100vw'
      height='100vh'
      d='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      overflow='hidden'
      my='auto'
    >
      <Box my='20'>
        <Image src={logo} w='100px' />
      </Box>

      <Text fontSize='18px' color='rgb(149, 149, 149)'>
        This PS5 prototype was built for learning and practise purposes
      </Text>
      <form>
        <Text textStyle='italics' color='rgb(116, 116, 116)'>
          <em>
            It is not afiliated to Sony or PlayStation in any way. Press{" "}
            <Input
              style={{ caretColor: "transparent" }}
              type='text'
              placeholder='ENTER'
              onKeyPress={(e) => showBootUpScreen(e)}
              variant='unstyled'
              w='60px'
              ref={inputRef}
            />
            and ENJOY.
          </em>
        </Text>
      </form>
    </Box>
  );
};
