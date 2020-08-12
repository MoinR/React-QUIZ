import React from 'react';
import gitLogo from '../gitlogo.svg';
export class GitUser extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: [],
            username: '',
            isLoading: true,
        }
        this.fetchUser();
    }
    handleInput = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    processUser = (user) => ({
        name: user.name,
        public_repos: user.public_repos,
        avatar_url: user.avatar_url,
        created_at: user.created_at.slice(0, 10),
        followers: user.followers,
        following: user.following,
        email: user.email,
        location: user.location,
        bio: user.bio,
    });
    fetchUser = async () => {
        const response = await fetch('https://api.github.com/users/moinr');
        const result = await response.json();

        let newresult = this.processUser(result);
        console.log(newresult);

        // Update the state 
        this.setState({
            userData: result,
            isLoading: false
        });

    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={gitLogo} className="mt-3 App-static-logo" alt="logo" />

                    <div className="pt-3">
                        <h4> Find github user details  </h4>
                    </div>
                    <div className="input-group mt-2 w-25 w-sm-75 mb-3">
                        <input type="text" className="form-control" onKeyUp={this.handleInput} placeholder="Username" aria-label="Find user" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-light" /* onClick={} */ type="button"> Find user  </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 git_detail_container w-100">
                            <div className="card text-dark">
                                <div className="card-header"> User - details </div>
                                <div className="card-body text-dark">
                                    <div className="p-3">
                                        <img src={this.state.userData.avatar_url || gitLogo} alt="Git user" width="100" />
                                    </div>
                                    <div className="p-3 col-sm-12">
                                        <p className="gituser-detail card-text"> Username : {this.state.userData.name || " "} </p>
                                        <p className="gituser-detail card-text"> Public repositories : {this.state.userData.public_repos || ""} </p>
                                        <p className="gituser-detail card-text"> Email : {(this.state.userData.email === null) ? "Not provided " : " "} </p>
                                        <p className="gituser-detail card-text"> Location : {this.state.userData.location || " - "} </p>
                                        <p className="gituser-detail card-text"> Company : {(this.state.userData.company === null) ? "Not provided" : " "} </p>
                                        <p className="gituser-detail card-text"> Bio : {this.state.userData.bio || ""}</p>
                                        <p className="gituser-detail card-text"> Followers : {this.state.userData.followers || " "} </p>
                                        <p className="gituser-detail card-text"> Following : {this.state.userData.following || " "}</p>
                                        <p className="gituser-detail card-text"> Account created at : {}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        );
    }
}