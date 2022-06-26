import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite.setEndpoint("http://localhost:4000/v1").setProject("your-project-id");

export default appwrite;
