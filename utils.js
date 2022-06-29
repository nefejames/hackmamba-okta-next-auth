import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite.setEndpoint("http://localhost/v1").setProject("your-project-id");

export default appwrite;
