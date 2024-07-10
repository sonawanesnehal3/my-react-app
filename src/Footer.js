import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://bootstraper--federal--adobecom.hlx.page/federal/footer.js';
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.fedsGlobalConfig = {
        footerUrl: 'https://main--milo--adobecom.hlx.page/drafts/blaishram/my-footer',
        miloLibs: 'https://footer--milo--sonawanesnehal3.hlx.page'
      };
    `;
    document.head.appendChild(inlineScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
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
