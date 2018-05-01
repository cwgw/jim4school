import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import url from 'url'

const propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  siteMetadata: PropTypes.object,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
  ]),
}

function Meta (props) {
  const {
    title,
    slug,
    siteMetadata,
    children,
    ...throughProps
  } = props

  const { siteTitle, siteUrl } = siteMetadata

  const metaTitle = slug === 'home' ? siteTitle : `${title} | ${siteTitle}`
  const metaUrl = url.resolve(siteUrl,slug)
  const metaImage = url.resolve(siteUrl,siteMetadata.image)

  // quick and dirty find/replace for doubly escaped html characters
  const parsedMetaTitle = metaTitle.replace(/&nbsp;/gi,' ')

  return (
    <Helmet {...throughProps} >
      <title>{parsedMetaTitle}</title>
      <meta name="description" content="Jim Swaim taught at Devotion School in Brookline and went on to become Vice Principal at Pierce School, Principal of Lawrence School, and Principal of Cabot School in Newton." />
      <meta name="keywords" content="Jim, Swaim, Brookline, School, Committee" />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={parsedMetaTitle} />
      <meta name="og:site_name" content={parsedMetaTitle} />
      <meta name="og:url" content={metaUrl} />
      <meta name="og:image" content={metaImage} />
      <meta name="og:image:secure_url" content={metaImage} />
      <meta name="google-site-verification" content="tkfbrbacW3BAwdDyJ1VTgDH6WVX__NRq_Br2vwXZH-A" />
      <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,600|Lora:700" rel="stylesheet" />
      <script type="application/ld+json" >{`
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "${siteTitle}",
          "url": "${metaUrl}",
          "image": "${metaImage}"
        }
      `}</script>
      <html lang="en" />
      {children}
    </Helmet>
  )
}

Meta.propTypes = propTypes

export default Meta