import React from 'react'
import { Layout } from '../../components/layout'
import type { NextPage } from 'next';

type Props = {}

const faucet:NextPage = (props: Props) => {
  return (
    <>
      <Layout title='Faucet' >
        
        <h1 className='text-white text-center text-5xl'> Request Tokens to use the platform!</h1>

      </Layout>
    </>
  )
}

export default faucet