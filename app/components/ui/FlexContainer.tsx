'use client'
import { FlexContainerProps } from '@/utils/types';
import Image from 'next/image';

const FlexContainer = ({
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    title,
    description,
    buttonText,
    onButtonClick,
    reverse = false
}: FlexContainerProps) => {
    return (
        <div
            className={`flex items-center justify-between flex-col lg:flex-row ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : ''}`}
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
                <h1 className="title text-yellowLight">{title}</h1>
                <p className="py-6">{description}</p>
                {buttonText && (
                    <button className="btn-yellow shadow-xl" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
}

export default FlexContainer;
