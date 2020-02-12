import React from 'react'
import Content from '../Content'
import ImageGallery from 'react-image-gallery'

const AlbumTemplate = ({
  content,
  contentComponent,
  title,
  images,
}) => {
  const PostContent = contentComponent || Content
  let newImages = []
  if (images) {
    images.map((image) =>
      newImages.push({ original: image, thumbnail: image, originalAlt: `Osoby podczas wydarzenia pt.${title}`, thumbnailAlt: `Miniaturka zdjęcia obrazującego osoby podczas wydarzenia pt.${title}`}))
  }
  
  return (
    <main role='main' id='main' tabIndex='-1'>
      <div>
        <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
          {title}
        </h1>
        <PostContent content={content} />
        {images
          ? <div className='gallery-background'>
            <ImageGallery items={newImages} lazyLoad={true} autoPlay={false} />
          </div>
          : null
        }
        <hr />
      </div>
    </main>
  )
}

export default AlbumTemplate
