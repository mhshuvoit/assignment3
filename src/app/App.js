import Index from '../components/index'
import { Helmet } from 'react-helmet'
import { Bootstrap } from '../assets/css/bootstrap.min.css'
import { Templatemo } from '../assets/css/templatemo-style.css'
import { Owl } from '../assets/css/owl.css'
// /* background: url("owl.video.play.png") no-repeat; */ (after comment out it is working)
import { Lightbox } from '../assets/css/lightbox.css'
import { FontAwesome } from '../assets/css/fontawesome.css'
import { Flex } from '../assets/css/flex-slider.css'


function App() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="mh shuvo" />
        <meta name="author" content="mh shuvo" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
          rel="stylesheet"
        />

        {/* Bootstrap core CSS  */}
        <link rel="stylesheet" href={Bootstrap} />

        {/* Additional CSS Files */}
        <link rel="stylesheet" href={FontAwesome} />
        <link rel="stylesheet" href={Templatemo} />
        <link rel="stylesheet" href={Owl} />
        <link rel="stylesheet" href={Lightbox} />
        <link rel="stylesheet" href={Flex} />

        {/* Scripts  */}
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

        <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" integrity="sha512-k2GFCTbp9rQU412BStrcD/rlwv1PYec9SNrkbQlo6RZCf75l6KcC3UwDY8H5n5hl4v77IDtIPwOk9Dqjs/mMBQ==" crossorigin="anonymous"></script> */}
 
      </Helmet>
      <Index />
    </div>
  )
}

export default App
