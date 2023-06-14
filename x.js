document.addEventListener('DOMContentLoaded',() => {
    const bird = document.querySelector('.bird')
    const ground =document.querySelector('.ground')
    const gamedisplay =document.querySelector('.game-container')


    let birdleft =220
    let birdbottom=150
    let gravity = 5      
    let isgameover=false
    let gap =430
    function startgame(){
        birdbottom-=gravity
        bird.style.left=birdleft+'px'
        bird.style.bottom=birdbottom+'px'
    }
    let birdtimerid = setInterval(startgame,100)

    function jump(){
        birdbottom+=35  
        bird.style.bottom =birdbottom+'px'
        console.log(birdbottom)
    }

    document.addEventListener('keyup',jump )

    // we will create an obstacle.....
    function generatobstacle(){
        let obstacleleft = 500
        let randomhieght = Math.random()*60 // gives you value from 0 to 60
        let obstaclebottom =randomhieght 
        const obstacle = document.createElement('div')
        const topobstacle = document.createElement('div')
        if(!isgameover){
            obstacle.classList.add('obstacle')
            topobstacle.classList.add('topobstacle')
        }
        gamedisplay.appendChild(obstacle)
        gamedisplay.appendChild(topobstacle)
         
        obstacle.style.left = obstacleleft+'px'
        obstacle.style.bottom = obstaclebottom+'px'
        topobstacle.style.left = obstacleleft+'px'
        topobstacle.style.bottom = gap-obstaclebottom+'px' 

         // now our task is to move the obstacle
        function moveobstacle(){
            obstacleleft-=2
            obstacle.style.left =obstacleleft+'px'
            topobstacle.style.left=obstacleleft+'px'
            if(obstacleleft===-30)
            {
                clearInterval(timerid)
                gamedisplay.removeChild(obstacle)
                gamedisplay.removeChild(topobstacle) 
            }
            if( obstacleleft>200&&obstacleleft<280&&birdleft===220&&(birdbottom<obstaclebottom+300||birdbottom>130-obstaclebottom+300)|| birdbottom===0){
                gameover()  
                clearInterval(timerid)    
            }

        }
        let timerid = setInterval(moveobstacle,20)
      if(!isgameover)  setTimeout(generatobstacle,3000)
    }

    generatobstacle() 

    function gameover()
    {
        clearInterval(birdtimerid)
        isgameover=true
        document.removeEventListener('keyup',jump)
    }
})                              