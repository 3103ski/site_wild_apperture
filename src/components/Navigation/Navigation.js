import React, { Component } from "react"

import "./Navigation.css"

// components
import NavItem from "./NavItem/NavItem"

class Navigation extends Component {
  state = {
    nav: [
      { title: "HOME", link: "/" },
      { title: "FAMILY", link: "/familyPage/" },
      { title: "COUPLES", link: "/couplesPage/" },
      { title: "ABOUT US", link: "/about/" },
      { title: "BOOK", link: "/book/" },
    ],
  }

  render() {
    const navItems = this.state.nav
    const navLinks = navItems.map(link => (
      <NavItem key={link.title} title={link.title} link={link.link}></NavItem>
    ))
    return <ul>{navLinks}</ul>
  }
}

export default Navigation
