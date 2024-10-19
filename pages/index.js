import React from "react";
import Head from "next/head";

// Add this at the top of your file
const caseStudies = [
  {
    name: "YEAR OF CHEF",
    description: "Displaying NFT marketplace stats and multi-marketplace listing for their collection originally minted on Sharddog",
    link: "https://near.social/bos.yearofchef.near/widget/Index",
    image: "https://www.yearofchef.org/preview.png"
  },
  {
    name: "Blackdragon Marketplace",
    description: "Powered by Web4, another decentralized front end alternative to BOS",
    link: "https://mintbos.testnet.page/",
    image: "https://pbs.twimg.com/media/GJs3qlPasAAQFvV.jpg:large"
  },
  {
    name: "Vegan Friends DAO Dashboard",
    description: "Displaying NFTs integrated into DAO + Potlock functionality",
    link: "https://app.vfdao.org",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRGHekcSK8sV1VTjQJR7kcOpfA3Fl83UNJg&s"
  },
  {
    name: "Cplanet",
    description: "A hub for creatives on NEAR leveraging NFTs for displaying creative work",
    link: "https://cplanet.org",
    image: "https://cplanet.org/assets/logo.png"
  },
  {
    name: "Sharddog Passport Mint",
    description: "Proof of Attendance Scavenger Hunt Dashboard on NEAR leveraging Mintbase GraphQL API",
    link: "https://passport.cplanet.org",
    image: "https://pbs.twimg.com/media/F92AvOJW8AAzJDA.jpg:large"
  }
];

