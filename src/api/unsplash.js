import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID kPTq276DWuPuUpVgfu60xGbAQis7EAJDNvP6HIk2Nbg"
    }
});

