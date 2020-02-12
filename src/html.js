import React, {Component} from 'react'
import favicon from './assets/img/favicon.ico'
import appleTouchIcon from './assets/img/apple-touch-icon.png'
import favicon32 from './assets/img/favicon-32x32.png'
import favicon16 from './assets/img/favicon-16x16.png'

export default class HTML extends Component {
  render () {
    return (
      <html lang='pl' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=yes' />
          <meta name='deklaracja-dostępności' content='www.przedszkole371.nq.pl/deklaracja-dostepnosci' /> 
          <meta name='google-site-verification' content='_8MtjayM17W5LhGHF303nmp2HWQVlKfCBDzFVzli7_A' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
          <link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon} />
          <link rel='icon' type='image/png' sizes='32x32' href={favicon32} />
          <link rel='icon' type='image/png' sizes='16x16' href={favicon16} />
          <link rel='manifest' href='/manifest.webmanifest' />
          <link href='https://fonts.googleapis.com/css?family=Montserrat%7COpen+Sans+Condensed:300&display=auto' rel='stylesheet' />
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
