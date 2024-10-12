# Decentralized certificate validation APP
This project aims to combat certificate fraud by implementing a blockchain-based verification system. Leveraging Ethereum smart contracts, the system ensures secure, tamper-proof verification processes. Additionally, it utilizes the InterPlanetary File System (IPFS) to provide decentralized storage for certificates, enhancing both security and accessibility. This combination of blockchain technology and IPFS creates a robust solution for preventing certificate fraud, ensuring the authenticity and integrity of digital certificates. 

## Modules Description

- **React-based user interface**: React provides a component-based architecture, making the code more modular, reusable, and easier to maintain. It also allows for efficient updates and rendering, improving the overall user experience.
- **Solidity smart contract**: Solidity enables the creation of self-executing contracts with the terms of the agreement directly written into code, ensuring transparency, and reducing the need for intermediaries.
- **Ethereum**: Ethereum provides a secure and immutable ledger, ensuring that all transactions and data stored on the blockchain are tamper-proof and transparent.
- **InterPlanetary File System for storing certificates**: IPFS provides a distributed file storage system, which enhances the security, scalability, and efficiency of data storage. Files stored on IPFS are accessible via unique hashes, ensuring data integrity and easy retrieval.
- **Hardhat**: MetaMask provides a secure and user-friendly interface for managing Ethereum accounts, interacting with dApps, and signing transactions. It also acts as a bridge between the browser and the Ethereum blockchain.
- **Pinata API**: Pinata provides a convenient API for handling IPFS operations, making it easier to manage file uploads, retrieve data, and pin files for persistence. It simplifies the integration of IPFS into applications.

### Prerequisites

- Ensure you have the MetaMask extension installed in your browser.
- Sign up for an account on Pinata and request an API key. You will receive an API key, an API secret, and a JWT token. For this application, you only need the API key and secret.
- Insert the API key and secret into the designated fields in the app.jsx 


### Installation

1. Clone the repository:
   git clone https://github.com/abenbou/my-dapp.git
   cd my-dapp


2. **Install Dependencies**:
   npm install –force
    cd client
    npm install –force

3. **Compile Smart Contract**:
   npx hardhat compile then replace older ABi with the new ones post compilation.

4. **Run the App**:
   npx hardhat run script /deploy.js –network localhost
   npm run dev