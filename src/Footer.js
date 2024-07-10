import React, { useEffect } from 'react';
function Footer() {
    useEffect(() => {
        window.fedsGlobalConfig = {
            contentRoot: '/federal/home',
            miloLibs: 'https://footer--milo--sonawanesnehal3.hlx.page'
        };
        const loadFooterScript = async () => {
            await import('https://bootstraper--federal--adobecom.hlx.page/federal/footer.js');
        };
        loadFooterScript();
    });
    return (
      <>
        <header className="global-navigation"></header>
        <main style={{ padding: '60px' }}>
          <section>Consumer Project Content</section>
        </main>
        <footer className="global-footer"></footer>
      </>
    );
  }
export default Footer;