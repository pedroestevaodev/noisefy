'use client';

import { StudioOptionsList } from "@/components/dashboard/studio/StudioOptiosList";
import { StudioView } from "@/components/dashboard/studio/StudioView";

const StudioPage = () => {
    return (
        <>
            <StudioView />
            <StudioOptionsList />
        </>
    );
};

export default StudioPage;