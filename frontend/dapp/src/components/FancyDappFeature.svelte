<script>
  import { abiOfOurSmartContract } from "../abi-constants.ts";
  import { ethers } from "https://cdn.skypack.dev/ethers";

  let walletAddress = "";
  let textToBeWrittenToTheBlockchain = "whatever";

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  provider.send("eth_requestAccounts", []);

  let theRepresentationOfOurSmartContractInDenoRTE;

  async function connectToMetamask() {
    if (typeof window.ethereum === "undefined") {
      alert("you need to install MetaMask.io or use brave.com");
    } else {
      alert("congrats for using a browserwallet already");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      walletAddress = accounts[0];

      const smartContractAddressOfContractWithWhichWeWantToInteract =
        "0x08bad8668eed1d3ac404164d68e602d7ced6c05d";

      theRepresentationOfOurSmartContractInDenoRTE = new ethers.Contract(
        smartContractAddressOfContractWithWhichWeWantToInteract,
        abiOfOurSmartContract,
        provider
      );
    }
  }

  async function writeSomeTextOntoTheBlockchain() {
    const signer = await provider.getSigner();

    const theRepresentationOfOurSmartContractInDenoRTEWithSigner =
      theRepresentationOfOurSmartContractInDenoRTE.connect(signer);

    alert(`we write ${textToBeWrittenToTheBlockchain} to the blockchain`);
    await theRepresentationOfOurSmartContractInDenoRTEWithSigner.saveTextOnTheBlockChain(
      textToBeWrittenToTheBlockchain
    );
  }

  async function giveMeSomeTextFromTheBlockchain() {
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

  <p><br /></p>
  <input type="text" bind:value={textToBeWrittenToTheBlockchain} />
  <p><br /></p>

  <button on:click={writeSomeTextOntoTheBlockchain}>
    Write Text To Blockchain
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
