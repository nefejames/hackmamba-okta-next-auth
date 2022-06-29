import { Button, Center, Text, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appwrite from "utils";

export default function User() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const router = useRouter();

  const getLoggedInUser = async () => {
    const data = (await appwrite) && appwrite.account.get();
    data
      .then((res) => setLoggedInUser(res))
      .catch((err) => {
        router.push("/");
        console.log(err);
      });
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const logOut = async () => {
    await appwrite.account.deleteSession("current");
    alert("logout successful");
    router.push("/");
  };

  return (
    loggedInUser && (
      <Center>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="150px"
        >
          <Heading>You logged-in successfully</Heading>

          <Text>User: {loggedInUser.name}</Text>
          <p>Email: {loggedInUser.email}</p>
          <Button onClick={logOut} mt={20}>
            Logout
          </Button>
        </Stack>
      </Center>
    )
  );
}
