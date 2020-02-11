const nav_slide = ()=>
{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const nav_links = document.querySelectorAll('.nav-links li');

    
    
    

    burger.addEventListener('click', ()=>
    {
        nav.classList.toggle('nav-active');

        nav_links.forEach((link, index) =>
        {
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else
            {
                link.style.animation = `nav_link_fade 0.5s ease forwards ${index / 7 + 0.5}s`;
                //console.log(index / 7 + 0.3);
            }    
        });

        burger.classList.toggle('toggle');

        nav_links.forEach((link, index) =>
        {
            link.style.animation = `nav_link_fade 0.5s ease forwards ${index / 7 + .3}s`;
            //console.log(index / 7 + 0.3);
            
        });
    });   
}

nav_slide();