import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi"; 
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({title, img, desc, link}) => {
    return (

        <TiltCard title={title} img={img} desc={desc} link={link}/>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({title, img, desc, link}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-fit min-h-[35rem] w-[40%] rounded-xl bg-gradient-to-br from-gray-600 to-gray-900"
        >
            <div
             style={{
                 transform: "translateZ(75px)",
                 transformStyle: "preserve-3d",
             }}
             className="absolute inset-2 flex rounded-xl backdrop-blur-sm bg-black/60 shadow-lg"
            >
                <div className='w-full'>
                    <img src={img} alt="" className='w-full rounded-2xl h-2/3' />
                    <div className='p-4 px-2 py-6 flex justify-between items-center'>
                        <div>
                            <h3 className='text-3xl mb-2 text-white font-normal'>{title}</h3>
                            <p className='text-gray-300 w-3/4'>{desc}</p>
                        </div>
                        <div className='p-2 bg-white h-fit rounded-md'>
                            <a href={link} traget='_blank'>
                                <FaExternalLinkAlt className='text-black text-3xl cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* <ProjectCard title='sahil rathore' img='https://t3.ftcdn.net/jpg/06/33/00/42/360_F_633004264_b6ZuRQZYAsZIEYfWdY15EAOiaG4ZJIbn.jpg' /> */}
            </div>
        </motion.div>
    );
};

export default ProjectCard;

// const ProjectCard = ({ img, title, desc, link }) => {
//     return (
        
//     )
// }

// export default ProjectCard