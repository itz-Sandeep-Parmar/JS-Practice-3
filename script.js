const btn = document.querySelector("#throttle");
 
   
    const throttleFunction = (func, delay) => {
           let prev = 0;
            return (...args) => {
                
               let now = new Date().getTime();
               console.log(now - prev, delay);
                 if (now - prev > delay) {
                    prev = now;
                return func(...args);
                }
            }
        }
        document.querySelector('#center') 
          .addEventListener("mousemove",
            throttleFunction((dets) => {
              var div = document.createElement("div");
              div.classList.add("imagediv");
              div.style.left = dets.clientX+'px'
              div.style.top = dets.clientY+'px'

              var img = document.createElement("img")
              img.setAttribute("src","https://media.licdn.com/dms/image/D4E03AQHJxMeAMDAaQQ/profile-displayphoto-shrink_200_200/0/1701057699206?e=1710374400&v=beta&t=IEf1kT4sLPumdrLuRpMoeW3AQ7dSvX5v81zjvkxpkAo" )
              
              div.appendChild(img)

              document.body.appendChild(div)

              gsap.to(
                img,{
                    y:"0",
                    ease: Power1,
                    duration:.6

                }
              )

              gsap.to(
                img,{
                    y:"100%",
                    delay: .6,
                    ease: Power2,
                  

                }
              )

              setTimeout(function(){
                div.remove() 
              }, 2000)
            }, 400));
