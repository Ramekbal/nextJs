

import React from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';
import HightLight  from './HightLight';
import {urlFor} from 'lib/api';
const serializers ={
    types:{
        code:({node:{language, code, filename}})=>{
            return(
                <HightLight language={language}>
                    {code}
                    {/* <div>{filename}</div> */}
                </HightLight>
            )
        },
        image:({node:{asset, alt, position}})=>{
            return(
                <div>
                    <img src={urlFor(asset.url).height(300).fit('max')}/>
                    <div>{alt}</div>
                </div>
            )
        }
    }
}

export default function BlockContent({content}) {
  return (
    <SanityBlockContent
    serializers={serializers}
    // imageOptions={{w:320, h:240, fit:"max"}}
    blocks={content}/>
  )
}
