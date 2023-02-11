import React from 'react';
import image1 from "./AlpineForest.png";
import image2 from "./DryTropicalForest.png";
import image3 from "./MontaneTemperteForest.png";
import image4 from "./MontaneSubtropicalForest.png";
import image5 from "./MositTropicalForest.png";

const Image = (props) => {


    return (
        <div>
            {props.text === "Alpine forest" ? <img src={image1} alt="logo" style={{ height: '300px', width: '378px', objectFit: 'cover' }} /> : props.text === 'Dry tropical forest' ? <img src={image2} alt="logo" style={{ height: '300px', width: '378px', objectFit: 'cover' }} /> : props.text === "Moist Tropical forest" ? <img src={image5} alt="logo" style={{ height: '300px', width: '378px', objectFit: 'cover' }} /> : props.text === "Montane temperte forest" ? <img src={image3} alt="logo" style={{ height: '300px', width: '378px', objectFit: 'cover' }} /> : props.text === "Montane sub tropical forest" ? <img src={image4} alt="logo" style={{ height: '300px', width: '378px', objectFit: 'cover' }} /> : <img src='' alt="logo" />}
        </div>
    );
}

export default Image;
