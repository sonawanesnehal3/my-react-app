import React, { useEffect } from 'react';
const loadFooter = async () => {
    if (!window.footerInitialized) {
        window.footerInitialized = true;
        const module = await import('https://feds--milo--adobecom.hlx.page/libs/navigation/footer.js');
        module.default({ contentRoot: '/federal/home', miloLibs: 'https://feds--milo--adobecom.hlx.page' });
    }
  };
  
  const Footer = () => {
    useEffect(() => {
      loadFooter();
    }, []);

    return (
      <>
        
        <main style={{ padding: '60px' }}>
          <section>Consumer Project Content</section>
        </main>
       
      </>
    );
  }
export default Footer;