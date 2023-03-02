import SimpleImageSlider from "react-simple-image-slider";
  // import vimal1 from "/images/vimalimg"
// import vimal2

const images = [
  { url: "/images/vimalimg/vimal1.png" },
  { url: "/images/vimalimg/vimal2.png" },
  { url: "/images/vimalimg/vimal3.png" },
  { url: "/images/vimalimg/vimal4.png" },
  // { url: "images/4.jpg" },
  // { url: "images/5.jpg" },
  // { url: "images/6.jpg" },
  // { url: "images/7.jpg" },
];

const ImageViewer = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1350}
        height={800}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default ImageViewer;