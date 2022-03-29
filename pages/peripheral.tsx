import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  join_class_name,
  create_dropdown_list,
  create_nav_elements,
} from "../util/util";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const dropdown_items = [
  { name: "/general", href: "/general" },
  { name: "/peripheral", href: "/peripheral" },
  { name: "/troubleshoot", href: "/troubleshoot" },
  { name: "/build", href: "/build" },
  { name: "/landing", href: "/"}
];

const nav_items = [
  { name: "PSA", href: "/peripheral/psa" },
  { name: "FAQ", href: "/peripheral/faq" },
  { name: "What to buy?", href: "/peripheral/recommendations" },
];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Head>
        <title>PC Paradise - Peripheral</title>
        <meta
          name="description"
          content="PC Paradise Discord - A place to get pc help and hangout"
        />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <main className="flex flex-col">
        <div className="container flex text-white py-5 md:py-5 bg-gray-900 min-w-full whitespace-nowrap overflow-auto scrollbar-hide sticky px-2 shadow-inner">
          {" "}
          {/*nav container*/}
          <div className="flex flex-auto text-2xl font-bold pr-3">
            {" "}
            {/*logo + dropdown*/}
            <Link href="/">
              <a className="flex">
                <Image
                  src="/img/icon/favicon.gif"
                  alt="PCP Logo"
                  className="rounded-lg"
                  width={55}
                  height={55}
                />
                <div className="m-auto px-2 font-Courier-New hover:text-blue-600">
                  PC Paradise
                </div>
              </a>
            </Link>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="text-left mb-1 hover:text-neutral-400 bg-neutral-800 px-3 pb-1 rounded-lg">
                /peripheral
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                className="bg-neutral-700 text-white px-5 pb-3 text-xl  font-semi-bold rounded-lg"
                aria-labelledby="dropdownbutton"
              >
                {create_dropdown_list(
                  ["font-Bell-MT hover:text-neutral-400 " + ""],
                  dropdown_items
                )}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <nav className="m-auto inline flex-initial text-left font-Courier-New">
            {" "}
            {/*nav bar*/}
            {create_nav_elements(
              ["mx-3 lg:px-4 lg:py-2 px-2 py-1 mb-2 text-2xl hover:text-neutral-300 hover:bg-neutral-600 bg-neutral-700 " + "rounded-md"],
              nav_items
            )}
          </nav>
        </div>
        <div className="flex flex-row min-h-screen whitespeace-nowrap">
          {" "}
          {/*body*/}
          <div className="flex-auto lg:px-7"></div> {/*side spacing*/}
          <div className="flex-auto flex flex-row bg-neutral-800 pt-5 text-white">
            {/*Middle content*/}
            <div className="lg:px-5 px-1"></div>
            <div className="flex flex-col">
              <div className="py-10">
                <Link href="/peripheral">
                  <a className="text-blue-600 text-7xl lg:text-8xl font-bold">
                    Peripheral Section
                  </a>
                </Link>
                <p className="pl-2 text-l lg:pt-5 lg:text-2xl">
                  For keyboard, head(phones/sets) and mice
                </p>
              </div>
              <div className="py-7"></div>
              <div className="text-2xl lg:text-2xl font-bold">
                <p>
                  Click the &#34;What to buy?&#34; button below for general
                  recommendation.
                  Else if you need specific recommendations, then ask away but
                  follow the below form: Price + Your country + Specific needs
                </p>
              </div>
              <div className="py-7"></div>
              <div className="flex flex-col lg:flex-row pt-10">
                <a
                  href="/peripheral/PSA"
                  className="bg-blue-900 lg:py-4 lg:px-6 lg:pt-5 py-5 text-4xl text-center font-bold rounded-lg"
                >
                  PSA
                </a>
                <div className="py-4 lg:px-3"></div>
                <a
                  href="/peripheral/Recommendations"
                  className="bg-blue-700 lg:pt-3 pb-4 text-4xl text-center font-bold items-center rounded-lg"
                >
                  <div className="m-3">What to buy?</div>
                </a>
                <div className="py-4 lg:px-3"></div>
                <a
                  href="/peripheral/FAQ"
                  className="bg-blue-900 py-6 lg:px-8 lg:pt-6 text-center text-4xl font-bold rounded-lg"
                >
                  FAQ
                </a>
                <div className="py-4 lg:px-3"></div>
              </div>
            </div>
            <div className="lg:px-5 px-1"></div>
          </div>
          <div className="flex-auto lg:px-8"></div>
          {/*side spacing*/}
        </div>
      </main>

      <footer>
        <div className="bg-gray-800 pl-3 text-white">PC Paradise© 2022</div>
      </footer>
    </div>
  );
};
export default Home;
