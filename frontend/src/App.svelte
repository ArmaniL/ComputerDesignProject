<script>
  let clickedupload = false;
  let clickeddownload = false;
  const server = document.URL;
  function upload() {
    clickedupload = true;
    console.log("upload");
  }
  function download() {
    clickeddownload = true;
  }
</script>

<h1>File Sharing</h1>
{#if clickeddownload}
<h1>File Download</h1>
<form action={server + "download"} method="post" >
  <input type="submit" value="Upload" />
  <input name="upload" type="text" />
</form>
{:else if clickedupload}
  <h1>File Upload</h1>
  <form action={server + "upload"} method="post" encType="multipart/form-data">
    <input type="submit" value="Upload" />
    <input name="upload" type="file" />
  </form>
{:else}
  <img on:click={upload} alt="upload" src={"cloud-data-upload.svg"} />
  <img
    on:click={download}
    alt="download"
    src={"download-file-round-line.svg"}
  />
{/if}

<style>
  body {
    background-color: beige;
  }
  img {
    width: 10rem;
    margin: auto;
    padding-right: 10rem;
  }
</style>
