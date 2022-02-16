'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">lms-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3dcaf69c5c52cc70aa9ee40d6a1a439ce516ec15be01e5191eeda0fbc6d045c29ac1386050209c040118a512b1a9e184e0863c8d6d3825c8deb4c66870f00837"' : 'data-target="#xs-components-links-module-AppModule-3dcaf69c5c52cc70aa9ee40d6a1a439ce516ec15be01e5191eeda0fbc6d045c29ac1386050209c040118a512b1a9e184e0863c8d6d3825c8deb4c66870f00837"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3dcaf69c5c52cc70aa9ee40d6a1a439ce516ec15be01e5191eeda0fbc6d045c29ac1386050209c040118a512b1a9e184e0863c8d6d3825c8deb4c66870f00837"' :
                                            'id="xs-components-links-module-AppModule-3dcaf69c5c52cc70aa9ee40d6a1a439ce516ec15be01e5191eeda0fbc6d045c29ac1386050209c040118a512b1a9e184e0863c8d6d3825c8deb4c66870f00837"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-3677c2995d7a986615a955fa20713d4c39ea47e4e7bee0036c8e048f5b00d48fefd6088e4e1c977aac48be5dbc64ec09f3b303948ec7a347dbeef729bd6b584a"' : 'data-target="#xs-components-links-module-AuthModule-3677c2995d7a986615a955fa20713d4c39ea47e4e7bee0036c8e048f5b00d48fefd6088e4e1c977aac48be5dbc64ec09f3b303948ec7a347dbeef729bd6b584a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-3677c2995d7a986615a955fa20713d4c39ea47e4e7bee0036c8e048f5b00d48fefd6088e4e1c977aac48be5dbc64ec09f3b303948ec7a347dbeef729bd6b584a"' :
                                            'id="xs-components-links-module-AuthModule-3677c2995d7a986615a955fa20713d4c39ea47e4e7bee0036c8e048f5b00d48fefd6088e4e1c977aac48be5dbc64ec09f3b303948ec7a347dbeef729bd6b584a"' }>
                                            <li class="link">
                                                <a href="components/CreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EtudiantModule.html" data-type="entity-link" >EtudiantModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EtudiantModule-eccf09de32471ae6f166119d1917723633aa4f900e35e52de2cf34fcb6e9fcc7385baa84925376659181cf62b0059fa4c47b81eb3eec2a873abbaec12a0f3243"' : 'data-target="#xs-components-links-module-EtudiantModule-eccf09de32471ae6f166119d1917723633aa4f900e35e52de2cf34fcb6e9fcc7385baa84925376659181cf62b0059fa4c47b81eb3eec2a873abbaec12a0f3243"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EtudiantModule-eccf09de32471ae6f166119d1917723633aa4f900e35e52de2cf34fcb6e9fcc7385baa84925376659181cf62b0059fa4c47b81eb3eec2a873abbaec12a0f3243"' :
                                            'id="xs-components-links-module-EtudiantModule-eccf09de32471ae6f166119d1917723633aa4f900e35e52de2cf34fcb6e9fcc7385baa84925376659181cf62b0059fa4c47b81eb3eec2a873abbaec12a0f3243"' }>
                                            <li class="link">
                                                <a href="components/ProfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EtudiantRoutingModule.html" data-type="entity-link" >EtudiantRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-c900344e4ed6cfa3a2cf884f226d188f8b5eb50d7ca798ba39e92d21772ad514c9e70058acb79f876cd5e377a7cdb83316fcf8c06021c47a3bb589a82bdd4b22"' : 'data-target="#xs-components-links-module-LayoutModule-c900344e4ed6cfa3a2cf884f226d188f8b5eb50d7ca798ba39e92d21772ad514c9e70058acb79f876cd5e377a7cdb83316fcf8c06021c47a3bb589a82bdd4b22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-c900344e4ed6cfa3a2cf884f226d188f8b5eb50d7ca798ba39e92d21772ad514c9e70058acb79f876cd5e377a7cdb83316fcf8c06021c47a3bb589a82bdd4b22"' :
                                            'id="xs-components-links-module-LayoutModule-c900344e4ed6cfa3a2cf884f226d188f8b5eb50d7ca798ba39e92d21772ad514c9e70058acb79f876cd5e377a7cdb83316fcf8c06021c47a3bb589a82bdd4b22"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuVertiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuVertiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SessionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutRoutingModule.html" data-type="entity-link" >LayoutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-be6e31a3be3379957e981f4bb46a5af56cb0446c7ffe366ffb1130cc6989a765d1f560228bcf895df68f9ea578cac9971afaff7a4583c4b48b76baa01a24af65"' : 'data-target="#xs-components-links-module-PublicModule-be6e31a3be3379957e981f4bb46a5af56cb0446c7ffe366ffb1130cc6989a765d1f560228bcf895df68f9ea578cac9971afaff7a4583c4b48b76baa01a24af65"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-be6e31a3be3379957e981f4bb46a5af56cb0446c7ffe366ffb1130cc6989a765d1f560228bcf895df68f9ea578cac9971afaff7a4583c4b48b76baa01a24af65"' :
                                            'id="xs-components-links-module-PublicModule-be6e31a3be3379957e981f4bb46a5af56cb0446c7ffe366ffb1130cc6989a765d1f560228bcf895df68f9ea578cac9971afaff7a4583c4b48b76baa01a24af65"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cours.html" data-type="entity-link" >Cours</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link" >Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICours.html" data-type="entity-link" >ICours</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICredential.html" data-type="entity-link" >ICredential</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken-1.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/reponse.html" data-type="entity-link" >reponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/reponse-1.html" data-type="entity-link" >reponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenDetail.html" data-type="entity-link" >TokenDetail</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});