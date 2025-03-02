import FooterFrameDesktop from "./FooterFrameDesktop";
import FooterFrameMobile from "./mobileFooter/FooterFrameMobile";



export default function CrossRoadFooterFrame() {
  return (
    <div className="w-full">
      <div className="block sm:hidden">
        <FooterFrameMobile />
      </div>

      <div className="hidden sm:block">
        <FooterFrameDesktop />
      </div>
      
      </div>
  );
}
