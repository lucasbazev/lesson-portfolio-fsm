import React from 'react';

const Repo = ({ repo }) => {
  return (
    <div className='rounded bg-gray-200 my-4 p-4 hover:shadow-md'>
      <h3 className='font-bold'>{repo.name}</h3>
      <p>Language: {repo.language} </p>
    </div>
  )
}

export default Repo;