import{jsx as _jsx}from"react/jsx-runtime";import{useEffect}from"react";/**
 * Code Override để block scroll trong 6 giây
 * Sau 6 giây sẽ tự động cho phép scroll trở lại
 *
 * Cách sử dụng:
 * 1. Áp dụng override này vào bất kỳ element nào trên canvas
 * 2. Khi trang load, scroll sẽ bị block trong 6 giây
 * 3. Sau 6 giây, scroll sẽ tự động được kích hoạt lại
 */export function withScrollBlock(Component){return props=>{useEffect(()=>{// Block scroll khi component mount
const originalOverflow=document.body.style.overflow;const originalPosition=document.body.style.position;const originalWidth=document.body.style.width;// Disable scroll
document.body.style.overflow="hidden";document.body.style.position="fixed";document.body.style.width="100%";console.log("Scroll blocked for 6 seconds");// Set timer để enable scroll lại sau 6 giây
const timer=setTimeout(()=>{document.body.style.overflow=originalOverflow;document.body.style.position=originalPosition;document.body.style.width=originalWidth;console.log("Scroll enabled again");},6e3)// 6000ms = 6 giây
;// Cleanup function
return()=>{clearTimeout(timer);// Restore original styles khi component unmount
document.body.style.overflow=originalOverflow;document.body.style.position=originalPosition;document.body.style.width=originalWidth;};},[]);// Render component bình thường, không thay đổi props
return /*#__PURE__*/_jsx(Component,{...props});};}/**
 * Version có thể tùy chỉnh thời gian block
 * Override này block scroll và hiển thị countdown
 */export function withScrollBlockAndIndicator(Component){return props=>{useEffect(()=>{// Block scroll
const originalOverflow=document.body.style.overflow;const originalPosition=document.body.style.position;const originalWidth=document.body.style.width;document.body.style.overflow="hidden";document.body.style.position="fixed";document.body.style.width="100%";// Tạo indicator element (optional - có thể bỏ nếu không cần)
const indicator=document.createElement("div");indicator.style.cssText=`
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                font-family: sans-serif;
                font-size: 14px;
                z-index: 9999;
                transition: opacity 0.3s;
            `;indicator.textContent="Scroll blocked: 6s";document.body.appendChild(indicator);// Countdown
let secondsLeft=6;const countdownInterval=setInterval(()=>{secondsLeft--;if(secondsLeft>0){indicator.textContent=`Scroll blocked: ${secondsLeft}s`;}},1e3);// Enable scroll sau 6 giây
const timer=setTimeout(()=>{document.body.style.overflow=originalOverflow;document.body.style.position=originalPosition;document.body.style.width=originalWidth;// Fade out indicator
indicator.style.opacity="0";setTimeout(()=>{document.body.removeChild(indicator);},300);clearInterval(countdownInterval);},6e3);return()=>{clearTimeout(timer);clearInterval(countdownInterval);document.body.style.overflow=originalOverflow;document.body.style.position=originalPosition;document.body.style.width=originalWidth;if(document.body.contains(indicator)){document.body.removeChild(indicator);}};},[]);return /*#__PURE__*/_jsx(Component,{...props});};}/**
 * Version chỉ block scroll trên desktop (không block trên mobile)
 */export function withScrollBlockDesktopOnly(Component){return props=>{useEffect(()=>{// Chỉ áp dụng trên desktop (screen width > 768px)
const isMobile=window.innerWidth<=768;if(isMobile){console.log("Mobile device detected - scroll not blocked");return;}const originalOverflow=document.body.style.overflow;const originalPosition=document.body.style.position;const originalWidth=document.body.style.width;document.body.style.overflow="hidden";document.body.style.position="fixed";document.body.style.width="100%";console.log("Desktop scroll blocked for 6 seconds");const timer=setTimeout(()=>{document.body.style.overflow=originalOverflow;document.body.style.position=originalPosition;document.body.style.width=originalWidth;console.log("Desktop scroll enabled again");},6e3);return()=>{clearTimeout(timer);document.body.style.overflow=originalOverflow;document.body.style.position=originalPosition;document.body.style.width=originalWidth;};},[]);return /*#__PURE__*/_jsx(Component,{...props});};}
export const __FramerMetadata__ = {"exports":{"withScrollBlock":{"type":"reactHoc","name":"withScrollBlock","annotations":{"framerContractVersion":"1"}},"withScrollBlockAndIndicator":{"type":"reactHoc","name":"withScrollBlockAndIndicator","annotations":{"framerContractVersion":"1"}},"withScrollBlockDesktopOnly":{"type":"reactHoc","name":"withScrollBlockDesktopOnly","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./BlockScroll.map