import useSWR from "swr";

const fetcher = url =>fetch(url).then(res=>res.json());
export function usegetHello (){
    return useSWR('api/hello', fetcher);
}

export function usegetBlogs (initialData){
    return useSWR('api/blogs', fetcher,{fallbackData:initialData});
}