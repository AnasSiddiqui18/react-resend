import React from "react";
import {
  Img,
  Body,
  Html,
  Container,
  Section,
  Text,
  Hr,
  Button,
  Link,
  Heading,
  Tailwind,
} from "@react-email/components";

interface Props {
  content: string;
}

const MyEmailTemplate: React.FC<Props> = ({ content }) => {
  return (
    <Html>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={box}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a/ACg8ocJFe8dCBLkbwGLrHPzfUbDgfUDbFH_GiLUP9IM6793CHQ=s288-c-no"
                  width="80"
                  height="80"
                  alt="my email profile"
                />
              </div>
              <Heading style={h1}>
                Launching The Best React Course On Earth!
              </Heading>
              <Hr style={hr} />
              <Text style={paragraph}>
                Thanks for submitting your account information. You're now ready
                to make live transactions with Stripe!
              </Text>
              <Text style={paragraph}>
                You can view your payments and a variety of other information
                about your account right from your dashboard.
              </Text>

              <Hr style={hr} />
              <Text style={paragraph}>
                If you haven't finished your integration, you might find our{" "}
                <Link style={anchor} href="https://stripe.com/docs">
                  docs
                </Link>{" "}
                handy.
              </Text>
              <Text style={paragraph}>
                Once you're ready to start accepting payments, you'll just need
                to use your live{" "}
                <Link
                  style={anchor}
                  href="https://dashboard.stripe.com/login?redirect=%2Fapikeys"
                >
                  API keys
                </Link>{" "}
                instead of your test API keys. Your account can simultaneously
                be used for both test and live requests, so you can continue
                testing while accepting live payments. Check out our{" "}
                <Link style={anchor} href="https://stripe.com/docs/dashboard">
                  tutorial about account basics
                </Link>
                .
              </Text>
              <Button style={button}>View Course </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default MyEmailTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
  cursor: "pointer",
};
const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};
