let url1 = "https://api.thecatapi.com/v1/images/search?limit=10";
let img=document.querySelector("#img");
async function getCat() {
  let cat=await axios.get(url1);
  let res=await cat.data[0].url;
  img.setAttribute("src",res);
}

