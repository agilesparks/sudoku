import React from 'react'
import { useSelector } from "react-redux";

export default function BoardsManager() {
  const games = useSelector(state => state.games)
    return (
      <div>
        <select>
          {games.length <= 0
            ? 'NO DB ENTRIES YET'
            : games.map((game) => (
              <option style={{ padding: '10px' }} key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
        </select>
      </div>
    )
}