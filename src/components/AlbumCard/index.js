import React from 'react'
import { Link } from 'gatsby'

const AlbumCard = ({ albums }) => {
  return (
    <div className='container'>
      <div className='columns'>
        {albums
          ? (albums
            .filter(album => album.node.frontmatter.templateKey === 'album-page')
            .map(({ node: album }) => (
              <article className='column box album-thumbnail is-one-third'
                key={album.id}
              >
                <Link className='title is-4 is-spaced has-text-primary' to={album.fields.slug}>
                  <div className='media-content'>
                    <img className='is-16by9 thumbnail-cover' src={album.frontmatter.cover} alt={'Dzieci podczas wydarzenia pt.' + album.frontmatter.title} aria-hidden='true'/>
                    <div className='content'>
                      <p className='subtitle is-5'>{album.frontmatter.title}</p>
                      <p className='subtitle is-6'>
                        {album.frontmatter.date}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            ))) : null}
      </div>
    </div>
  )
}

export default AlbumCard
