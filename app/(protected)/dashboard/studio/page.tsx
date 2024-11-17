'use client';

import { StudioOptionsList } from "@/components/dashboard/StudioOptiosList";
import { StudioView } from "@/components/dashboard/StudioView";

const StudioPage = () => {

    return (
        <>
            <StudioView />
            <StudioOptionsList />
        </>
    );
};

export default StudioPage;