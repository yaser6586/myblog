import EditPost from "@/app/component/EditPost";
import { getPost } from "@/lib/fetchData";

async function Edit({ params }) {
  const posts = await getPost(params.id);
  // we only want object that is in array so we choose first item of array
  const pt = posts[0];

  return <EditPost posts={pt} params={params} />;
}

export default Edit;
