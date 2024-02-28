import React from 'react';

const Main = () => {

    // const getAppTemplate = useCallback(() => {
    //     if (!isAppLoaded) {
    //         return (
    //             <div className="preloader flex-column justify-content-center align-items-center">
    //                 <PfImage
    //                     className="animation__shake"
    //                     src={webImages.COMPANY_LOGO}
    //                     alt="Company Logo"
    //                     height={60}
    //                     width={60}
    //                 />
    //             </div>
    //         );
    //     }
    //     return (
    //         <>
    //             <Header/>
    //
    //             <MenuSidebar/>
    //             <FluentProvider theme={teamsLightTheme}>
    //                 <div className="content-wrapper">
    //                     <div className="pt-3"/>
    //                     <section className="content">
    //                         <Outlet/>
    //                     </section>
    //                 </div>
    //             </FluentProvider>
    //             <Footer/>
    //             <ControlSidebar/>
    //             <div
    //                 id="sidebar-overlay"
    //                 role="presentation"
    //                 onClick={handleToggleMenuSidebar}
    //                 onKeyDown={() => {
    //                 }}
    //             />
    //         </>
    //     );
    // }, [isAppLoaded]);

    return <div className="wrapper">{'getAppTemplate()'}</div>;
}

export default Main;