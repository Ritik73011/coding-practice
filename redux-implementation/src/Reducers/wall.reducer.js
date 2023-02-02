const initialData = {
   wallpapers:[]
}

const wallReducer = (data = initialData,actions)=>{
    switch(actions.type){
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