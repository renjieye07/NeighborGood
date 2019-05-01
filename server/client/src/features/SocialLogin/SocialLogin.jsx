import React from "react";
import { Button, Icon } from "semantic-ui-react";

const SocialLogin = () => {
  return (
    <div>
      <Button
        as="a"
        href="/auth/facebook"
        style={{ marginBottom: "10px" }}
        fluid
        color="facebook"
      >
        <Icon name="facebook" /> Login with Facebook
      </Button>

      <Button
        as="a"
        href="/auth/google"
        style={{ marginBottom: "10px" }}
        fluid
        color="google plus"
      >
        <Icon name="google plus" />
        Login with Google
      </Button>

      <Button
        as="a"
        href="/auth/twitter"
        style={{ marginBottom: "10px" }}
        fluid
        color="twitter"
      >
        <Icon name="twitter" />
        Login with Twitter
      </Button>

      <Button as="a" href="/auth/linkedin" fluid color="linkedin">
        <Icon name="linkedin" />
        Login with Linkedin
      </Button>
    </div>
  );
};

export default SocialLogin;
