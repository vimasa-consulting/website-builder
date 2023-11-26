import { Transition } from '@headlessui/react';
import { observer } from 'mobx-react-lite';
import CustomCanvasSpot from ".";
import { useAppEditorStore } from "../../store/appEditorStore";
import CanvasSpotsProvider from "../Grapesjs/CanvasSpotsProvider";
import { tsOpacEnter } from '../theme';


export default observer(function CanvasSpots() {
    const { isCanvasPanning } = useAppEditorStore();

    return (
        <CanvasSpotsProvider>
          {({ spots }) =>
            <Transition show={!isCanvasPanning} {...tsOpacEnter}>
              {spots.map(spot => <CustomCanvasSpot key={spot.id} spot={spot}/>)}
            </Transition>
          }
        </CanvasSpotsProvider>
    )
});