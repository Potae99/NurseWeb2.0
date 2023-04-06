import React from 'react'

// import styles from "../styles/Home.module.css";
// import Image from "next/image";
// import vercel from "../public";

export default function Footer() {
  return (
    <footer className=" ml-0 md:ml-[280px] flex justify-center items-center border-t-1 border-black-100 p-[2rem]">
          <p className="text-center text-gray-500 text-xs ">
            &copy;2023 Nurse System@Naresuan University v.0.0.1.  All rights reserved.
          </p>

          {/* <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a> */}
        </footer>
  )
}
