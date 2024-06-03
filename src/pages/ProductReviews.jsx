import Review from "@/components/cards/Review";

const ProductReviews = () => {
  return (
    <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full space-y-8">
        <div className="flex justify-start items-start">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Reviews
          </p>
        </div>
        <div className="w-full flex gap-5 justify-start items-start flex-col bg-gray-50 p-8">
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
