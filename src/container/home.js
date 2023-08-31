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
    <p style={{textAlign:'center',marginTop:'2em',padding:'1em'}}>
      More are coming soon...
    </p>
    </>
  )
}

export default Home
