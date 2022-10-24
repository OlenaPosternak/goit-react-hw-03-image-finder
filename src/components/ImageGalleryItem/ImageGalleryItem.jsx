import {ImageGalleryItem, ItemImage} from './ImageGalleryItem.module';

export const Item = ({ gallery }) => {
  console.log(gallery);
  return (
    <>
      {gallery.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id}>
          <ItemImage src={webformatURL} alt={tags} />
        </ImageGalleryItem>
      ))}
    </>
  );
};
