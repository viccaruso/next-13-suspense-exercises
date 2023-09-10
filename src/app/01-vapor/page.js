import React from 'react';

import { getGamesInLibrary } from '@/helpers/vapor-helpers';
import LibraryGameCard from '@/components/LibraryGameCard';
import GameLibrary from '@/components/GameLibrary';

export const dynamic = 'force-dynamic';

async function VaporExercise() {
  const games = await getGamesInLibrary();

  return (
    <GameLibrary numOfGames={games.length}>
      {games.map((game) => (
        <LibraryGameCard key={game.slug} game={game} />
      ))}
    </GameLibrary>
  );
}

export default VaporExercise;
