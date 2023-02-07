import Products from "@/pages/products";
import { getProducts } from "@/pages/services/test";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductSlideCard from "../basic/ProductSlideCard";

const ProductSlider = () => {
  const products = getProducts();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      ltr: true,
      breakpoints: {
        "(max-width: 480px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3.2, spacing: 10 },
        },
      },
      slides: {
        perView: 2.2,
        spacing: 10,
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div className="container mx-auto relative pb-10">
        {loaded && instanceRef.current && (
          <>
            <div className="flex justify-between items-center pt-6 pb-4">
              <h6 className="section-title">IN THE SPOTLIGHT</h6>
              <div className="flex justify-between items-center">
                <AiOutlineLeft
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                  className="arrow left-arrow"
                />

                <AiOutlineRight
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                  className="arrow right-arrow"
                />
              </div>
            </div>
          </>
        )}
        <div ref={sliderRef} className="keen-slider">
          {products.map((product) => {
            return (
              <div className="keen-slider__slide" key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <ProductSlideCard product={product} />
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default ProductSlider;
