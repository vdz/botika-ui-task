
import { Card } from "./Card";
import { useState } from "react";
import mockData from "../mock-data.json";
import { CardGalleryWrapper, Tools } from "./Card.styled";

export const CardGallery = () => {
    const [mode, setMode] = useState<string>();

  return (
    <CardGalleryWrapper>
        <Tools>
            {getSelectButton()}
            {getDeleteButton()}
            {getResetButton()}
        </Tools>
        {getCards()}
    </CardGalleryWrapper>
  );

  function getCards() {
    return mockData.data.tasks.map((task) => (
      <Card key={`card-task-${task.id}`} {...task} mode={mode} />
    ));
  }

  function getSelectButton() {
    return <button onClick={() => setMode('select')}>Select</button>;
  }

  function getDeleteButton() {
    return <button onClick={() => setMode('delete')}>Delete</button>;
  }

  function getResetButton() {
    return <button onClick={() => setMode(undefined)}>Reset</button>;
  }
};
