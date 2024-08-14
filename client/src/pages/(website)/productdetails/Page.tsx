import Breadcrumb_products from "./_components/Breadcrumb_products";
import Product_information from "./_components/Product_information";
import Slider_product_details from "./_components/Slider_product_details";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Similar_product from "./_components/Similar_product";
import Viewed_products from "./_components/Viewed_products";
import Banner from "./_components/Banner";

type Props = {}

const ProductDetailsPage = (props: Props) => {
  return (
    <div>
        <div>
            <Breadcrumb_products />
            {/* --------------------------------------------- --end breadcrumb-products-------------------------------------*/}
            <section className='lg:mb-8'>
                <section className='container lg:grid lg:grid-cols-2'>
                    <Slider_product_details />
                    {/* ---------------------------------end product_details------------------------------------------------------- */}
                    <Product_information />

                </section>
                {/* ------------------------------------------------------ */}
            </section>
            {/*  */}
            {/* -----------------------------------------------end productdetails------------------------- */}
            <Similar_product />
            {/* ---------------- */}
            <Viewed_products />
            <Banner />

        </div>

    </div>
  )
}

export default ProductDetailsPage