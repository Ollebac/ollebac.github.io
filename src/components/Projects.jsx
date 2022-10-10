function Projects() {
    return (
        <div className="content_container">
            <main>
                <h1 id="project_page_title">My Projects</h1>
                <div className="projects_container">
                    {/* Portfolio Website */}
                    <div className="text_content">
                        <h1 className="project_title">Portfolio Website (This one!)</h1>
                        <h4 className="project_title">React, JavaScript, HTML, CSS, GoogleCloud</h4>
                        <div className="project_links_container">
                            <a href="https://ollebac.dev" target="blank">
                                <img src="web_logo.png" className="project_links" alt="web_logo"></img>
                            </a>
                            <a href="https://github.com/Ollebac/portfolio_site" target="blank">
                                <img src="github_logo.png" className="project_links" alt="web_logo"></img>
                            </a>
                        </div>
                        <p class="project_description">    
                            I designed and developed this portfolio for personal use. I personally styled this 
                            site after researching UI design through articles and observation. I also 
                            collaborated with multiple illustratorsand graphic designers for their contributions 
                            to the site.
                        </p>
                    </div>
                    {/* Weather Application */}
                    <div class="text_content">
                        <h1 className="project_title">Weather Application</h1>
                        <h4 className="project_title">NodeJS, Handlebars, Express, CSS, Heroku</h4>
                        <div className="project_links_container">
                            <a href="https://github.com/Ollebac/portfolio_site" target="blank">
                                <img src="github_logo.png" className="project_links" alt="web_logo"></img>
                            </a>
                        </div>
                        <p class="project_description"> 
                            I developed a web application using NodeJS where a user can input a location and
                            obtain the current forecast for that location. Rendering is done via Handlebars and
                            Express. The application was hosted on Heroku using Heroku Dynos.
                        </p>
                        <p className="sub_text">
                            *The link to Heroku has been removed as free Heroku Dynos are no longer provided 
                            by Heroku.
                        </p>
                    </div>
                </div>    
                <hr className="project_break"></hr>
                <div className="projects_container">
                    {/* Drag and Drop Application */}
                    <div class="text_content">
                        <h1 className="project_title">Drag and Drop Application</h1>
                        <h4 className="project_title">TypeScript, HTML, CSS</h4>
                        <div className="project_links_container">
                            <a href="https://github.com/Ollebac/Drag-and-Drop" target="blank">
                                <img src="github_logo.png" className="project_links" alt="web_logo"></img>
                            </a>
                        </div>
                        <p class="project_description"> 
                        Created a simple drag and drop application that will display a list of uncompleted
                        and completed projects. The user can add projects to the uncompleted list and drag
                        them to and from the completed list as needed.
                        </p>
                    </div>
                    <div class="text_content">
                        <h1 className="project_title">Discord Bot</h1>
                        <h4 className="project_title">*Python* -&gt; TypeScript, DiscordJS </h4>
                        <div className="project_links_container">
                            {/* Links will go here */}
                        </div>
                        <p class="project_description"> 
                            I am in the process of building a Discord bot for the game League
                            of Legends. Currently the bot is built in Python but I am updating it to 
                            TypeScript. As it stands, the bot can perform API calls to fetch the free 
                            champions for the week, as well as fetch the level of a specified account.
                        </p>
                    </div>
                </div>
            </main>
            <footer class="footer_container">
                <div class="footer_alignment">
                    <h2 className="footer_header"> Want to get in touch? </h2>
                    <p className="footer_content"> Please send me an email at&nbsp;
                        <a className="footer_link" href="mailto:me@ollebac.dev">me@ollebac.dev</a>.</p>
                    <p className="footer_content"> Website is designed by me and built in React. </p>
                </div>
            </footer>
        </div>
    );
}

export default Projects;