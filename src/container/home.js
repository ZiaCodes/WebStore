import React,{ Suspense } from 'react'
const Card = React.lazy(() => import('../components/Card'));

const Home = () => {
  return (
    <>
    <Suspense fallback={<p style={{textAlign:'center'}}>
    Please Wait 👀,
    We are cooking 👨‍🍳 something ✨
    </p>}>
    <Card/>
    </Suspense>
    </>
  )
}

export default Home
