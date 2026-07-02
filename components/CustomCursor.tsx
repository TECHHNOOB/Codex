'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
export default function CustomCursor(){ const x=useMotionValue(-100), y=useMotionValue(-100); const sx=useSpring(x,{stiffness:500,damping:35}), sy=useSpring(y,{stiffness:500,damping:35}); useEffect(()=>{const move=(e:MouseEvent)=>{x.set(e.clientX-6);y.set(e.clientY-6)}; window.addEventListener('mousemove',move); return()=>window.removeEventListener('mousemove',move)},[x,y]); return <motion.div aria-hidden className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full bg-burner-accent mix-blend-difference" style={{x:sx,y:sy}}/> }
