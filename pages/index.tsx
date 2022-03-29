import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  join_class_name,
  create_dropdown_list,
  create_nav_elements,
} from "../util/util";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
        <Head>
            <title>PC Paradise Discord</title>
            <meta name="description" content="PC Paradise Discord - A place to get pc help and hangout"/>
            <link rel="icon" href="/favicon.icon"/>
        </Head>
        {/* body */}
        <div className="flex flex-col"> 
        {/* <iframe src="https://discord.com/widget?id=246414844851519490&theme=dark" width="400" height="400" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
          <nav className="flex-auto">
            a
          </nav>
          <div className="flex-initial">
            a
          </div>
          <div className="flex flex-initial">
              <div className="flex-auto"></div>
              <div className="flex-initial bg-gray-900 px-3 py-2 rounded-md text-white">
                <a href="">Join the discord</a>
              </div>
              <div className="flex-auto"></div>
          </div>
        </div>
    </div>
  )
}
export default Home