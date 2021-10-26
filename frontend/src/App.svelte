<script>
  let clickedupload = false;
  let clickeddownload = false;
  const server = document.URL;
  function upload() {
    clickedupload = true;
  }
  function download() {
    clickeddownload = true;
  }
</script>

<head>
  <title />
</head>
<div class="bg">
  <div>
    <h1>Fetch me</h1>
  </div>
  {#if clickeddownload}
    <h1>File Download</h1>
    <form action={server + "download"} method="post">
      <input type="submit" value="Upload" />
      <input name="upload" type="text" />
    </form>
  {:else if clickedupload}
    <h1>File Upload</h1>
    <form
      action={server + "upload"}
      method="post"
      encType="multipart/form-data"
    >
      <input type="submit" value="Upload" />
      <input name="upload" type="file" />
    </form>
  {:else}
    <div>
      <img on:click={upload} alt="upload" src={"cloud-data-upload.svg"} />
      <img
        on:click={download}
        alt="download"
        src={"download-file-round-line.svg"}
      />
    </div>
  {/if}
</div>

<style>
  :global(body) {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
  img {
    width: 10rem;
    margin: auto;
    padding-right: 10rem;
  }

  div {
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-bottom: 5rem;
  }

  .bg {
    flex-direction: column;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
