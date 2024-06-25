const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { stringToPath } = require('@cosmjs/crypto');


const Mnemonic = '';

const generateAddresses = async (mnemonic) => {
    const path = stringToPath("m/44'/990'/0'/0/0");

    //coreum chain
    const CoreumoreumWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'core', hdPaths: [path]});
    const [CoreumAccount] = await CoreumoreumWallet.getAccounts();
    console.log('Coreum address:', CoreumAccount.address);

    //cosmos chain
    const CosmosWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'cosmos', hdPaths: [path]});
    const [CosmosAccount] = await CosmosWallet.getAccounts();
    console.log('Cosmos Hub address:', CosmosAccount.address);

    //osmosis chain
    const OsmosisWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'osmo', hdPaths: [path]});
    const [OsmosisAccount] = await OsmosisWallet.getAccounts();
    console.log('Osmosis address:', OsmosisAccount.address);
}

generateAddresses(Mnemonic);