import { createClient } from "contentful";
import { useState,useEffect } from "react";
const client = createClient({
  space: "64w5juw0rpit",
  environment: "master",
  accessToken: "2Y27Ahxky7cFU7kva4ghRTCEGySZFglu6vm6Xw-5h3Q",
});


export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
