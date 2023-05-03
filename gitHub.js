class GitHub{
    constructor(){
        this.client_id = "Iv1.50b321c4d87b4002";
        this.client_secret = "a5e0d5f7106ddf4153a4fb0aec30117510cac1ac";
        this.repos_count = 5;
        this.repos_sort = "created : acs"
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&
        sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();

        return {
            profile: profileData,
            repos: repoData
        }
    }
}