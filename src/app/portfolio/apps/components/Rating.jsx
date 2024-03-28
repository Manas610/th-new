import { FaStar , FaRegStarHalfStroke , FaRegStar} from "react-icons/fa6";

function Rating({rating}) {

    const ratingStar = Array.from({length: 5} , (elem , index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                { rating >= index + 1 ? (<FaStar className="text-yellow-300" />) : 
                rating >= number ? (<FaRegStarHalfStroke className="text-yellow-300" />) :
                (<FaRegStar className="text-yellow-300" />)}
            </span>
        );
    })

  return (
    <div>
        <div className="flex flex-row justify-center">{ratingStar}</div>
        <div className="flex flex-col items-center justify-center"> {rating}/5</div>
        <div>Review Rating</div>
    </div>
  )
}

export default Rating
