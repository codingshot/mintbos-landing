# MintBOS - Mintbase on BOS by GenaDrop
MintBOS is a decentralized front-end application that integrates Mintbase's NFT infrastructure with the NEAR Blockchain Operating System (BOS). It aims to provide feature parity with Mintbase contracts, storefronts, and single minter functionality, while extending the ecosystem with DAO and social features.

## Features

- Feature parity with Mintbase contracts, storefronts, and single minter UI
- Integration of DAO & Social features into the Mintbase toolkit
- Mono repos for deploying and customizing components and gateways
- Meta Transactions support for the Telegram wallet bot (wallet.genadrop.xyz)
- Comprehensive documentation and workshops

## Objectives

1. Create a system for anyone, including DAOs, to create, manage, and mint NEAR NFTs using Mintbase contracts & indexers
2. Develop an easy-to-use toolkit leveraging BOS for customizable Mintbase storefronts
3. Extend Mintbase to interact with social.near data and DAO functionality

## Overview

MintBOS achieves Mintbase feature parity on BOS as composable, mobile-responsive components extended with DAO and Social features. The project is built entirely on Mintbase infrastructure:

- Utilizes Mintbase factory and storefront
- Leverages GraphQL for data querying
- Creates front-ends for Sputnik DAO action libraries on Mintbase contracts
- Uses social.near contract for profiles, storefronts, collections, and feeds

## Ecosystem Fit

MintBOS positions itself as the go-to composable boilerplate for NFTs within the NEAR ecosystem. It caters to:

- Creative communities
- DAOs
- NFT ecosystems
- Front-end developers
- Startups seeking rapid development of customizable NFT experiences

The Telegram integration facilitates seamless NFT minting and listing, enabling users to begin earning within the ecosystem without incurring fees.


## Website

https://mintbase.genadrop.xyz

## Case Studies

- YEAR OF CHEF https://near.social/bos.yearofchef.near/widget/Index (for displaying NFT marketplace stats, and multi-marketplace listing for their collection originally minted on Sharddog)
- Blackdragon Marketplace (powered by Web4, another decentralized front end alternative to BOS) https://mintbos.testnet.page/
- Vegan Friends DAO Dashboard https://app.vfdao.org
- Cplanet - Leverages NFT Marketplaces on BOS https://cplanet.org as a hub for creatives on NEAR
- Sharddog Passport Mint: Proof of Attendance Scavenger Hunt Dashboard on NEAR leveraging Mintbase GraphQL API https://passport.cplanet.org 

## Resources

- About BOS: https://bos.near.org/
- Mintbase: https://mintbase.io/
- Mintbase BOS Repo: https://github.com/mintbase/mintbase-bos
- GenaDrop: https://genadrop.io

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/codingshot/mintbos-landing.git
   cd mintbos-landing
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Project

1. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Folder Structure

```
mintbos/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── .gitignore
├── package.json
├── README.md
```

- `public/`: Contains static assets and the main HTML file
  - `components/`: Reusable React components
  - `pages/`: React components for each page or route
  - `styles/`: CSS or styled-component files
- `package.json`: Project dependencies and scripts

## Tech Stack

- React: Frontend library for building user interfaces
- Next.js: React framework for server-side rendering and static site generation
- Styled-components: CSS-in-JS library for component styling
- NEAR Protocol: Blockchain platform for decentralized applications
- BOS (Blockchain Operating System): Decentralized front-end framework
- Mintbase API: NFT infrastructure and marketplace functionality https://docs.mintbase.xyz/dev/mintbase-graph 

## Contributing

We welcome contributions to the MintBOS project! Here's how you can contribute:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with a clear commit message
4. Push your changes to your fork
5. Create a pull request to the main repository

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

MIT OPEN SOURCE LICENSE
