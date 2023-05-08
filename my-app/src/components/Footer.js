import React from "react";

export default function Footer(){
    return(
        <section id="footer">
            <div>
                <ul class="icons">
					<li><a href="https://github.com/castillocarlosr" class="icon fa-github"><span class="label">Github</span></a></li>
				</ul>
				<ul class="icons">
					<li><a href="https://www.linkedin.com/in/carlosrcastillo" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
					<li><a href="mailto: castillocarlosr@gmail.com" class="icon fa-envelope"><span class="label">Email Me</span></a></li>
				</ul>
				<ul class="icons">
					<li><a href="https://twitter.com/carlos4nmt" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="https://www.instagram.com/ccastill/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
					<li><a href="https://www.facebook.com/profile.php?id=110000083" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
					<li><a href="https://www.twitch.tv/SamWiseCarlos" class="icon fa-gamepad"><span class="label">Twitch</span></a></li>
				</ul>
            </div>
        </section>
    );
}