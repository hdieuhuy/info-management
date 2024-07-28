import SignUpForm from "@/components/common/signUpForm";
import { Flex } from "antd";
import React from "react";

function SignUpPage() {
  return (
    <Flex justify="center" className="min-h-[calc(100vh - 64px - 69px)] mt-24">
      <SignUpForm />
    </Flex>
  );
}

export default SignUpPage;
