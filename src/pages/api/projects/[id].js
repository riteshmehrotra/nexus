

export default function handlerById({query:{id}}, res){
    res.send(id);
}