import React from 'react';
import { FaGithub } from 'react-icons/fa';

const UserStats = ({ user }) => {
  return (
    <p className='flex items-center justify-center h-10'> 
      <FaGithub className='inline-block text-2xl mr-2' /> 
      stats: Public repos: {user.public_repos} / Followers: {user.followers}
    </p>
  )
}

export default UserStats;