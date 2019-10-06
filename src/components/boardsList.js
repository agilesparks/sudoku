import React from 'react'
import { useSelector } from "react-redux";

export function BoardsList() {
  const games = useSelector(state => state.games)
    return (
      <div>
        <select size="10">
          {
            games === undefined || games.length <= 0
            ? ''
            : games.map((game) => (
              <option  key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
        </select>
      </div>
    )
}