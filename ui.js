class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        
        this.profile.innerHTML = `
            <div  class="card card-body mb-3">
               <div class="row">
                  <div class="col-md-3">
                     <img class="img-fluid mb-2" src="${user.avatar_url}">
                     <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
                     View Profile</a>
                  </div>
                  <div class="col-md-9">
                        <span class="badge badge-primary m-2">Public repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary m-2">Public Gits: ${user.public_gists}</span>
                        <span class="badge badge-success m-2">Followers: ${user.followers}</span>
                        <span class="badge badge-info m-2">Following: ${user.following}</span>      
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                  </div>
               </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
            `;
    }

    showRepo(repos){
      let output = '';
      repos.forEach((repo) => {
        output += `<div class="card card-body mb-2">
        <div class="row">
           <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
           </div>
           <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watching: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
           </div>
        </div>
     </div>`;
      });
      document.querySelector('#repos').innerHTML = output;
    }

    showAlert(message, className){
        // clear concurrent alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // Add className
        div.className = className;
        // Add text node
        div.appendChild(document.createTextNode(message));
        // Get parent & child elements to insert div
        const container = document.querySelector('.searchContainer');
        // Child
        const child = document.querySelector('.search');
        // InsertBefore child
        container.insertBefore(div, child);

        setTimeout( () => {
            // clear alert after display
            this.clearAlert();
        }, 2000);
        
    }

    clearAlert(){
        const concurrent = document.querySelector('.alert');
        if(concurrent){
            concurrent.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}