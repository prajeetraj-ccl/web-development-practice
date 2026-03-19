function wedoCard({ title, text }) {
  return (
    <div className="what-we-do__card">
      <h1 className="what-we-do__card-title">{title}</h1>
      <p className="what-we-do__card-text">{text}</p>
    </div>
  );
}

export default wedoCard;