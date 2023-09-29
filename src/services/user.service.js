import axios from "axios";

export default class UserService {
    static async getUser() {
        try {
            const users = await axios.get("https://api.slingacademy.com/v1/sample-data/users")
            return users.data
        } catch (error) {
            console.log(error)
        }
    }
}