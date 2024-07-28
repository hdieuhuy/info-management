import SignInForm from "@/components/common/signInForm";
import { Flex } from "antd";
import React from "react";

function SignInPage() {
  return (
    <Flex justify="center" className="min-h-[calc(100vh - 64px - 69px)] mt-24">
      <SignInForm />
    </Flex>
  );
}

export default SignInPage;
