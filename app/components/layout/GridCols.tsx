import React from 'react';
import { GridColsProps } from '@/utils/types';
import Loader from '../ui/Loader';
import Card from '../ui/Card';

const GridCols: React.FC<GridColsProps> = ({ isLoading, data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                isLoading ?
                    <Loader />
                    :
                    data?.map((service, index) => (
                        <Card
                            key={index}
                            title={service.title}
                            text={service.text}
                            file={service.file}
                        />
                    ))
            }
        </div>
    );
}

export default GridCols;
