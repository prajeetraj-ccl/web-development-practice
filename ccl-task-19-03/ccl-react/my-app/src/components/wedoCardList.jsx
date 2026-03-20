import Card from "./wedoCard";
import wedoCards from "../data/wedoCards.json";
function WedoCardList() {
  return (
    <div className="what-we-do__cards">
      {wedoCards.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
}

export default   WedoCardList;