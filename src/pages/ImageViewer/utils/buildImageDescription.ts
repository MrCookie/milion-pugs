import { ImageDescription } from '../../../components/Image/Image';
import { QueryResponse } from '../hooks/useFetchImage';

export const buildImageDescription = (
  metadata: QueryResponse | undefined,
): ImageDescription => {
  if (metadata) {
    return {
      date: metadata.date,
      name: `${metadata.title}: ${metadata.explanation}`,
    };
  }
  return {
    date: '',
    name: '',
  };
};
