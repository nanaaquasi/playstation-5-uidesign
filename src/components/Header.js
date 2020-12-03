import { Box, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { Search2Icon, SettingsIcon } from "@chakra-ui/icons";
import React from "react";
import { userAccounts } from "../mock";
import styles from "./Home.module.css";

const Header = () => {
  return (
    <Box color='#eee'>
      <Flex align='center' justify='space-between'>
        <Stack isInline spacing='10' align='center'>
          <Text fontSize='24px' fontWeight='600'>
            Games
          </Text>
          <Text fontSize='24px'>Media</Text>
        </Stack>
        <Stack isInline spacing='40px' align='center'>
          <Search2Icon w={6} h={6} />
          <SettingsIcon w={6} h={6} />
          <Box className={styles.Image} mr='6'>
            {userAccounts.map((user) => {
              return (
                user.defaultUser && (
                  <Image src={user.image} w='30px' h='30px' rounded='full' />
                )
              );
            })}
          </Box>
          <Text ml='8' fontSize='20px'>
            12:30 PM
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
