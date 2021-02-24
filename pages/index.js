import React from 'react';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';
import Repos from '../components/Repos';
import Footer from '../components/Footer';

const Index = ({ repos, user }) => {
  return (
    <>
      <PageHead />

      <div className='container mx-auto'>
        <Hero />
        
        <Repos user={user} repos={repos} />

        <Footer />
      </div>

    </>
  )
}

export async function getServerSideProps(context) { 
  const request = await fetch(process.env.API_URL + '/api/getUserData');
  const { repos, user } = await request.json();

  return {
    props: {
      repos,
      user
    }
  }
}

export default Index;