import React from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.css'

const App: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Head>
        <title>Demo</title>
      </Head>
      <main className='container mx-auto pt-12'>
        <div className='bg-gray-200 rounded p-6'>
          <Component {...pageProps} />
        </div>
        <div className='pt-8 flex'>
          <a href='https://github.com/Brikl/demo-netlify-plugin-next-dynamic'>
            <div className='bg-gray-200 hover:bg-gray-300 hover:cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>Source</div>
          </a>
        </div>
      </main>
    </React.Fragment>
  )
}

export default App
