import { IoIosStar , IoIosStarHalf , IoIosStarOutline } from "react-icons/io";

function Rating({rating}) {

    const ratingStar = Array.from({length: 5} , (elem , index) => {
        let number = index + 0.5;

        return (
            <span key={index} className="text-3xl text-yellow-300">
                { rating >= index + 1 ? (<IoIosStar  />) : 
                rating >= number ? (<IoIosStarHalf />) :
                (<IoIosStarOutline />)}
            </span>
        );
    })

  return (
    <div>
        <div className="flex flex-row justify-center">{ratingStar}</div>
        <div className="flex flex-col items-center justify-center pt-2"> {rating} / 5</div>
        <div className="flex flex-col items-center justify-center">Review Rating</div>
    </div>
  )
}

export default Rating
