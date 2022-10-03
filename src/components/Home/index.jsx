import './Home.css';

function Home() {
    return (
        <section id="intro_page">
            <div class="intro_content">
                <h1 id="my_name">Hi, I'm Ian.</h1>
                <h1 id="who_am_i"> Front End Developer. Designer.</h1>
                <p class="sub_text"> Currently searching for a remote position in frontend development.</p>
                <p class="sub_text">
                    I am currently redesigning this site and will continuously 
                    update it with my most recent and on-going projects and artwork. 
                    If you would like to work on something together, please get in 
                    touch with me via email. 
                </p>

            </div>
            <div class="image_content">
                <img src="front-page-img.png" alt="main_page_img" id="main_img"/>
            </div>
        </section>
    );
}

export default Home;