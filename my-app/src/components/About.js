import React from "react";

export default function About(){
    return(
        <section id="about" class="one dark cover">
            <div class="container">
						
						<header>
							<h2 class="alt"><strong>Bienvenidos To My Portfolio</strong></h2>
							<h2 class="alt">by <i>Carlos Roberto Castillo</i></h2>
							<video controls playsinline class="container" preload="auto" poster="/videos/IMG_5789.jpeg" src="/videos/newIntroPort2.mp4" muted autoplay loop type="video/mp4">
							</video>
							<p>I am a Software Developer, Software Engineer, and an avid learner.<br />
							Fullstack C# (C Sharp) with .NET-Core Framework, Javascript, CSS/HTML, and JSON API while using Azure tools.</p>
							<p>I also have some experience on React, PhP with Wordpress, Java with SpringBoot using mySQL, Python, and enjoy learning new languages.</p>
							<p>Currently(as of April 28th 2023) working on rebuilding my portfolio site using React.  Maybe React with C# or just React.  We shall see.</p>
						</header>

						<footer>
							<a href="#portfolio" class="button scrolly">Personal Portfolio</a>
						</footer>
					</div>
        </section>
    );
}