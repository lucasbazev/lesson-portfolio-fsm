import React from 'react';
import getUser from '../utils/getUser';

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
        <div className='flex items-center justify-around my-52 md:my-28'>

          <div className='text-center md:text-left'>
            <h1 className="font-bold text-6xl">
              <span className='text-green-600'>Hey,</span> <br /> I'm Lucas Azevedo!
            </h1>
            <h2 className="text-3xl text-gray-600">I'm a Front-End Developer</h2>
            <p>GitHub stats: Public repos: {user.public_repos} / Followers: {user.followers}</p>
            <button className='px-6 py-4 mt-8 rounded font-bold text-white bg-green-600 hover:bg-green-500 transition'>Contact Me</button>
          </div>

          <img src='/images/lucas.jpg' className='hidden md:block w-2/5' /> 

        </div>

      <div className='p-8 md:p-20'>

        <h2 className="text-3xl font-bold mt-16">My repositories on GitHub:</h2>
        {repos.map(repo => {
          return (
            <div key={repo.id} className="rounded bg-gray-200 my-4 p-4 hover:shadow-md">
              <h3 className="font-bold">{repo.name}</h3>
              <p>Language: {repo.language} </p>
            </div>
          )
        })}

      </div>

    </div>
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