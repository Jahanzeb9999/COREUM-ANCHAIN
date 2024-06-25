const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { stringToPath } = require('@cosmjs/crypto');


const mnemonic = 'rough olympic update gloom play squirrel license pride cup hazard onion effort';

async function generateAddresses(mnemonic) {
    const path = stringToPath("m/44'/990'/0'/0/0");

    //Coreum chain
    const coreumWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'core', hdPaths: [path]});
    const [coreumAccount] = await coreumWallet.getAccounts();
    console.log('Coreum address:', coreumAccount.address);

    // Cosmos chain
    const cosmosWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'cosmos', hdPaths: [path]});
    const [cosmosAccount] = await cosmosWallet.getAccounts();
    console.log('Cosmos Hub address:', cosmosAccount.address);

    // Osmosis chain
    const osmosisWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'osmo', hdPaths: [path]});
    const [osmosisAccount] = await osmosisWallet.getAccounts();
    console.log('Osmosis address:', osmosisAccount.address);
}

generateAddresses(mnemonic);