import{jsx as _jsx}from"react/jsx-runtime";import{useRef,useState,useEffect}from"react";import{useInView,useScroll,useAnimation}from"framer-motion";/**
 * Scroll Animation Overrides - Directional & Repeatable (Fixed)
 *
 * Scroll từ trên xuống → animate từ dưới lên (y: 100 → 0)
 * Scroll từ dưới lên → animate từ trên xuống (y: -100 → 0)
 *
 * Usage:
 * - Apply "ScrollAnimateNoDelay" cho delay = 0
 * - Apply "ScrollAnimateDelay" cho delay = 0.1s
 */// Override không có delay
export function ScrollAnimateNoDelay(Component){return props=>{const ref=useRef(null);const{scrollY}=useScroll();const[scrollDirection,setScrollDirection]=useState("down");const[lastScrollY,setLastScrollY]=useState(0);const controls=useAnimation();const isInView=useInView(ref,{once:false,amount:.5,margin:"0px 0px -10% 0px"});// Track scroll direction
useEffect(()=>{const unsubscribe=scrollY.on("change",latest=>{if(latest>lastScrollY){setScrollDirection("down");}else if(latest<lastScrollY){setScrollDirection("up");}setLastScrollY(latest);});return()=>unsubscribe();},[scrollY,lastScrollY]);// Animate khi vào/ra view
useEffect(()=>{const yOffset=scrollDirection==="down"?100:-100;if(isInView){controls.start({opacity:1,y:0,transition:{type:"spring",duration:.75,bounce:.2,delay:0}});}else{controls.set({opacity:0,y:yOffset});}},[isInView,scrollDirection,controls]);return /*#__PURE__*/_jsx(Component,{...props,ref:ref,animate:controls,style:{...props.style}});};}// Override có delay 0.1s
export function ScrollAnimateDelay(Component){return props=>{const ref=useRef(null);const{scrollY}=useScroll();const[scrollDirection,setScrollDirection]=useState("down");const[lastScrollY,setLastScrollY]=useState(0);const controls=useAnimation();const isInView=useInView(ref,{once:false,amount:.5,margin:"0px 0px -10% 0px"});// Track scroll direction
useEffect(()=>{const unsubscribe=scrollY.on("change",latest=>{if(latest>lastScrollY){setScrollDirection("down");}else if(latest<lastScrollY){setScrollDirection("up");}setLastScrollY(latest);});return()=>unsubscribe();},[scrollY,lastScrollY]);// Animate khi vào/ra view
useEffect(()=>{const yOffset=scrollDirection==="down"?100:-100;if(isInView){controls.start({opacity:1,y:0,transition:{type:"spring",duration:.75,bounce:.2,delay:.1}});}else{controls.set({opacity:0,y:yOffset});}},[isInView,scrollDirection,controls]);return /*#__PURE__*/_jsx(Component,{...props,ref:ref,animate:controls,style:{...props.style}});};}
export const __FramerMetadata__ = {"exports":{"ScrollAnimateNoDelay":{"type":"reactHoc","name":"ScrollAnimateNoDelay","annotations":{"framerContractVersion":"1"}},"ScrollAnimateDelay":{"type":"reactHoc","name":"ScrollAnimateDelay","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Scroll_Animate.map