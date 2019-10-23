import React from "react";
import { useDispatch } from "react-redux";
import { getSavedGameListFromAPI } from "../actions";
import { BoardsList } from "./boardsList";

export default function BoardsManager() {
  const dispatch = useDispatch();
  return (
    <div>
      <div onLoad={ getSavedGameListFromAPI(dispatch)} />
      <BoardsList />
    </div>
  );
}
