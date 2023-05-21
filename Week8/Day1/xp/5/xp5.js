let my_div = document.querySelector('div')

my_div.addEventListener('click', change_color)
my_div.addEventListener('mouseover', add_border)
my_div.addEventListener('mouseout', go_right)
my_div.addEventListener('dblclick', change_position)

function change_color(e){
        e.target.style.background = 'blue'
}

function change_position(e){
    e.target.style.marginTop = '500px'
}

function add_border(e){
    e.target.style.border = 'thick solid black'
}

function go_right(e){
    e.target.style.marginLeft = '500px'
}
