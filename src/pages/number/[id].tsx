import React from 'react'

import { useRouter } from 'next/router'
import { NextPage } from 'next'

const Page: NextPage = props => {
  const router = useRouter()

  const { id } = router.query

  return (
    <React.Fragment>
      OK, you typed <b>{id}</b> which {Number.isSafeInteger(Number(id)) ? 'is' : 'is not'} a safe integer
    </React.Fragment>
  )
}

export default Page
