import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });

  const fetchMatches = async () => {
    const response = await fetch('http://localhost:8080/team/Delhi%20Capitals');
    const data = await response.json();
    setTeam(data);
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className='teamPage'>
      <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]} />
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard match={match} />
      ))}
    </div>
  );
};
