import React from 'react'
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'

type Props = {
  onLogoutClick: React.ComponentProps<typeof Button>['onClick']
}

export const TopPage = ({ onLogoutClick }: Props) => (
  <Box>
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

      <Stack
        direction="row"
        flex={{ base: 1, md: 0 }}
        justify="flex-end"
        spacing={6}
      >
        <Button
          fontSize="sm"
          fontWeight={400}
          onClick={onLogoutClick}
          variant="link"
        >
          Logout
        </Button>
      </Stack>
    </Flex>
  </Box>
)
