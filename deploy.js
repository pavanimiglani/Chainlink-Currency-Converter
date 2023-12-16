async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Contract = await ethers.getContractFactory("DataConsumerV3");
    const contract = await Contract.deploy();

    console.log("CurrencyConverter contract address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

//Deploying contracts with the account: 0x0Bf02875974210a181cd06c9725A213145261F2e
//CurrencyConverter contract address: 0x77cE927E31bA2Ee13986a44399C72041eD6a6f5e 

//Deploying contracts with the account: 0x0Bf02875974210a181cd06c9725A213145261F2e
//CurrencyConverter contract address: 0xAE76f8e1D4bdc8977b877c2C53fc19aF0fDD3252 

//Deploying contracts with the account: 0x0Bf02875974210a181cd06c9725A213145261F2e
//CurrencyConverter contract address: 0x3b14A39EE6A8C56a0BF9690ACDf3d58ff519303F