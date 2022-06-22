import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite
  .setEndpoint("http://localhost:4000/v1")
  .setProject("62b1f4a6ea47ac03584f");

export default appwrite;
