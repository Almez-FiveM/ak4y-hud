const development: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const isDev = (): boolean => {
  return development;
};

export default isDev;