(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{366:function(a,t,e){"use strict";e.r(t);var r=e(42),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("h3",{attrs:{id:"flatpak"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flatpak"}},[a._v("#")]),a._v(" Flatpak")]),a._v(" "),e("p",[a._v("The flatpak version is distributed on Flathub, and runs on most major Linux distributions. See instructions here: "),e("a",{attrs:{href:"https://flathub.org/apps/details/io.github.antimicrox.antimicrox",target:"_blank",rel:"noopener noreferrer"}},[a._v("Flathub application page"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("If you have Flathub "),e("a",{attrs:{href:"https://flatpak.org/setup/",target:"_blank",rel:"noopener noreferrer"}},[a._v("set up"),e("OutboundLink")],1),a._v(" already:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("flatpak install flathub io.github.antimicrox.antimicrox\n")])])]),e("h3",{attrs:{id:"fedora"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fedora"}},[a._v("#")]),a._v(" Fedora")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("dnf install antimicrox\n")])])]),e("h3",{attrs:{id:"arch-linux-or-arch-linux-based-distributions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-or-arch-linux-based-distributions"}},[a._v("#")]),a._v(" Arch Linux or Arch Linux based distributions:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("trizen -S antimicrox\n")])])]),e("p",[e("strong",[a._v("or")])]),a._v(" "),e("p",[a._v("pre-built version can de downloaded from unofficial repository called "),e("a",{attrs:{href:"https://lonewolf.pedrohlc.com/chaotic-aur/",target:"_blank",rel:"noopener noreferrer"}},[a._v("chaotic-aur"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("Append (one of listed mirrors) to "),e("code",[a._v("/etc/pacman.conf")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Brazil")]),a._v("\nServer "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" http://lonewolf-builder.duckdns.org/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$repo")]),a._v("/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$arch")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Germany")]),a._v("\nServer "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" http://chaotic.bangl.de/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$repo")]),a._v("/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$arch")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# USA (Cloudflare cached)")]),a._v("\nServer "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" https://repo.kitsuna.net/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$arch")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Netherlands")]),a._v("\nServer "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" https://chaotic.tn.dedyn.io/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$arch")]),a._v("\n")])])]),e("p",[a._v("To check signature, add keys:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman-key --keyserver hkp://keyserver.ubuntu.com -r 3056513887B78AEB 8A9E14A07010F7E3\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman-key --lsign-key 3056513887B78AEB\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman-key --lsign-key 8A9E14A07010F7E3\n")])])]),e("p",[a._v("Install package")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pacman -S antimicrox\n")])])]),e("h3",{attrs:{id:"debian-ubuntu-based-distributions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu-based-distributions"}},[a._v("#")]),a._v(" Debian/Ubuntu-based distributions:")]),a._v(" "),e("p",[a._v("Download from the "),e("a",{attrs:{href:"https://github.com/AntiMicroX/antimicrox/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("release site"),e("OutboundLink")],1),a._v(" and install "),e("code",[a._v(".deb")]),a._v(" package.")]),a._v(" "),e("h3",{attrs:{id:"appimage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appimage"}},[a._v("#")]),a._v(" AppImage")]),a._v(" "),e("p",[a._v("Download from the "),e("a",{attrs:{href:"https://github.com/AntiMicroX/antimicrox/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("release site"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("It is recommended to use "),e("a",{attrs:{href:"https://github.com/TheAssassin/AppImageLauncher",target:"_blank",rel:"noopener noreferrer"}},[a._v("AppImageLauncher"),e("OutboundLink")],1),a._v(" with this package.")]),a._v(" "),e("h3",{attrs:{id:"building-yourself"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-yourself"}},[a._v("#")]),a._v(" Building Yourself")]),a._v(" "),e("p",[a._v("List of required dependencies and build instructions can be found in "),e("RouterLink",{attrs:{to:"/guide/building.html"}},[a._v("the next article")]),a._v(".")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);