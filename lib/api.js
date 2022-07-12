import sanityClient from "./sanity";


export async function getAllBlog(){
    // const blogFields =`
    // title,
    // subTitle,
    // slug
    // `;

    const blogFields =`
    title,
    subTitle,
    'slug':slug.current,
    date,
   'author': author->{name, 'avatar': avatar.asset->url},
    'CoverImage':CoverImage.asset->url
    `;
    const result =await sanityClient.fetch(`*[_type=="blog"]{${blogFields}}`);
    return result
}