const data = JSON.parse(products);
        console.log(data);

        const featuredEls = document.querySelector('.featuredItems');

        data.forEach(data => {
            
            const featuredEl = document.createElement('div');
            featuredEl.classList.add('featuredItem');
            featuredEl.id = data.id;
            featuredEls.appendChild(featuredEl);
            

            const featuredImgEl = document.createElement('div');
            featuredImgEl.classList.add('featuredImg');
            featuredEl.appendChild(featuredImgEl);

            const featuredImgDarkEl=document.createElement('div');
            featuredImgDarkEl.classList.add('featuredImgDark');
            featuredImgEl.appendChild(featuredImgDarkEl);

            const buttonEl=document.createElement('button');
            buttonEl.classList.add('addToCart');
            buttonEl.textContent='Add to Cart'
            featuredImgDarkEl.appendChild(buttonEl);

            const imgEl = document.createElement('img');
            imgEl.src = data.productImage;
            imgEl.alt = 'photo';
            featuredImgEl.appendChild(imgEl);

            const featuredDataEl = document.createElement('div');
            featuredDataEl.classList.add('featuredData');
            featuredEl.appendChild(featuredDataEl);

            const productTitleEl = document.createElement('p');
            productTitleEl.classList.add('productTitle');
            productTitleEl.textContent = data.productTitle;
            featuredDataEl.appendChild(productTitleEl);

            const productDescriptionEl = document.createElement('p');
            productDescriptionEl.classList.add('productDescription');
            productDescriptionEl.textContent = data.productDescription;
            featuredDataEl.appendChild(productDescriptionEl);

            const productPriceEl = document.createElement('p');
            productPriceEl.classList.add('productPrice');
            productPriceEl.textContent = data.productPrice;
            featuredDataEl.appendChild(productPriceEl);
        });    
        
console.log(featuredEls);

