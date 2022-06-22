import Head from "next/head";
import { Button, Center } from "@chakra-ui/react";
import appwrite from "utils";

export default function Home() {
  const loginWithOkta = async () => {
    try {
      await appwrite.account.createOAuth2Session(
        "okta",
        "http://localhost:3000/"
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
      <Button onClick={loginWithOkta} mt={20}>
        Login with Okta
      </Button>
    </Center>
  );
}
