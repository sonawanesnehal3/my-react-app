import React, { useEffect } from 'react';
function Footer() {
    useEffect(() => {
        const initializeFooter = async () => {
            if (!window.footerInitialized) {
              window.footerInitialized = true;
              window.fedsGlobalConfig = {
                contentRoot: '/federal/home',
                miloLibs: 'https://feds--milo--adobecom.hlx.page'
              };
              const { default: loadFooter } = await import('https://feds--milo--adobecom.hlx.page/libs/navigation/footer.js');
              loadFooter(window.fedsGlobalConfig);
            }
          };
          initializeFooter();
        }, []);
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