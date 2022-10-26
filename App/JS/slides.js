const coffeTypes = [
    {
        img:'/Images/image1.jpg',
    },
    {
        img:'/Images/image2.jpg',
    },
    {
        img:'/Images/image3.jpg',
    },
    {
        img:'/Images/image4.jpg',
    },
    {
        img:'/Images/image5.jpg',
    },
];
const saladTypes = [
    {
        img:'/Images/salad1.jpg',
    },
    {
        img:'/Images/salad2.jpg',
    },
    {
        img:'/Images/salad3.jpg',
    },
    {
        img:'/Images/salad4.jpg',
    },
    {
        img:'/Images/salad5.jpg',
    },
   
];
const bakesTypes = [
    {
        img:'/Images/cake2.jpg',
    },
    {
        img:'/Images/cake3.jpg',
    },
    {
        img:'/Images/cake4.jpg',
    },
    {
        img:'/Images/cake5.jpg',
    },
    {
        img:'/Images/cake6.jpg',
    },
   
];
const imageShow = document.querySelector('#image-show');
const imageShow1 = document.querySelector('#image-show1');
const imageShow2 = document.querySelector('#image-show2');





let currentItem = 0;


function slideShow(){
    const item = coffeTypes[currentItem];
    const item1 = saladTypes[currentItem];
    const item2 = bakesTypes[currentItem];
    
    currentItem++;
    if(currentItem > coffeTypes.length-1){
        currentItem = 0;
    }
    if(currentItem > saladTypes.length-1){
        currentItem = 0;
    }
    if(currentItem > bakesTypes.length-1){
        currentItem = 0;
    }
    
    imageShow.src = item.img;
    imageShow1.src = item1.img;
    imageShow2.src = item2.img;
};
setInterval(slideShow,2000);

