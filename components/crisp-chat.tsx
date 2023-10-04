
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("22cd3a04-d375-4031-8827-3b40993cd44a");
    }, []);

    return null;
};