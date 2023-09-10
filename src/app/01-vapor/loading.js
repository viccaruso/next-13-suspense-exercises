import React from 'react';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import range from 'lodash.range';
import GameLibrary from '@/components/GameLibrary';

function GamePagePlaceholder() {
  return (
    <GameLibrary>
      {range(12).map((game, index) => (
        <LibraryGameCardSkeleton key={index} />
      ))}
    </GameLibrary>
  );
}

export default GamePagePlaceholder;
