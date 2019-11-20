import React from 'react'
import Content from '../Content'
import ImageGallery from 'react-image-gallery'

const AlbumTemplate = ({
  content,
  contentComponent,
  meta_desc,
  title,
  images,
}) => {
  const PostContent = contentComponent || Content
  let newImages = []
  if (images) {
    images.map((image) =>
      newImages.push({ original: image, thumbnail: image }))
  }
  return (
    <div>
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {title}
      </h1>
      <PostContent content={content} />
      {images
        ? <div className='gallery-background'>
          <ImageGallery items={newImages} lazyLoad='true' />
        </div>
        : null
      }
      <hr />
    </div>
  )
}

export default AlbumTemplate
