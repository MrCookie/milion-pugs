import './Image.scss';

export type ImageDescription = {
  date: string;
  name: string;
};

export type ImageProps = {
  src: string;
  alt: string;
  description: ImageDescription;
};

export const Image = ({ src, alt, description }: ImageProps) => {
  return (
    <div className="imageWrapper" style={{ backgroundImage: `url(${src})` }}>
      <div className="description-overlay">
        <div className="description">
          <div>{description.date}</div>
          <div>{description.name}</div>
        </div>
      </div>
    </div>
  );
};
