'use client'

import { Button } from "../Button";
import { TbArrowNarrowUp } from 'react-icons/tb'
import { useState, useEffect, useCallback } from "react";

export function BackToTop() {
   const [show, setShow] = useState(false);

   //pesquise caso tenha duvidas sobre 'useCallback': "https://www.w3schools.com/react/react_usecallback.asp"
   const handleScroll = useCallback(() => {
      if (!show && window.scrollY > 600) setShow(true)
      if (show && window.scrollY <= 600) setShow(false)
   }, [show])

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [handleScroll])

   function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" })
   }

   return (
      <div className=" fixed right-4 bottom-4 z-20">
         {show && (
            <Button onClick={scrollToTop}>
               <TbArrowNarrowUp size={18} />
            </Button>
         )}
      </div>
   )
}