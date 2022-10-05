import React from "react";
import useFirestore from '../hooks/useFirestore';


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                 <div className="img-wrap" key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="uploaded pic" />
             </div>
            ))}
        </div>
    )

}

export default ImageGrid;

//-----framer-motion not install-----//
// import { motion } from 'framer-motion';

{/* <motion.div className="img-wrap" key={doc.id}
layout 
whileHover={{ opacity: 1 }}
onClick={() => setSelectedImg(doc.url)}
>
<motion.img src={doc.url} alt="uploaded pic" 
    initial={{ opacity: 0 }}
    animate= {{opacity: 1 }}
    transition= {{delay: 1 }} 
/>
</motion.div> */}