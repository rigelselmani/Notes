import React from 'react';

function Footer(){

    var d = new Date();
    var n = d.getFullYear();

    return <p className="footer">{n}</p>
}

export default Footer;