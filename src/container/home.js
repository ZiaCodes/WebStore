import React,{ Suspense } from 'react'
const Card = React.lazy(() => import('../components/Card'));

const Home = () => {
  return (
    <>
    <Suspense fallback={<p style={{textAlign:'center'}}>
    Please Wait, Let me cooking something for You.
    </p>}>
    <Card/>
    </Suspense>
    </>
  )
}

export default Home
