import { AppShell,Anchor,Image, NavLink } from "@mantine/core";
import './Navbar.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
  const [activeLink, setActiveLink] = useState<{name:string,src:string}>();
    const linksMockdata = [
    {
      name :'Movies',
      src:"/"
    },
    {
      name :'Rated movies',
      src:"/ratedMovies"
    }
      ];
      const links = linksMockdata.map((link) => (
        <Link className={activeLink?.name==link.name?"active_link":"link"} to ={link.src} onClick={(event) => {
          setActiveLink(link);
        }}
        key={link.name}><a >
        {link.name}
      </a></Link>
        
      ));
      
    
      
    return (
          <AppShell.Navbar zIndex={300} style={{ padding:"24px", background:"#F2EBF9"}}>
           <Anchor>
            <Image src="./img/Logo.svg" style={{gap:"12px", width:"179px", height:"36px"}}/>
           </Anchor>
           <div className="links">
           {links}
           </div>
          </AppShell.Navbar>
  
    )
}
export default Navbar;