export default function Place(props) {
  const {id, title, image} = props.place;
  return (
    <li key={id} className="place-item">
      <button>
        <img src={image.src} alt={image.alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}


