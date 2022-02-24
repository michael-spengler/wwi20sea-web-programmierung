export const abiOfOurSmartContract = [
    {
        "inputs": [],
        "name": "getTextFromTheBlockChain",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newText",
                "type": "string"
            }
        ],
        "name": "saveTextOnTheBlockChain",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]