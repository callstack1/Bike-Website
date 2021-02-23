export { banner };

function banner(){
    const banner = document.querySelector("#banner");
    const bannerInner = `
                <h1>Bikers</h1>
                <div id="menu">
                    <div class="menu-bar"></div>
                    <div class="menu-bar"></div>
                    <div class="menu-bar"></div>
                </div>
            `
    banner.innerHTML = bannerInner;
}