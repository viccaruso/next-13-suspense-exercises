import React from 'react';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import range from 'lodash.range';

const games = range(1, 12, 1);

function GamePagePlaceholder() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {games.map((game) => (
          <LibraryGameCardSkeleton />
        ))}
      </div>
    </section>
  );
}

export default GamePagePlaceholder;
