import React from 'react'
import { Box, Button, Heading, Stack } from '@chakra-ui/react'

type Props = {
  onSigninClick: React.ComponentProps<typeof Button>['onClick']
}

export const LoginPage = ({ onSigninClick }: Props) => (
  <Box bg="gray.50" minH="100vh" px={{ base: '4', lg: '8' }} py="12">
    <Box maxW="md" mx="auto">
      <Heading fontWeight="extrabold" mb="8" size="xl" textAlign="center">
        Sign in to your account
      </Heading>
      <Box
        bg="white"
        px={{ base: '4', md: '10' }}
        py="8"
        rounded={{ sm: 'lg' }}
        shadow="base"
      >
        <Stack spacing="6">
          <Button
            colorScheme="blue"
            fontSize="md"
            onClick={onSigninClick}
            size="lg"
            type="submit"
          >
            Sign in
          </Button>
        </Stack>
      </Box>
    </Box>
  </Box>
)
