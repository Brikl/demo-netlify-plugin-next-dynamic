import React from 'react'

import { NextPage } from 'next'

const Page: NextPage = props => {
  return (
    <React.Fragment>
      <h1 className='font-bold text-3xl'>Hello</h1>
      <p>This is a demo for plugin <a className='text-blue-500' href='https://www.npmjs.com/package/netlify-plugin-next-dynamic'>netlify-plugin-next-dynamic</a></p>
      <div className='border-t border-gray-300 mt-4 pt-4'>
        <p>Please type URL <b>/number/{'<number>'}</b> to try dynamic routes in Netlify by replacing <b>{'<number>'}</b> with any number (or string)</p>
      </div>
    </React.Fragment>
  )
}

export default Page
