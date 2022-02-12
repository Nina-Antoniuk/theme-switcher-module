1. npm i theme-switcher-module
2. import customSwitcher from 'theme-switcher-module';
3. const switcherElementTemplate = customSwitcher.renderOnPage();
4. Set in a container for packing dangerouslySetInnerHTML:

   function RenderSwitcher({template}) {
   return (<div dangerouslySetInnerHTML={{ __html: template}}></div>)
   }

(<RenderSwitcher template={switcherElementTemplate}>)
