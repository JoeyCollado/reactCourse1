import React, { useEffect } from 'react'

export function useDocClick(){
    useEffect(() => {

        console.log('usedocclick');

        const handleDocumentClick = (e) => {
            console.log("doc click")
        }
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        }
    }, []); //empty dependency
}
