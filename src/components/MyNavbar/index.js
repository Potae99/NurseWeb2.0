import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Spacer,
  Radio,
  useTheme,
  Dropdown,
  Avatar,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
// import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";
import { signOut, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Men from "../../public/user/men.png"
import Image from 'next/image'

export default function MyNavbar({session}) {
  // const { data: session, status } = useSession();
  const router = useRouter();

  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  const { isDark } = useTheme();

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];


  const handleSignOut = () => {
    signOut();
    router.push("/api/auth/signin");
  };

  return (
    <Navbar
      isBordered={isDark}
      variant="sticky"
      className=" bg-white opacity-95 top-0"
    >
      <Navbar.Brand className="w-full ">
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          Nurse NU
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        activeColor={activeColor}
        hideIn="xs"
        variant={variant}
        className=""
      >
        {/* <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link> */}
      </Navbar.Content>
      {/* <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color={activeColor} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              {/* <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src={Men}//"user/men.png"//"https://i.pravatar.cc/150?u=a042581f4e29026704d"
              /> */}
              <Image
              className="bg-contain w-12 rounded-full ring-2 ring-orange-400"
              src={Men}
              alt = "user picture"
              />


            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
            // className="sticky"
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                สวัสดี
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {!session ? "": session.nameTH}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              การตั้งค่า
            </Dropdown.Item>
            {/* <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item> */}
            <Dropdown.Item key="logout" withDivider color="error">
              <div onClick={handleSignOut}>
                ออกจากระบบ
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
}

{
  /* <VariantsSelectorWrapper>
        <Card css={{px: "$6", maxW: "90%"}}>
          <Card.Body>
            <Radio.Group
              defaultValue="default"
              label="Select active variant"
              orientation="horizontal"
              size="sm"
              value={variant}
              onChange={setVariant}
            >
              {variants.map((variant) => (
                <Radio key={variant} color={activeColor} value={variant}>
                  {variant}
                </Radio>
              ))}
            </Radio.Group>
            <Spacer y={0.5} />
            <Radio.Group
              defaultValue="default"
              label="Select active color"
              orientation="horizontal"
              size="sm"
              value={activeColor}
              onChange={setActiveColor}
            >
              {colors.map((color) => (
                <Radio key={color} color={activeColor} value={color}>
                  {color === "primary" ? "primary (default)" : color}
                </Radio>
              ))}
            </Radio.Group>
          </Card.Body>
        </Card>
      </VariantsSelectorWrapper>       */
}
