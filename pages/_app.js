import LayoutInner from '../layouts/LayoutInner'
import LayoutMid from '../layouts/LayoutMid'
import LayoutOuter from '../layouts/LayoutOuter'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutOuter>
      <LayoutMid>
        <LayoutInner>
          <Component {...pageProps} />
        </LayoutInner>
      </LayoutMid>
    </LayoutOuter>
  )
}

export default MyApp
