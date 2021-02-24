import React from 'react';
import Repo from './Repo';
import UserStats from './UserStats';

const Repos = ({ user, repos }) => {
  return (
    <div className='p-8 md:p-20'>
      <div className='md:flex justify-between items-center'>
        <h2 className='text-2xl md:text-3xl text-center md:text-left font-bold'>My repositories on GitHub:</h2>
        <UserStats user={user} />
      </div>

      {repos.map(repo => {
        return (
          <Repo key={repo.id} repo={repo} />
        )
      })}
    </div>
  )
}

export default Repos;