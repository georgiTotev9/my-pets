import { Link } from "react-router-dom";

const PetCard = ({pet}) => {
    return (
        <li className='otherPet'>
            <h3>Name: {pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p className='img'>
                <img src={pet.imageUrl} />
            </p>
            <Link className="button" href="">Details</Link>
        </li>
    );
};

export default PetCard;
