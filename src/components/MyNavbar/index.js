import React, { useState } from "react";
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
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";
// import { useNavigate } from "react-router-dom";


export default function MyNavbar({ session, setToken }) {
  // let navigate = useNavigate();

  const [variant, setVariant] = useState("default");
  const [activeColor, setActiveColor] = useState("primary");

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
    localStorage.clear();
    setToken(null);
    window.location.href = "/";
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
      </Navbar.Content>
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
              <img 
                // src={require('./logo.jpeg')}
                className="bg-contain w-12 rounded-full ring-2 ring-orange-400"
                src={require("../../public/user/men.png")}
                alt="user picture" />


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
                {!session ? "" : session.nameTH}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              การตั้งค่า
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              <div onClick={()=> handleSignOut()}>
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
