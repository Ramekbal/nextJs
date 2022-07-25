import { getAllBlog } from "lib/api";

export default async function getBlogs(req, res){
    const data = await getAllBlog();
    // console.log("dasdasda===")
   return res.status(200).json(data);

}

// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }
  