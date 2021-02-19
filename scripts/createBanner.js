export { banner };

function banner(){
    const header = document.querySelector("#header");
    const headerInner = `
            <div id="banner">
                <h1>Bikers</h1>
                <div id="menu">
                    <div class="menu-bar"></div>
                    <div class="menu-bar"></div>
                    <div class="menu-bar"></div>
                </div>
            </div>
            `
    header.innerHTML = headerInner;
}