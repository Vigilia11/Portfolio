function toggelNavigation()
{
    var aside = document.getElementById('aside');

    if(aside.classList.contains('-translate-x-full'))
    {
        aside.classList.remove('-translate-x-full')
    } else{
        aside.classList.add('-translate-x-full')
    }
}