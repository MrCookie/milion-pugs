import pugImage from './public/pug.png';
import './Loader.scss';

enum LoaderSizes {
  'BIG',
  'SMALL',
}

export type LoaderProps = {
  size?: LoaderSizes;
};

// @NOTE: size not used, added to demonstrate enums :)
export const Loader = ({ size = LoaderSizes.BIG }: LoaderProps) => {
  console.log(pugImage);
  return (
    <div className="loaderWrapper">
      <img src={pugImage} alt="Loading" />
    </div>
  );
};
