
import { Card } from "./Card";
import { useState } from "react";
import mockData from "../mock-data.json";
import { CardGalleryWrapper, Tools } from "./Card.styled";

export const CardGallery = () => {
    const [mode, setMode] = useState<string>();

  return (
    <CardGalleryWrapper>
        <Tools>
          <button onClick={() => setMode('select')}>Select</button>
          <button onClick={() => setMode('delete')}>Delete</button>
          <button onClick={() => setMode(undefined)}>Reset</button>
        </Tools>
        {getCards()}
    </CardGalleryWrapper>
  );

  function getCards() {
    return mockData.data.tasks.map((task) => (
      <Card key={`card-task-${task.id}`} {...task} mode={mode} />
    ));
  }
};
