function Home() {
    return (
        <div className="content_container">
            <main class="sidebyside_content">
                <div class="img_container">
                    <img src="HomepageArt.png" alt="Me and Bucky" id="img_content"/>
                </div>
                <div class="text_content">
                    <h2 id="my_name">Hi, I'm Ian.</h2>
                    <h1 id="who_am_i"> Front End Developer. Designer.</h1>
                    <p class="description"> Currently searching for a remote position in frontend development.</p>
                    <p class="description">
                        I am currently redesigning this site and will continuously 
                        update it with my most recent and on-going projects and artwork. 
                        If you would like to work on something together, please get in 
                        touch with me via email. 
                    </p>
                    <a href="Cabello_CV.pdf" download className="button_container">
                        <button class="download_button">
                            Download CV
                        </button>
                    </a>
                </div>
            </main>
            <footer class="footer_container">
                <div class="footer_alignment">
                    <h2 className="footer_header"> Want to get in touch? </h2>
                    <p className="footer_content"> Please send me an email at&nbsp;
                        <a className="footer_link" href="mailto:me@ollebac.dev">me@ollebac.dev</a>.</p>
                    <p className="footer_content"> 
                        Artwork on this page is done by the lovely&nbsp;
                            <a className="footer_link" href="https://www.fiverr.com/thiennguyenhue">thiennguyenhue</a>
                        , for my personal use only.
                    </p>
                    <p className="footer_content"> Website is designed by me and built in React. </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;