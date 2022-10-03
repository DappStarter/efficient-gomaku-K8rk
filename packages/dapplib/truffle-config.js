require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn provide hunt help food typical'; 
let testAccounts = [
"0x9efe3712c69bcc62711f17611b86e456e945eeedeb8041712e518961ad0d0cd5",
"0xab8925bb108ff522c3c9f14d5317f3da6390b14ccbce98d0d92bcd9d85b72805",
"0xb463c2aee3be485e01564a174094c5c0bca7c2cdce4da4b38d55d9b137682fa2",
"0x00617ab50b573dccd1cf0d157518f5d4928bc5c1714aad1ef8b3bc4eb16d310d",
"0xf16e83d1c0c48317ee58a4f9ad2fe3bba24b329e89cacde6c8573e518b433310",
"0x59436d4bfb4418b1626f60f573a3cddcb8dc263cdf99be6dff9a550c808a6b40",
"0xef7ec34debba8cc2aaa4abd1e58e925735d73600501cddfbe3f0f6427812f1ed",
"0xf08de3338e68f61e643d6de6c636ea090e8c77997dc99d343e332cd39e4b7cf7",
"0x0f20c825989faea5e95435618115231e9a59bc3272a2a036cb4ce6d85a4237e3",
"0xfa809892b6c06224beabd5414ba53534a6c04e227ef25efd6be3aa49bbdf862a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

