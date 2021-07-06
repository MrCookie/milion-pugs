import '../Favourites.scss';

export const FavouritesList = ({ favourites }: { favourites: string[] }) => {
  return (
    <div className="imagesWrapper">
      {favourites.map((favourite, i) => (
        <img key={favourite} src={favourite} alt={`Saved ${i}`} />
      ))}
    </div>
  );
};
