

function Button({ text, className, href = "#", onClick }) {
  return (
    <a href={href} className={className} onClick={onClick}>
      {text}
    </a>
  );
}

export default Button;