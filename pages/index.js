import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero'
import getUser from '../utils/getUser';

const Index = ({ repos, user }) => {
  return (
    <>
      <PageHead />

      <div className='container mx-auto'>
        <Hero />
        
        <div className='p-8 md:p-20'>
          <div className='md:flex justify-between items-center'>
            <h2 className='text-2xl md:text-3xl text-center md:text-left font-bold'>My repositories on GitHub:</h2>
            <p className='flex items-center justify-center h-10'> 
              <FaGithub className='inline-block text-2xl mr-2' /> 
              stats: Public repos: {user.public_repos} / Followers: {user.followers}
            </p>
          </div>

          {repos.map(repo => {
            return (
              <div key={repo.id} className='rounded bg-gray-200 my-4 p-4 hover:shadow-md'>
                <h3 className='font-bold'>{repo.name}</h3>
                <p>Language: {repo.language} </p>
              </div>
            )
          })}
        </div>

        <div className='flex flex-col mb-8 text-sm text-center text-gray-600'>
          <p>This is a practicing project</p>

          <Link href='https://github.com/lucasbazev/lesson-portfolio-fsm'>
            <a target='_blank' className='hover:text-green-600 transition'>You can find the source code here</a>
          </Link>

          <Link href='https://linkedin.com/in/lucasbazev'>
            <a target='_blank' className='hover:text-green-600 transition'>Designed and Built by Lucas Azevedo</a>
          </Link>
        </div>
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