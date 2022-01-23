require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rescue machine modify include kangaroo army genuine'; 
let testAccounts = [
"0x9184f66e3901ffb4068b0ebcfbaf7d8ced31cd92c27779091634b96513329340",
"0x04e49fe45a1479335af2bef389633506742159a0df4233c292eca705d6e2c454",
"0x1b780fb29575ca2e5b2beb33e24ab5e3e3113639dab4d0eeae6ae159d7c22aba",
"0xea13877e931b1ea7ac5cfe746b185974cc81baed95d7368d472fb2c7eb4f844f",
"0x82a285c3a6d2aeb91a3f59e094c50f7423c9bd3d845bacf7021d96939fec9b26",
"0x7e59f27f09f414bf6690c5966feb02ed7a30bcad4b0b3d4374d754063e89791e",
"0xaf9d816612adb29f1c3f47769893226382ba6056ff74cdd0ce178c4418bd8cf7",
"0x282e61260a5b23c2f2c2aa6e58f5249b4f848fc8a89530117fa6f373b90cbaab",
"0xe945d25799a7102f3ae6728de33b8abbf7d8b2694cda8e06c1d795d7dd313633",
"0x749bb084a1f541b35af125efe565d699464afdf58feffe27656da944a7532894"
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

