function paste_template(elem){
    const block = document.getElementById(elem);
    if (elem == 'header'){
        block.innerHTML = `
        <article>
            <article class="logo">
                <a href="index.html">
                    <img src="img/logo.png" alt="" class="logo_img">
                    <p class="logo_text">eatly</p>
                </a>
            </article>
            <article class="navs">
                <a href="menu.html">Menu</a>
                <a href="blog.html">Blog</a>
                <a href="pricing.html">Pricing</a>
                <a href="contact.html">Contact</a>
            </article>
            <svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 1H32.75H1.25Z" fill="#918F8F"/>
                <path d="M1.25 1H32.75" stroke="#282828" stroke-width="2" stroke-linecap="round"/>
                <path d="M1.25 12.1628H32.75H1.25Z" fill="#918F8F"/>
                <path d="M1.25 12.1628H32.75" stroke="#282828" stroke-width="2" stroke-linecap="round"/>
                <path d="M1.25 23.3257H32.75H1.25Z" fill="#918F8F"/>
                <path d="M1.25 23.3257H32.75" stroke="#282828" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </article>
        <article class="reg_links">
            <a href="login.html" class="link_login">Login</a>
            <a href="register.html" class="link_fill">Sign Up</a>
        </article>
        `;
    } else if (elem == 'footer'){
        block.innerHTML = `
        <article class="footer_nav">
            <article class="logo">
                <img src="img/logo.png" alt="" class="logo_img">
                <p class="logo_text">eatly</p>
            </article>
            <article class="nav_links">
                <a href="menu.html">Menu</a>
                <a href="blog.html">Blog</a>
                <a href="pricing.html">Pricing</a>
                <a href="contact.html">Contact</a>
            </article>
        </article>
        <article class="footer_social">
            <article class="footer_protect">
                <p>© 2023 EATLY All Rights Reserved.</p>
            </article>
            <article class="social_media">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1486 0.507568C9.15806 0.543624 10.2036 0.543624 11.213 0.579674C12.1143 0.615724 12.9435 0.759934 13.7367 1.22861C14.7462 1.8415 15.359 2.7428 15.5754 3.89646C15.6835 4.58145 15.7196 5.30248 15.7556 5.98748C15.7917 7.50166 15.7556 9.01585 15.7556 10.53C15.7556 11.3232 15.7196 12.1163 15.4672 12.8734C14.9625 14.3515 13.917 15.2528 12.4028 15.5413C11.7178 15.6855 10.9967 15.6855 10.3117 15.7215C8.79753 15.7576 7.3194 15.7215 5.8052 15.7215C5.01205 15.7215 4.2189 15.6855 3.46181 15.4331C1.98366 14.9284 1.08236 13.8829 0.79394 12.3687C0.649733 11.6837 0.649733 10.9627 0.61368 10.2777C0.577626 8.76348 0.61368 7.2493 0.61368 5.73511C0.61368 4.94197 0.649733 4.14883 0.902098 3.39173C1.40683 1.91359 2.45234 1.0123 3.96653 0.723883C4.65153 0.579679 5.37257 0.579679 6.05757 0.543624C6.74256 0.507568 7.42755 0.507568 8.1486 0.507568ZM14.3859 7.9705C14.3499 7.9705 14.3859 7.9705 14.3859 7.9705C14.3499 7.35757 14.3499 6.78069 14.3499 6.16777C14.3499 5.5909 14.3138 5.01403 14.2417 4.43716C14.0975 3.1392 13.3404 2.27389 12.0784 2.02152C11.4295 1.8773 10.7084 1.8773 10.0594 1.8773C8.76142 1.84124 7.49951 1.84124 6.20155 1.8773C5.55257 1.8773 4.90358 1.91335 4.29065 2.02152C3.20901 2.20179 2.45187 2.81471 2.12738 3.89634C2.01922 4.25689 1.98316 4.61743 1.94711 4.97797C1.91105 6.34804 1.91105 7.71811 1.91105 9.08818C1.91105 9.95348 1.94711 10.8548 2.01922 11.7202C2.12738 13.0181 2.92058 13.9195 4.21855 14.1358C4.86753 14.2439 5.55257 14.28 6.2376 14.28C7.49951 14.3161 8.76142 14.28 10.0594 14.28C10.6363 14.28 11.2131 14.244 11.79 14.1718C12.3308 14.1358 12.8356 13.9555 13.2682 13.595C13.9893 13.0181 14.2417 12.261 14.2778 11.3957C14.3499 10.314 14.3499 9.16028 14.3859 7.9705Z" fill="#081420"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0446 8.11675C12.0446 10.28 10.314 12.0106 8.15074 12.0106C5.98746 12.0106 4.25684 10.28 4.25684 8.08071C4.25684 5.9535 6.02351 4.2229 8.18679 4.2229C10.314 4.2229 12.0446 5.9535 12.0446 8.11675ZM8.14957 10.6405C9.51964 10.6405 10.6734 9.48679 10.6734 8.11673C10.6734 6.74667 9.51964 5.59293 8.14957 5.59293C6.74343 5.59293 5.62574 6.74667 5.62574 8.11673C5.58968 9.48679 6.74343 10.6405 8.14957 10.6405Z" fill="#081420"/>
                    <path d="M13.087 4.03916C13.087 4.54364 12.6906 4.97604 12.1861 4.97604C11.6817 4.97604 11.2493 4.54364 11.2853 4.03916C11.2853 3.53468 11.6817 3.13831 12.1861 3.13831C12.6906 3.13831 13.087 3.53468 13.087 4.03916Z" fill="#081420"/>
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2054 9.38382V14.9875H11.9331V9.75194C11.9331 8.44305 11.4832 7.5432 10.297 7.5432C9.39717 7.5432 8.86542 8.15674 8.62001 8.72938C8.5382 8.93389 8.4973 9.22021 8.4973 9.50652V14.9875H5.22507C5.22507 14.9875 5.26597 6.11161 5.22507 5.21175H8.4973V6.60244C8.4973 6.60244 8.4973 6.64333 8.4564 6.64333H8.4973V6.60244C8.94723 5.948 9.68349 4.96633 11.4423 4.96633C13.5693 4.96633 15.2054 6.39792 15.2054 9.38382ZM1.87046 0.50769C0.766348 0.50769 0.0302734 1.24376 0.0302734 2.1843C0.0302734 3.12483 0.725457 3.86091 1.82957 3.86091H1.87046C3.01547 3.86091 3.71065 3.12483 3.71065 2.1843C3.66976 1.24376 2.97457 0.50769 1.87046 0.50769ZM0.195111 14.9881H3.42645V5.21241H0.195111V14.9881Z" fill="#081420"/>
                </svg>
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23504 8.09615H5.11502V15.6836H1.95356V9.33752V8.09615H0.46582V5.41822H1.95356V3.67012C1.95356 2.44273 2.54866 0.508667 5.11502 0.508667H7.4582V3.11221H5.7845C5.52414 3.11221 5.11502 3.26099 5.11502 3.85609V5.41822H7.4954L7.23504 8.09615Z" fill="#081420"/>
                    </svg>                    
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3303 2.22919C14.759 2.47913 14.1877 2.65766 13.545 2.72907C14.1877 2.33631 14.6876 1.72931 14.9018 1.0152C14.2948 1.37225 13.6164 1.62219 12.938 1.76501C12.3667 1.15802 11.5454 0.765259 10.6528 0.765259C8.93891 0.765259 7.54638 2.15778 7.54638 3.87164C7.54638 4.12159 7.58209 4.37152 7.61779 4.58576C5.01127 4.44294 2.7261 3.22894 1.19074 1.33655C0.905095 1.80072 0.762272 2.33631 0.762272 2.90759C0.762272 3.97877 1.29786 4.94281 2.1548 5.5141C1.65492 5.5141 1.15504 5.37128 0.726565 5.12134V5.15704C0.726565 6.65669 1.79774 7.94208 3.22598 8.22772C2.97603 8.29913 2.69039 8.33484 2.40474 8.33484C2.19051 8.33484 2.01198 8.29913 1.83345 8.26344C2.22621 9.51312 3.3688 10.4058 4.76132 10.4415C3.69015 11.2627 2.36903 11.7626 0.905095 11.7626C0.655155 11.7626 0.405216 11.7626 0.155273 11.7269C1.5478 12.6195 3.15456 13.1194 4.93986 13.1194C10.6885 13.1194 13.7949 8.37055 13.7949 4.26441C13.7949 4.12159 13.7949 3.97877 13.7949 3.87164C14.4019 3.40748 14.9375 2.83618 15.3303 2.22919Z" fill="#6C5FBC"/>
                </svg>                    
            </article>
        </article>
        `;
    }
        
}

paste_template('header');
paste_template('footer');

// function paste_template(class_name, template_name){
//     // Получаем все элементы с указанным атрибутом класса
//     const blocks = document.getElementsByClassName(class_name);
//     // Получаем текст из файла html
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', template_name);
//     for (let i = 0; i < blocks.length; i++){
//         xhr.onload = function(){
//             console.log(xhr.response);
//             blocks[i].innerHTML = xhr.response;
//         }
//         xhr.send();
//     }
// }

// paste_template('header', 'templates/header.html')