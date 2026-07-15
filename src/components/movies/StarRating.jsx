import { Star } from "lucide-react";

const StarRating = (props) => {
  const { rating } = props;

//   first iteration star = 1, rating = 3
// 1<=3 ? true 
// 2<=3  ? true => yellow color
// 3<= 3 ? true => yellow color
// 4 <= 3 ? false => no color
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            className={`${star <= rating ? "text-yellow-500" : ""}`}
          >
            <Star />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
