declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module 'react-hexagon';