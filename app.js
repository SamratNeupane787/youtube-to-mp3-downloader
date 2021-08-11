const urlget=document.getElementById("url")

const btn=document.getElementById("btn-1")

const btn2=document.getElementById("btn-2")

const title1=document.getElementById("title")









btn.addEventListener("click",()=>{

	
	const getthvalue=urlget.value
	console.log(getthvalue)
	const furl='https://youtube-mp36.p.rapidapi.com/dl?id'
	const finalurl=`${furl}=${getthvalue}	`

	

	fetch(`${finalurl}`,{
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "3b0f443b72mshdd6b3b717f9c6b3p10bb01jsn15c0c4590307",
			"x-rapidapi-host": "youtube-mp36.p.rapidapi.com"
		}
	})
	.then(response => {
		return response.json();
	})
	.then((apidata)=>{
		console.log(apidata);
		console.log(apidata.link)

		const downloadurl=apidata.link;
		btn.style.display='none';
		btn2.style.display='block';
		btn2.innerHTML=`<a href="${downloadurl}">DOWNLOAD THE MP3</a>`

		const titleofvid=apidata.title;
		title1.innerHTML=`TITLE =${titleofvid}`
	})
	.catch(err => {
		console.error(err);
	});
}


)