const initialData = {
   wallpapers:[]
}

const wallReducer = (data = initialData,actions)=>{
    switch(actions.types){
        case "WALL":{
            return {
                ...data, wallpapers:actions.payload,
            };
        }
        default:{
            return data;
        }
    }
}
export default wallReducer;