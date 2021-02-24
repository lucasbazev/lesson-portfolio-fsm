import React from 'react';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';
import Repos from '../components/Repos';
import Footer from '../components/Footer';
import getUser from '../utils/getUser';

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
  const { repos, user } = await getUser('lucasbazev');

  return {
    props: {
      repos,
      user
    }
  }
}

export default Index;