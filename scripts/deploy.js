const hre = require("hardhat");

    const main = async () => {
        const TaskERC20 = await hre.ethers.getContractFactory("TaskERC20");
        const taskerc20 = await TaskERC20.deploy();
    
        await taskerc20.deployed();
        console.log("Contract deployed to:", taskerc20.address);


    
        const TaskERC721 = await hre.ethers.getContractFactory("TaskERC721");
        const taskerc721 = await TaskERC721.deploy();
    
        await taskerc721.deployed();
        console.log("Contract deployed to:", taskerc721.address);

    }


main()