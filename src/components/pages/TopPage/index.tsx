import React from 'react'
import { User } from '@auth0/auth0-react'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'

type Props = {
  onLogoutClick: React.ComponentProps<typeof Button>['onClick']
  user: User | undefined
}

export const TopPage = ({ onLogoutClick, user }: Props) => (
  <Box minH="100vh">
    <Flex
      align="center"
      bg="white"
      borderBottom={1}
      borderColor="gray.200"
      borderStyle="solid"
      color="gray.600"
      minH="60px"
      px={{ base: 4 }}
      py={{ base: 2 }}
    >
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Text color="gray.800" fontFamily="heading" textAlign="center">
          Logo
        </Text>
      </Flex>

      <Menu>
        <MenuButton as={Button} cursor="pointer" rounded="full" variant="link">
          <Avatar size="sm" src={user?.picture} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onLogoutClick}>ログアウト</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Box>
)
