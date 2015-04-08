SoS-Wordpress-Theme
===================

[![Build Status](https://magnum.travis-ci.com/gios-asu/SoS-Wordpress-Theme.svg?token=kdnqC57rpcYqs1f2Tfip)](https://magnum.travis-ci.com/gios-asu/SoS-Wordpress-Theme)

For the new [School of Sustainability](https://schoolofsustainability.asu.edu) site.

Uses the [Web Standards Wordpress Repo](https://github.com/gios-asu/ASU-Web-Standards-Wordpress-Theme) as the Parent Theme. 

# Requirements

* Wordpress ~4.0
* [ASU-Web-Standards-Wordpress-Theme](https://github.com/gios-asu/ASU-Web-Standards-Wordpress-Theme) - the repo **must** be checked out to the folder name: "ASU-Web-Standards-Wordpress-Theme"

# Development

To start developing, you will need [NodeJS](https://nodejs.org/) and [Grunt](http://gruntjs.com/) installed, as well as [Ruby](https://www.ruby-lang.org/en/). Then run:

* `npm install` - you may need to `sudo` this command.
* `bundle install`

Do not use the style.css to have any styles.  Please only use SCSS.

To compile the SCSS and the JS files, run `grunt` in root.

