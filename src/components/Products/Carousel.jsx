import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };

    return (
        <div className="carousel-images">
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt={currentIndex}
              className="center-block img-fluid"
            />
            <div className="slide_direction">
                <div className="left" onClick={handlePrevious}>
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                            <path id="Vector" fillRule="evenodd" clip-rule="evenodd" d="M10.3665 15.8837C10.1321 15.6493 10.0005 15.3314 10.0005 14.9999C10.0005 14.6685 10.1321 14.3506 10.3665 14.1162L17.4377 7.04494C17.553 6.92555 17.691 6.83032 17.8435 6.76481C17.996 6.6993 18.16 6.66482 18.326 6.66338C18.4919 6.66194 18.6565 6.69356 18.8102 6.75641C18.9638 6.81926 19.1033 6.91208 19.2207 7.02945C19.3381 7.14681 19.4309 7.28638 19.4937 7.44C19.5566 7.59362 19.5882 7.75822 19.5868 7.92419C19.5853 8.09017 19.5509 8.25419 19.4853 8.4067C19.4198 8.5592 19.3246 8.69713 19.2052 8.81244L13.0177 14.9999L19.2052 21.1874C19.4329 21.4232 19.5589 21.7389 19.5561 22.0667C19.5532 22.3944 19.4218 22.708 19.19 22.9397C18.9582 23.1715 18.6447 23.3029 18.317 23.3058C17.9892 23.3086 17.6735 23.1826 17.4377 22.9549L10.3665 15.8837Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                <div className="right" onClick={handleNext}>
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                            <path id="Vector" fillRule="evenodd" clip-rule="evenodd" d="M19.6339 14.1162C19.8683 14.3506 19.9999 14.6685 19.9999 15C19.9999 15.3314 19.8683 15.6493 19.6339 15.8837L12.5627 22.955C12.4474 23.0744 12.3094 23.1696 12.1569 23.2351C12.0044 23.3006 11.8404 23.3351 11.6744 23.3365C11.5085 23.338 11.3439 23.3064 11.1902 23.2435C11.0366 23.1807 10.8971 23.0878 10.7797 22.9705C10.6623 22.8531 10.5695 22.7135 10.5067 22.5599C10.4438 22.4063 10.4122 22.2417 10.4136 22.0757C10.4151 21.9098 10.4495 21.7457 10.5151 21.5932C10.5806 21.4407 10.6758 21.3028 10.7952 21.1875L16.9827 15L10.7952 8.81248C10.5675 8.57673 10.4415 8.26098 10.4443 7.93323C10.4472 7.60548 10.5787 7.29197 10.8104 7.06021C11.0422 6.82845 11.3557 6.69699 11.6834 6.69414C12.0112 6.69129 12.3269 6.81728 12.5627 7.04498L19.6339 14.1162Z" fill="white"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="carousel-indicator">
                {images.map((_, index) => (
                <div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                ></div>
                ))}
            </div>
        </div>
    );    
}

export default Carousel;