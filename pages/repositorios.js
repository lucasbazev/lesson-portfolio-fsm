import React from 'react';

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto"> 
      <h2 className="font-bold text-3xl">Meus repositórios no GitHub:</h2>
      <p>Public repositories: {user.public_repos} / Followers: {user.followers}</p>
      {repos.map(repo => {
        return (
          <div key={repo.id} className="rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md">
            <h3 className="font-bold">{repo.name}</h3>
            <p>Language: {repo.language}</p>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const request = fetch(process.env.API_URL + '/api/getUserData');
  const { repos, user } = await request.json();   

  return {
    props: {
      repos,
      user
    }
  }
}

export default Index;