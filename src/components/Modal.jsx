import { useGlobalContext } from "../context";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: name,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <aside>
      <div className="modal-background">
        <div className="modal">
          <img src={image} alt={name} />
          <div className="container modal-text-content">
            <h3>{name}</h3>
            <p>{text}</p>
            <a href={source} target="_blank">
              Source
            </a>
          </div>
          <button onClick={closeModal}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
