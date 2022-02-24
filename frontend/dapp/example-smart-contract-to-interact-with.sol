// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract OurSmartContract {
    string text;

    function getTextFromTheBlockChain() public pure returns (string memory) {
        return "Hello World";
    }

    function saveTextOnTheBlockChain(string memory newText) public {
        text = newText;
    }
}
