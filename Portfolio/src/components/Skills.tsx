import { useState, useEffect } from "react";

import { get } from 'aws-amplify/api';
import { DocumentType } from "@aws-amplify/core/internals/utils";

async function getSkills() {
  try {
    const restOperation = get({ 
      apiName: 'skillsApi',
      path: '/skill' 
    });
    const {body} = await restOperation.response;
    console.log('GET call succeeded: ', body);
    return await body.json();
  } catch (e) {
    console.log('GET call failed: ', JSON.parse(e.response.body));
  }
}

interface Skill {
    id: number,
    skill: string,
    confidence: number
}

export default function Skills() {
  const [data, setData] = useState<DocumentType>();  

  useEffect(() => {
      getSkills()
        .then(json => setData(json))
        .catch(error => console.error(error))
    }, [])

  return (
    <div className='py-4 pb-12 mb-8'>
      <h2 className='pt-4 p-4 text-2xl text-bgpurple-50 font-semibold font-serif'>Technical Skills</h2>
      <div className='grid justify-center'>
        <div className='text-lg text-pretty text-bgpurple-10/60 text-center max-w-3xl grid justify-center'>
            {((data as any) as [Skill])
              ?.map(d => d.skill)
              .slice(0 , (((data as any) as [Skill]).length > 16) ? 16 : undefined)
              .join(' - ')}
        </div>
      </div>
    </div>
  )
}
