windwow.onload = () => howmany(8) 
function howmany(n)
{
    n=8;
    const container = document.querySelector('.container')[0];
    for(let i=1;i<n+1;i++) {
        const img = document.createElement("img");
        img.src = `cap_$(i).png`;
        container.appendChild(img);
    }
    
}

