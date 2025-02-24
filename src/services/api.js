import axios from "axios";

export const searchProfile = async(query) => {
try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`)
    return response.data;
} catch (error) {
    console.log("Error on fetching the profile", error)
    throw new Error("Faild to fetch Profile")
}
}