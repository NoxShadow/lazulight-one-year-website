/* eslint-disable no-unused-vars */
/*
 * So, imagetools.
 * Normally, when you import an image, it'll just give you a url as a string.
 */
import normal from './sheesh-pog-based.png'
/*
 * You can just run the image through no problem just by specifying a format
 * as a query parameter to get some good compression
 */
// @ts-ignore: <- we'll fix this in a second
import compressed from './sheesh-pog-based.png?format=webp'
/*
 * You can also specify multiple formats, which will return an array of strings.
 */
// @ts-ignore: hold on we'll get to it
import multipleUrls from './sheesh-pog-based.png?format=avif;webp;png'
/*
 * Now the really cool thing is that there's a `metadata` query param that will return
 * extra info about each picture. Check the `images.d.ts` file for what it returns.
 */
// @ts-ignore: almost there
import multipleData from './sheesh-pog-based.png?format=avif;webp;png&meta'
/*
 * Okay, to make typescript happy, you need to add `&imagetools` to the *end* of the url
 * (but before meta, check the images.d.ts for how it finds the files).
 * The actual imagetools plugin will ignore any query params it doesn't recognize, so
 * we're abusing it to pattern match on typescript
 * Also note the order of the formats. Fallback first, then in order of efficacy.
 */
import sheeshPogBased from './sheesh-pog-based.png?format=png;avif;webp&imagetools&meta'
// The order is literally just to make this destructing easier, honestly
const [fallback, ...sources] = sheeshPogBased

export default function Elira () {
  return (
    <picture>
      {sources.map((metadata) => (
        <source key={metadata.src} type={`image/${metadata.format}`} srcSet={metadata.src} />
      ))}
      <img src={fallback.src} width={fallback.width} height={fallback.height} />
    </picture>
  )
}
