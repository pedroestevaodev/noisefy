import { StudioCompareSliderProps } from "@/types/components";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

const StudioCompareSlider = ({ original, restored, height }: StudioCompareSliderProps) => {
    return (
        <ReactCompareSlider 
            itemOne={<ReactCompareSliderImage src={original} alt="Original" />}
            itemTwo={<ReactCompareSliderImage src={restored} alt="Restored" />}
            className="flex size-full rounded-2xl"
            style={{ height }}
        />
    );
};

export { StudioCompareSlider };