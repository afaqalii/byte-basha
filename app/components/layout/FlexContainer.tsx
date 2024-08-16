'use client'
import { FlexContainerProps } from '@/utils/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '@/utils/animation';

const FlexContainer = ({
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    title,
    description,
    buttonText,
    onButtonClick,
    reverse = false,
    titleColor = "text-yellowLight"
}: FlexContainerProps) => {
    return (
        <motion.div
            {...fadeInUp}
            className={`flex items-center justify-between flex-col lg:flex-row py-20 ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : ''}`}
        >
            <figure className="lg:w-[45%]">
                <Image
                    alt={imageAlt}
                    src={imageSrc}
                    width={imageWidth}
                    height={imageHeight}
                />
            </figure>
            <div className="lg:w-[55%]">
                <h1 className={`title ${titleColor}`}>{title}</h1>
                <div className="py-6 w-[90%]">
                    {description.map((para, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                </div>
                {buttonText && (
                    <button className="btn-yellow shadow-xl" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                )}
            </div>
        </motion.div>
    );
}

export default FlexContainer;
