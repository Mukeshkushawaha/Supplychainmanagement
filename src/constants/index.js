
// ----------------------Binance Testnet--------------------

export const NetworkContextName = "Binance testnet";
export const Network = "RUDRA";
export const ACTIVE_NETWORK = 97;
export const contractKovan = "0x2444922857E3ce8d4aCdDdf274826AD0D714F36A"; //Not use generativeNFT
export const nativeTokenCheck = "50";
export const RPC_URL = "https://data-seed-prebsc-1-s3.binance.org:8545/";







// -------------Binance testnet-------------

export const NetworkDetails = [
  {
    chainId: "0x61",
    chainName: "Smart Chain - Testnet",
    nativeCurrency: {
      name: "Smart Chain - Testnet",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-1-s3.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com/"],
  },
];

export const getNetworkDetails = (chianId) => {
  switch (chianId?.toString()) {
    case "97":
      return [
        {
          chainId: "0x61",
          chainName: "Smart Chain - Testnet",
          nativeCurrency: {
            name: "Smart Chain - Testnet",
            symbol: "BNB",
            decimals: 18,
          },
          rpcUrls: ["https://data-seed-prebsc-1-s3.binance.org:8545/"],
          blockExplorerUrls: ["https://testnet.bscscan.com/"],
        },
      ];
  }
};

//end
