# 🪙 Simple ERC20 Token – MyToken (MTK)

This is a beginner-friendly ERC20 token smart contract written in Solidity using OpenZeppelin libraries.

## 🔧 Features
- 🏷️ Name: MyToken
- 💰 Symbol: MTK
- 🪙 Decimals: 18
- 🔥 Burn Function (public)
- 🧾 Mint Function (onlyOwner)

## 🛠 How to Deploy (Remix)
1. Open [Remix IDE](https://remix.ethereum.org)
2. Paste `MyToken.sol` into `contracts/`
3. Compile with Solidity `^0.8.20`
4. Deploy:
   - Environment: `Injected Provider` (MetaMask)
   - Initial Supply: e.g. `1000000`

## ✅ Minting Example
Only the owner (deployer) can call:
```solidity
mint("0xYourAddress", 1000);
