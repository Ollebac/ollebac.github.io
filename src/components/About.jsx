function About () {
    return (
        <div className='content_container'>
            <main className="sidebyside_content">
                <div className="img_container">
                    <img src="My_Animals.png" alt="My_Animals" id="img_content"/>
                </div>
                <div className="text_content">
                    <h1 className='page_title'>About Me</h1>
                    <p className='description'>   
                    In 2017, I started my professional career performing internal, IT audits where I used my coding knowledge
                    to enhance control testing through code inspection. Moving on further into external audit, I began to miss the excitement 
                    and thrills of creating things through coding. In 2021, I restarted my journey of becoming a developer.
                    </p>
                    <p className='description'>
                    While I do have a formal education in Computer Science, all of my web development knowledge and skills are 
                    self-taught, driven entirely by my desire to make things.
                    </p>
                    <p className='description'>
                    Outside of dev, I enjoy volunteering in the community through various ways including helping at the local animal
                    shelter and being a volunteer Firefighter. I also love playing games with my friends, going to the gym, and spending
                    time with my fiancée and animals (1 dog and 3 cats)!
                    </p>
                </div>
            </main>
            <footer class="footer_container">
                <div class="footer_alignment">
                    <h2 className="footer_header"> Want to get in touch? </h2>
                    <p className="footer_content"> Please send me an email at&nbsp;
                        <a className='footer_link' href="mailto:me@ollebac.dev">me@ollebac.dev</a>
                        .
                    </p>
                    <p className="footer_content"> 
                        Artwork on this page is done by the lovely&nbsp;
                            <a className="footer_link" href="www.fiverr.com/l0a0n0">Lan (aka: l0a0n0)</a>
                        , for my personal use only.
                    </p>
                    <p className="footer_content"> Website is designed by me and built in React. </p>
                </div>
            </footer>
        </div>
    );
}

export default About;