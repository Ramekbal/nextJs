import sanityClient from "./sanity";
import imageUrlBuilder from '@sanity/image-url'

const blogFields =`
title,
subTitle,
'slug':slug.current,
date,
'author': author->{name, 'avatar': avatar.asset->url},
CoverImage
`;
// 'CoverImage':CoverImage.asset->url
export async function getAllBlog(){
    // const blogFields =`
    // title,
    // subTitle,
    // slug
    // `;
    const result =await sanityClient.fetch(`*[_type=="blog"]{${blogFields}}`);
    return result
}

export async function getBlogBySlug(slug){
    // console.log("sdsdsdsds====", slug)
    const results = await sanityClient.fetch(`*[_type == "blog" && slug.current == $slug]{
        ${blogFields},
        content[]{..., "asset": asset->}
    }`,{slug});
    
    return results[0]
}


export function urlFor(source){
    return imageUrlBuilder(sanityClient).image(source)
}