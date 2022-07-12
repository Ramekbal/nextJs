import sanityClient from "@sanity/client";

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn:process.env.NODE_ENV==="production"
  //useCdn === true give you fast respose, it will get you cache data other wise new if development
};

export default sanityClient(options)