



export const getHeroes = async() =>{

    const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`
    const resp = await fetch(url);
    const result= await resp.json();
    
    const heroes = result.map( res=>{


        return{
            id: res.id,
            name: res.name,
            fullName: res.biography.fullName,
            alterEgo: res.biography.alterEgos,
            publisher: res.biography.publisher,
            firstApp: res.biography.firstAppearance,

            gender: res.appearance.gender,
            race:  res.appearance.race,
            height: res.appearance.height[1],
            weight: res.appearance.weight[1],
            imgs: res.images.md,
            affiliations: res.connections.groupAffiliation
            // url: img.images?.downsized_medium.url // ? = si vienen imagenes que las mueste.

        }

    });
    

    return heroes;

    };

 