const Home = (props) => {
  return (
    <div className="home-container">
      <Head>
        <title>MintBOS - Decentralized NFT Infrastructure on NEAR</title>
        <meta
          name="description"
          content="MintBOS integrates Mintbase's NFT infrastructure with NEAR Blockchain Operating System (BOS). Create, manage, and mint NFTs using decentralized front-ends with DAO and social features."
        />
        <meta
          property="og:title"
          content="MintBOS - Decentralized NFT Infrastructure on NEAR"
        />
        <meta
          property="og:description"
          content="Create, manage, and mint NFTs on NEAR using decentralized front-ends with DAO and social features. MintBOS integrates Mintbase infrastructure with BOS."
        />
        <meta
          name="keywords"
          content="MintBOS, NEAR, NFT, Blockchain Operating System, Mintbase, DAO, decentralized front-end"
        />
        <link rel="canonical" href="https://mintbase.genadrop.xyz" />
      </Head>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img alt="image" src="/mintbos.svg" className="home-image" />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a
                href="/backlog"
                target="_blank"
                rel="noreferrer noopener"
                className="home-nav1"
              >
                Backlog
              </a>
              <a
                href="/code"
                target="_blank"
                rel="noreferrer noopener"
                className="home-nav2"
              >
                Code
              </a>
              <a
                href="/wallet"
                target="_blank"
                rel="noreferrer noopener"
                className="home-nav21"
              >
                TG Wallet
              </a>
            </nav>
            <div className="home-buttons">
              <a
                href="/app"
                target="_blank"
                rel="noreferrer noopener"
                className="home-app button"
              >
                App
              </a>
              <a
                href="/docs"
                target="_blank"
                rel="noreferrer noopener"
                className="home-register button"
              >
                Docs
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg fill="white" viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img src="/mintbos.svg" alt="image" className="home-image1" />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <a
                  href="/backlog"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-nav11"
                >
                  Backlog
                </a>
                <a
                  href="/code"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-nav22"
                >
                  Code
                </a>
                <a
                  href="/wallet"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-nav3"
                >
                  TG Wallet
                </a>
                <a
                  href="https://mintbos.vercel.app/bos.genadrop.near/widget/Mintbase.App.Index?page=resources&tab=guide"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-nav3"
                >
                  Docs
                </a>
              </nav>
              <div className="home-buttons1">
                <a
                  href="https://mintbos.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-register button"
                >
                  App
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container1">
            <img alt="image" src="/mintbos.svg" className="home-image2" />
            <span className="home-hero-sub-heading">
              Decentralized front ends meets NFT infrastructure on NEAR
            </span>
            <div className="home-btn-group">
              <a
                href="https://github.com/GenaDrop/genadrop-bos-monorepo/tree/main/apps/Mintbase"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-button1 button"
              >
                Fork
              </a>
              <a
                href="https://github.com/orgs/GenaDrop/projects/2/views/2"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-button2 button"
              >
                {" "}
                Backlog →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-build-blocks">
          <div className="home-container2">
            <h2 className="home-build-heading heading2">
              What We Are Building
            </h2>
            <span className="home-buld-subtitle">
              How we are further decentralizing the Mintbase stack. (Note we are
              still building and this is not live - check github)
            </span>
          </div>
          <div className="home-container3">
            <div className="home-item main-app">
              <div className="home-container6">
                <span className="heading3">🪞 Mintbase App</span>
                <span className="home-free-plan-description2">
                  We are building all of Mintbase.xyz feature on BOS
                  (decentralized + composable on-chain front ends). Using NEAR
                  APIs, our SDK, + UI kits, & Mintbase GraphQL we allow for
                  people to explore + buy NFTs, see activity, and manage
                  storefronts.
                </span>
              </div>
              <div className="button-area">
                <a
                  href="https://github.com/GenaDrop/genadrop-bos-monorepo/tree/main/apps/Mintbase"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-primary"
                >
                  {/* See Features */}
                  GitHub
                </a>

                <a
                  href="https://mintbos.vercel.app"
                  target="_blank"
                  rel="norererrer nooopener"
                  className="button-secondary"
                >
                  Live App
                </a>
              </div>
            </div>
            <div className="home-item marketplace-template">
              {/*  Whitelabel marketplace template built with MintBOS on NEAR's decentralized front-end framework*/}
              <div className="home-container4">
                <span className="heading3">🛠️ Marketplace Template</span>
                <span className="home-free-plan-description">
                  A whitelabel marketplace template using BOS on NEAR's
                  decentralized front-end framework. This will allow people to
                  easily deploy their own marketplace with their own branding.
                </span>
              </div>
              <div className="button-area button-area-special">
                <a
                  href="https://github.com/NEARBuilders/mintbos-marketplace-template"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-secondary"
                >
                  Use Template
                </a>
                <a
                  href="https://mintbos.testnet.page"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-github button-primary"
                >
                  Live(web4) Demo
                </a>
              </div>
            </div>
            <div className="home-item mintbos-mini">
              <div className="home-container5">
                <span className="heading3">🧊 MintBOS Mini</span>

                <span className="home-free-plan-description1">
                  A stipped down version of MintBOS without theming, flexible
                  styling classes, no nav or footer - an easy way for users who
                  want to leverage tools like DAO functionalities and nft
                  minters to build on top of what has been done by MintBOS team.
                </span>
              </div>
              <div className="button-area">
                <a
                  href="https://github.com/GenaDrop/genadrop-bos-monorepo/tree/main/apps/Mintbase/widget/Mintbase/Mini"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-secondary"
                >
                  Use Mini
                </a>
                <a
                  href="https://near.social/bos.genadrop.near/widget/Mintbase.Mini.Index"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-github button-primary"
                >
                  Live Preview
                </a>
              </div>
            </div>
            <div className="home-item">
              <div className="home-container5">
                <span className="heading3">
                  👋 Social + DAO + TG Functionality
                </span>
                <span className="home-free-plan-description1">
                  We're using BOS for DAO-enabled storefront management and NFT
                  operations. Social DB adds social features to profiles and
                  storefronts. We're also integrating NFT listings into our
                  DropWallet telegram, powered by metatransactions.
                </span>
              </div>
              <div className="button-area">
                <a
                  href="/backlog"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-secondary"
                >
                  BOS up
                </a>
              </div>
            </div>
            <div className="home-item">
              <div className="home-container4">
                <span className="heading3">📦 BOS SDK + UI Kit</span>
                <span className="home-free-plan-description">
                  We are building a BOS based a UI Kit, and a BOS based SDK so
                  people building front end marketplaces can add functianlity
                  and their own themes across components.
                </span>
              </div>
              <div className="button-area">
                <a
                  href="https://mintbos.vercel.app/bos.genadrop.near/widget/Mintbase.App.Index?page=resources&tab=sdk_guide"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-secondary"
                >
                  SDK Guide
                </a>
                <a
                  href="https://mintbos.vercel.app/bos.genadrop.near/widget/Mintbase.UI-Kit"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-primary"
                >
                  UI-Kit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery"></div>
      <div className="home-build-blocks">
        <div className="home-container2">
          <h2 className="home-build-heading heading2">Case Studies</h2>
          <span className="home-buld-subtitle">
            Explore how projects are leveraging MintBOS
          </span>
        </div>
        <div className="home-container3">
          {caseStudies.map((study, index) => (
            <div key={index} className="home-item case-study-card">
              <div className="case-study-image-container">
                <img
                  src={study.image}
                  alt={study.name}
                  className="case-study-image"
                />
              </div>
              <div className="case-study-content">
                <h3 className="heading3">{study.name}</h3>
                <p className="home-free-plan-description">
                  {study.description}
                </p>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container7">
            <span className="home-text3">
              <span>Built with ❤️  by</span>
              <a
                href="https://minorityprogrammers.org"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                {" "}
                Minority Programmers
              </a>
              <span> + 💧 </span>
              <a
                href="https://genadrop.io"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                GenaDrop
              </a>
            </span>
            <div className="home-icon-group">
              <a
                href="/twitter"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon4"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #2b2e42;
          }
          .home-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #1e2030;
          }
          .home-navbar-interactive {
            width: 90%;
            display: flex;
            position: sticky;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 0px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-image {
            width: 200px;
            object-fit: cover;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav1 {
            color: #ffffff;
            transition: 0.3s;
            font-family: "AUTHENTIC Sans 60";
            text-decoration: none;
          }
          .home-nav1:hover {
            color: rgb(197, 208, 255);
          }
          .home-nav2 {
            color: #ffffff;
            transition: 0.3s;
            font-family: "AUTHENTIC Sans 60";
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav2:hover {
            color: rgb(197, 208, 255);
          }
          .home-nav21 {
            color: rgb(255, 255, 255);
            transition: 0.3s;
            font-family: "AUTHENTIC Sans 60";
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav21:hover {
            color: rgb(197, 208, 255);
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-app {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-family: "AUTHENTIC Sans 60";
            font-weight: bold;
            border-color: #101223;
            border-width: 0px;
            padding-left: 1.5rem;
            border-radius: 0px;
            padding-right: 1.5rem;
            text-decoration: none;
            background-color: #101223;
          }
          .home-app:hover {
            color: var(--dl-color-gray-black);
            border-color: rgba(41, 20, 119, 0.9);
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            background-color: var(--dl-color-gray-white);
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 335px;
            display: none;
            z-index: 100;
            position: absolute;
            padding-top: 32px;
            border-color: #ffffff;
            border-width: 1px;
            padding-left: 32px;
            border-radius: 0px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: #101223;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
            width: 200px;
            object-fit: cover;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon2 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav11 {
            color: rgb(255, 255, 255);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav22 {
            color: rgb(255, 255, 255);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav3 {
            color: rgb(255, 255, 255);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-register {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            border-color: #282a3a;
            border-width: 1px;
            padding-left: 1.5rem;
            border-radius: 0px;
            padding-right: 1.5rem;
            text-decoration: none;
            background-color: #282a3a;
          }
          .home-register:hover {
            border-color: #849492ff;
            background-color: #849492ff;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #101223;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-image2 {
            width: min(100%, 400px);
            object-fit: cover;
          }
          .home-hero-sub-heading {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
            font-family: "AUTHENTIC Sans 60";
            line-height: 1.6;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-hero-button1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            transition: 0.3s;
            font-family: "AUTHENTIC Sans 60";
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 0px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: #1e2030;
          }
          .home-hero-button1:hover {
            color: var(--dl-color-gray-black);
            border-color: rgba(0, 0, 0, 0.9);
            background-color: var(--dl-color-gray-white);
          }
          .home-hero-button2 {
            color: #c5d0ff;
            transition: 0.3s;
            font-family: "AUTHENTIC Sans 60";
            font-weight: bold;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: transparent;
          }
          .home-hero-button2:hover {
            border-color: var(--dl-color-gray-white);
          }
          .home-pricing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-build-blocks {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: #1e2030;
          }
          .home-container2 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-build-heading {
            color: rgb(255, 255, 255);
            font-family: "AUTHENTIC Sans 60";
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-buld-subtitle {
            color: #c5d0ff;
            font-size: 18px;
            text-align: center;
            font-family: "AUTHENTIC Sans 60";
            line-height: 1.6;
          }
          .home-container3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;
          }
          .home-item {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 400px;
            height: 350px;
            min-width: 300px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: #e087ff;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #2b2e42;
          }
          .home-container4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-free-plan-description {
            color: #c5d0ff;
            line-height: 1.6;
          }
          .home-item1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: #e087ff;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #2b2e42;
          }
          .home-container5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: "Raleway";
            font-weight: 300;
            text-transform: uppercase;
          }
          .home-free-plan-description1 {
            color: rgb(197, 208, 255);
            font-style: normal;
            font-weight: 300;
            line-height: 1.6;
          }
          .home-backlog {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-family: "AUTHENTIC Sans 60";
            font-weight: bold;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 0px;
            padding-left: 1.5rem;
            border-radius: 0px;
            padding-right: 1.5rem;
            text-decoration: none;
            background-color: rgb(16, 18, 35);
          }
          .home-backlog:hover {
            color: var(--dl-color-gray-black);
            border-color: rgba(0, 0, 0, 0.9);
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            background-color: var(--dl-color-gray-white);
          }
          .home-item2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: #e087ff;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #2b2e42;
          }
          .home-container6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text2 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: "Raleway";
            font-weight: 300;
            text-transform: uppercase;
          }
          .home-free-plan-description2 {
            color: #c5d0ff;
            font-size: 16px;
            font-family: "Inter";
            font-weight: 400;
            line-height: 1.6;
            text-transform: none;
            text-decoration: none;
          }
          .home-app1 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-family: "AUTHENTIC Sans 60";
            font-weight: bold;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 0px;
            padding-left: 1.5rem;
            border-radius: 0px;
            padding-right: 1.5rem;
            text-decoration: none;
            background-color: rgb(16, 18, 35);
          }
          .home-app1:hover {
            color: var(--dl-color-gray-black);
            border-color: rgba(0, 0, 0, 0.9);
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            background-color: var(--dl-color-gray-white);
          }
          .home-gallery {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
            background-color: #101223;
          }
          .home-container7 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text3 {
            color: var(--dl-color-secondary-gray500);
            font-family: "AUTHENTIC Sans 60";
          }
          .home-link {
            text-decoration: underline;
          }
          .home-link1 {
            text-decoration: underline;
          }
          .home-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link2 {
            display: contents;
          }
          .home-icon4 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .case-study-card {
            display: flex;
            flex-direction: column;
            height: auto;
            min-height: 450px;
          }

          .case-study-image-container {
            width: 100%;
            height: 200px;
            overflow: hidden;
            margin-bottom: var(--dl-space-space-unit);
          }

          .case-study-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .case-study-image:hover {
            transform: scale(1.05);
          }

          .case-study-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
          }

          .case-study-card h3 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-halfunit);
          }

          .case-study-card p {
            flex-grow: 1;
          }

          .case-study-card .button-secondary {
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-buld-subtitle {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-container3 {
              align-items: center;
              flex-direction: column;
            }
            .home-item {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .home-item1 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .home-item2 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-nav11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav22 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-build-blocks {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-buld-subtitle {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container3 {
              align-items: center;
              flex-direction: column;
            }
            .home-item {
              width: 100%;
              max-width: 450px;
              padding: var(--dl-space-space-oneandhalfunits)
                var(--dl-space-space-unit);
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container7 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-icon2 {
              fill: var(--dl-color-gray-900);
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-hero-button2 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-container7 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text3 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;