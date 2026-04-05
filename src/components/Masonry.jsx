import {useEffect, useState} from 'react';
import tw from '@/utilities/tailwindcss';

const Masonry = ({children = [], gap = 'gap-3', responsive = 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4'}) => {
    const [columns, setColumns] = useState(1);

    const getColumns = () => {
        const columnsArray = Array.from({length: columns}, () => []);
        for (let i = 0; i < children.length; i++) {
            columnsArray[i % columns].push(children[i]);
        }
        return columnsArray;
    };

    const getResponsive = (responsiveClass) => Number(responsiveClass.split('/')[1]) || 1;

    const updateColumns = (screenWidth) => {
        const breakpoints = ['lg', 'md', 'sm', 'w'];
        const breakpointWidths = {lg: 1024, md: 768, sm: 640, w: 0};

        for (const breakpoint of breakpoints) {
            const responsiveClass = responsive.split(' ').find((cls) => cls.startsWith(breakpoint));
            if (responsiveClass && screenWidth >= breakpointWidths[breakpoint]) {
                setColumns(getResponsive(responsiveClass));
                return;
            }
        }
    };

    useEffect(() => {
        const resize = () => updateColumns(window.innerWidth);
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div className={tw('w-full flex', gap)}>
            {getColumns().map((column, key) => (
                <div className={tw('w-full flex flex-col', gap)} key={key}>
                    {column.map((row, key) => (
                        <div className={tw('w-full')} key={key}>
                            {row}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Masonry;
