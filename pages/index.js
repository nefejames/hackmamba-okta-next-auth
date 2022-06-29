import Head from "next/head";
import { Button, Center } from "@chakra-ui/react";
import appwrite from "utils";

export default function Home() {
  const loginWithOkta = async () => {
    try {
      await appwrite.account.createOAuth2Session(
        "okta",
        "http://localhost:3000/user"
      );
    } catch (error) {
      throw error;
    }
  };
  return (
    <Center>
      <Head>
        <title>Next Chakra UI Template</title>
      </Head>
      <Button onClick={loginWithOkta} mt={60}>
        Login with Okta
      </Button>
    </Center>
  );
}
