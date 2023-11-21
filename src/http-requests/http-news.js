const api = 'http://localhost:5000/news'
import axios from "axios"


const getAllNews = async () => {
    try{
        const data = await axios.get(api)
        return data
    }catch(e){
        console.log(e)
    }
}

const removeNews = async (id) => {
    try{
        const data = await axios.delete(`${api}/${id}`)
        return data
    }catch(e){
        console.log(e)
    }
}

export default {
    getAllNews,
    removeNews
}