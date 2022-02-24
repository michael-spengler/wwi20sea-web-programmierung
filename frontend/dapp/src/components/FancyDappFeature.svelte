<script>
  import { abiOfOurSmartContract } from "../abi-constants.ts";
  import { ethers } from "https://cdn.skypack.dev/ethers";

  let walletAddress = "";

  async function connectToMetamask() {
    if (typeof window.ethereum === "undefined") {
      alert("you need to install MetaMask.io or use brave.com");
    } else {
      alert("congrats for using a browserwallet already");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      walletAddress = accounts[0];
    }
  }

  async function giveMeSomeTextFromTheBlockchain() {
    const smartContractAddressOfContractWithWhichWeWantToInteract =
      "0xf216cc042a115521b6299383bff2c68d40bd1fa3";

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts", []);
    // const signer = provider.getSigner()

    const theRepresentationOfOurSmartContractInDenoRTE = new ethers.Contract(
      smartContractAddressOfContractWithWhichWeWantToInteract,
      abiOfOurSmartContract,
      provider
    );

    const text =
      await theRepresentationOfOurSmartContractInDenoRTE.getTextFromTheBlockChain();

    alert(
      `der text den wir von der blockchain gelesen haben lautet........: ${text}`
    );
  }
</script>

<h1>Lerne Web3 Programmierung</h1>
<p><br /></p>
<button on:click={connectToMetamask}> Connect To Ethereum Via Metamask </button>

<p><br /></p>

{#if walletAddress !== ""}
  <p><br /></p>
  This DAPP is connected to the Blockchain via Wallet: {walletAddress}

  <p><br /></p>
  <button on:click={giveMeSomeTextFromTheBlockchain}>
    Give me some text from the Blockchain
  </button>
{/if}

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
