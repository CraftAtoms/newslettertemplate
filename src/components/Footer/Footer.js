
import React from "react";

const Footer = () => {
    return (
        <footer className="pv4 ph3 ph5-m ph6-l mt5 white">
        <small className="f6 db tc">© 2018 <b className="ttu">React News Inc</b>., All Rights Reserved</small>
        <div className="tc mt3">
          <a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
          <a href="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
          <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
        </div>
      </footer>
    );
}

export default Footer;